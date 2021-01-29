import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { MyComponent4Component } from './my-component4/my-component4.component';
import { MyComponent5Component } from './my-component5/my-component5.component';
@NgModule({
  declarations: [					
    AppComponent,
      MyComponent1Component,
      MyComponent2Component,
      MyComponent3Component,
      MyComponent4Component,
      MyComponent5Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
