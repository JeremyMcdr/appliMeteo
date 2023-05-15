import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import {LowerUpperPipeComponentComponent} from './lower-upper-pipe-component/lower-upper-pipe-component.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, LowerUpperPipeComponentComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide : RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide : LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
