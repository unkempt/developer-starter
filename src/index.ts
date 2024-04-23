import html2canvas from 'html2canvas';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe 10';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';
  //
  //
  html2canvas(document.body, {
    x: window.scrollX,
    y: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: window.devicePixelRatio,
    //preserveDrawingBuffer: true,
    useCORS: true,
  }).then(function (canvas) {
    // console.log('THEN');
    // renderWithPixi(canvas.toDataURL('image/png'));
    console.log('complete');
  });
});
