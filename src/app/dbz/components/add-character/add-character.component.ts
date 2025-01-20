import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> =  new EventEmitter();

  public character : Character = {
    id: uid(),
    name: '',
    power: 0
  };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.character);
    console.log(this.character);

    this.character = {id: uid(), name:'' , power: 0}
  }
}
