import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {AddCategoryComponent} from "../add-category/add-category.component";
import {CategoryService} from "../category.service";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    MatAnchor,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  categories: any = [];

  categoryService = inject(CategoryService);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.loadAllCategories();
  }

  loadAllCategories(){
    this.categoryService.getAll().subscribe((result) => {
      this.categories = result;
    });
  }

  openAddMenu(){
    const dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.loadAllCategories();
    });
  }

  router =inject(Router)

  routerNavigate(url: string){
    this.router.navigateByUrl(url)
  }
}
