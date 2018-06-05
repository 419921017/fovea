import '@css/reset.scss';
import '@css/index.scss';
import '@css/phone.scss';

import '@js/flexblecss.js'


// import flexble from 'flexible'

// console.log('%c webpack-cli V1.0.0', 'line-height:1;font-size:15px;color:#1C78C0;');


var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  on: {
    transitionStart: function () {
      if (this.activeIndex == 0) {
        console.log('当前执行页面是第0屏');

      }
      if (this.activeIndex == 1) {
        console.log('当前执行页面是第1屏');

      }
      if (this.activeIndex == 2) {
        console.log('当前执行页面是第2屏');

      }
      if (this.activeIndex == 3) {
        console.log('当前执行页面是第3屏');

      }
      if (this.activeIndex == 4) {
        console.log('当前执行页面是第4屏');

      }
    }
  }
});
