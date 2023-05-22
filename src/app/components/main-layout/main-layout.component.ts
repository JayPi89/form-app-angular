import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  numCards: number = 3;
  numRuns: number = 1000;
  simulationComplete: boolean = false;
  successProbability: number = 0;
  successProbabilityWithSwitch: number = 0;
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.generateCards();
  }

  generateCards(): void {
    this.cards = this.cardService.generateCards(this.numCards);
  }

  reset(): void {
    this.simulationComplete = false;
    this.successProbability = 0;
    this.successProbabilityWithSwitch = 0;
    this.generateCards();
  }

  runSimulation(): void {
    let result = this.cardService.runSimulation(this.numCards, this.numRuns);
    this.successProbability = result.successProbability;
    this.successProbabilityWithSwitch = result.successProbabilityWithSwitch;
    this.simulationComplete = true;
  }

}
