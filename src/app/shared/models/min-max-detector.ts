export class MinMaxDetector {
  constructor(
      public instanceId?: string,
      public minimum?: number,
      public maximum?: number,
      public threshold?: number,
      public triggerRate?: number,
      public runtime?: Date,
      public actionAddress?: string
  ) { }
}
