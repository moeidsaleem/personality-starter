import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MartialPage } from './martial';

@NgModule({
  declarations: [
    MartialPage,
  ],
  imports: [
    IonicPageModule.forChild(MartialPage),
  ],
})
export class MartialPageModule {}
