import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export class Pro {
	project1: string;
	project2: string;
	project3: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	pro: Pro = {
		project1 : '',
		project2 : '',
		project3 : ''
	}

  vProjectOne   : any;
  vProjectTwo   : any;
  vProjectThree : any;

  projects: any = [];
  project: string;


  constructor() {
    this.projects = ["project 1", "project 2", "project 3", "project 4"];
  }

  projectOne($event){
    let vProjectOne = $event;
    console.log(vProjectOne);

  }

  projectTwo ($event){
    let vProjectTwo = $event;
    let vOne = this.pro.project1;
    if(vProjectTwo == vOne){
      alert('Esse projeto já foi escolhido, por favor selecione outro');
      this.pro.project2 = false;
    }
  }

  projectThree ($event){
    let vProjectThree = $event;
    let vOne = this.pro.project1;
    let vTwo = this.pro.project2;
    if(vProjectThree === vOne || 
       vProjectThree === vTwo || 
       vOne === vTwo){
      alert('Esse projeto já foi escolhido, por favor selecione outro');
      this.pro.project3 = false;
    }
  }
  reset() {
    this.project = null;
  }
}
