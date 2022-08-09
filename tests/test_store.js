/* eslint-env jest */
import {default as store} from '../src/store';

describe('Pin could be cleared', () => {
  it('equals', function() {
    const newPin = '3456';
    store.commit('setPin', newPin);
    store.commit('setPin', '');
    expect(store.getters.getPin).toBe('');
  });
});

describe('Pin could be set successfully', () => {
  it('equals', function() {
    const newPin = '3456';
    store.commit('setPin', newPin);
    expect(store.getters.getPin).toBe(newPin);
  });
});
