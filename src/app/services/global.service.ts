import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GlobalService {
    path = environment.url;

    constructor(private http: HttpClient,
    ) {
    }

    nativeGlobal() {
        return window
    }

    getMenu(endpoint) {
        return this.http
            .get(`${this.path}/${endpoint}`)
            .pipe(map((response) => response));
    }

    post(endpoint, request) {
        return this.http
            .post(`${this.path}/${endpoint}`, request)
            .pipe(map((response) => response));
    }

    get(url, id) {
        return this.http
            .get(`${this.path}/${url}/${id}`)
            .pipe(map((response) => response));
    }

    getAll(url) {
        return this.http
            .get(`${this.path}/${url}`)
            .pipe(map((response) => response));
    }

    update(url, id, request) {
        return this.http
            .put(`${this.path}/${url}/${id}`, request)
            .pipe(map((response) => response));
    }

    delete(url, id) {
        return this.http
            .delete(`${this.path}/${url}/${id}`)
            .pipe(map((response) => response));
    }

    decryptString(string) {
        let new_string = '';
        for (let index = 0; index < string.length; index++) {
            const element = string[index];

            switch (element) {
                case 'r':
                    new_string += 'a';
                    break;
                case 'b':
                    new_string += 'b';
                    break;
                case 'a':
                    new_string += 'c';
                    break;
                case 'q':
                    new_string += 'd';
                    break;
                case 's':
                    new_string += 'e';
                    break;
                case 'p':
                    new_string += 'f';
                    break;
                case 'o':
                    new_string += 'g';
                    break;
                case 'c':
                    new_string += 'h';
                    break;
                case 't':
                    new_string += 'i';
                    break;
                case 'u':
                    new_string += 'j';
                    break;
                case 'n':
                    new_string += 'k';
                    break;
                case 'd':
                    new_string += 'l';
                    break;
                case 'v':
                    new_string += 'm';
                    break;
                case 'z':
                    new_string += 'n';
                    break;
                case 'y':
                    new_string += 'o';
                    break;
                case 'm':
                    new_string += 'p';
                    break;
                case 'e':
                    new_string += 'q';
                    break;
                case 'w':
                    new_string += 'r';
                    break;
                case 'x':
                    new_string += 's';
                    break;
                case 'l':
                    new_string += 't';
                    break;
                case 'f':
                    new_string += 'u';
                    break;
                case 'k':
                    new_string += 'v';
                    break;
                case 'j':
                    new_string += 'w';
                    break;
                case 'i':
                    new_string += 'x';
                    break;
                case 'g':
                    new_string += 'y';
                    break;
                case 'h':
                    new_string += 'z';
                    break;
                default:
                    new_string += element;
                    break;
            }
        }
        return new_string;
    }


    encryptString(string) {
        let new_string = '';
        for (let index = 0; index < string.length; index++) {
            const element = string[index];

            switch (element) {
                case 'a':
                    new_string += 'r';
                    break;
                case 'b':
                    new_string += 'b';
                    break;
                case 'c':
                    new_string += 'a';
                    break;
                case 'd':
                    new_string += 'q';
                    break;
                case 'e':
                    new_string += 's';
                    break;
                case 'f':
                    new_string += 'p';
                    break;
                case 'g':
                    new_string += 'o';
                    break;
                case 'h':
                    new_string += 'c';
                    break;
                case 'i':
                    new_string += 't';
                    break;
                case 'j':
                    new_string += 'u';
                    break;
                case 'k':
                    new_string += 'n';
                    break;
                case 'l':
                    new_string += 'd';
                    break;
                case 'm':
                    new_string += 'v';
                    break;
                case 'n':
                    new_string += 'z';
                    break;
                case 'o':
                    new_string += 'y';
                    break;
                case 'p':
                    new_string += 'm';
                    break;
                case 'q':
                    new_string += 'e';
                    break;
                case 'r':
                    new_string += 'w';
                    break;
                case 's':
                    new_string += 'x';
                    break;
                case 't':
                    new_string += 'l';
                    break;
                case 'u':
                    new_string += 'f';
                    break;
                case 'v':
                    new_string += 'k';
                    break;
                case 'w':
                    new_string += 'j';
                    break;
                case 'x':
                    new_string += 'i';
                    break;
                case 'y':
                    new_string += 'g';
                    break;
                case 'z':
                    new_string += 'h';
                    break;
                default:
                    new_string += element;
                    break;
            }
        }
        return new_string;
    }
}
