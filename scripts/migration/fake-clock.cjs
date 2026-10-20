// Verification fixture only. Mount into a disposable container; never production.
const fs = require('node:fs');
const OriginalDate = Date;
const now = () => OriginalDate.parse(fs.readFileSync('/verification/clock.txt','utf8').trim());
class VerificationDate extends OriginalDate {
  constructor(...args) { super(...(args.length ? args : [now()])); }
  static now() { return now(); }
  static parse(value) { return OriginalDate.parse(value); }
  static UTC(...args) { return OriginalDate.UTC(...args); }
}
global.Date = VerificationDate;

// Next 16 cache age uses performance.timeOrigin + performance.now().
Object.defineProperty(global.performance, 'timeOrigin', { configurable: true, get: () => now() - global.performance.now() });
