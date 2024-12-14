import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Método para proteger las rutas que requieren autenticación
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        if (user) {
          return true; // Si el usuario está autenticado, permite el acceso
        } else {
          this.router.navigate(['/login']); // Si no está autenticado, redirige al login
          return false;
        }
      })
    );
  }
}
