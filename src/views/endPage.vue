<template>
  <div class="loos">
    <div class="loos-inner">
      <div class="loos-text">
        <h2 class="loos-text-h2"></h2>
      </div>
      <div class="loos-btn">
        <router-link to='/'><button class="main-button__start">ладно</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addAnimation();
  },
  methods: {
    addAnimation() {
      setTimeout(() => {
        this.textAnimation();
      }, 1000);
      setTimeout(() => {
        document.querySelector('.loos-btn').style.opacity = 1;
      }, 3000);
    },
    textAnimation() {
      const selector = document.querySelector('.loos-text-h2');
      selector.innerHTML = '';
      let i = 0;
      const text = 'вы не готовы';

      function textWriter() {
        if (i < text.length) {
          selector.innerHTML += text.charAt(i);
          i += 1;
        }
      }
      const intervalID = setInterval(textWriter, 100);
      if (i >= text.length) {
        clearInterval(intervalID);
      }
    },
  },
};
</script>
