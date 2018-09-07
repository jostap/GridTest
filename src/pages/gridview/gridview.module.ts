import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridviewPage } from './gridview';

@NgModule({
  declarations: [
    GridviewPage,
  ],
  imports: [
    IonicPageModule.forChild(GridviewPage),
  ],
})
export class GridviewPageModule {}
