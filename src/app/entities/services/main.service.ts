import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IHero } from '../interfaces/Hero.interface';


@Injectable({
  providedIn: 'root',
})

export class MainService {


  constructor(
    private readonly _fb: FormBuilder,
  ) {
  }
  public table: IHero[] = [
    { name: 'Человек-Паук', level: 10, power: 5, ability: ['"паучье" чутье', 'ловкость']},
    { name: 'Железный Человек',  level: 10, power: 8, ability: ['гений', 'миллиардер', 'филантроп']},
    { name: 'Халк',  level: 9, power: 10, ability: ['физическая сила', 'исцеление']},
  ];

  /**
   * Функция создания формгруппы для поиска
   * @return {FormGroup}
   * @public
   */
  public search(): FormGroup {
    return this._fb.group({
      name: new FormControl(),
      ability: new FormControl(),
      min: new FormControl(),
      max: new FormControl(),
      sort: new FormControl(),
    })
  };

  /**
   * Функция создания формгруппы для добавления героя
   * @return {FormGroup}
   * @public
   */
  public addData(): FormGroup {
    return this._fb.group({
      name: new FormControl('', [Validators.pattern(/[a-zA-Zа-яёА-ЯЁ]/), Validators.required]),
      power: new FormControl('', [Validators.pattern(/[0-9]/), Validators.required]),
      ability: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.pattern(/[0-9]/), Validators.required]),
    })
  };

  /**
   * Функция создания формгруппы для добавления способности
   * @return {FormGroup}
   * @public
   */
  public addAbility(): FormGroup {
    return this._fb.group({
      ability: new FormControl('', [Validators.pattern(/[a-zA-Zа-яёА-ЯЁ]/), Validators.required]),
    })
  };

 /**
  * Функция добавления героя в общий список
  * @param {any} result - массив с героем
  * @return {void}
  * @public
  */
  public addToData(result: any): void {
    this.table.push(result);
  };

  /**
  * Функция удаления героя из общего списка
  * @param {number} rowIndex - номер героя
  * @return {void}
  * @public
  */
  public removeData(rowIndex: number): void {
    this.table.splice(rowIndex, 1);
  }

}
