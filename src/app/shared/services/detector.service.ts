import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IntervalDetector } from '../models/interval-detector';
import { MinMaxDetector } from '../models/min-max-detector';

@Injectable({
  providedIn: 'root'
})
export class DetectorService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  createIntervalDetectorWebhook(intervalDetector: IntervalDetector): Observable<any> {
    return this.http.post<any>(`${environment.server}/Detector/Interval/WebHook`, intervalDetector)
      .pipe(catchError(this.errorHandler));
  }

  createIntervalDetectorEmail(intervalDetector: IntervalDetector): Observable<any> {
    return this.http.post<any>(`${environment.server}/Detector/Interval/EMail`, intervalDetector)
      .pipe(catchError(this.errorHandler));
  }

  createMinMaxDetectorWebhook(minmaxDetector: MinMaxDetector): Observable<any> {
    return this.http.post<any>(`${environment.server}/Detector/MinMax/WebHook`, minmaxDetector)
      .pipe(catchError(this.errorHandler));
  }

  createMinMaxDetectorEmail(minmaxDetector: MinMaxDetector): Observable<any> {
    return this.http.post<any>(`${environment.server}/Detector/MinMax/EMail`, minmaxDetector)
      .pipe(catchError(this.errorHandler));
  }
}
