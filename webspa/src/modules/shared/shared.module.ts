import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './services/configuration.service';
import { BasketWrapperService } from './services/basket.wrapper.service';
import { SecurityService } from './services/security.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [PagerComponent],
  exports: [PagerComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [ConfigurationService, BasketWrapperService, SecurityService, HttpService]
})
export class SharedModule { }
