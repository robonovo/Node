let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Admin';
    let text = 'Test Text';
    let res = generateMessage(from, text);
    // expect(res.from).toBe(from)
    // expect(res.text).toBe(text)
    expect(res).toMatchObject({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Admin';
    let url = 'https://www.google.com/maps?q=101,202';
    let res = generateLocationMessage(from, 101, 202);
    expect(res.from).toBe(from)
    expect(res.url).toBe(url)
    expect(typeof res.createdAt).toBe('number');
  });
});
