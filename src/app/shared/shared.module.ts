import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { TitleComponent } from './components/title/title.component';

const components = [
  CardComponent,
  TitleComponent
];

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
