import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  email: string | null;
  displayName: string | null;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método de inicio de sesión
  login(email: string, password: string): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuario autenticado');
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        throw error;
      });
  }

  // Método para registrar un usuario
  async register(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          return {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
          };
        } else {
          return null;
        }
      })
    );
  }

  // Método para cerrar sesión
  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }
}
