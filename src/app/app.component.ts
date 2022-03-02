import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { RestManager } from './services/rest.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private restManager: RestManager) {}

	ngOnInit() { }

	onGeneratePdfReport() {
		this.restManager.restPdf().subscribe((response) => {
			console.log("response--->", response);
			saveAs(response, "wellsfargoList");

		});
	}

	onGenerateExcelReport() {
		this.restManager.restExcel().subscribe((response) => {
			console.log("response--->", response);
			saveAs(response, "wellsfargoList");
		})
	}
}
