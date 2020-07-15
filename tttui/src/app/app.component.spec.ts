






  beforeEach(() => {
   
  });

  // it('should return false if empty', () => {
  //   expect(winCompnent.checkIfWinner()).toBeFalse();
  // });

  // it('should return true for top row for X', () => {
  //   winCompnent.tracker[0] = winCompnent.tracker[1] = winCompnent.tracker[2] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue();
  // });
  // it('should return true for middle row for X', () => {
  //   winCompnent.tracker[3] = winCompnent.tracker[4] = winCompnent.tracker[5] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue();
  // });
  // it('should return true for last row for X', () => {
  //   winCompnent.tracker[6] = winCompnent.tracker[7] = winCompnent.tracker[8] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue();
  // });
  // it('should return true for left side for X', () => {
  //   winCompnent.tracker[0] = winCompnent.tracker[3] = winCompnent.tracker[6] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue();
  // });

  // it('should return true for middle for X', () => {
  //   winCompnent.tracker[1] = winCompnent.tracker[4] = winCompnent.tracker[7] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue;
  // })

  // it('should return true for right side for X', () => {
  //   winCompnent.tracker[2] = winCompnent.tracker[5] = winCompnent.tracker[8] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue;
  // });

  // it('should return true for left diagnal for X', () => {
  //   winCompnent.tracker[0] = winCompnent.tracker[4] = winCompnent.tracker[8] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue;
  // });

  // it('should return true for right diagnal for X', () => {
  //   winCompnent.tracker[2] = winCompnent.tracker[4] = winCompnent.tracker[6] = 'X';
  //   expect(winCompnent.checkIfWinner()).toBeTrue;
  // });

  // it('tracker should be O on first cell', () => {
  //   const mathSpy = spyOn(Math, 'random').and.returnValue(.2);
  //   winCompnent.findMove();
  //   expect(winCompnent.tracker[1]).toBe('O');
  //   expect(mathSpy).toHaveBeenCalled();
  // });
  // it('tiles should be O on first cell', () => {
  //   const mathSpy = spyOn(Math, 'random').and.returnValue(.2);
  //   winCompnent.findMove();
  //   expect(winCompnent.tiles[1].text).toBe('O');
  //   expect(mathSpy).toHaveBeenCalled();
  // });

  // it('is humans turn', () => {
  //   winCompnent.isHumanTurn = false;
  //   winCompnent.findMove();
  //   expect(winCompnent.isHumanTurn).toBeTrue();
  // });
  // it('testLoop to find empty cell', () => {
  //   winCompnent.tracker[0] = 'X';
  //   const mathSpy = spyOn(Math, 'random').and.returnValues(.1, .2);
  //   winCompnent.findMove();
  //   expect(winCompnent.tracker[1]).toBe('O');
  // });

  // it('should set Track and Tile', () =>{
  //   winCompnent.setMove;
  //   expect(winCompnent.setTrackerAndTile(0,'X')).toHaveBeenCalled();
  // });


  

  // it('Set Move should call set tracker and tile', () => {
  //   const setTrackerSpy = spyOn(winCompnent, "setTrackerAndTile");
  //   winCompnent.setMove(1);
  //   expect(setTrackerSpy).toHaveBeenCalledWith(1, "X");
  // });

  // it('Should check to see if tracker is not null', () => {
  //   const setTrackerSpy = spyOn(winCompnent, "setTrackerAndTile");
  //   winCompnent.tracker[1] = "X";
  //   winCompnent.setMove(1);
  //   expect(setTrackerSpy).not.toHaveBeenCalled();
  // });

  // it('Should check to see if Human is not winner', () => {
  //   const setTrackerSpy = spyOn(winCompnent, "setTrackerAndTile");
  //   winCompnent.isHumanWinner = true;
  //   winCompnent.setMove(1);
  //   expect(setTrackerSpy).not.toHaveBeenCalled();
  // });

  // it('Should check to see if Computer is not winner', () => {
  //   const setTrackerSpy = spyOn(winCompnent, "setTrackerAndTile");
  //   winCompnent.isComputerWinner = true;
  //   winCompnent.setMove(1);
  //   expect(setTrackerSpy).not.toHaveBeenCalled();
  // });

  // it('Should call find Move', () => {
  //   const setMoveSpy = spyOn(winCompnent, "findMove");
  //   winCompnent.setMove(1);
  //   expect(setMoveSpy).toHaveBeenCalled();
  // });

  // it('Should call check if Winner and if true set isHumanWinner true', () => {
  //   const setCheckIfWinnerSpy = spyOn(winCompnent, "checkIfWinner").and.returnValue(true);
  //   winCompnent.setMove(1);
  //   expect(winCompnent.isHumanWinner).toBeTrue();
  // });

  // it('Should check if human turn is false', () => {
  //   console.log("Boolean " + winCompnent.isHumanTurn);
  //   winCompnent.setMove(1);
  //   console.log("Boolean " + winCompnent.isHumanTurn);
  //   expect(winCompnent.isHumanTurn).toBeFalse();
  // });

  // it('Should find another move and check if computer won', () => {
  //   const checkSpy = spyOn(winCompnent, "checkIfWinner").and.returnValue(false);
  //   const findMoveSpy = spyOn(winCompnent, 'findMove');
  //   winCompnent.setMove(1);
  //   expect(checkSpy).toHaveBeenCalledTimes(2);
  //   expect(findMoveSpy).toHaveBeenCalledTimes(2);

  // });
});



