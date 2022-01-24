export class IntervalDetector {
  constructor(
    public instanceId?: string,
    public aggregation?: number,
    public comparison?: number,
    public threshold?: number,
    public triggerRate?: number,
    public runtime?: Date,
    public actionAddress?: string
) { }
}
