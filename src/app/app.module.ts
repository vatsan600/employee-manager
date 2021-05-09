import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeServiceService } from './service/employee-service.service';
import { CardComponent } from './components/card/card.component';
import { TopBarComponent } from './components/card/top-bar/top-bar.component';
import { BriefComponent } from './components/brief/brief.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TopBarComponent,
    BriefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
