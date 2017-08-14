import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Component Primeng
import {InputTextModule, ButtonModule, PanelModule, MenubarModule,MenuItem, DropdownModule, OrderListModule, CheckboxModule, TabViewModule, AccordionModule, SharedModule} from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { DigitalPrefixComponent } from './digital-prefix/digital-prefix.component';
import { ChannelNotificationComponent } from './channel-notification/channel-notification.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderIconMenuComponent } from './header-icon-menu/header-icon-menu.component';
import { SubmissionsTabsComponent } from './submissions-tabs/submissions-tabs.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,    
    DigitalPrefixComponent,
    ChannelNotificationComponent,
    SearchbarComponent,
    HeaderIconMenuComponent,
    SubmissionsTabsComponent,
    ActionBarComponent,
    
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
    TabViewModule,
    AccordionModule,
    SharedModule,
    CheckboxModule,
    OrderListModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
