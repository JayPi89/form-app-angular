import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[] = [];

  constructor() { }

  generateCards(numCards: number) {
    this.cards = [];
    for (let i = 0; i < numCards; i++) {
      this.cards.push({ id: i, marked: false, selected: false });
    }
    return this.cards;
  }

  getRandomCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards[randomIndex];
  }

  runSimulation(numCards: number, numRuns: number): { successProbabilityWithSwitch: number, successProbability: number } {
    let successCountWithoutMontyHall = 0;
    let successCountWithMontyHall = 0;

    for (let i = 0; i < numRuns; i++) {
      this.generateCards(numCards);

      const selectedCard = this.getRandomCard();
      selectedCard.selected = true;

      const winningCard = this.getRandomCard();
      winningCard.marked = true;

      let remainingCards = this.cards.filter(c => !c.selected);
      let remainingWinningCards = remainingCards.filter(c => c.marked);

      if (remainingCards.length === 1) {
        remainingCards[0].selected = true;
      } else {
        let revealCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
        revealCard.selected = true;
        remainingCards = remainingCards.filter(c => !c.selected && !c.marked);
      }

      let finalSelectedCardWithoutMontyHall = selectedCard;
      let finalSelectedCardWithMontyHall = remainingCards[0];

      if (finalSelectedCardWithoutMontyHall === winningCard) {
        successCountWithoutMontyHall++;
      }

      if (finalSelectedCardWithMontyHall === winningCard) {
        successCountWithMontyHall++;
      }
    }

    return {
      successProbabilityWithSwitch: (successCountWithMontyHall / numRuns) * 100,
      successProbability: (successCountWithoutMontyHall / numRuns) * 100
    };
  }

}
