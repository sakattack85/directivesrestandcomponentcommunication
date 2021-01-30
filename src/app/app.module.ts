import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './child/grandchild/grandchild.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    ChildComponent,
    GrandchildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
