import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IHero } from '../../interfaces/Hero.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public nameSearch: FormGroup;
  public panelOpenState = false;
  public abilities: string[] = new Array('"паучье" чутье', 'ловкость', 'гений', 'миллиардер', 'филантроп', 'физическая сила', 'исцеление');
  public table: IHero[];
  public addData: FormGroup;
  public addAbility: FormGroup;
  dataSource: any;

  constructor(private readonly _main: MainService,
  ) {
    this.addData = this._main.addData();
    this.addAbility = this._main.addAbility();
    this.table = this._main.table;
    this.nameSearch = this._main.search();
    console.log(this.nameSearch.value);
  }


  public addAbilityTo(): void {
    if (this.addAbility.valid) {

      this.abilities.push(this.addAbility.value.ability!);
      this.addAbility.reset();
    }
  }

  /**
   * Добавление героя
   * @return {void}
   * @public
   */
  public addHero(): void {
    if (this.addData.valid) {
      console.log(this.addData.value)
      this._main.addToData(this.addData.value);
      this.addData.reset();
    }
  }


  /**
   * name
   */
  public getIndex(ins: any):void {
    this._main.removeData(this.table.indexOf(ins));

  }
}
