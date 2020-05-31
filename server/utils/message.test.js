var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    (from = 'Jen'), (text = 'Some message');
    message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
    // store res in variable
    // assert from match
    // assert text match
    // asset createdAt is number
  });
});
