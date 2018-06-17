import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { of } from 'rxjs/Observable/of';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';
import { catchError, tap } from 'rxjs/operators';
@Injectable()
export class GithubService {
  private BASE_URL: string = 'https://api.github.com/users';
  private REPOS_URL: string = 'repos';
  constructor(public http: HttpClient) {}

  getUserInformation(username: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${username}`).pipe(
      tap(data => console.log(data)),
      catchError(err => of(null))
    );
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(`${this.BASE_URL}/${username}/${this.REPOS_URL}`)
      .pipe(
        tap(data => console.log(data)),
        catchError(err => of(null))
      );
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return of(REPOSITORY_LIST.filter(x => x.owner.name === username));
  }
  mockGetUserInformation(username: string): Observable<User> {
    return of(USER_LIST.filter(x => x.name === username)[0]);
  }
}
