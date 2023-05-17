import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';
import { BasketModule } from './basket/basket.module';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { OrdersModule } from './orders/orders.module';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CatalogModule,
    BasketModule,
    OrdersModule,
    // StoreModule.forRoot({}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: !isDevMode(),
    //   autoPause: true,
    //   trace: false,
    //   traceLimit: 75,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
