import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    MenuToggleComponent,
    LogoutButtonComponent
  ],
  imports: [IonicModule],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MenuToggleComponent,
    LogoutButtonComponent
  ]
})
export class SharedModule {}
