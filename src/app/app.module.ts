import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { footerComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutusComponent } from './containers/aboutus/aboutus.component';
import { HeaderComponent } from './containers/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { WhyplannerComponent } from './containers/whyplanner/whyplanner.component';
import { FooterComponent } from './containers/Footer/Footer.component';
import { SharedModule } from './constants/shared.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptorInterceptor } from './constants/interceptors/jwt-interceptor.interceptor';
import { jwtUnAuthorizedInterceptor } from './constants/interceptors/jwt-un-authorized.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    footerComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    SearchbarComponent,
    WhyplannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") || '{}').token : null )
        }
      }
    })
  ],
  // exports: [NavbarComponent, HomeComponent, AboutusComponent],
  providers: [
    provideHttpClient(
      withInterceptors([jwtInterceptorInterceptor, jwtUnAuthorizedInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
