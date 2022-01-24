import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

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
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { IntervalDetectorComponent } from './components/interval-detector/interval-detector.component';
import { MinManxDetectorComponent } from './components/min-manx-detector/min-manx-detector.component';

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
    DetectorsOverviewComponent,
    LoginComponent,
    IntervalDetectorComponent,
    MinManxDetectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
