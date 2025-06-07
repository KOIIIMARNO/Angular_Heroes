/**
*Интерфейс информации о герое
* @param {string} name - имя
* @param {number} power - сила
* @param {Array<string>} ability - способность
* @param {number} level - уровень
 */
export interface IHero {
    name: string;
    power: number;
    ability: Array<string>;
    level: number;
  }