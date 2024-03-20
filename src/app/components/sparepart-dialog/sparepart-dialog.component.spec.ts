import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartDialogComponent } from './sparepart-dialog.component';

describe('SparepartDialogComponent', () => {
  let component: SparepartDialogComponent;
  let fixture: ComponentFixture<SparepartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparepartDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparepartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
