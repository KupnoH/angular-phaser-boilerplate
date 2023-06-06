import { gameScenes } from '../scenes';
import Phaser from 'phaser';

// TODO:
//  - probably get all settings from a separate file?
export const config = {
  type: Phaser.AUTO,
  height: 640,
  width: 800,
  scene: gameScenes,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
};
