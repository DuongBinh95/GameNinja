function Ninja(top, left){
    this.top = top;
    this.left = left;
    this.speed = 20;

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