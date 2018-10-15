interface ParamsPassedToGameLogic {
  readonly bets: number[];
  readonly gameData: number[];
  readonly randomNumbers: number[];
}
interface ResultReturnedFromGameLogic {
  readonly result: number[];
}
interface GetterForGameLogic {
  getGameLogic(
    params: ParamsPassedToGameLogic
  ): Promise<ResultReturnedFromGameLogic>;
}
export {
  ResultReturnedFromGameLogic,
  GetterForGameLogic,
  ParamsPassedToGameLogic
};
