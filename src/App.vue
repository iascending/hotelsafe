<template>
  <div class='container'>
    <div class='column'>
      <number-pad
        @update:add='addNewNum'
        @update:clear='clear'
        @update:set-new-pin='setNewPin'
      />
    </div>
    <div class='column'>
      <display-panel
        :message='message'
        :locked='locked'
      />
    </div>
  </div>
</template>

<script>
import NumberPad from './components/number-pad.vue';
import DisplayPanel from './components/display-panel.vue';
import {default as store} from './store';

export default {
  data() {
    return {
      pin: []
    };
  },

  computed: {
    message: {
      get() {
        if (this.pin.length > 4) {
          return 'INVALID';
        }
        return this.pin.join('');
      },
      set(newVal) {
        this.pin = newVal.split('');
      }
    },

    locked() {
      const hasPin = this.secret.length !== 0;
      return hasPin && !this.pinMatch;
    },

    secret() {
      return store.getters.currPin;
    },

    pinMatch() {
      return this.pin.join('') === this.secret;
    }
  },

  methods: {
    addNewNum(val) {
      this.pin.push(val);
      if (this.locked && this.pinMatch) {
        this.clear();
        store.commit('setPin', '');
      }
    },

    clear() {
      this.pin = [];
    },

    setNewPin() {
      if (this.locked) {
        this.message = 'INVALID';
        return;
      }

      const hasPin = this.secret.length !== 0;
      const goodPin = this.pin.length === 4;
      if (!this.locked && goodPin && !hasPin) {
        store.commit('setPin', this.pin.join(''));
        return;
      }
      if (!this.locked && goodPin && hasPin) {
        store.commit('setPin', '');
        this.clear();
      }
    }
  },

  components: {
    'number-pad': NumberPad,
    'display-panel': DisplayPanel
  }
};
</script>

<style>
  .container {
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    background-color: #293F55;
  }

  @media screen and (min-width: 950px) {
    .container {
      display: flex;
    }
  }
  .column {
    margin: auto;
  }
</style>
