import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MyLibComponent, HeaderComponent, CardComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
