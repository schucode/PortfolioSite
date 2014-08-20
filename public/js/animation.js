(function() { 

    // Thanks Mozilla Developer Network
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }



    /////////////////////////////
    // WINDOW TEST
    /////////////////////////////


    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');


    ctx.translate(900, 300);
      

    // global variables to track rotations. canvas does not offer a way to retrieve rotations
    var x = new Array();
    var dist = new Array();
    var vel = new Array();
    var size = new Array();


    for (var i = 0; i < 25; i++) {
        x[i] = 0;
        vel[i] = getRandomArbitrary(-0.05, 0.05);
        dist[i] = getRandomArbitrary(10, 250);
        size[i] = getRandomArbitrary(5, 25);
    }  


    // draws each frome of the entire animation
    function draw() {
        ctx.clearRect(-300, -300, 3000, 3000);

        ctx.save();
          
        for (var i = 0; i < 25; i++) {
            ctx.rotate((2*Math.PI)-x[i])   

            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(dist[i], 5, size[i], 0, 2*Math.PI);
            ctx.fill();
            x[i] = x[i] + vel[i];

            ctx.restore();
            ctx.save();
        }
    } 
        

    function init() {
        var id = setInterval(draw, 40);
    }

    init();

})();

