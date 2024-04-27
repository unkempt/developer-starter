//import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//console.log()
//
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
//import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
// SwiperCore.use([Keyboard, Mousewheel]);
import WheelIndicator from 'wheel-indicator';

//import { Navigation, Pagination } from 'swiper/modules';
import { greetUser } from '$utils/greet';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const name = 'John Doe 334';
    greetUser(name);
    //document.body.style.backgroundColor = 'yellow';
    console.log('This is a test');
    const swiper = new Swiper('.swiper', {
      modules: [Keyboard, Mousewheel, Pagination],
      //css: [Pagination],
      direction: 'vertical', //'horizontal', //'vertical',
      slidesPerView: 1,
      speed: 500,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      //spaceBetween: 30,
      //keyboard: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //loop: true,
      //loopedSlides: 3, // according to the codepen
      //injectStyles: {width}
      // width: 100%,
      // height: 100vh,
    });

    const indicator = new WheelIndicator({
      //elem: document.querySelector('.swiper'),
      // callback: function (e) {
      //   if (e.direction == 'up') swiper.slidePrev();
      //   else swiper.slideNext();
      // },
    });

    console.log(swiper);
  },
  false
);

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe 1';
  greetUser(name);
  //document.body.style.backgroundColor = 'yellow';

  // document.addEventListener('DOMContentLoaded', function () {
  //   const swiper = new Swiper('.swiper', {
  //     modules: [Navigation, Pagination],
  //     direction: 'horizontal',
  //     mousewheel: true,
  //     keyboard: true,
  //     loop: true,
  //   });

  //   console.log(swiper);
  // });
  console.log('j');

  //const swiper = document.getElementById('holder');
  //const mySwiper = document.getElementsByClassName('swiper');
});
