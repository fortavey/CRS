<template>
    <div :style="getBgStyle">
      <div class="wrapper">
        <div class="block">
          <div class="field">
            <div class="silver silver-1">СИГНАЛОВ В МЕСЯЦ</div>
            <div class="angle-block angle-block-1"></div>
            <div class="orange">от 5 до 30</div>
            <div class="angle-block angle-block-2"></div>
            <div class="silver silver-2"></div>
          </div>
          <div class="field">
            <div class="silver silver-1">ПОДПИСЧИКОВ</div>
            <div class="angle-block angle-block-1"></div>
            <div class="orange">{{ getUsers.users.count }}</div>
            <div class="angle-block angle-block-2"></div>
            <div class="silver silver-2"></div>
          </div>
          <div class="field">
            <div class="silver silver-1">ЭФФЕКТИВНОСТЬ</div>
            <div class="angle-block angle-block-1"></div>
            <div class="orange">83,7%</div>
            <div class="angle-block angle-block-2"></div>
            <div class="silver silver-2"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Fields',
  data: () => ({
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    ...mapGetters('users', ['getUsers']),
    getBgStyle() {
      return { background: `${this.getColors.colors.bgDarkenColor}` };
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  padding: 50px 0;
}
.field {
  display: flex;
  height: 116px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    height: 191px;
    margin-bottom: 10px;
  }
}
.silver {
  height: 75px;
  background: #0C243E;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 400;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  &-1 {
    flex-grow: 1;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  &-2 {
    width: 222px;
    flex-shrink: 0;
    @media screen and (max-width: 1000px) {
      width: 100px;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
}
.angle-block {
  width: 67px;
  height: 116px;
  flex-shrink: 0;
  position: relative;
  &-1 {
    background: linear-gradient(270deg, #FF3B56 -3.63%, #0C243E 100%);
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 67px 41px 0;
      border-color: transparent #021124 transparent transparent;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 41px 0 0 67px;
      border-color: transparent transparent transparent #021124;
    }
  }
  &-2 {
    background: linear-gradient(270deg, #FF7C14 -3.63%, #0C243E 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 67px 41px 0;
      border-color: transparent #021124 transparent transparent;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 41px 0 0 67px;
      border-color: transparent transparent transparent #021124;
    }
  }
}
.orange {
  width: 303px;
  height: 75px;
  background: linear-gradient(270deg, #FF7C14 -3.63%, #FF3B56 100%);
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 40px;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
    min-width: 250px;
  }
  @media screen and (max-width: 800px) {
    flex-grow: 1;
    min-width: auto;
    width: auto;
  }
}
</style>
