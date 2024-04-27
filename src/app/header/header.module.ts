import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';

@NgModule({
  declarations: [
    HeaderToolbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    HeaderToolbarComponent
  ]
})
export class HeaderModule { }
