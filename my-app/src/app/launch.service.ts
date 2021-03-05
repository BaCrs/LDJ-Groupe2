import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Launch } from './launch';

@Injectable({
  providedIn: 'root'
})

export class LaunchService {

  private launchesUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(
    private http: HttpClient) {}

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.launchesUrl)
    .pipe(
      catchError(this.handleError<Launch[]>('getLaunches', []))
    );
  }

  getLaunch(id: string): Observable<Launch> {
    const url = `${this.launchesUrl}/${id}`;
    return this.http.get<Launch>(url).pipe(
      catchError(this.handleError<Launch>(`getLaunch id=${id}`))
    );
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}