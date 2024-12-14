import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.page.html',
  styleUrls: ['./evaluations.page.scss'],
})
export class EvaluationsPage implements OnInit {
  places: Array<{ name: string; latitude: number; longitude: number; comment?: string; photo?: string }> = []; // Lugares con estructura definida
  isLoading: boolean = true; // Indicador de carga

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit() {
    this.loadPlaces(); // Llama a la función de carga al inicializar el componente
  }

  // Método para cargar lugares desde el servicio
  loadPlaces() {
    this.isLoading = true; // Activa el indicador de carga
    this.evaluationService.getEvaluations().subscribe({
      next: (data) => {
        if (data) {
          this.places = data.map((place: any) => ({
            name: place.name || 'Sin nombre',
            latitude: place.latitude || 0,
            longitude: place.longitude || 0,
            comment: place.comment || 'Sin comentarios',
            photo: place.photo || null,
          }));
        } else {
          console.warn('No se encontraron datos en las evaluaciones.');
          this.places = []; // Asegúrate de que no haya datos inválidos
        }
      },
      error: (error) => {
        console.error('Error al cargar los lugares:', error);
        alert('Hubo un problema al cargar los lugares. Inténtalo de nuevo más tarde.');
      },
      complete: () => {
        this.isLoading = false; // Desactiva el indicador de carga
      },
    });
  }
}
