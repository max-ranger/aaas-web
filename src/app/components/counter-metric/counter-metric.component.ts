import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CounterMetric } from 'src/app/shared/models/counter-metric';
import { MetricService } from 'src/app/shared/services/metric.service';

@Component({
  selector: 'app-counter-metric',
  templateUrl: './counter-metric.component.html',
  styleUrls: ['./counter-metric.component.css']
})
export class CounterMetricComponent implements OnInit, OnDestroy {

  timer: any;

  metrics: CounterMetric[] = [];

  displayedColumns: string[] = ['timeStamp', 'name', 'clientId'];
  dataSource: MatTableDataSource<CounterMetric>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private metricService: MetricService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.fetchData();
    this.timer = setInterval(() => {
      this.updateData();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  fetchData() {
    this.metricService.getAllCounterMetrics().subscribe(res => {
      this.metrics = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  updateData() {
    this.metricService.getAllCounterMetrics().subscribe(res => {
      this.metrics = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('sorting cleared');
    }
  }
}
