class Point {

    public name: string; 
    public x: number;
    public y: number;


     constructor(name: string, x: number, y: number){
        this.name = name;
        this.x = x;
        this.y = y;
    }
   
}

let point1 = new Point("Big", 100, 200);

console.log(point1);


interface User{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: User = {
    name: "Ming",
    age: 22,
    speak(text: string): void {
        console.log("text");
    },
    spend(amount: number): number{
        console.log("I spent", amount);
        return amount;
    }
};

console.log(me);

export {}
