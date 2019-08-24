import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//commponent from other ts file
import { AppComponent,doubleComponent,ListComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { doubleclass } from './pipe';
import { HighlightDirective } from './appHighLight';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],//屬於此module的component,pipe,directive
  declarations: [ AppComponent, HelloComponent,doubleComponent,doubleclass,HighlightDirective,ListComponent ],//與樣板有關的component(也就是上面引用的後面兩個))
  bootstrap:    [ AppComponent,doubleComponent,ListComponent],//一開始render網頁會用到的就放這，也就是有selector的那些


})
export class AppModule { }
