import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'app/services/global.service';
import { AuthService } from 'app/services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request.clone({ setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` } });
    return next.handle(authReq).pipe(tap((event:HttpEvent<any>)=>{
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, async (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['auth']);
          if (this.authService.getToken() !== null) {
            // try {
            //   await this.globalService.refreshToken().subscribe((token: any) => {
            //     localStorage.setItem('token', token.token);
            //  this.router.navigate(['dashboard']);
            //   });
            // } catch (error) {
            //   this.globalService.logout();

            //   this.router.navigate(['login']);
            // }
          } else {
            this.router.navigate(['auth']);
          }
        }
      }
    }));
  }
}
