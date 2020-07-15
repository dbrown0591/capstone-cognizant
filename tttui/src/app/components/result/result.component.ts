import { Component, OnInit } from '@angular/core';
import { PlayerVsPlayerModel } from '../../model/playerVsPlayerModel';
import { PlayerRequestModel } from '../../model/playerRequestModel'
import { TictactoeService} from '../../service/TictactoeService';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: TictactoeService) { }

  ngOnInit(): void {
  }

  nextTurn: String = "X";
  xWins: boolean = false;
  oWins: boolean = false;
  tracker: string[] = new Array(9).fill("");
  
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



  processMove(index: number): void {
    let playerModel: PlayerVsPlayerModel = new PlayerVsPlayerModel();
      playerModel.nextTurn = this.nextTurn;
      playerModel.oWins = this.oWins;
      playerModel.xWins = this.xWins;
      playerModel.tracker = this.tracker;

      let playerRequestModel: PlayerRequestModel = new PlayerRequestModel();
        playerRequestModel.move = index;
        playerRequestModel.playerModel = playerModel;

        this.service.processMove(playerRequestModel).subscribe(response =>{
            this.resetPlayerVsPlayerBoard(response);
        })
  }
  resetPlayerVsPlayerBoard(response){   
    this.nextTurn = response.nextTurn;
    this.oWins = response.oWins;
    this.xWins = response.xWins;
    this.tracker = response.tracker;
    for(let i = 0; i < 9; i++){
      this.tiles[i].text = this.tracker[i];
    }
  }

  newPlayerVsPlayerGame(): void{
    this.service.newPlayerVsPlayerGame().subscribe(response =>{
      this.resetPlayerVsPlayerBoard(response);
    })
  }
}
