import { CalculatePositionXY } from "../utils/getCoordinates";

export const Player = ({ players , boardSize , cellSize }) => {



  if(!players && players.length == 0){
    return null;
  }
  return (
    <>
      {players.map((item , index) => {
        const [x , y] = CalculatePositionXY(item , boardSize , cellSize);
        return <circle key={index} cx={x} cy={y} fill={item.color} r="10" />;
      })}
    </>
  );
};
