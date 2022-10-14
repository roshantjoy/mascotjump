const mascot = document.querySelector('#mascot');
const obst = document.querySelector('#obst');

function jump(){

    if(mascot.classList != "jump"){
        mascot.classList.add("jump");
        setTimeout(function(){
            mascot.classList.remove("jump");
        },1000);
    }

}

  var masarr=[
      "mascot/second.png",
      "mascot/third.png",
      "mascot/first.png"
  ]
  var imagearray=[
      "Obstacles/meet.png",
      "Obstacles/psd.png",
      "Obstacles/corona.png"
  ]
  var i=0;
    
  var j=0;
  //
  var inter;
  var inter1;
  //
//   setInterval(function(){  
//       mascot.src= masarr[j];
//     j=j+1;
//     if(j==masarr.length){j=0;} }, 1000);
//

function docount1(){
    inter1= setInterval( function(){
       
        //
        mascot.src= masarr[j];
        j=j+1;
        if(j==masarr.length){j=0;}
        
       
        //
      },100);
}

docount1();

// function change() {
//     mascot.src = masarr[j];
//     j=j+1;
//    if(j==masarr.length){j=0;}
//  }
 
//  window.onload = function () {
//      setInterval(change, 5000);
 
  function docount(){
      inter= setInterval( function(){
          let num= document.getElementById("increment").innerHTML;
          num++;
          document.getElementById("increment").innerHTML= num;
          //
         obst.src= imagearray[i];
        
          i=i+1;
          if(i==imagearray.length){i=0;}
          
         
          //
        },2000);
  }

  docount();
let isAlive = setInterval(function(){

    let oleft =parseInt(window.getComputedStyle(obst).getPropertyValue("left"));
    let mbot =parseInt(window.getComputedStyle(mascot).getPropertyValue("bottom"));
    
    let a= 7*3*window.innerWidth/100;
    let b= (7*4*window.innerWidth/100) - (1.5*window.innerWidth/100);
    let c= (7*9*window.innerWidth/1000) - (1.5*window.innerWidth/100);
    
    if(oleft<b && oleft>a && mbot<=c){
        
        document.getElementById("restart").style.visibility = "visible";  
        obst.style.animation = "none";
        obst.classList.add("gameover");
        clearInterval(inter1);
        mascot.src= "mascot/final.png",
        clearInterval(inter);
    }
    
},100);

document.getElementById("again").onclick = function() {
        document.getElementById("restart").style.visibility = "hidden";  
        obst.style.animation = " block 2s infinite linear";
        obst.classList.remove("gameover");
        document.getElementById("increment").innerHTML= 0000;
        docount();
        docount1();
}



document.addEventListener("keydown", (e) => {
  if(e.key === " ") {
     jump();
   
  }  
}); 
