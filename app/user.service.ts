
import {Injectable} from '@angular/core'
import { User } from './user';
import {Http, Response} from '@angular/http'
import {Observable} from "rxjs/Rx";


@Injectable()
export class UserService {
    mockUser : User[] =
        [
            {id: 1, name: 'Fritz', email: 'fritz@cola.invalid', phone: '555-FRITZ'},
            {id: 2, name: 'Heinzi', email: 'heinzi@dahoam.invalid', phone: '555-HEINZ'}
        ];


    constructor(private http: Http) {

    }

    getUsers(): Observable<User[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/users').map(this.extractData)
            .catch(this.handleError);
    }

    getUser(id: number): User {
        return this.mockUser[id];
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}