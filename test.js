var jpgimg = new Image();
jpgimg.src = "youdie.jpeg";
jpgimg.addEventListener("load",drawScreen,false);

function drawScreen()
{
  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");

  Context.fillStyle = "#000000";
  Context.fillRect(0,0,800,600);

  Context.drawImage(jpgimg,0,0);
}

drawScreen();
