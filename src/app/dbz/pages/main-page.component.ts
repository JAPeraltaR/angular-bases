import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.module.service';
import { Character } from '../interfaces/character.interface';

;

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {
  }
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  deleteCharacterById(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}
