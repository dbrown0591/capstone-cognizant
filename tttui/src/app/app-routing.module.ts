import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppComponent } from './app.component'
import { BoardComponent } from './components/board/board.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [ 
  {path: 'welcome', component: WelcomeComponent},
  {path: 'board', component: BoardComponent},
  {path: 'result', component: ResultComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: WelcomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
export const routingComponents = [WelcomeComponent, AppComponent,ResultComponent, BoardComponent]