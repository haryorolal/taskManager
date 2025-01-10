import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const jwtUnAuthorizedInterceptor: HttpInterceptorFn = (req : HttpRequest<any>, next: HttpHandlerFn) : Observable<HttpEvent<any>> => {
  
  return next(req).pipe(
    tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            //do something
          }
        },
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if(err.status === 401 ||  err.status === 0) {
              console.error(err);
              alert("401, UnAuthorized");
            }
          }
        } 
      }
    )
  );
};
