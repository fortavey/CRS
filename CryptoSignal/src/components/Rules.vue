<template>
    <div class="rules" :style="getBgStyle">
      <div class="wrapper">
        <div class="title">
          ПРАВИЛА РАБОТЫ
        </div>
        <div class="block">
          <div class="item">
            <img src="../assets/1-icon.png" alt="icon">
            <div class="name">Ищем <br>ТОП трейдеров</div>
            <div class="desc">
              Мы тщательно отбираем Премиум
              каналы перед покупкой подписки.
              Майская коррекция крипторынка
              2021 года показала что толковых
              трейдеров очень мало
            </div>
          </div>
          <div class="item">
            <img src="../assets/2-icon.png" alt="icon">
            <div class="name">Покупаем VIP</div>
            <div class="desc">
              Когда мы на 100% уверены в том,
              что имеем дело со специалистами
              мы покупаем “Премиум” подписку
            </div>
          </div>
          <div class="item">
            <img src="../assets/3-icon.png" alt="icon">
            <div class="name">Делимся с подписчиками</div>
            <div class="desc">
              Теперь дело остается за малым.
              Мы просто публикуем приходящие
              сигналы в нашем Telegram боте, и наши подписчики получают
              полноценные сигналы из дорогих ТОПовых “Премиум” каналов
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Rules',
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
.rules {
  .wrapper {
    background-image: url('../assets/3-bg.png');
    background-repeat: no-repeat;
    background-position: right;
  }
}
.title {
  height: 250px;
  background-image: url('../assets/3.png');
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  padding-top: 129px;
  font-size: 42px;
  font-weight: bold;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    padding-top: 30px;
    height: auto;
    background: none;
    font-size: 30px;;
  }
}
.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    margin: 15px;
    width: calc(100% / 12 * 4 - 30px);
    img {
      display: block;
      margin: auto;
    }
    .name {
      font-size: 32px;
      text-align: center;
      margin: 22px 0 36px;
      @media screen and (max-width: 500px) {
        font-size: 25px;
        margin: 15px 0;
      }
    }
    .desc {
      font-size: 20px;
      text-align: justify;
      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
    &:nth-child(2) {
      .name {
        padding: 17px 0;
      }
    }
    @media screen and (max-width: 1000px) {
      width: calc(100% / 12 * 6 - 30px);
    }
    @media screen and (max-width: 600px) {
      width: calc(100% / 12 * 12 - 30px);
    }
  }
}
</style>
