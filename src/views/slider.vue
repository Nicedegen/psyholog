<template>
  <section class="slider">
    <div class="slider-inner">
      <section class="slider-questions">
        <div :class="{'slider-questions-block':isAnimation}">
          <h2 class="slider-questions-block__text"
          :class="{'slider-loading':isActive}">
          </h2>
        </div>
      </section>
      <section class="slider-buttons">
          <div class="slider-buttons-block"
          v-for='button in buttons'
          :key='button.id'
          >
            <router-link :to="button.link">
              <button
              :class="button.class"
              :id="button.id"
              @click="changeText(button.id)"
              >
                {{ button.text }}
              </button>
            </router-link>
          </div>
      </section>
      <section class="slider-devil">
        <div class="slider-devil-left">
          <div class="slider-devil-left__imgLeft">
            <img src="../assets/devil.png" alt="Смешная картинка дьявола" width="150" height="150">
          </div>
          <h3 class="slider-devil-left__textYes">жми "да"</h3>
        </div>
      </section>
      <section class="slider-devil">
        <div class="slider-devil-right">
          <div class="slider-devil-right__imgRight">
            <img src="../assets/devil.png" alt="Ещё одна смешная картинка дьявола"
          width="150" height="150">
          </div>
          <h3 class="slider-devil-right__textNo">не может все зависеть от тебя</h3>
        </div>
      </section>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'slider',
  data() {
    return {
      loading: 'loading',
      firstLine: 'Может лучше пойти к психологу?',
      thirdLine: '',
      counter: 0,
      isActive: true,
      isAnimation: false,
      buttons: [
        {
          class: 'slider-buttons__yes',
          text: 'да',
          id: 0,
          link: '',
        },
        {
          class: 'slider-buttons__no',
          text: 'нет',
          id: 1,
          link: '',
        },
      ],
    };
  },
  mounted() {
    this.deleteLoading();
  },
  methods: {
    deleteLoading() {
      setTimeout(() => {
        this.isActive = false;
        this.isAnimation = true;
        this.textAnimation();
      }, 3000);
      setTimeout(() => {
        document.querySelector('.slider-buttons').style.display = 'flex';
        document.querySelector('.slider-buttons').style.opacity = 1;
      }, 7000);
    },
    changeButtonsAnimation() {
      document.querySelector('.slider-buttons').style.display = 'none';
      document.querySelector('.slider-buttons').style.opacity = 0;
      document.querySelector('.slider-devil-left').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('.slider-buttons').style.display = 'flex';
        document.querySelector('.slider-buttons').style.opacity = 1;
      }, 5000);
    },
    deleteAnimation() {
      this.isAnimation = false;
    },
    addAnimation() {
      this.isAnimation = true;
    },
    devilAnimationLeft() {
      setTimeout(() => {
        document.querySelector('.slider-devil-left').style.opacity = 1;
      }, 5000);
    },
    devilAnimationRight() {
      setTimeout(() => {
        document.querySelector('.slider-devil-right').style.opacity = 1;
      }, 5000);
    },
    textAnimation() {
      const selector = document.querySelector('.slider-questions-block__text');
      selector.innerHTML = '';
      let i = 0;
      const text = this.firstLine;

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
    changeText(id) {
      if (this.counter === 0 && id === 0) {
        this.buttons[id].link = '/end';
      }

      this.counter += 1;

      if (this.counter === 1 && id === 0) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 2 && id === 0) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 3 && id === 0) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 4 && id === 1) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 5 && id === 1) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 6 && id === 0) {
        this.buttons[id].link = '/endPage';
      } else if (this.counter === 6 && id === 1) {
        this.buttons[id].link = '/winPage';
      }
      switch (this.counter) {
        default:
          this.firstLine = 'Может лучше пойти к психологу?';
          break;
        case (1):
          this.changeButtonsAnimation();
          this.firstLine = 'Как насчёт волшебной таблетки?';
          this.textAnimation();
          break;
        case (2):
          this.changeButtonsAnimation();
          this.devilAnimationLeft();
          this.firstLine = 'Решим всё побыстрее, за пару месяцев?';
          this.textAnimation();
          break;
        case (3):
          this.changeButtonsAnimation();
          this.firstLine = 'Буду работать, пока не решу проблему';
          this.textAnimation();
          break;
        case (4):
          this.changeButtonsAnimation();
          this.firstLine = 'У меня хватит терпения';
          this.textAnimation();
          break;
        case (5):
          this.changeButtonsAnimation();
          this.devilAnimationRight();
          this.firstLine = 'Все зависит от того, насколько сильно я стараюсь';
          this.textAnimation();
          break;
      }
    },
  },
};
</script>
