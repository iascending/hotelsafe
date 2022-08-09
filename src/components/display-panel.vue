<template>
  <div class='display-panel'>
    <div class='row'>
      <div class='message-box'>
        {{ message }}
      </div>
      <div class='indicator'>
        <span
          class='circle'
          :style='{"background-color": "#" + bgColor}'
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },

    locked: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    bgColor() {
      return this.locked ? 'FF0000' : '00FF00';
    }
  },

  methods: {
    pos(row, col) {
      return row * 3 + col;
    },

    dispText(row, col) {
      const pos = this.pos(row, col);
      let value = null;
      if (pos < 10) {
        value = pos;
      } else if (pos === 10) {
        value = 'CLR';
      } else if (pos === 11) {
        value = 0;
      }
      return value;
    },

    // emits: ['update:add', 'update:validate', 'update:clear'],

    doAction(r, c) {
      const pos = this.pos(r, c);
      if (pos < 10) {
        this.$emit('update:add', pos);
      } else if (pos === 10) {
        this.$emit('update:clear');
      } else if (pos === 11) {
        this.$emit('update:add', 0);
      } else {
        this.$emit('update:validate');
      }
    }
  }
};
</script>

<style scoped>
  .display-panel {
    height: 100%;
    box-sizing: border-box;
  }

  .message-box {
    background-color: #9FA18D;
    width: 26rem;
    height: 4rem;
    font-size: 1.2rem;
    margin: 2rem auto;
    padding: 1rem 1rem;
    border-radius: 2rem;
    border: solid 5px #070202;
  }

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: block;
    margin: 2rem auto 4rem auto;
  }
</style>
