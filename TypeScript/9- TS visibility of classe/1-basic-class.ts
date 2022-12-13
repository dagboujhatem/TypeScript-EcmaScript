class PointBasic {
    // properties || attributes
    x: number;
    y: number;

    // constructor method
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Zero or One or more methods ... 
    printPont(): void{
        console.log(`x : ${this.x}, y: ${this.y}`)
    }

}

(() => {
    const pt = new PointBasic(0, 0);
    pt.x = 0;
    pt.y = 0;
})()