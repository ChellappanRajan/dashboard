import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Routes,RouterModule } from "@angular/router";
//Import NgRx DevTollModules
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "./../environments/environment";
import { StoreModule } from "@ngrx/store";

//FireBase Module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

//FormsModule

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//AuthGurad

import { HttpModule } from '@angular/http';
// import { AdminModule } from "./admin/admin.module";


const routes: Routes =[{
  path:'admin',  loadChildren: './admin/admin.module#AdminModule'
}]


@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
