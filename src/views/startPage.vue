<template>
  <div class="main-page">
    <div class="main-page__inner">
      <div class="main">
        <div class="main-content">
          <div class="main-gif">
            <img src="../assets/gifblack.gif" alt="Анимированная картинка психоанализа"
            class="main-gif__img">
          </div>
          <div class="main-button">
            <router-link :to="link">
              <button class="main-button__start" @click="updateBtn()">
                {{textBtn}}
              </button>
            </router-link>
          </div>
        </div>
        <footer class="main-footer">
          <div class="main-footer-inner">
            <div class="icons">
              <ul class="icons-network">
                <li class="icons-network__youtube">
                  <a href="https://www.youtube.com/c/%D0%95%D0%B3%D0%BE%D1%80%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B21" target="_blank">
                    <img src="../assets/youtube-white.png"
                      alt="youtube" width="32" height="32">
                  </a>
                </li>
                <li class="icons-network__q">
                  <a href="https://t.me/kaplyapsiho" target="_blank">
                    <img src="../assets/telegram-1.png"
                      alt="telegram" width="32" height="32" class="icons-network__q-telegram">
                  </a>
                </li>
                <!-- <li class="icons-network__q">
                  <a href="https://yandex.ru/q/profile/g3aa6vq35d0e97b8e8xd4f4ry8/questions/" target="_blank">
                    <img src="../assets/yandex-white.png"
                      alt="yandex-q" width="32" height="32">
                  </a>
                </li> -->
                <li class="icons-network__tiktok">
                  <a href="https://www.instagram.com/egor_baranov_/" target="_blank">
                  <img src="../assets/instagram.png"
                    alt="tik-tok" width="32" height="32">
                  </a>
                </li>
                <li class="icons-network__zen">
                  <a href="https://clck.ru/YwrJF" target="_blank">
                    <img src="../assets/yandex-zen-white.png"
                      alt="yandex zen" width="32" height="32">
                  </a>
                </li>

                <!-- Из за последний событий скрываем отключенные сервисы -->
                <!-- <li class="icons-network__tiktok">
                  <a href="https://vm.tiktok.com/ZM8pvCr81/" target="_blank">
                  <img src="../assets/tiktok-white.png"
                    alt="tik-tok" width="32" height="32">
                  </a>
                </li> -->

                <li class="icons-network__vk">
                  <a href="https://vk.com/public213127328" target="_blank">
                  <img src="../assets/vk-64.png"
                    alt="vk" width="28" height="28">
                  </a>
                </li>

                <li class="icons-network__yandex-music">
                  <a href="https://music.yandex.ru/album/23738459" target="_blank">
                  <img src="../assets/yandex-music.png"
                    alt="vk" width="60" height="40">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="main-button main-bottom-donats">
            <router-link to="/donats">
              <button class="main-button__start donats">
                донаты
              </button>
            </router-link>
          </div> -->
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'startPage',
  data() {
    return {
      textBtn: 'вы готовы?',
      counter: 0,
      link: '',
    };
  },
  methods: {
    changeDirectory() {
      this.link = '/slider';
    },
    updateBtn() {
      this.counter += 1;

      switch (this.counter) {
        case 1:
          this.textBtn = 'проверить';
          break;
        case 2:
          this.textBtn = 'узнать';
          break;
        case 3:
          this.textBtn = 'приступить';
          break;
        case 4:
          this.textBtn = 'начать';
          break;
        case 5:
          this.textBtn = 'давай уже';
          break;
        case 6:
          this.link = 'slider';
          break;
        default:
          this.textBtn = 'вы готовы?';
          this.link = '';
          break;
      }
      return this.textBtn;
    },
  },
};

</script>
