<template>
    <div class="free-popup" @click="$emit('close-popup')">
      <div class="popup-content" @click.stop>
        <img class="close" src="../assets/cancel.svg" alt="close" @click="$emit('close-popup')">
        <div class="text">
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
      </div>
    </div>
</template>

<script>

export default {
  name: 'FreePopup',
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
