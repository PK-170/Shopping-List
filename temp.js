

class Temp{

    constructor(width, height, color){
        console.log("The Temp is being created");
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    getArea(){
        return this.width * this.height;
    }
    
}

var obj1 = new Temp(5,3,"Blue");
console.log(obj1);
console.log(obj1.getArea());