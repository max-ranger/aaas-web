import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MeasureMetric } from '../models/measure-metric';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  measureMetrics: MeasureMetric[] = [];

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAllMeasureMetrics(): Observable<Array<MeasureMetric>> {
    return this.http.get<any>(`${environment.server}/Metric/MeasureMetric`)
      .pipe(map(res => res.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())), catchError(this.errorHandler));
  }
}
