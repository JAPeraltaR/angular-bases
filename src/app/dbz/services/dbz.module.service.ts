import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})

export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(indice: number): void{
  //   this.characters.splice(indice,1);
  // }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
