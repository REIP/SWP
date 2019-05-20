import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Header } from '../model/people.model';
import { header } from './people.data.mock';


@Injectable()
export class PeopleServiceMock {
    
    getPeople(): Observable<Header> {
        return of(header);
    }

    getTitle(): String {
        return "Welcome the Star Wars API";
    }

}