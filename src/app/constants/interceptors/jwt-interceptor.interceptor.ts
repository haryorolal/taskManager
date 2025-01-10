import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>>  => {
  var currentUser = {token: ""};

  if (sessionStorage.getItem("currentUser")) {
    currentUser = JSON.parse(sessionStorage.getItem("currentUser") || '{}');
  }

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${currentUser.token}`
    }
  });

  return next(req);
};
