
export class Player{
    name : string;
    position : number = 0;
    color : string;
    total6 : number = 1;
    constructor(name : string , color : string){
        this.name = name;
        this.color = color;
    }

    setPosition(position){
        this.position = position;
    }
    resetTotal(){
        this.total6 = 1;
    }

   
    
}