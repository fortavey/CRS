<template>
    <div :style="getBgStyle">
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
      return { background: `` }; // ${this.getColors.colors.bgLightColor}${this.getColors.colors.bgDarkColor}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
