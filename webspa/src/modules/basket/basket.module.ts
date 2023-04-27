import { NgModule } from '@angular/core';
import { BasketComponent } from './basket.component';
import { BasketStatusComponent } from './basket-status/basket-status.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BasketComponent, BasketStatusComponent],
  imports: [SharedModule, CommonModule, RouterModule],
  exports: [BasketStatusComponent],
})
export class BasketModule {}
