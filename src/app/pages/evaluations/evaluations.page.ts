import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.page.html',
  styleUrls: ['./evaluations.page.scss'],
})
export class EvaluationsPage implements OnInit {
  examplePlaces: Array<{
    name: string;
    latitude: number;
    longitude: number;
    comment?: string;
    photo?: string;
  }> = []; // Lista de ejemplos

  databasePlaces: Array<{
    name: string;
    latitude: number;
    longitude: number;
    comment?: string;
    photo?: string;
  }> = []; // Lista de datos desde Firebase

  isLoadingExamples: boolean = true; // Indicador de carga para ejemplos
  isLoadingDatabase: boolean = true; // Indicador de carga para Firebase

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit() {
    this.loadExamplePlaces(); // Cargar datos de ejemplo
    this.loadDatabasePlaces(); // Cargar datos desde Firebase
  }

  // Método para cargar datos de ejemplo
  loadExamplePlaces() {
    this.isLoadingExamples = true;

    // Datos de ejemplo con imágenes asignadas
    this.examplePlaces = [
      {
        name: 'Cafetería',
        latitude: 51.51931851179038,
        longitude: -0.12857437133789065,
        comment: 'Me pasó de verga',
        photo: 'https://via.placeholder.com/100?text=Cafetería',
      },
      {
        name: 'S',
        latitude: 51.51643437722083,
        longitude: -0.13629913330078128,
        comment: 'S',
        photo: 'https://via.placeholder.com/100?text=S',
      },
      {
        name: 'Parque',
        latitude: 51.51536613288439,
        longitude: -0.1431655883790628,
        comment: 'Me gusta este lugar',
        photo: 'https://via.placeholder.com/100?text=Parque',
      },
      {
        name: 'Sdfsf',
        latitude: 51.50799465421271,
        longitude: -0.11801719665527345,
        comment: 'Sdfsf',
        photo: 'https://via.placeholder.com/100?text=Sdfsf',
      },
      {
        name: 'Diego',
        latitude: 51.52348416152351,
        longitude: -0.0951040283203125,
        comment: 'Alvarado',
        photo: 'https://via.placeholder.com/100?text=Diego',
      },
      {
        name: 'Evaluación1',
        latitude: 51.5091698216777,
        longitude: -0.10557174682617189,
        comment: 'Esta es una evaluación de prueba',
        photo: 'https://via.placeholder.com/100?text=Evaluación1',
      },
      {
        name: 'Restaurante',
        latitude: 51.5000,
        longitude: -0.1200,
        comment: 'Comida deliciosa y gran ambiente',
        photo: 'https://via.placeholder.com/100?text=Restaurante',
      },
    ];

    this.isLoadingExamples = false; // Desactiva el indicador de carga
  }

  // Método para cargar datos desde Firebase
  loadDatabasePlaces() {
    this.isLoadingDatabase = true;

    this.evaluationService.getEvaluations().subscribe({
      next: (data) => {
        console.log('Datos recibidos de Firestore:', data);

        // Procesar datos desde Firebase
        this.databasePlaces = data
          .filter((place: any) => place.name && place.latitude && place.longitude)
          .map((place: any) => ({
            name: place.name,
            latitude: place.latitude,
            longitude: place.longitude,
            comment: place.comment || 'Sin comentarios',
            photo: place.photo || 'https://via.placeholder.com/100?text=Sin+Foto',
          }));
      },
      error: (error) => {
        console.error('Error al cargar evaluaciones desde Firebase:', error);
      },
      complete: () => {
        this.isLoadingDatabase = false; // Desactiva el indicador de carga
      },
    });
  }
}
