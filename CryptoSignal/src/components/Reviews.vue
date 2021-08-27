<template>
    <div :style="getBgStyle">
      <div class="wrapper">
        <div class="container">
          <div class="item item-1"></div>
          <div class="item item-2">
            <div class="rev-name">Отзывы</div>
            <span class="main-name">наших подписчиков</span>
          </div>
          <div class="item item-3"></div>
          <div class="item item-4">
            <span>Михаил</span>
            Всё круто! Коррекция рынка конечно торговлю испортила,
            но видно что сигналы действительно от профессионалов
          </div>
          <div class="item item-5">
            <span>Екатерина</span>
            Всё супер! Сигналы приходят. Я успешно начала торговлю и
            не просадила весь депозит. Ребятам огромное спасибо!
          </div>
          <div class="item item-6"></div>
          <div class="item item-7">
            <span>Алексей</span>
            Сначала отнесся скептически, но решил попробовать. Я был не прав!
            Все отлично работает, на все вопросы всегда отвечают. Молодцы!
          </div>
          <div class="item item-8">
            <img src="../assets/logo.svg" alt="logo">
          </div>
        </div>
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
      return { background: `${this.getColors.colors.bgDarkColor}` };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px 0;
}
.container {
  display: grid;
  grid-template-rows: 250px 250px;
  grid-template-columns: 1fr 1fr 1fr 1rf;
  grid-template-areas:  "r1 r2 r3 r4"
                        "r5 r6 r7 r8";
  @media screen and (max-width: 1000px) {
    grid-template-rows: 250px 250px 250px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:  "r1 r2 r2"
                          "r5 r6 r7"
                          "r3 r4 r8";
  }
  @media screen and (max-width: 650px) {
    grid-template-rows: 130px 250px 250px 250px;
    grid-template-columns: 50% 50%;
    grid-template-areas:  "r2 r2"
                          "r1 r5"
                          "r4 r3"
                          "r6 r7";
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: 130px 250px 250px 250px;
  }
}
.item {
  padding: 30px;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    padding: 15px;
  }
  span {
    font-weight: 500;
    font-size: 25px;
    display: block;
    margin-bottom: 20px;
  }
  &-1 {
    background-image: url('../assets/kate.png');
    background-size: cover;
    grid-area: r1;
  }
  &-2 {
    background: linear-gradient(180deg, #FF7C14 -7.22%, #FF3B56 111.86%);
    grid-area: r2;
    .rev-name {
      font-weight: bold;
      font-size: 35px;
      text-align: center;
      text-transform: uppercase;
      padding-top: 50px;
      position: relative;
      &::before {
        content: '';
        width: 30px;
        height: 3px;
        background-color: #fff;
        position: absolute;
        top: 20px;
        left: calc(50% - 15px);
        @media screen and (max-width: 650px) {
          top: 0;
          display: none;
        }
      }
      @media screen and (max-width: 650px) {
        padding-top: 0;
      }
    }
    .main-name {
      display: block;
      padding-top: 20px;
      text-align: center;
      font-size: 25px;
      @media screen and (max-width: 650px) {
        padding-top: 5px;
      }
    }
  }
  &-3 {
    background-image: url('../assets/mih.png');
    background-size: cover;
    grid-area: r3;
  }
  &-4 {
    background: linear-gradient(132.69deg, #175FCD 0%, #103373 100%);
    grid-area: r4;
  }
  &-5 {
    background: linear-gradient(313.6deg, #175FCD 0%, #103373 98.39%);
    grid-area: r5;
  }
  &-6 {
    background-image: url('../assets/leh.png');
    background-size: cover;
    grid-area: r6;
  }
  &-7 {
    background: linear-gradient(132.69deg, #175FCD 0%, #103373 100%);
    grid-area: r7;
  }
  &-8 {
    background-color: #071F43;
    grid-area: r8;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
