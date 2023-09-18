import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	cardTitle: string = '';
	cardImage: string = '';
	cardText: string = '';
	cardDate: string = '';
	private id: string | null = '0';

	constructor(private route: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = value.get('id')
		)

		this.setValuesToComponent(this.id)
	}

	setValuesToComponent(id: string | null) {
		const result = dataFake.filter(article => article.id == id)[0]

		this.cardTitle = result.title
		this.cardImage = result.image
		this.cardText = result.text
	}
}
