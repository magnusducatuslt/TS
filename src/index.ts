//export * from "./GameLogicApi";
import { GameLogicApi } from "./GameLogicApi";
const GameLogic = new GameLogicApi();

GameLogic.getGameLogic({
  bets: [1, 2],
  gameData: [1, 2],
  randomNumbers: [3]
}).then(data => console.log(data.result + " HERE RESULT CONGRATULATION"));
