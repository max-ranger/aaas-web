import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DetectorsComponent } from './components/detectors/detectors.component';
import { CounterMetricComponent } from './components/counter-metric/counter-metric.component';
import { IntervalMetricComponent } from './components/interval-metric/interval-metric.component';
import { MeasureMetricComponent } from './components/measure-metric/measure-metric.component';
import { DashboardOverviewComponent } from './components/dashboard/components/dashboard-overview/dashboard-overview.component';
import { LogMessageComponent } from './components/log-message/log-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetectorsOverviewComponent } from './components/detectors/components/detectors-overview/detectors-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    DetectorsComponent,
    CounterMetricComponent,
    IntervalMetricComponent,
    MeasureMetricComponent,
    DashboardOverviewComponent,
    LogMessageComponent,
    FooterComponent,
    DetectorsComponent,
    DetectorsOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
