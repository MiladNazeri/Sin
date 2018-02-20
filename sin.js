// Linear Graph

for (var i = 0; i <= 1; i += 0.1){
    x = i;
    y = i;
}

// Multiply a value by itself for steeper graph

for (var i = 0; i <= 1; i += 0.1){
    x = i;
    y = i * i;
}

// Math.pow for even tepper Graph

for (var i = 0; i <= 1; i += 0.1) {
    x = i;
    y = Math.pow(i,4);
}

// -1 0 1
// Full circle
// 0 PI x 2

var counter = 0;
var increase = Math.PI / 100;

for (var i = 0; i <= 1; i += 0.01) {
    x = i;
    y = Math.sin(counter);
    counter += increase;
}

// Math.sin and Math.cos = radians
var toRadian = Math.PI / 180;
var toDegree = 180 / Math.PI;

var angle = 30;

var angleInRadians = angle * toRadian;
var angleInDegrees = angleInRadians * toDegree

// Full loop
var counter = 0;
var increase = Math.PI * 2 / 100;

for ( var i = 0; i <= 1; i += 0.01 ) {
    x = i;
    y = Math.abs( Math.sin( counter ));
    counter += increase;
}

// full Up and Down
var counter = 0;
var increase = Math.PI * 2 / 100;

for (var i = 0; i <= 1; i += 0.01) {
    x = i;
    // Half the sine and offset 0.5
    y = Math.sin(counter) / 2 + 0.5;
    counter += increase;
}

//
var banner = document.querySelector( '.stage div' ),
    start = 0;
function sine(){
    banner.style.top = 50 * Math.sin( start ) + 80 + 'px';
    start += 0.05;
}
window.setInterval( sine, 1000/30 );

var banner = document.querySelectpr( '.stage div' ),
    start = 0,
    multiplier = 0;
function sine(){
    multiplier = 50 * Math.sin ( start * 2 );
    banner.style.top = multiplier * Math.sin( start ) + 80 + 'px';
    start += 0.05;
}
window.setInterval( sine, 1000/30 );

// triangle with right angle
// hypothenuse = 1
// x = angle opposite 90degree
// horizontal leg = cos(x)
// vertical leg = sin(x)

// full circle = 360degrees
// 2 X PI in radians

Plot = function ( stage ) {
    this.setDimensions = function( x, y ) {
        this.elm.style.width = x + 'px';
        this.elm.style.height = y + 'px';
        this.width = x;
        this.height = y;
    }
    this.position = function (x, y) {
        var xoffset = arguments[2] ? 0 : this.width / 2;
        var yoffset = arguments[2] ? 0 : this.height / 2;
        this.elm.style.left = (x - xoffset) + 'px';
        this.elm.style.top = (y - yoffset) + 'px';
        this.x = x;
        this.y = y;
    };
    this.setbackground = function( col ) {
        this.elm.style.background = col;
    }
    this.kill = function() {
        stage.removeChild( this.elm );
    }
    this.rotate = function( str ) {
        this.elm.style.transform = 'rotate(' +str+ ')';
    }
    this.content = function( content ) {
        this.elm.innerHTML = content;
    }
    this.round = function ( round ) {
        this.elm.style.borderRadius = round ? '50%/50%' : '';
    }
    this.elm = document.createElement( 'div' );
    this.elm.style.position = 'absolute';
    stage.appendChild( this.elm );
}

var stage = document.querySelector('.stage'),
    plots = 10;
    increase = Math.PI * 2 / plots,
    angle = 0,
    x = 0,
    y = 0;

    // x = cosine
    // y = sin
    for (var i = 0; i < plots; i ++ ) {
        var p = new Plot (stage);
        p.setBackground( 'green' );
        p.setDimensions( 40, 40 );
        x = 100 * Math.cos( angle ) + 200;
        y = 100 * Math.sin( angle ) + 200;
        p.position( x, y );
        angle += increase;
    }

    // to get angles pointing to the center
    // you need the tangent of the right angle square
    // Math.atan2()
    p.rotate( Math.atan2( y - 200, x - 200) + 'rad');
