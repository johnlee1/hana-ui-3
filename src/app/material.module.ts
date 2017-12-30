import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatListModule, MatSidenavModule],
  exports: [MatButtonModule, MatCardModule, MatListModule, MatSidenavModule],
})
export class MaterialModule { }