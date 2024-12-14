import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  searchQuery: string = ''; // Campo de búsqueda para encontrar ubicaciones
  map: L.Map | null = null; // Referencia al objeto del mapa
  userMarker: L.Marker | null = null; // Marcador del usuario en el mapa
  suggestions: any[] = []; // Lista de sugerencias de búsqueda
  isSearchVisible: boolean = true; // Controla la visibilidad del cuadro de búsqueda
  isLoading: boolean = true; // Indica si el mapa está cargando

  constructor(private router: Router) {}

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit() {
    setTimeout(() => {
      this.initializeMap(); // Inicializa el mapa con un retraso para mejorar la carga inicial
    }, 500);
  }

  // Inicializa el mapa de Leaflet y configura el evento de clic
  initializeMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13); // Configura el mapa con una vista inicial
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map); // Agrega la capa de tiles de OpenStreetMap al mapa

    // Configura un evento para manejar clics en el mapa
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.handleMapClick(e.latlng.lat, e.latlng.lng); // Maneja la geocodificación inversa
      this.suggestions = []; // Limpia las sugerencias al hacer clic en el mapa
    });

    this.isLoading = false; // Desactiva el indicador de carga cuando el mapa está listo
  }

  // Maneja los cambios en el campo de búsqueda y busca sugerencias
  async searchChange() {
    if (!this.searchQuery.trim()) {
      this.suggestions = []; // Si el campo está vacío, limpia las sugerencias
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(this.searchQuery)}&format=json&addressdetails=1&limit=5`;
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'MyApp (myemail@example.com)', // Agrega un User-Agent válido
        },
      });
      const data = await response.json();
      this.suggestions = data.length > 0 ? data : []; // Actualiza las sugerencias si hay resultados
    } catch (error) {
      console.error('Error al obtener sugerencias:', error);
      this.suggestions = []; // Limpia las sugerencias si ocurre un error
    }
  }

  // Selecciona una sugerencia de la lista y centra el mapa en esa ubicación
  selectSuggestion(suggestion: any) {
    const lat = parseFloat(suggestion.lat); // Obtiene la latitud de la sugerencia
    const lon = parseFloat(suggestion.lon); // Obtiene la longitud de la sugerencia

    if (!this.map) {
      console.error('El mapa no está inicializado.');
      return;
    }

    this.map.setView([lat, lon], 15); // Centra el mapa en la ubicación seleccionada
    this.addMarker(lat, lon); // Agrega un marcador en la ubicación seleccionada
    this.suggestions = []; // Limpia las sugerencias después de seleccionar
  }

  // Agrega un marcador al mapa y configura eventos para el marcador
  addMarker(lat: number, lng: number) {
    if (!this.map) {
      console.error('El mapa no está inicializado.');
      return;
    }

    // Elimina el marcador anterior si ya existe
    if (this.userMarker) {
      this.map.removeLayer(this.userMarker);
    }

    // Crea un nuevo marcador en la ubicación proporcionada
    this.userMarker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
    this.userMarker.bindPopup(`<b>Latitud:</b> ${lat}, <b>Longitud:</b> ${lng}`).openPopup();

    // Evento al hacer clic en el marcador para agregar una evaluación
    this.userMarker.on('click', () => {
      this.promptEvaluation(lat, lng);
    });

    // Evento para manejar el arrastre del marcador
    this.userMarker.on('dragend', () => {
      const position = this.userMarker?.getLatLng(); // Obtiene la nueva posición del marcador
      if (position) {
        this.userMarker?.setPopupContent(`<b>Latitud:</b> ${position.lat}, <b>Longitud:</b> ${position.lng}`).openPopup();
      }
    });
  }

  // Muestra un diálogo para confirmar si se desea agregar una evaluación
  promptEvaluation(lat: number, lng: number) {
    const confirmEvaluation = confirm('¿Deseas agregar una evaluación en esta ubicación?'); // Confirmación del usuario
    if (confirmEvaluation) {
      this.router.navigate(['/add-place'], {
        queryParams: { lat, lng }, // Redirige a la página de agregar lugar con las coordenadas como parámetros
      });
    }
  }

  // Maneja el clic en el mapa para obtener la dirección con geocodificación inversa
  async handleMapClick(lat: number, lng: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'MyApp (myemail@example.com)', // Agrega un User-Agent válido
        },
      });
      const data = await response.json();
      const address = data.display_name || 'Ubicación desconocida'; // Obtiene la dirección o un mensaje predeterminado

      this.addMarker(lat, lng); // Agrega un marcador en la ubicación clicada

      // Muestra un popup con la dirección obtenida
      L.popup()
        .setLatLng([lat, lng])
        .setContent(`<b>${address}</b><br>Latitud: ${lat}, Longitud: ${lng}`)
        .openOn(this.map!);
    } catch (error) {
      console.error('Error al realizar geocodificación inversa:', error);
    }
  }

  // Alterna la visibilidad del cuadro de búsqueda
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; // Cambia el estado de visibilidad
  }
}
