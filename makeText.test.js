const { MarkovMachine } = require('./markov');

describe('markov machine', () => {
  test('makes chains', () => {
    let mm = new MarkovMachine('the cat in the hat');

    expect(mm.chains).toEqual(new Map([
      ['the', ['cat', 'hat']],
      ['cat', ['in']],
      ['in', ['the']],
      ['hat', [null]]
    ]));
  });

  test('choice picks from array', () => {
    expect(MarkovMachine.choice([1,1,1])).toEqual(1);
    expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
  });

  test('generates semi-predictable text', function () {
    let mm = new MarkovMachine("a b c");
    let text = mm.makeText();
    expect(["a b c", "b c", "c"]).toContain(text);
  });
})