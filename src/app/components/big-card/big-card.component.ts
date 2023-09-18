import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

	@Input()
	cardImage: string = '';
	@Input()
	cardDate: string = '';
	@Input()
	cardTitle: string = '';
	@Input()
	cardText: string = '';
	@Input()
	id: string = '0';

	constructor() {

	}

	ngOnInit(): void {
	}

}
