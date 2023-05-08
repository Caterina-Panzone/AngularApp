import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PagerComponent],
  exports: [PagerComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class SharedModule {}
