import {Component, Inject, inject} from '@angular/core';
import {CategoryService} from "../category.service";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [
    MatDialogClose,
    MatButton
  ],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})
export class DeleteCategoryComponent {

  service = inject(CategoryService);

  categoryModel: any = {
    name: ""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public id: any) {
  }

  ngOnInit() {
    if(this.id){
      this.service.getById(this.id).subscribe((result: any) => {
        this.categoryModel = result;
      });
    }
  }

  deleteCategory() {
    if (this.id) {
      this.service.delete(this.id).subscribe(result => {
        alert("Category Deleted")
      });
    }
  }

}
