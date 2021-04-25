import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    TagInputModule,
    FormsModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    AngularMultiSelectModule
  ]
})
export class EcommerceModule { }
