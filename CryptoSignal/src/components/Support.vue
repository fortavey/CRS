<template>
    <div :style="getBgStyle">
      <div class="wrapper">
        <div class="form">
          <div class="top">
            <span>Задай вопрос</span> нашему специалисту
          </div>
          <div class="content">
            <p v-if="msgs">{{ msgs }}</p>
            <input type="text" name="login" id="login" placeholder="Telegram логин или Email"
            v-model="login">
            <textarea name="question" id="question" placeholder="Текст вопроса"
            v-model="questionText"></textarea>
            <div class="btn" @click="submit">Отправить</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Support',
  data: () => ({
    login: '',
    questionText: '',
    msgs: '',
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    getBgStyle() {
      return { background: `${this.getColors.colors.bgDarkColor}` };
    },
  },
  methods: {
    submit() {
      if (this.login && this.questionText) {
        fetch(`https://crypto-signal.ru/support/request.php?login=${this.login}&question=${this.questionText}`)
          .then((req) => req.json())
          .then((data) => {
            this.msgs = data.result ? 'Сообщение успешно отправлено!' : 'Ошибка отправки сообщения!';
            return null;
          })
          .catch((err) => { this.msgs = 'Ошибка отправки сообщения!'; return err; });
        this.login = '';
        this.questionText = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 800px;
}
.form {
  padding: 20px 0;
}
.top {
  background: linear-gradient(270deg, #FF3B56 -3.63%, #FF7C14 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-transform: uppercase;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 50px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  span {
    font-weight: bold;
    margin-right: 10px;
  }
}
.content {
  padding: 50px;
  background-color: rgba(0,0,0,0.2);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media screen and (max-width: 400px) {
    padding: 30px;
  }
  input[type=text], textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: #434F5B;
    border: none;
    border-radius: 10px;
    color: #fff;
    outline: none;
  }
  input[type=text] {
    height: 50px;
    width: 300px;
    margin-bottom: 20px;
    padding-left: 20px;
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
  textarea {
    height: 120px;
    padding: 20px;
  }
}
.btn {
  background: linear-gradient(270deg, #FF7C14 -3.63%, #FF3B56 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: auto;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
}
.q-text {
  margin-bottom: 50px;
}
</style>
