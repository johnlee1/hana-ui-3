import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatListModule, MatSidenavModule],
  exports: [MatListModule, MatSidenavModule],
})
export class MaterialModule { }