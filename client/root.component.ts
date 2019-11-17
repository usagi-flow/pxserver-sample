import { Component } from '@angular/core';

@Component({
	selector: 'root',
	template: `
		<!--The content below is only a placeholder and can be replaced.-->
		<div style="text-align:center">
			<h1>
				Welcome to {{title}}!
			</h1>
		</div>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export default class RootComponent
{
	title = 'px-server';
}
