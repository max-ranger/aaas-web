import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LogMessage } from 'src/app/shared/models/log-message';
import { MetricService } from 'src/app/shared/services/metric.service';

@Component({
  selector: 'app-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent implements OnInit, OnDestroy {

  timer: any;

  logMessages: LogMessage[] = [];

  displayedColumns: string[] = ['timeStamp', 'name', 'clientId', 'message', 'type'];
  dataSource: MatTableDataSource<LogMessage>;

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
    this.metricService.getAllLogMessages().subscribe(res => {
      this.logMessages = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  updateData() {
    this.metricService.getAllLogMessages().subscribe(res => {
      this.logMessages = res;
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
