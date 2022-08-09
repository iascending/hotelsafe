<template>
  <div class='number-pad'>
    <div
      v-for='(r, $rowidx) in [0, 1, 2, 3]'
      :key='$rowidx'
      class='row'
    >
      <button
        v-for='(c, $colidx) in [1, 2, 3]'
        :key='$colidx'
        class='button'
        @click='doAction(r,c)'
      >
        <span v-if='pos(r,c) < 12'>{{ dispText(r, c) }}</span>
        <span v-else>&#x21e8;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
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

    // emits: ['update:add', 'update:set-new-pin', 'update:clear'],

    doAction(r, c) {
      const pos = this.pos(r, c);
      if (pos < 10) {
        this.$emit('update:add', pos);
      } else if (pos === 10) {
        this.$emit('update:clear');
      } else if (pos === 11) {
        this.$emit('update:add', 0);
      } else {
        this.$emit('update:set-new-pin');
      }
    }
  }
};

</script>

<style scoped>
  .number-pad {
    border: solid 1em #666666;
    background-color: #666666;
    /* background-color: #293F55; */
    width: 26rem;
    box-sizing: border-box;
    margin: auto;
  }

  .button {
    background-color: #FFFFFF;
    display: relative;
    width: 8rem;
    height: 4rem;
    font-size: 1.2rem;
  }

  .button:active {
    transform: scale(0.95);
  }

  .rotate {
    transform: rotate(90deg);
    transform-origin: center;
  }
</style>
