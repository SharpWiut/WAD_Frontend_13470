import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {SuppliersComponent} from "./components/suppliers/suppliers.component";
import {SparepartsComponent} from "./components/spareparts/spareparts.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'spareparts',
    component: SparepartsComponent
  }
];
