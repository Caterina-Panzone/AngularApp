import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagerComponent],
  exports: [PagerComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
