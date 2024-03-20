import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {SparePartService} from "../spare-part.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {SupplierService} from "../supplier.service";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-sparepart-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    NgForOf,
    ReactiveFormsModule,
    MatDialogClose,
    FormsModule,
    MatSelect,
    MatOption,
    MatLabel,
    NgIf
  ],
  templateUrl: './sparepart-dialog.component.html',
  styleUrl: './sparepart-dialog.component.css'
})
export class SparepartDialogComponent {

  sparePart: any = {
    "name": "",
    "description": "",
    "price": null,
    "quantity": null,
    "categoryId": null,
    "supplierId": null,
    "manufacturer": "",
    "model": "",
    "serialNumber": "",
    "notes": ""
  };

  fields: any = [
    {
      "name": "Name",
      "type": "text",
      "placeholder": "Name",
      "value": "name"
    },
    {
      "name": "Description",
      "type": "text",
      "placeholder": "Description",
      "value": "description"
    },
    {
      "name": "Price",
      "type": "number",
      "placeholder": "Price",
      "value": "price"
    },
    {
      "name": "Quantity",
      "type": "number",
      "placeholder": "Quantity",
      "value": "quantity"
    },
    {
      "name": "Manufacturer",
      "type": "text",
      "placeholder": "Manufacturer",
      "value": "manufacturer"
    }
  ];
  secondFields: any = [
    {
      "name": "Model",
      "type": "text",
      "placeholder": "Model",
      "value": "model"
    },
    {
      "name": "Serial Number",
      "type": "text",
      "placeholder": "Serial Number",
      "value": "serialNumber"
    },
    {
      "name": "Notes",
      "type": "text",
      "placeholder": "Notes",
      "value": "notes"
    }
  ];
  suppliers: any = [];
  categories: any;
  loading: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public id: any,
              public supplierService: SupplierService,
              public categoryService: CategoryService,
              public service: SparePartService) {
  }

  ngOnInit() {

    this.loading = true;

    this.supplierService.getAll().subscribe((result: any) => {
      this.suppliers = result;
    });

    this.categoryService.getAll().subscribe((result: any) => {
      this.categories = result;
    });

    if (this.id) {
      this.service.getById(this.id).subscribe((result: any) => {
        this.sparePart = result;
        this.sparePart["categoryId"] = result["category"]["id"];
        this.sparePart["supplierId"] = result["supplier"]["id"];
        this.sparePart["id"] = this.id;
      });
    }

    this.loading = false;

  }

  createSupplier() {
    if (this.id) {
      this.service.update(this.sparePart).subscribe((result: any) => {
        console.log(result);
      });
    } else {
      this.service.create(this.sparePart).subscribe((result: any) => {
        console.log(result);
      });
    }
  }
}
