import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent {
	@Input()
	cardImage: string = '';
	@Input()
	cardDate: string = '';
	@Input()
	cardTitle: string = '';
}
