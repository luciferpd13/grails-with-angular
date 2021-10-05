import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = localStorage.getItem('authToken');
        if (token) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'X-Auth-Token': token
                })
            });
            return next.handle(authReq);
        }
        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
        return next.handle(authReq);
    }
}