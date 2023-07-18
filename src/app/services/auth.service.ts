import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {GlobalService} from './global.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private path = environment.url;

    constructor(private http: HttpClient, private globalService: GlobalService) {
    }

    setToken(token) {
        localStorage.setItem(this.globalService.encryptString('token'), token);
    }

    getToken() {
        return localStorage.getItem(this.globalService.encryptString('token'));
    }

    getUser() {
        return this.http.get(`${this.path}/me`)
            .pipe(map(data => data));
    }

    refreshToken() {
        return this.http.post(`${this.path}/refresh`, {})
            .pipe(map(data => data));
    }

    logout(): Observable<any> {
        return this.http.post<{ token: string }>(`${this.path}/logout`, {})
            .pipe(tap(() => {
                this.setToken(null);
            }));
    }
}
