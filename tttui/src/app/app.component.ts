import {Component} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 


  // findMove(): void {
  //   let isMoved = false;
  //   while (!isMoved) {
  //     let possibleMoveIndex = Math.floor(Math.random() * 9);
  //     if (this.tracker[possibleMoveIndex] == null) {
  //       this.setTrackerAndTile(possibleMoveIndex, 'O');
  //       this.tiles[possibleMoveIndex].text = 'O';
  //       this.isHumanTurn = true;
  //       isMoved = true;
  //     }
  //   }
  // }

  // setTrackerAndTile(index, symbol) {
  //   this.tracker[index] = symbol;
  //   this.tiles[index].text = symbol;
  // }
}
