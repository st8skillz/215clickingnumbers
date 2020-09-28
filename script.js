var colors = [ "cyan","yellow","magenta"];
function clickCounter(color){
  this.div = document.createElement("div")
  this.div.innerHTML = 0;
  this.div.style.height = "100px";
  this.div.style.width = "200px";
  this.div.style.borderRadius = "10px";
  this.div.style.fontSize = "18px";
  this.div.style.verticalAlign ="middle";
  this.div.style.horizontalAlign ="center";
  this.div.style.textAlign = "center";
  this.div.style.lineHeight = "100px";
  
  this.div.style.backgroundColor = color;
  this.increaseCounter();
  
  document.body.appendChild(this.div);
}

clickCounter.prototype.increaseCounter = function () {
  this.div.addEventListener("click", click);
  
  function click (){ 
    this.innerHTML++;
  }
}
  for (var color of colors){
    new clickCounter(color);
  }