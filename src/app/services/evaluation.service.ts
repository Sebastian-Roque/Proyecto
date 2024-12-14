import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  private collectionName = 'evaluations'; // Nombre de la colección en Firebase

  constructor(private firestore: AngularFirestore) {}

  // Método para obtener evaluaciones desde Firebase
  getEvaluations(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Método para agregar una nueva evaluación a Firebase
  addEvaluation(evaluation: any): Promise<any> {
    return this.firestore.collection(this.collectionName).add(evaluation);
  }
}
