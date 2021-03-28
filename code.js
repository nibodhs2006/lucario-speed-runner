var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["07321fc6-aa6d-4405-8e95-bd7899a13ad8"],"propsByKey":{"07321fc6-aa6d-4405-8e95-bd7899a13ad8":{"name":"Daco_5753781.png_1","sourceUrl":"assets/v3/animations/pMv5CGYWeY0rnMyqGg3laqq2CQloODc1F9Ikg2ikZRg/07321fc6-aa6d-4405-8e95-bd7899a13ad8.png","frameSize":{"x":353,"y":473},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZTeV2UdbMwrIUD37evKirjyCbWeAhpNi","loadedFromSource":true,"saved":true,"sourceSize":{"x":353,"y":473},"rootRelativePath":"assets/v3/animations/pMv5CGYWeY0rnMyqGg3laqq2CQloODc1F9Ikg2ikZRg/07321fc6-aa6d-4405-8e95-bd7899a13ad8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var lucario = createSprite(35,20,10,10)
lucario.setAnimation("Daco_5753781.png_1")
lucario.scale=0.05

var border1=createSprite(20,200,2,379)
var border2=createSprite(222,10,335,2)
var border3=createSprite(390,200,2,379)
var border4=createSprite(200,390,379,2)

var L1=createSprite(100,50,100,2)
L1.shapeColor='red'
var L2=createSprite(51,85,2,70)
L2.shapeColor='red'
var L3=createSprite(90,120,80,2)
L3.shapeColor='red'
var L4=createSprite(130,131,2,23)
L4.shapeColor='red'
var L5=createSprite(150,142,40,2)
L5.shapeColor='red'
var L6=createSprite(170,115,2,55)
L6.shapeColor='red'
var L7=createSprite(130,131,2,23)
L7.shapeColor='red'
var L8=createSprite(170,50,160,2)
L8.shapeColor='red'
var L9=createSprite(349,67,2,35)
L9.shapeColor='red'
var L10=createSprite(310,94,2,85)
L10.shapeColor='red'
var L11=createSprite(273,130,2,90)
L11.shapeColor='red'
var L12=createSprite(235,95,2,90)
L12.shapeColor='red'
var L13=createSprite(220,140,30,2)
L13.shapeColor='red'
var L14=createSprite(205,147,2,53)
L14.shapeColor='red'
var L15=createSprite(223,175,255,2)
L15.shapeColor='red'
var L16=createSprite(96,182,2,56)
L16.shapeColor='red'
var L17=createSprite(74,155,46,2)
L17.shapeColor='red'
var L18=createSprite(44,190,45,2)
L18.shapeColor='red'
var L19=createSprite(65,257,2,135)
L19.shapeColor='red'
var L20=createSprite(117,210,45,2)
L20.shapeColor='red'
var L21=createSprite(170,213,2,75)
L21.shapeColor='red'
var L22=createSprite(200,250,210,5)
L22.shapeColor='red'
var L23=createSprite(95,269,2,40)
L23.shapeColor='red'
var L24=createSprite(155,288,120,2)
L24.shapeColor='red'
var L25=createSprite(215,322,2,70)
L25.shapeColor='red'
var L26=createSprite(116,323,123,2)
L26.shapeColor='red'
var L27=createSprite(177,340,2,35)
L27.shapeColor='red'
var L28=createSprite(115,356,123,2)
L28.shapeColor='red'
var L29=createSprite(255,338,2,103)
L29.shapeColor='red'
var L30=createSprite(353,373,2,35)
L30.shapeColor='red'
var L31=createSprite(325,357,60,2)
L31.shapeColor='red'
var L32=createSprite(295,338,2,36)
L32.shapeColor='red'
var L33=createSprite(342,320,95,2)
L33.shapeColor='red'
var L34=createSprite(302,287,95,2)
L34.shapeColor='red'
var L35=createSprite(305,231,2,39)
L35.shapeColor='red'
var L36=createSprite(272,213,65,2)
L36.shapeColor='red'
var L37=createSprite(350,205,2,165)
L37.shapeColor='red'
var L38=createSprite(370,230,40,2)
L38.shapeColor='red'
var L39=createSprite(240,213,10,75)
L39.shapeColor='black'

function draw() {
  background("lime")
  
  textSize(50)
  textAlign(CENTER,TOP)
  fill("yellow")
  stroke("blue")
  strokeWeight(5)
  
  var time=30-World.seconds
  
  if(keyWentDown("up")){
    lucario.velocityX=0
  lucario.velocityY=-2
 }
  
    if(keyWentUp("up")){
    lucario.velocityX=0
    lucario.velocityY=0
  }
    if(keyWentDown("down")){
    lucario.velocityX=0
    lucario.velocityY=2
  }
    if(keyWentUp("down")){
    lucario.velocityX=0
    lucario.velocityY=0
  }
   if(keyWentDown("LEFT")){
    lucario.velocityX=-2
    lucario.velocityY=0
  }
   if(keyWentUp("LEFT")){
    lucario.velocityX=0
    lucario.velocityY=0
  }
    if(keyWentDown("RIGHT")){
    lucario.velocityX=2
    lucario.velocityY=0
  }
  
   if(keyWentUp("RIGHT")){
    lucario.velocityX=0
    lucario.velocityY=0
   }
   if(keyWentDown("up")){
    lucario.velocityX=0
    lucario.velocityY=-2
  }
  
  if(lucario.isTouching(border1)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(border2)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(border3)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(border4)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(L1)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(L2)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L3)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L4)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L5)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L6)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L7)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L8)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L9)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L10)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L11)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L12)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L13)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L14)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L15)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L16)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L17)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L18)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L19)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L20)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L21)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L22)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L23)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L24)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L25)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L26)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L27)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L28)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L29)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L30)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L31)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L32)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L33)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L34)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L35)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L36)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L37)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }if(lucario.isTouching(L38)){
    lucario.velocityX=0
    lucario.velocityY=0
    lucario.x=35
    lucario.y=20
  }
  if(lucario.isTouching(L39)){
    lucario.velocityX=0
    lucario.velocityY=0
    
  }
  
  
  
  
  
   if(time>0){
     text(time,205,190)
   }
   else{
   textSize(30)
   textFont("Arial Black")
   text("GAME OVER",200,255)
   lucario.velocityX=0
   lucario.velocityY=0
   }
  
  
  

 drawSprites() 
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
