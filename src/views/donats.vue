<template>
  <div class="loos">
    <div class="loos-inner">
      <div class="loos-text">
        <h2 class="loos-text-h2">Поддержать моё творчество</h2>
      </div>
      <div class="loos-btn">
        <ul>
           <li class="text">РФ и СНГ - <span class="text-num"> 4377723773640481</span></li>
          <li class="text">Казахстан - <span class="text-num"> 4400430187114464</span></li>
          <li class="text">Украина - <span class="text-num">  5169307511098605</span></li>                  <li class="text">PayPal - <span class="text-num">  http://paypal.me/egorbaranov1</span></li>
        </ul>
      </div>
      <div class="loos-btn donats-btn">
        <router-link to='/'><button class="main-button__start">ладно</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addAnimation();
    this.addAnimationBtn();
  },
  methods: {
    addAnimation() {
      setTimeout(() => {
        document.querySelector('.loos-btn').style.opacity = 1;
      }, 1000);
    },
    addAnimationBtn() {
      setTimeout(() => {
        document.querySelector('.donats-btn').style.opacity = 1;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>

.loos-text-h2 {
  @media (max-width: 680px) {
      font-size: 24px;
  }
}

.loos-text {
  padding-top: 25vh;
}
.text {
  font-size: 24px;
  line-height: 30px;
    @media (max-width: 680px) {
      font-size: 18px;
    }
}

li + li {
  padding-top: 20px;
}

.main-button__start {
  color: white;

}

.loos-btn:nth-child(1){
    @media (max-width: 1024px) {
      padding-top: 10vh;
  }
}

.loos-btn:nth-child(2) {
    @media (max-width: 1024px) {
      padding-top: 5vh;
  }
}
</style>
