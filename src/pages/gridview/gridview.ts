import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-gridview',
  templateUrl: 'gridview.html',
})
export class GridviewPage {

  gridForm: FormGroup;
  r: number;
  c: number;
  grid: Array<Array<string>>;
  row: Array<string>;
  position: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder
    //private formGroup: FormGroup
  ) {

    this.gridForm = this.formBuilder.group({
      name: [''],
      gridcheck: false,
      rows: [''],
      cols: ['']
    });
  }

  ionViewDidLoad() {
    this.grid = new Array;
    for (let i = 0; i < this.r; i++) {

      this.row = new Array;
      for (let j = 0; j < this.c; j++) {
        this.position = String.fromCharCode(j + 65) + (i + 1).toString();
        this.row.push(this.position);
      }
      this.grid.push(this.row);

    }
    console.log("----------", this.grid);
  }

  onKeyRows(event: any) {
    console.log("----------", this.gridForm.value.rows);
    this.r = this.gridForm.value.rows;
    this.showBox();
  }

  onKeyColumns(event: any) {
    console.log("----------", this.gridForm.value.cols);
    this.c = this.gridForm.value.cols;
    this.showBox();
  }

  showBox() {
    this.grid = new Array;
    for (let i = 0; i < this.r; i++) {

      this.row = new Array;
      for (let j = 0; j < this.c; j++) {
        this.position = String.fromCharCode(j + 65) + (i + 1).toString();
        this.row.push(this.position);
      }
      this.grid.push(this.row);

    }
    console.log("----------", this.grid);
  }

}
