import { Component, Injectable, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IHero } from '../../interfaces/Hero.interface';
import { MainService } from '../../services/main.service';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild(MatTable)
  public table?: MatTable<IHero>;

  public displayedColumns: string[] = ['name', 'level', 'power', 'ability', 'delete'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([...this._main.table]);
  constructor(private readonly _main: MainService)
  {}


  /**
   * Добавление героя в таблицу
   * @param {any} ins - Данные о герое
   * @return {void}
   * @public
   */
  public addData(ins: any): void {
    console.log(ins);
    this.dataSource.data.push(ins);
    this.dataSource._updateChangeSubscription();
    this.table?.renderRows();
  }
  /**
   * Удаление героя из таблицы и вызов функции удаления героя из общего списка
   * @param {number} rowIndex - номер строки
   * @return {void}
   * @public 
   */
  public removeData(rowIndex: number): void {
    this.dataSource.data.splice(rowIndex, 1);
    this.dataSource._updateChangeSubscription();
    this.table?.renderRows();
    this._main.removeData(rowIndex);
  }
}
