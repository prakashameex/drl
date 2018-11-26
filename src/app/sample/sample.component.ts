import { Component, OnInit } from '@angular/core';
import { DrlService, PeriodicElement } from '../drl.service';
//import {REMOVE_OPTIONS_CONFIG, CURRENT_OPTIONS_CONFIG, ADD_OPTIONS_CONFIG} from './dynamicOptions.config';
const DEFAULT_DROPDOWN_CONFIG: any = {
	highlight: false,
	create: false,
	persist: true,
	plugins: ['dropdown_direction', 'remove_button'],
	dropdownDirection: 'down'
};


const SingleSelectConfig: any = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	plugins: ['remove_button'],
	maxItems: 1
});
const CURRENT_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});

const REMOVE_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});

const ADD_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent  implements OnInit {
  ExampleValues_Frameworks:any;
  currentOptions: any;
	currentOptionsConfig = CURRENT_OPTIONS_CONFIG;
	value: string[] = [];

	removeOptions: any = this.currentOptions;
	removeOptionsConfig = REMOVE_OPTIONS_CONFIG;
	removeOptionsValue: string[];

	addOptions: any = [];
	addOptionsConfig = ADD_OPTIONS_CONFIG;
	addOptionsValue: string[];

	constructor(private drl: DrlService) {
    this.drl.getassortment().subscribe(con => {
      this.ExampleValues_Frameworks=con;   
      console.log(con); 
       });
	}

	ngOnInit(): void {
	//	this.currentOptions = this.ExampleValues_Frameworks.slice();
	//	this.refreshRemoveAndAddOptions();
	}

	// removeSelectedOption() {
	// 	this.currentOptions = differenceWith(this.currentOptions, this.removeOptionsValue, (oldValue: any, selectedValue: any) => {
	// 		return oldValue[this.currentOptionsConfig.valueField] === selectedValue;
	// 	});
	// 	this.refreshRemoveAndAddOptions();
	// }

	// addSelectedOptions() {
	// 	if (this.addOptionsValue && this.addOptionsValue.length > 0) {
	// 		const optionsToAdd = intersectionWith(this.addOptions, this.addOptionsValue, (option: any, value: any) => {
	// 			return option[this.addOptionsConfig.valueField] === value;
	// 		});
	// 		if (optionsToAdd && optionsToAdd.length > 0) {
	// 			optionsToAdd.forEach((option: any) => {
	// 				this.currentOptions.push(option);
	// 			});
	// 		}
	// 		this.refreshRemoveAndAddOptions();
	// 	}
	// }

	// refreshRemoveAndAddOptions() {
	// 	this.removeOptions = this.currentOptions;

	// 	this.addOptions = differenceWith(this.ExampleValues_Frameworks, this.removeOptions, (allValue: any, removedValue: any) => {
	// 		return allValue[this.currentOptionsConfig.valueField] === removedValue[this.removeOptionsConfig.valueField];
	// 	});
	// }


}
