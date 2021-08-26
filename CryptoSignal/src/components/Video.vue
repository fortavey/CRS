<template>
    <div class="video-block" :style="getBgStyle">
        <div class="wrapper">
            <iframe width="100%" :height="height" src="https://www.youtube.com/embed/Jke7THpv3ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Video',
  data: () => ({
    height: 523,
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    getBgStyle() {
      return { background: `linear-gradient(180deg, ${this.getColors.colors.bgDarkColor} 0%, ${this.getColors.colors.bgDarkenColor} 52.08%, ${this.getColors.colors.bgDarkColor} 100%)` };
    },
  },
  methods: {
    resizeEventHandler() {
      if (window.innerWidth < 925) {
        this.height = (window.innerWidth - 20) / 1.768642;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.resizeEventHandler);
    this.resizeEventHandler();
  },
};
</script>

<style lang="scss" scoped>
    .video-block {
        padding: 56px 10px;
        @media screen and (max-width: 500px) {
          padding: 30px 10px;
        }
        .wrapper {
            max-width: 925px;
        }
    }
</style>
