<template>
    <footer :style="getBgStyle">
      <img src="../assets/logo.png" alt="logo">
      <div class="copy">© CryptoSignal 2021</div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Footer',
  data: () => ({
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    getBgStyle() {
      return { background: `linear-gradient(180deg, ${this.getColors.colors.bgDarkColor} 0%, ${this.getColors.colors.bgDarkenColor} 100%)` };
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid #02172C;
  text-align: center;
  padding-top: 20px;
  img {
    width: 250px;
    display: block;
    margin: auto;
  }
  .copy {
    padding: 20px 0;
    border-top: 1px solid #02172C;
  }
}
</style>
