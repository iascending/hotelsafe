import {createStore} from 'vuex';

export default createStore({
  state: {
    pin: ''
  },
  getters: {
    currPin: state => state.pin
  },
  mutations: {
    setPin(state, pin) {
      state.pin = pin;
    }
  }
});
