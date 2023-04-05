class Box {
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h


    }
    display(){
        fill("blue")
        strokeWeight(10)
        rect(this.x,this.y,this.w,this.h)
    }
}