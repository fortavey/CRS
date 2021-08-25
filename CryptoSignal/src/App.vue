<template>
  <div :style="overflow">
    <Header @open-popup="isPopup = true"/>
    <FreePlaces @open-popup="isPopup = true"/>
    <Video />
    <Rules />
    <Fields />
    <Terminal />
    <FreePlaces @open-popup="isPopup = true"/>
    <Footer />
    <FreePopup v-if="isPopup" @close-popup="isPopup = false"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import FreePlaces from './components/FreePlaces.vue';
import Video from './components/Video.vue';
import Fields from './components/Fields.vue';
import Rules from './components/Rules.vue';
import Terminal from './components/Terminal.vue';
import Footer from './components/Footer.vue';
import FreePopup from './components/FreePopup.vue';

export default {
  name: 'App',
  components: {
    Header,
    FreePlaces,
    Video,
    Fields,
    Rules,
    Terminal,
    Footer,
    FreePopup,
  },
  data: () => ({
    isPopup: false,
  }),
  watch: {
    isPopup(val) {
      document.body.style.overflow = val ? 'hidden' : 'auto';
    },
  },
  methods: {
    ...mapActions('users', ['setUsers']),
    closePopup() {
      this.isPopup = false;
    },
    openPopup() {
      this.isPopup = true;
    },
  },
  created() {
    document.title = 'CryptoSignal - сигналы от ТОПовых трейдеров';
    fetch('https://crypto-signal.ru/users/get_cnt.php')
      .then((res) => res.json())
      .then((data) => this.setUsers(data.counter))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  color: #fff;
}
.wrapper {
    position: relative;
    margin: auto;
    max-width: 1200px;
}
img {
  max-width: 100%;
}
</style>
