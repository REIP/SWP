import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleService } from './people.service';
import { PeopleServiceMock } from '../mocks/people.service.mock';
import { map } from 'rxjs/operators';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { header } from '../mocks/people.data.mock';

describe('PeopleService', () => {

  //Use for fake Mock
  /*   beforeEach(() => TestBed.configureTestingModule(
      {
        declarations: [],
        providers: [
          { provide: PeopleService, useClass: PeopleServiceMock }
        ]
      }
    )
    ); */

  //Use HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should be created', () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });
  // Simple function
  it('should have a title', async(() => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service.getTitle()).toEqual("Welcome the Star Wars API");
  }));

  // Mock using fake class, service
  it('should have at least an element', async(() => {
    const service: PeopleService = TestBed.get(PeopleService);
    service.getPeople().pipe().subscribe(data => expect(data.results.length).toBeGreaterThan(0));
  }));

  it('should have the same name', async(() => {
    const service: PeopleService = TestBed.get(PeopleService);
    service.getPeople()
      .pipe(
        map(data => { return data.results })
      )
      .subscribe(people => {
        people.forEach(x => { expect(x.name).toEqual("Luke Skywalker") })
      });
  }));

  //Using HttpClientTestingModule
  it('should have at least an element - HttpClientTestingModule',
    inject([HttpTestingController, PeopleService],
      (httpMock: HttpTestingController, service: PeopleService) => {
        // We call the service
        service.getPeople().subscribe(data => {
          expect(expect(data.results.length).toBeGreaterThan(0));
        });
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne('https://swapi.co/api/people/?format=json');
        expect(req.request.method).toEqual('GET');
        // Then we set the fake data to be returned by the mock
        req.flush(header);
        // Check all of our expectations in terms of URL called, HTTP method, and all that.
        httpMock.verify();
      })
  );

  it('should have the same name - HttpClientTestingModule',
    inject([HttpTestingController, PeopleService],
      (httpMock: HttpTestingController, service: PeopleService) => {
        // We call the service
        service.getPeople()
        .pipe(
          map(data => { return data.results })
        )
        .subscribe(data => {
          data.forEach(x => { expect(x.name).toEqual("Luke Skywalker") })
        });
        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne('https://swapi.co/api/people/?format=json');
        expect(req.request.method).toEqual('GET');
        // Then we set the fake data to be returned by the mock
        req.flush(header);
        // Check all of our expectations in terms of URL called, HTTP method, and all that.
        httpMock.verify();
      })
  );

});
