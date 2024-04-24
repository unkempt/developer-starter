import html2canvas from 'html2canvas';
import * as PIXI from 'pixi.js';

//import { Application, Assets, Sprite } from 'pixi.js';
import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const name = 'John Doe 10';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';

  //const app = new Application();
  const app = new PIXI.Application();
  await app.init({ width: window.innerWidth, height: window.innerHeight });

  //   const app = new PIXI.Application({
  //     view: captureCanvas,
  //     width: ww,
  //     height: wh,
  //     transparent: true
  // });
  // Wait for the Renderer to be available
  //await app.init();

  // The application will create a canvas element for you that you
  // can then insert into the DOM

  //
  //
  html2canvas(document.body, {
    //x: window.scrollX,
    //y: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: window.devicePixelRatio,
    //preserveDrawingBuffer: true,
    useCORS: true,
  }).then(function (canvas) {
    console.log('THEN');
    document.body.appendChild(canvas);

    // const image = new Image();
    // image.src = canvas.toDataURL('image/png');
    // //const myBaseTexture = new PIXI.tex  .BaseTexture(image);
    // const texture = PIXI.textureFrom(image.src);

    // // then add to the cache (if required)
    // PIXI.Texture.addTextureToCache(texture, "someId");

    // // to retrieve the texture it would be a case of
    // var coolTexture = PIXI.Sprite.fromImage("someId");

    //const texture = PIXI.Texture.from(canvas.toDataURL('image/png'));
    // then add to the cache (if required)
    //PIXI.Texture.addTextureToCache(texture, "someId");

    // // to retrieve the texture it would be a case of
    // var coolTexture = PIXI.Sprite.fromImage("someId");

    // const sprite = new PIXI.Sprite(texture);
    // sprite.width = window.innerWidth; // Set canvas width
    // sprite.height = window.innerHeight; // Set canvas height
    // app.stage.addChild(sprite);
    // console.log('yap');
    // //renderWithPixi(canvas.toDataURL('image/png'));

    console.log('complete');
  });

  function renderWithPixi(imageData) {
    const texture = PIXI.Texture.from(imageData);
    const sprite = new PIXI.Sprite(texture);
    sprite.width = window.innerWidth; // Set canvas width
    sprite.height = window.innerHeight; // Set canvas height
    app.stage.addChild(sprite);
    console.log('yap');
  }
});
