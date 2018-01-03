import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatListModule, MatSidenavModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatListModule, MatSidenavModule, MatTooltipModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatListModule, MatSidenavModule, MatTooltipModule],
})
export class MaterialModule { }