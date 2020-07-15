import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ModelName } from '../model/modelName';
import { RequestModel } from '../model/requestModel';
import { PlayerRequestModel } from '../model/playerRequestModel';

@Injectable({
  providedIn: 'root'
})

export class TictactoeService{

  constructor(private http: HttpClient) { }

  url: string = environment.baseUrl

  newGame(): Observable<any> {
    console.log('Starting new game');
    return this.http.get(this.url + '/newGame');
  }

  newPlayerVsPlayerGame(): Observable<any> {
    console.log('Starting new game');
    return this.http.get(this.url + '/newPlayerGame');
  }

  setMove(modelName: RequestModel): Observable<any> {
    //console.log('Making a move at (' + index +').');
    console.log(modelName.tttmodel);
    return this.http.post(this.url + '/makeMove/', modelName);
  }

  processMove(modelName: PlayerRequestModel): Observable<any>{
    console.log('player two');
    return this.http.post(this.url + '/playerVsPlayer/', modelName)
  }

  findMove(modelName: RequestModel): Observable<any> {
    console.log("AI is making move.");
    return this.http.post(this.url + '/ai/' , modelName);
  }



}