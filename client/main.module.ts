import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import RootComponent from './root.component';
import DynamicComponent from "./dynamic.component";

@NgModule({
	declarations: [
		RootComponent,
		DynamicComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [
		RootComponent,
		DynamicComponent
	]
})
export default class MainModule
{
}