import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
<<<<<<< HEAD
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion.component';
import { HomeComponent } from './app/core/home/home.component';
import { NotfoundComponent } from './app/core/notfound/notfound.component';
=======
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
>>>>>>> a6fbc7103ec2be807ee01f1cbc07efe45191bf8c

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    ListSuggestionComponent,
    HomeComponent,
    NotfoundComponent
=======
    ListSuggestionComponent
>>>>>>> a6fbc7103ec2be807ee01f1cbc07efe45191bf8c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
