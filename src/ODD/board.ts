import { Laddar } from "./Laddar.ts";
import { Snake } from "./snake.ts";

const snakeDefaultValues = [ { start : 99  , end : 28 } , { start : 97 , end : 86} , { start : 89 , end : 67} ,{ start : 76 , end : 63} , { start : 73 , end : 12} , { start : 59 , end : 37} , { start : 50 , end : 34} , { start : 35 , end : 5} , { start : 27 , end : 7}];
const ladderValues =  [ { start : 2 , end : 23} , { start : 7 , end : 29} , { start : 22 , end : 41} , { start : 28 , end : 75} ,{ start : 30 , end : 32} , { start : 54 , end : 69},{ start : 70 , end : 90} , { start : 80 , end : 83} , { start : 87 , end : 93}];

export class Board {
  

  snakes : Snake[] = [];

  ladder : Laddar[] = [];

  boardNum : number = 10;

  board : number[][] = [];

  constructor(size : number = 10) {
    this.boardNum = size;
    let count = size * size;
    for(let i = 0 ; i < size ; i++){
      let row : number[]= new Array(size);
      for(let j = 0 ; j < size ; j++){
        if(i % 2 == 0){
          row[j] = count;
         }else{
          row[size-1-j] = count
        }
        count -= 1
      }
      this.board.push(row);
    }

  }

  addSnake(snakesValues = snakeDefaultValues){
    for(let i = 0 ; i < snakesValues.length ; i++){
      let {start , end} = snakesValues[i];
      let snake = new Snake(start , end);
      this.snakes.push(snake);
    }
  }

  addLaddar(laddarValues = ladderValues){
    for(let i = 0 ; i < laddarValues.length ; i++){
      let {start , end} = laddarValues[i];
      let snake = new Laddar(start , end);
      this.ladder.push(snake);
    }
  }
  getSnakes(){
    return this.snakes;
  }
  

  status(){
    return this.board;
  }

  gtBoardSize(){
    return this.boardNum;
  }

  checkForSnake(position){
    const checkisHaveSnake = this.snakes.find(({ start , end}) => start == position)
    if(checkisHaveSnake){
      return [true , checkisHaveSnake.end]
    }
    return [false , null]

  }

  checkForLadder(position){
    const checkisHaveLadder = this.ladder.find(({ start , end }) => start == position);
    if(checkisHaveLadder){
      return [true , checkisHaveLadder.end]
    }
    return [false , null]

  }
 
  checkWinner(position){
    if(position == this.board[0][0]){
        return true
    }
    return false;
  }
}
