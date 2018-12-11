
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path:'', component:DashboardComponent }
]

@NgModule({
    declarations: [SigninComponent, DashboardComponent],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [ SigninComponent,RouterModule],
    providers: [],
})
export class AdminModule {}