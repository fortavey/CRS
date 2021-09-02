<template>
    <div class="free-popup" @click="$emit('close-popup')">
      <div class="popup-content" @click.stop>
        <img class="close" src="../assets/cancel.svg" alt="close" @click="$emit('close-popup')">
        <div class="text" v-if="isFree">
            Для того что бы попасть в число первых
            100 подписчиков вам необходимо выполнить 3 простых шага:
            <ul>
                <li>Подписаться на наш канал <a href="https://www.youtube.com/channel/UCNHZIs2p7Yd101km5CpEpFA" target="_blank">Youtube</a></li>
                <li>Поставить лайк и написать комментарий под этим <a href="https://www.youtube.com/watch?v=U6_Qmm5skKU" target="_blank">видео</a></li>
                <li>Написать в ЛС телеграм менеджеру - <a href="https://t.me/manager_cryptosignal" target="_blank">@manager_cryptosignal</a> свой никнейм на Youtube под которым вы оставили коммент и лайк.</li>
            </ul>
            <br>
            После этих несложных манипуляций вы будете добавленны
            в премиум канал с пожизненной подпиской.
        </div>
        <div class="text" v-else style="font-size:15px;">
            Для оформления подписки Вам необходимо оплатить 10 USDT на этот кошелек:
            <br><hr>
            <strong>USDT(TRC20):</strong><br>
            TTmuYBmmULQPnuBqZ87k1nizZiXS8sw1Z3
            <hr>
            <span style="color:red">!!! ВНИМАНИЕ !!!<br>
            Перевод должен быть именно по сети TRON (TRC20)</span><br>
            <br>
            После оплаты вышлите нам адрес (TxID) своей транзакции в ЛС вот сюда - <a href="https://t.me/manager_cryptosignal" style="color:blue" target="_blank">@manager_cryptosignal</a>
            <br>
            <br>
            Когда мы проверим транзакцию Вы будете добавлены в Телеграм бот,
            где дублируются сигналы из премиум каналов.
            <br>
            <br>
            <span style="font-size:13px;">Если у Вас возникнут сложности напишите нашему менеджеру <a href="https://t.me/manager_cryptosignal" style="color:blue" target="_blank">@manager_cryptosignal</a> или оставьте свой вопрос через форму на сайте.</span>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'FreePopup',
  props: ['isFree'],
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
  .free-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
  .popup-content {
    min-width: 300px;
    max-width: 500px;
    min-height: 200px;
    background-color: #fff;
    color: #071F43;
    padding: 15px;
    position: relative;
    @media screen and (max-width: 500px) {
      max-width: 90%;
    }
    a {
      text-decoration: none;
      color: red;
    }
    ul {
      list-style: none;
      padding-left: 10px;
      li {
        margin-bottom: 5px;
      }
    }
  }
  .close {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    cursor: pointer;
  }
</style>
