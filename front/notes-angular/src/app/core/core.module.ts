import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [
    PageLayoutComponent
  ],
  providers: []
})
export class CoreModule { }
