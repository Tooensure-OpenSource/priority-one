import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeatureListComponent } from './components/feature/feature-list/feature-list.component';
import { FeatureItemComponent } from './components/feature/feature-list/feature-item/feature-item.component';
import { HomeComponent } from './pages/home/home.component';
import { FeatureService } from './components/feature/feature.service';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MasterComponent } from './shared/components/layout/master/master.component';
import { NavigationComponent } from './shared/components/layout/master/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { BusinessComponent } from './components/business/business.component';
import { BusinessListComponent } from './components/business/business-list/business-list.component';
import { BusinessItemComponent } from './components/business/business-list/business-item/business-item.component';
import { ContactService } from './services/contact/contact.service';
import { PhoneNumberService } from './services/contact/numbers.service';
import { EmailService } from './services/contact/email.service';
import { BusinessService } from './components/business/business.service';
import { NavComponent } from './shared/components/nav/nav.component';
import { NavService } from './shared/components/nav/nav.service';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { dropdownService } from './shared/components/dropdown/dropdown.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact/contact-list/contact-item/contact-item.component';
import { DropdownItemComponent } from './shared/components/dropdown/dropdown-list/dropdown-item/dropdown-item.component'
import { DropdownListComponent } from './shared/components/dropdown/dropdown-list/dropdown-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    FeatureListComponent,
    FeatureItemComponent,
    HomeComponent,
    TopNavComponent,
    NavMenuComponent,
    MasterComponent,
    NavigationComponent,
    ButtonComponent,
    BusinessComponent,
    BusinessListComponent,
    BusinessItemComponent,
    NavComponent,
    DropdownComponent,
    ContactComponent,
    ContactListComponent,
    ContactItemComponent,
    DropdownListComponent,
    DropdownItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    BusinessService,

    NavService,
    ContactService,
    PhoneNumberService,
    EmailService,
    FeatureService,
    dropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
