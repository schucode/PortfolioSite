(function() { 

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // 1366 is 2/3 the canvas
  ctx.translate(1366, 500);

  // define thing object
              
  function thing (x, y, vel_x, vel_y) {
    this.x = x;
    this.y = y;
    this.vel_x = vel_x;
    this.vel_y = vel_y;
    this.move = function() {
        this.x += this.vel_x;
        this.y += this.vel_y;
    }
    this.force = function(other_x, other_y) {
        this.vel_x += other_x;
        this.vel_y += other_y;
    }
  }


  // some needed math

  // Thanks Mozilla Developer Network
  var getRandomArbitrary = function(min, max) {
      return Math.random() * (max - min) + min;
  }


  var direction = function(x, y) {
    if ( x === y )
        return 0;
    else if (x < y)
        return 1;
    else if (x > y)
        return -1;
  }

  var distance = function(thing1, thing2) {
    var a = thing1.x - thing2.x;
    var b = thing1.y - thing2.y;
    var c = Math.sqrt((a*a) + (b*b));
    return c;
  }   


  // -200, 200 is interesting

  var planet1 = new thing(0, 0, .2, -.1);
  var star = new thing(0, 0, 0, 0);

  // -x is left, +x is right
  planet1.x = getRandomArbitrary(-200, 0);

  // -y is up, +y is down 
  planet1.y = getRandomArbitrary(550,550);


  // draw star
  // ctx.beginPath();
  // ctx.fillStyle = 'white';
  // ctx.arc(star.x, star.y, 5, 0, 2*Math.PI);
  // ctx.fill();

  // draw planet1
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(planet1.x, planet1.y, 1, 0, 2*Math.PI);
  ctx.fill();

  // draws each frome of the entire animation
  var drawFrame = function() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(planet1.x, planet1.y, 1, 0, 2*Math.PI);
    ctx.fill();
  } 

  var eachCycle = function() {
    
    // determine forces
    var dis1 = distance(planet1, star);
    var force_x = (30/(dis1))*direction(planet1.x, star.x);
    var force_y = (30/(dis1))*direction(planet1.y, star.y);
    planet1.force(force_x,force_y)

    // apply motion
    planet1.move();

    // animate the cycle/frame
    drawFrame();
  }

  var init = function() {
    var id = setInterval(eachCycle, 15);
  }

  window.onload = init;

})();









