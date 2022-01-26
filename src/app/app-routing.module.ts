import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CounterMetricComponent } from './components/counter-metric/counter-metric.component';
import { DetectorsComponent } from './components/detectors/detectors.component';
import { IntervalMetricComponent } from './components/interval-metric/interval-metric.component';
import { MeasureMetricComponent } from './components/measure-metric/measure-metric.component';
import { DashboardOverviewComponent } from './components/dashboard/components/dashboard-overview/dashboard-overview.component';
import { LogMessageComponent } from './components/log-message/log-message.component';
import { DetectorsOverviewComponent } from './components/detectors/components/detectors-overview/detectors-overview.component';
import { IntervalDetectorComponent } from './components/interval-detector/interval-detector.component';
import { MinManxDetectorComponent } from './components/min-manx-detector/min-manx-detector.component';
import { NavigateGuard } from './shared/guards/navigate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        component: DashboardOverviewComponent
      },
      {
        path: 'log-messages',
        component: LogMessageComponent,
        canActivate: [NavigateGuard]
      },
      {
        path: 'counter-metrics',
        component: CounterMetricComponent,
        canActivate: [NavigateGuard]
      },
      {
        path: 'interval-metrics',
        component: IntervalMetricComponent,
        canActivate: [NavigateGuard]
      },
      {
        path: 'measure-metrics',
        component: MeasureMetricComponent,
        canActivate: [NavigateGuard]
      },
    ]
  },
  {
    path: 'detectors',
    component: DetectorsComponent,
    children: [
      {
        path: 'overview',
        component: DetectorsOverviewComponent
      },
      {
        path: 'interval-detectors',
        component: IntervalDetectorComponent,
        canActivate: [NavigateGuard]
      },
      {
        path: 'min-max-detectors',
        component: MinManxDetectorComponent,
        canActivate: [NavigateGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
