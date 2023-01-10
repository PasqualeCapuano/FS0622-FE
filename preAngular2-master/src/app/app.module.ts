import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtaComponent } from './components/eta/eta.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
    declarations: [
        AppComponent,
        EtaComponent,
        NewUserComponent,
        UserCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
