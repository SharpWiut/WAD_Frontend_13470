import { Component } from '@angular/core';
import {MatRipple} from "@angular/material/core";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {SparePartService} from "../spare-part.service";
import {MatDialog} from "@angular/material/dialog";
import {SparepartDialogComponent} from "../sparepart-dialog/sparepart-dialog.component";

@Component({
  selector: 'app-spareparts',
  standalone: true,
  imports: [
    MatRipple,
    NgForOf,
    NgIf
  ],
  templateUrl: './spareparts.component.html',
  styleUrl: './spareparts.component.css'
})
export class SparepartsComponent {

  loading = false;

  spareParts: any = [];

  constructor(public dialog: MatDialog,
              public service: SparePartService,
              public router: Router) {
  }

  ngOnInit() {
    this.loadSpareParts();
  }

  createSparePart() {
    const dialog =this.dialog.open(SparepartDialogComponent);
    dialog.afterClosed().subscribe(result => {
      this.loadSpareParts();
    });
  }

  loadSpareParts() {
    this.loading = true;
    this.service.getAll().subscribe((result) => {
      this.spareParts = result;
      this.loading = false;
    });
  }

  updateSupplier(id: any) {
    const dialog = this.dialog.open(SparepartDialogComponent, {
      data: id
    });
    dialog.afterClosed().subscribe(result => {
      this.loadSpareParts();
    });
  }

  deleteSupplier(id: any) {
    if(confirm("Are you sure you want to delete this spare part?")){
      this.service.delete(id).subscribe(result => {
        this.loadSpareParts();
      });
    }

  }
}
