function Ninja(top, left){
    this.top = top;
    this.left = left;
    this.speed = 50;

    this.moveDown = function() {
        var sum = this.top + this.speed;
        if(this.top >=0 && this.top <1000){
            this.top = sum;
        }
    }
    this.moveTop = function () {
        var sum = this.top - this.speed;
        if(sum >=0 && sum<1000)
            this.top = sum;
    }
    this.moveRight = function () {
        var sum = this.left + this.speed;
        if(sum >= 0 && sum < 1800){
            this.left = sum;
        }
    }
    this.moveLeft = function () {
        var sum = this.left - this.speed;
        if (sum>0 && sum< 1800){
            this.left = sum;
        }
    }
}
var ninja = new Ninja(0, 0);
function showNinja(){
    document.getElementById('ninja').style.left = ninja.left + 'px';
    document.getElementById('ninja').style.top = ninja.top + 'px';
}
function moveNinja(event) {
    var move = event.which;
    if (move === 37) {
        ninja.moveLeft();
    } else if (move === 39) {
        ninja.moveRight();
    } else if (move === 38) {
        ninja.moveTop();
    } else if (move === 40) {
        ninja.moveDown();
    }
    showNinja();
}


function Monter(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 5;


    this.getMonterElement= function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function () {
        var sum = this.left + this.speed;
        if(sum >= 0 && sum < 1800){
            this.left = sum;
            return true;
        }
        return false;
    }
    this.moveLeft = function () {
        var sum = this.left - this.speed;
        if (sum>0 && sum < 1800){
            this.left = sum;
            return true;
        }
        return false;
    }

}

var monter = new Monter('Anh/MonsterShooter2-icon.png', 600, 0, 200);

function start(){
    if(monter.moveRight()){
        document.getElementById('monster').innerHTML = monter.getMonterElement();
        setTimeout(start, this.speed);
    }else {
        setTimeout(lui, this.speed);
    }
}
function lui(){
    if(monter.moveLeft()){
        document.getElementById('monster').innerHTML = monter.getMonterElement();
        setTimeout(lui, this.speed)
    }else {
        setTimeout(start, this.speed);
    }
}
start();
