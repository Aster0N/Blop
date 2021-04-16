import * as PIXI from 'pixi.js'
window.PIXI = PIXI; 
import displacementSprite from 'pixi.js'
import displacementSprite from 'pixi.js'


// import { displacementSprite, displacementFilter } from 'pixi.js'

var app;
var wrapper = document.querySelector('.pixi-wrapper');
function initPixi() {
    app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
    wrapper.appendChild(app.view);
    var image = new PIXI.Sprite.from("https://i.ibb.co/vm1RcS4/f1.jpg");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    app.stage.addChild(image);
    displacementSprite = new PIXI.Sprite.from("https://i.ibb.co/Gs4CvLh/cloud.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];
    app.renderer.view.style.transform = 'scale(1.02)';
    displacementSprite.scale.x = 4;
    displacementSprite.scale.y = 4;
    animate();
}
function animate() {
    displacementSprite.x += 10;
    displacementSprite.y += 4;
    requestAnimationFrame(animate);
}
initPixi();

// function createAnimationFunc() {
//     var app;
//     var wrapper = document.querySelector('.pixi-wrapper');
//     function initPixi() {
//         app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
//         wrapper.appendChild(app.view);
//         var image = new PIXI.Sprite.from("https://i.ibb.co/vm1RcS4/f1.jpg");
//         image.width = window.innerWidth;
//         image.height = window.innerHeight;
//         app.stage.addChild(image);
//         displacementSprite = new PIXI.Sprite.from("https://i.ibb.co/Gs4CvLh/cloud.png");
//         displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
//         displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
//         app.stage.addChild(displacementSprite);
//         app.stage.filters = [displacementFilter];
//         app.renderer.view.style.transform = 'scale(1.02)';
//         displacementSprite.scale.x = 4;
//         displacementSprite.scale.y = 4;
//         animate();
//     }
//     function animate() {
//         displacementSprite.x += 10;
//         displacementSprite.y += 4;
//         requestAnimationFrame(animate);
//     }
//     initPixi();
// }
// export default {
//     return() {
//         createAnimationFunc()
//     }
// }