import { Component } from '@angular/core';
import {SupplierService} from "../supplier.service";
import {MatDialog} from "@angular/material/dialog";
import {SupplierDialogComponent} from "../supplier-dialog/supplier-dialog.component";
import {MatRipple} from "@angular/material/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [
    MatRipple,
    NgForOf,
    NgIf
  ],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent {
  loading = false;
  suppliers: any = [];

  constructor( public matDialog: MatDialog, public service: SupplierService) {
  }

  ngOnInit() {
    this.loadAllSuppliers();
  }

  createSupplier() {
    const dialog = this.matDialog.open(SupplierDialogComponent, {
      data: null
    });

    dialog.afterClosed().subscribe(result => {
      this.loadAllSuppliers();
    });
  }

  updateSupplier(supplier: any) {
    const dialog = this.matDialog.open(SupplierDialogComponent, {
      data: supplier
    });

    dialog.afterClosed().subscribe(result => {
      this.loadAllSuppliers();
    });
  }

  deleteSupplier(supplier: any) {
    if(confirm("Are you sure you want to delete this supplier?")){
      this.service.delete(supplier).subscribe(result => {
        this.loadAllSuppliers();
      });
    }
  }

  private loadAllSuppliers() {
    this.loading = true;
    this.service.getAll().subscribe((result) => {
      this.suppliers = result;
      this.loading = false;
    });
  }
}
