import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './child/grandchild/grandchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    ChildComponent,
    GrandchildComponent,
    SecondchildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
