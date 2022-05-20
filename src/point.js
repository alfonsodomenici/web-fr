class Point {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    tostring(){
        return `x=${this.x},y=${this.y}`;
    }  

    move(movex,movey){
        this.x += movex;
        this.y += movey;
    }

    reset(){
        this.x = 0;
        this.y = 0;
    }
}

export {Point};