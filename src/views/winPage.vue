<template>
  <div class="winner">
    <div class="winner-inner">
      <div class="winner-text">
        <h2 class="winner-text__loading">Хм</h2>
      </div>
      <div class="winner-animation">
        <h3 class="winner-animation__text"></h3>
      </div>
      <div class="winner-gif">
        <a href="https://ig.me/m/egor_baranov_"><img src="../assets/NyIz.gif" alt="Ссылка на директ инстаграмма"></a>
        <p class="winner-gif__text">Клац!</p>
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
      }, 2000);
      setTimeout(() => {
        document.querySelector('.winner-gif').style.opacity = 1;
      }, 5000);
    },
    textAnimation() {
      const selector = document.querySelector('.winner-animation__text');
      selector.innerHTML = '';
      let i = 0;
      const text = 'ПОХОЖЕ, ВЫ ГОТОВЫ';

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
