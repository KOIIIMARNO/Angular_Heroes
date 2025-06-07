import { Routes } from "@angular/router";
import { MainComponent } from "../components/main/main.component";
import { TableComponent } from "../components/table/table.component";

 export const routes: Routes = [
    {
      path: 'main',
      component: MainComponent
    },
    {
      path: 'table',
      component: TableComponent
    }
  ];