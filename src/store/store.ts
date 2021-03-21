class Store {
  state: {
    selectedGame: number[];
    money: number;
    mode: any;
  } = {
    selectedGame: [],
    money: 0,
    mode: null,
  };

  init() {
    console.log("inited...");
  }

  setMoney(money: number) {
    this.state.money = money;
  }
  getMoney() {
    return this.state.money;
  }
  setGame(gameIds: number[]) {
    this.state.selectedGame = gameIds
  }
  getGame() {
    return this.state.selectedGame
  }
  setMode(mode: number) {
    this.state.mode = mode
  }
  getMode() {
    return this.state.mode
  }
}

export default new Store();
