export default class ErrorRepository {
  constructor(errs) {
    this.errMap = new Map(errs);
  }

  translate(code) {
    if (!this.errMap.has(code)) return 'Unknown error';
    return this.errMap.has(code) ? this.errMap.get(code) : 'Unknown error';
  }
}
