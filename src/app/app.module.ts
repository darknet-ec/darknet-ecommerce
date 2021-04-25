import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceModule } from './ecommerce/ecommerce.module';

import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    EcommerceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
