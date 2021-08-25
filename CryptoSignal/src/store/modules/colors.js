const colorsStore = {
  namespaced: true,
  state: {
    colors: {
      lightColor: '#FF7C14',
      darkColor: '#FF3B56',
      bgLightColor: '#0E3F84',
      bgDarkColor: '#071F43',
      bgDarkenColor: '#021124',
    },
  },
  getters: {
    getColors: ({ ...colors }) => colors,
  },
  mutations: {
  },
  actions: {
  },
};

export default colorsStore;
