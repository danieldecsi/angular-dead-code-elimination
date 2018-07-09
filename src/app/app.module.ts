import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TestMockService } from './test-mock.service';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    environment.mock ? TestMockService : TestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
