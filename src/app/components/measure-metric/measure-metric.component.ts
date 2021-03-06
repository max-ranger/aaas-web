import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeasureMetric } from 'src/app/shared/models/measure-metric';
import { MetricService } from 'src/app/shared/services/metric.service';
import * as moment from 'moment';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import 'chartjs-adapter-moment';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-measure-metric',
  templateUrl: './measure-metric.component.html',
  styleUrls: ['./measure-metric.component.css']
})
export class MeasureMetricComponent implements OnInit, OnDestroy {

  timer: any;
  metricChart: any;
  detailMetricChart: any;

  metrics: MeasureMetric[] = [];
  timestamps: Date[] = [];
  values: number[] = [];

  displayedColumns: string[] = ['timeStamp', 'name', 'clientId', 'value', 'unit'];
  dataSource: MatTableDataSource<MeasureMetric>;

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
    this.metricService.getAllMeasureMetrics().subscribe(res => {
      this.metrics = res;
      this.timestamps = res.map(val => moment(val.timeStamp).toDate());
      this.values = res.map(val => val.value);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.initMetricChart();
      this.initDetailMetricChart();
    });
  }

  updateData() {
    this.metricService.getAllMeasureMetrics().subscribe(res => {
      this.metrics = res;
      this.timestamps = res.map(val => moment(val.timeStamp).toDate());
      this.values = res.map(val => val.value);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.metricChart.data.labels = this.timestamps;
      this.metricChart.data.datasets[0].data = this.values;
      this.metricChart.options.scales.x.min = moment(moment().subtract(1, 'hours')).valueOf();
      this.metricChart.options.scales.x.max = moment();

      
      this.detailMetricChart.options.scales.x.min = moment(moment().subtract(5, 'minutes')).valueOf();
      this.detailMetricChart.options.scales.x.max = moment();

      this.detailMetricChart.data.labels = this.timestamps;
      this.detailMetricChart.data.datasets[0].data = this.values;

      this.metricChart.update('resize');
      this.detailMetricChart.update('resize');
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

  initMetricChart() {
    var ctx = <HTMLCanvasElement>document.getElementById('metric-chart');
    this.metricChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.timestamps,
        datasets: [{
          label: 'Measure Metrics',
          data: this.values,
          fill: true,
          borderColor: '#1de9b6',
          borderCapStyle: 'round',
          borderWidth: 1,
          tension: 0.1,
          normalized: true,
          spanGaps: true
        }]
      },
      options: {
        spanGaps: true,
        scales: {
          x: {
            display: true,
            type: 'time',
            time: {
              parser: 'DD.MM.YYYY HH:mm',
              tooltipFormat: 'll HH:mm',
              unit: 'minute',
              stepSize: 1,
              displayFormats: {
                'minute': 'DD.MM HH:mm'
              }
            },
            min: moment(moment().subtract(1, 'hours')).valueOf(),
            max: moment().valueOf()
          },
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }

  initDetailMetricChart() {
    var ctx = <HTMLCanvasElement>document.getElementById('detail-metric-chart');
    this.detailMetricChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.timestamps,
        datasets: [{
          label: 'Detail Measure Metrics',
          data: this.values,
          fill: true,
          borderColor: '#1de9b6',
          borderCapStyle: 'round',
          borderWidth: 1,
          tension: 0.1,
          normalized: true,
          spanGaps: true
        }]
      },
      options: {
        spanGaps: true,
        scales: {
          x: {
            display: true,
            type: 'time',
            time: {
              parser: 'DD.MM.YYYY HH:mm',
              tooltipFormat: 'll HH:mm',
              unit: 'minute',
              stepSize: 1,
              displayFormats: {
                'minute': 'DD.MM HH:mm'
              }
            },
            min: moment(moment().subtract(5, 'minutes')).valueOf(),
            max: moment().valueOf()
          },
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }
}
