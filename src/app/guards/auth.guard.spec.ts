import { TestBed } from '@angular/core/testing';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs'; // Asegúrate de importar 'of' desde 'rxjs'

describe('authGuard', () => {
  let executeGuard: CanActivate;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy() } } // Mock Router
      ]
    });

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    executeGuard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow activation if user is logged in', async () => {
    // Simula un usuario autenticado con las propiedades correctas
    spyOn(authService, 'isLoggedIn').and.returnValue(of({
      email: 'user@example.com',
      displayName: 'John Doe',
      uid: '12345'
    }));

    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    // Usamos async/await ya que canActivate devuelve una Promise
    const canActivate = await executeGuard.canActivate(route, state);
    expect(canActivate).toBe(true);
  });

  it('should redirect to login if user is not logged in', async () => {
    // Simula un usuario no autenticado
    spyOn(authService, 'isLoggedIn').and.returnValue(of(null)); // Usuario no autenticado

    const navigateSpy = spyOn(router, 'navigate'); // Espiamos la navegación

    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    // Usamos async/await ya que canActivate devuelve una Promise
    const canActivate = await executeGuard.canActivate(route, state);
    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']); // Verificamos que se redirija al login
  });
});
