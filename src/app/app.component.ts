import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly _router: Router
  ) {
  }

  /**
   * Роутинг по страницам
   * @param {string} page - название страницы
   * @return {void}
   * @public
   */
  public routeToSelectedPage(page: string): void {
    if (page === 'main') {
      this._router.navigate(['main']);
    } else {
      this._router.navigate(['table']);
    }
  }
}
