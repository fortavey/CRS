<template>
    <header :style="getBgStyle">
        <div class="wrapper">
            <img class="logo" alt="Logo" :src="getImageUrl">
            <div class="get-btn">
                <div class="get-btn-inner" @click="$emit('open-popup')">
                    ПОЛУЧИТЬ
                </div>
            </div>
            <img class="header-img" src="../assets/header-image.png" alt="header image">
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    logo: require('../assets/logo.png'),
    logoMobile: require('../assets/logo-mobile.png'),
    isMobile: false,
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    getImageUrl() {
      return this.isMobile ? this.logoMobile : this.logo;
    },
    getBgStyle() {
      return { background: `linear-gradient(180deg, ${this.getColors.colors.bgLightColor} 0%, ${this.getColors.colors.bgDarkColor} 91.15%)` };
    },
  },
  methods: {
    resizeEventHandler() {
      this.isMobile = window.innerWidth > 900 ? 0 : 1;
    },
  },
  created() {
    window.addEventListener('resize', this.resizeEventHandler);
    this.resizeEventHandler();
  },
};
</script>

<style lang="scss" scoped>
header {
    @media screen and (max-width: 900px) {
        padding-top: 20px;
    }
}
.header-img {
    margin: auto;
    width: 100%;
    max-width: 750px;
    display: block;
}
.logo {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 250px;
    @media screen and (min-width: 800px) {
      margin-top: 20px;
    }

}
.get-btn {
    position: absolute;
    top: 20px;
    right: 0;
    background: linear-gradient(270deg, #FF7C14 -3.63%, #FF3B56 100%);
    width: 225px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.get-btn-inner {
    width: 217px;
    height: 44px;
    border-radius: 25px;
    background-color: #0E3F84;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}
@media screen and (max-width: 900px) {
    .inner-header {
        padding-top: 10px;
    }
    .logo {
        display: block;
        margin: auto;
        position: relative;
        top: auto;
        left: auto;
    }
    .get-btn {
        display: none;
    }
}
</style>
