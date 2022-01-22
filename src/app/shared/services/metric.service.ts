import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CounterMetric } from '../models/counter-metric';
import { IntervalMetric } from '../models/interval-metric';
import { LogMessage } from '../models/log-message';
import { MeasureMetric } from '../models/measure-metric';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAllLogMessages(): Observable<Array<LogMessage>> {
    return this.http.get<any>(`${environment.server}/Metric/LogMessage`)
      .pipe(map(res => res.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())), catchError(this.errorHandler));
  }

  getAllCounterMetrics(): Observable<Array<CounterMetric>> {
    return this.http.get<any>(`${environment.server}/Metric/CounterMetric`)
      .pipe(map(res => res.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())), catchError(this.errorHandler));
  }

  getAllIntervalMetrics(): Observable<Array<IntervalMetric>> {
    return this.http.get<any>(`${environment.server}/Metric/IntervalMetric`)
      .pipe(map(res => res.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())), catchError(this.errorHandler));
  }

  getAllMeasureMetrics(): Observable<Array<MeasureMetric>> {
    return this.http.get<any>(`${environment.server}/Metric/MeasureMetric`)
      .pipe(map(res => res.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())), catchError(this.errorHandler));
  }
}
