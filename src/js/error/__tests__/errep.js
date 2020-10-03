import ErrorRepository from '../errep';

const errors = new ErrorRepository([[1, "Everything's broken"]]);

test('Expect .translate to return error translation', () => {
  expect(errors.translate(1)).toBe("Everything's broken");
});

test('Expect .translate to return "Unknown error" if code is not in a Map', () => {
  expect(errors.translate(2)).toBe('Unknown error');
});
