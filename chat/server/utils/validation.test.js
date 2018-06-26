const expect = require('expect');

let {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let res = isRealString(123);
    expect(res).toBeFalsy();
  });

  it('should reject strings with only spaces', () => {
    let res = isRealString('  ');
    expect(res).toBeFalsy();
  });

  it('should allow valid strings', () => {
    let res = isRealString('   xyz   ');
    expect(res).toBeTruthy();
  });
});
