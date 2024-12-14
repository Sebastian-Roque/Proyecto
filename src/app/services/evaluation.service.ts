import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  constructor(private firestore: AngularFirestore) {}

  // Método para agregar una evaluación
  async addEvaluation(data: any): Promise<void> {
    const evaluationsRef = this.firestore.collection('evaluations'); // Colección en Firestore
    await evaluationsRef.add(data); // Agregar documento
  }

  // Método para obtener evaluaciones
  getEvaluations() {
    return this.firestore.collection('evaluations').valueChanges({ idField: 'id' }); // Cambiado para compatibilidad
  }
}
