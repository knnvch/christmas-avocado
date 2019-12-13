import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        BrowserModule,
        SharedModule
    ]
})
export class HomeModule { }
