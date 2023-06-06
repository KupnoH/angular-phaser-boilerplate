import { Component } from '@angular/core';
import { config } from './utils/config';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor() {
    new Phaser.Game(config);
  }
}
