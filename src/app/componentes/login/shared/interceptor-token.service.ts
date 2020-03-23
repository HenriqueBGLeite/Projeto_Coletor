import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorToken implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.router.url != '/login') {
      request = request.clone({ setHeaders: {'Authorization': `Bearer ${this.getToken()}`}});
    }
    
    return next.handle(request).pipe(
      catchError((err: any) => {
          if (this.isRespostaTokenInvalido(err)) {
              this.authService.sair();
              return of(err);
          }
          return next.handle(request);
      })
    );
  }

  private getToken() {
    return this.authService.getToken() && this.authService.getToken().length > 0 ? this.authService.getToken() : '';
  }

  private isRespostaTokenInvalido(event) {
    return event.status == 401 ? true : false;
  }
}