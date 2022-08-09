import {createStore} from 'vuex';

export default createStore({
  state: {
    pin: ''
  },
  getters: {
    getPin: state => state.pin
  },
  mutations: {
    setPin(state, pin) {
      state.pin = pin;
    }
  }
});
