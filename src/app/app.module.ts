import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Component Primeng
import {InputTextModule, ButtonModule, PanelModule, MenubarModule,MenuItem, DropdownModule, TabViewModule} from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { DigitalPrefixComponent } from './digital-prefix/digital-prefix.component';
import { ChannelNotificationComponent } from './channel-notification/channel-notification.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderIconMenuComponent } from './header-icon-menu/header-icon-menu.component';
import { SubmissionsTabsComponent } from './submissions-tabs/submissions-tabs.component';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    TabsComponent,
    DigitalPrefixComponent,
    ChannelNotificationComponent,
    SearchbarComponent,
    HeaderIconMenuComponent,
    SubmissionsTabsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,    
    InputTextModule,
    ButtonModule,
    PanelModule,   
    MenubarModule,
    DropdownModule,
    TabViewModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
