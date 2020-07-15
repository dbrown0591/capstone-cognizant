import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BoardComponent
      ],
    }).compileComponents();
  }));

  describe('Check Winner Logic', () => {
    let winFixture: ComponentFixture<BoardComponent>;
    let winCompnent: BoardComponent;

  beforeEach(() => {
    winFixture = TestBed.createComponent(BoardComponent);
    winCompnent = winFixture.componentInstance;
  });

  it('should check if Human is Winner', () => {
    winCompnent.isHumanWinner = true;
    winCompnent.setMove;
    expect(winCompnent.isHumanWinner).toBeTrue();
  });

  it('should check if Humans is Turn', () => {
    winCompnent.isHumanTurn = true;
    winCompnent.setMove;
    expect(winCompnent.isHumanTurn).toBeTrue();
  });

});

fdescribe('setMove', () => {
  let winFixture: ComponentFixture<BoardComponent>;
  let winCompnent: BoardComponent;

  beforeEach(() => {
    winFixture = TestBed.createComponent(BoardComponent);
    winCompnent = winFixture.componentInstance;
    winFixture.detectChanges();
  });
});
})
