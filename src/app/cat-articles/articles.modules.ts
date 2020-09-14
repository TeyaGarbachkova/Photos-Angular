import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CatArticlesComponent } from './articles/cat-articles.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ListComponent, CatArticlesComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [ListComponent, CatArticlesComponent]
})
export class ArticlesModule { }