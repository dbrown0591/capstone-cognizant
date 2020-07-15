import { Component, OnInit } from '@angular/core';
import { ModelName } from '../../model/modelName';
import { RequestModel } from '../../model/requestModel';
import { TictactoeService} from '../../service/TictactoeService';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {



  ngOnInit(): void {
  }

  isHumanTurn: boolean = true;
  isHumanWinner: boolean = false;
  isComputerWinner: boolean = false;
  tracker: string[] = new Array(9).fill("");

  
    

  constructor(private service: TictactoeService) { }



  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: '#FFD700'},
    {text: '', cols: 1, rows: 1, color: '#FF0000'},
    {text: '', cols: 1, rows: 1, color: '#FFD700'},
    {text: '', cols: 1, rows: 1, color: '#FF0000'},
    {text: '', cols: 1, rows: 1, color: '#FFD700'},
    {text: '', cols: 1, rows: 1, color: '#FF0000'},
    {text: '', cols: 1, rows: 1, color: '#FFD700'},
    {text: '', cols: 1, rows: 1, color: '#FF0000'},
    {text: '', cols: 1, rows: 1, color: '#FFD700'}
  ];
  



  setMove(index: number): void {
   let ticTacToeModel: ModelName = new ModelName();
    ticTacToeModel.isHumanTurn = this.isHumanTurn;
    ticTacToeModel.isComputerWinner = this.isComputerWinner;
    ticTacToeModel.isHumanWinner = this.isHumanWinner;
    ticTacToeModel.tracker = this.tracker;

    let requestModel: RequestModel = new RequestModel();
    requestModel.userMove = index;
    requestModel.tttmodel = ticTacToeModel;

    this.service.setMove(requestModel).subscribe(response =>{
      this.resetBoard(response);
    })
  };
  
  resetBoard(response){   
    this.isComputerWinner = response.computerWinner;
    this.isHumanTurn = response.humanTurn;
    this.isHumanWinner = response.humanWinner;
    this.tracker = response.tracker;
    for(let i = 0; i < 9; i++){
      this.tiles[i].text = this.tracker[i];
    }
  }
  newGame(): void{
    this.service.newGame().subscribe(response =>{
      this.resetBoard(response);
    })
  }
}
