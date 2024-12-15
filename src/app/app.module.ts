import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/components/header/header.component';
import { SideMenuComponent } from './side-menu/components/side-menu/side-menu.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { NewsletterComponent } from './newsletter/components/newsletter/newsletter.component';
import { BrandCollabsComponent } from './brand-collabs/components/brand-collabs/brand-collabs.component';
import { TopVentasComponent } from './top-ventas/components/top-ventas/top-ventas.component';
import { SwiperModule } from 'swiper/angular';
//import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { CartMenuComponent } from './cart-menu/components/cart-menu/cart-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LandingPageComponent,
    FooterComponent,
    NewsletterComponent,
    BrandCollabsComponent,
    TopVentasComponent,
    //LoginComponent,
    AuthComponent,    
    CartMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
