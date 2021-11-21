import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewerComponent } from './components/previewer/previewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

@NgModule({
  declarations: [
    AppComponent,
    PreviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
	DialogModule, 
	WindowModule,
	ButtonsModule,
	ScrollViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
