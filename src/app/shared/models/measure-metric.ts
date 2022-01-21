export class MeasureMetric {
  constructor(
    public appKey?: string,
    public id?: number,
    public name?: string,
    public clientId?: string,
    public timeStamp?: string,
    public value?: number,
    public unit?: string
  ) { }
}
