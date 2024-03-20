import {Component, inject} from '@angular/core';
import {CategoryService} from "../category.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatRipple} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {AddCategoryComponent} from "../add-category/add-category.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCategoryComponent} from "../delete-category/delete-category.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatRipple,
    MatIcon
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  service = inject(CategoryService)

  loading = true;

  categories: any = [];

  constructor(public dialog: MatDialog) {
    this.loadCategories();
  }

  loadCategories(){
    this.loading = true;
    this.service.getAll().subscribe((data: any) => {
      this.categories = data;
      this.loading = false;
    });
  }

  editCategory(id: any){
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCategories();
    });
  }

  deleteCategory(id: any){
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCategories();
    });
  }

  addCategory(){
    const dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.loadCategories();
    });
  }

}
