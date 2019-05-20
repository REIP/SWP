import { Injectable } from '@angular/core';
import { SwpServiceModule } from '../swp-service.module';
import { Header } from '../model/people.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: SwpServiceModule
})
export class PeopleService {

  private readonly apiRoot = 'https://swapi.co/api';
  //https://swapi.co/
  //https://api.github.com
  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Header> {
    const url = `${this.apiRoot}/people/?format=json`;
    return this.http.get<Header>(url);
  }

 /*  getPeople(id: number): Observable<People[]> {
    const url = `${this.apiRoot}/shows/${id}`;
    return this.http.get<People[]>(url);
  } */

  public getTitle(): String {
    return "Welcome the Star Wars API";
  }
}
