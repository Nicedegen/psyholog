<template>
  <section class="slider">
    <div class="slider-inner">
      <section class="slider-questions">
        <div :class="{'slider-questions-block':isAnimation}">
          <p class="slider-questions-block__text"
          v-bind:class="{'slider-loading':isActive}">{{text}}</p>
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
      text: '',
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
        this.text = 'Может лучше пойти к психологу?';
        document.querySelector('.slider-buttons').style.opacity = 1;
      }, 5000);
    },
    deleteAnimation() {
      this.isAnimation = false;
    },
    addAnimation() {
      this.isAnimation = true;
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
          this.text = 'Может лучше пойти к психологу?';
          break;
        case (1):
          this.text = 'Как насчёт волшебной таблетки?';
          break;
        case (2):
          this.text = 'Решим всё побыстрее, за пару месяцев?';
          break;
        case (3):
          this.text = 'Буду работать пока не решу проблему';
          break;
        case (4):
          this.text = 'У меня хватит терпения';
          break;
        case (5):
          this.text = 'Все зависит от того, насколько я сильно стараюсь';
          break;
      }
      console.log(this.counter, this.buttons[id].link, id);
    },
  },
};
</script>
