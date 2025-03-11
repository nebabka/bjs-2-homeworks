class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, _state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      if (this._state > 0 && this._state < 100) {
        this._state = Math.min(100, this._state * 1.5);
      }
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }

    get state() {
        return this._state;
      }
  }