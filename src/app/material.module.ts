import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule,
        MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule,
            MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTooltipModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule,
            MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTooltipModule],
})
export class MaterialModule { }
