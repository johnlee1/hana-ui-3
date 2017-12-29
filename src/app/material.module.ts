import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatListModule, MatSidenavModule],
  exports: [MatCardModule, MatListModule, MatSidenavModule],
})
export class MaterialModule { }