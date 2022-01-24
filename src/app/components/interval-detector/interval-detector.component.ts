import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { IntervalDetector } from 'src/app/shared/models/interval-detector';
import { DetectorService } from 'src/app/shared/services/detector.service';

enum ResponseType {
  Webhook = "Webhook",
  EMail = "EMail"
}

enum AggregationOperation {
  Average = "Average",
  Current = "Current",
  Sum = "Sum"
}

enum ComparisonOperation {
  GT = "GT",
  LT = "LT"
}

@Component({
  selector: 'app-interval-detector',
  templateUrl: './interval-detector.component.html',
  styleUrls: ['./interval-detector.component.css']
})
export class IntervalDetectorComponent implements OnInit {

  detector: IntervalDetector = new IntervalDetector();

  form!: FormGroup;
  
  @ViewChild('picker') picker: any;
  
  date: any;
  showSpinners: boolean = true;
  showSeconds: boolean = true;
  enableMeridian: boolean = false;
  minDate: any = moment().toDate();
  maxDate: any = moment().add(1, 'months').toDate();
  stepHour: number = 1;
  stepMinute: number = 1;
  stepSecond: number = 1;

  selectedAggregationOperation: AggregationOperation = null;
  aggregationOperations: AggregationOperation[] = [
    AggregationOperation.Average,
    AggregationOperation.Current,
    AggregationOperation.Sum
  ];
  
  selectedComparisonOperation: ComparisonOperation = null;
  comparisonOperations: ComparisonOperation[] = [
    ComparisonOperation.GT,
    ComparisonOperation.LT
  ];

  selectedResponseType: ResponseType = null;
  responseTypes: ResponseType[] = [
    ResponseType.EMail,
    ResponseType.Webhook
  ];

  constructor(private detectorsService: DetectorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.date = moment().toDate();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      instanceId: [this.detector.instanceId, Validators.required],
      aggregation: [this.detector.aggregation, Validators.required],
      comparison: [this.detector.comparison, Validators.required],
      threshold: [this.detector.threshold, Validators.required],
      triggerRate: [this.detector.triggerRate, Validators.required],
      runtime: [this.detector.runtime = moment().add(5, 'minutes').toDate(), Validators.required],
      webhook: [this.detector.actionAddress, Validators.required],
      email: [this.detector.actionAddress, Validators.required],
      responseType: [this.selectedResponseType, Validators.required]
    });
    this.form.statusChanges;
  }

  submitForm() {
    if (this.selectedResponseType == ResponseType.Webhook) {
      this.form.controls['webhook'].setValidators(Validators.required);
      this.form.controls['webhook'].updateValueAndValidity();
      this.form.controls['email'].clearValidators();
      this.form.controls['email'].updateValueAndValidity();

      // fix timezone bug
      this.detector.runtime = moment(this.detector.runtime).add(1, 'hours').toDate();

      this.detectorsService.createIntervalDetectorWebhook(this.detector).subscribe(res => {
        this.form.reset();
      });
    } else if (this.selectedResponseType == ResponseType.EMail) {
      this.form.controls['webhook'].clearValidators();
      this.form.controls['webhook'].updateValueAndValidity();
      this.form.controls['email'].setValidators([Validators.required, Validators.email]);
      this.form.controls['email'].updateValueAndValidity();
      
      // fix timezone bug
      this.detector.runtime = moment(this.detector.runtime).add(1, 'hours').toDate();

      this.detectorsService.createIntervalDetectorEmail(this.detector).subscribe(res => {
        this.form.reset();
      });
    }
  }
}
