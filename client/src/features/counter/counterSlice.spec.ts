import * as fromSlice from './counterSlice';

describe('counter reducer', () => {
  const initialState: fromSlice.CounterState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(fromSlice.counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = fromSlice.counterReducer(initialState, fromSlice.increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = fromSlice.counterReducer(initialState, fromSlice.decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = fromSlice.counterReducer(initialState, fromSlice.incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
