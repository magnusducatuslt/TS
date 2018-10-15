import {
  ParamsPassedToGameLogic,
  ResultReturnedFromGameLogic,
  GetterForGameLogic
} from "./interfaces/IGameLogic";
import { executeDAppLogic } from "./games/FTE/dapp.logic.js";
export class GameLogicApi
  implements
    ResultReturnedFromGameLogic,
    GetterForGameLogic,
    ParamsPassedToGameLogic {
  bets: number[];
  gameData: number[];
  randomNumbers: number[];
  result: number[];
  lengthOfBetsParam: number;
  getGameLogic = async (params: ParamsPassedToGameLogic) => {
    try {
      this.lengthOfBetsParam = params.bets.length;
      this.result = executeDAppLogic(
        params.bets,
        params.gameData,
        params.randomNumbers
      );
      //check if returned value is array
      if (!Array.isArray(this.result)) {
        throw "You must return array from dapp.logic.js";
      }
      //chekc if returned value same length with Bets array(count of player)
      if (this.lengthOfBetsParam !== this.result.length) {
        throw `You must return the array length that is equal to Bets array length. Current length of Bets array is ${
          this.lengthOfBetsParam
        }`;
      }
      for (let i = 0; i < this.result.length; i++) {
        if (typeof this.result[i] === "number") continue;
        else
          throw `You must return the array where elements is equal to number type. Error on element "${
            this.result[i]
          }" ,index is "${i}"`;
      }
      return { result: this.result };
    } catch (e) {
      console.error(e);
    }
  };
}
