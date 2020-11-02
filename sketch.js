//Mandelbrot set inspired by Daniel Shiffman
// 2020, Martin A. Koch, PhD


    var xrange = 2;
    var yrange = 1.5;

function setup() {
       pixelDensity(1);
    createCanvas(displayWidth,displayHeight);
}


function draw() {
    background(0);
    
    var nmax = 100;
    
    loadPixels();
    
    for (var y=0; y<height; y++){
        for (var x=0; x<width; x++){
            var creal = map(x, 0, width, -xrange-1, xrange);
            var cimag = map(y, 0, height, -yrange, yrange);
            var new_real = 0;
            var new_imag = 0;
            var old_real = 0;
            var old_imag = 0;
            for (var n = 0; n<nmax; n++){
                new_real = old_real*old_real-old_imag*old_imag + creal;
                new_imag = 2*old_real * old_imag + cimag;
                
                old_real = new_real;
                old_imag = new_imag;
                if (abs(new_real+new_imag)>32){
                break;
                }
            }
                    
            var index= (x + y * width)*4;        
            pixels[index+0]=map(n,0,100,0,255); //R
            pixels[index+1]=map(n,0,50,0,255); //G
            pixels[index+2]=map(n,0,25,0,128); //B
            pixels[index+3]=255; //alpha 
    }
}
    updatePixels();
    //xrange -= 1;
    //yrange -= 1;
    noStroke();
    fill(255, 255, 255);
    textSize(10);
    text("M. A. Koch, PhD. 2020", width-115, height-8);
    noLoop();
}
