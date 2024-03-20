import {Component, Inject, inject} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CategoryService} from "../category.service";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    MatCard,
    FormsModule,
    MatInput,
    MatFormField,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

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


  createCategory() {
    if (this.id) {
      this.service.update(this.categoryModel).subscribe(result => {
        alert("Category Updated")
      });
      return;
    }
    this.service.create(this.categoryModel).subscribe(result => {
        alert("Category Saved")
      }
    );
  }
}
