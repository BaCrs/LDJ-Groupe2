import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Capsule } from './capsule';

@Injectable({
  providedIn: 'root'
})

export class CapsuleService {

  private capsulesUrl = 'https://api.spacexdata.com/v3/capsules';

  constructor(
    private http: HttpClient) {}

  getCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(this.capsulesUrl)
    .pipe(
      catchError(this.handleError<Capsule[]>('getCapsules', []))
    );
  }

  getCapsule(id: string): Observable<Capsule> {
    const url = `${this.capsulesUrl}/${id}`;
    return this.http.get<Capsule>(url).pipe(
      catchError(this.handleError<Capsule>(`getCapsule id=${id}`))
    );
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  convertDateCapsule(caps: Capsule) {
    if(caps.original_launch != null){
      caps.launch_year = caps.original_launch.substr(0,4);
      caps.launch_month = caps.original_launch.substr(5,2);
      caps.launch_day = caps.original_launch.substr(8,2);
      caps.launch_hourmin = caps.original_launch.substr(11,5);
    }
  } 
}
