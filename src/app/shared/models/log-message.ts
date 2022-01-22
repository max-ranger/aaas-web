export class LogMessage {
  constructor(
    public appKey?: string,
    public id?: number,
    public name?: string,
    public clientId?: string,
    public timeStamp?: string,
    public message?: string,
    public type?: string
  ) { }
}
