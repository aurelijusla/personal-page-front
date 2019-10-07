import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
} from '@angular/material';

@NgModule({
    imports: [
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
    ],
  })
  export class MaterialModule { }
  

