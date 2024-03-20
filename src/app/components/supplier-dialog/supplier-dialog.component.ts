import {Component, Inject, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {CategoryService} from "../category.service";
import {SupplierService} from "../supplier.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-supplier-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatDialogClose,
    NgForOf
  ],
  templateUrl: './supplier-dialog.component.html',
  styleUrl: './supplier-dialog.component.css'
})
export class SupplierDialogComponent {

  service = inject(SupplierService);

  supplier: any = {
    "name": "",
    "contactPerson": "",
    "email": "",
    "phone": "",
    "address": "",
    "website": "",
    "lastContactDate": "",
    "isActive": true
  }

  fields = [
    {
      "name": "name",
      "label": "Name",
      "type": "text"
    },
    {
      "name": "contactPerson",
      "label": "Contact Person",
      "type": "text"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "text"
    },
    {
      "name": "address",
      "label": "Address",
      "type": "text"
    },
    {
      "name": "website",
      "label": "Website",
      "type": "text"
    },
    {
      "name": "lastContactDate",
      "label": "Last Contact Date",
      "type": "date"
    }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public id: any) {
  }

  ngOnInit() {
    if (this.id) {
      this.service.getById(this.id).subscribe((result: any) => {
        this.supplier = result;
      });
    }
  }


  createSupplier() {
    if (this.id) {
      this.service.update(this.supplier).subscribe(result => {
        alert("Supplier Updated")
      });
      return;
    }
    this.service.create(this.supplier).subscribe(result => {
        alert("Supplier Saved")
      }
    );
  }

}
