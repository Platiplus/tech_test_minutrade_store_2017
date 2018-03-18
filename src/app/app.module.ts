import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./app.routes";
import { LoginComponent } from './views/login/login.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth-guard.service';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MetaModule } from '@ngx-meta/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    ProductDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot(),
    MetaModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
