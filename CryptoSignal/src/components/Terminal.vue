<template>
    <div :style="getBgStyle">
      <div class="wrapper">
        <img src="../assets/terminal.png" alt="terminal">
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Name',
  data: () => ({
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    getBgStyle() {
      return { background: `linear-gradient(180deg, ${this.getColors.colors.bgDarkenColor} 0%, ${this.getColors.colors.bgDarkColor} 100%)` };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 30px;
  img {
    display: block;
    margin: auto;
  }
}
</style>
