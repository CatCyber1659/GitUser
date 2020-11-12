import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CerealsComponent } from './cereals/cereals.component';
import { BeansComponent } from './beans/beans.component';
import { NutsSeedsComponent } from './nuts-seeds/nuts-seeds.component';
import { SpicesComponent } from './spices/spices.component';
import { NewsComponent } from './news/news.component';
import { PolicyFaqComponent } from './policy-faq/policy-faq.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OilComponent } from './news/oil/oil.component';
import { VerganComponent } from './news/vergan/vergan.component';
import { YogaComponent } from './news/yoga/yoga.component';
import { KernelComponent } from './news/kernel/kernel.component';


const Homeroutes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'beans',
    component:BeansComponent
  },
  {
    path: 'cereals',
    component:CerealsComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'fruits',
    component:FruitsComponent
  },
  {
    path: 'news',
    component:NewsComponent
  },
  {
    path: 'nuts-seeds',
    component:NutsSeedsComponent
  },
  {
    path: 'policy-faq',
    component:PolicyFaqComponent
  },
  {
    path: 'spices',
    component:SpicesComponent
  },
  {
    path: 'vegetables',
    component:VegetablesComponent
  },
  {
    path: 'kernel',
    component:KernelComponent
  },
  {
    path: 'oil',
    component:OilComponent
  },
  {
    path: 'vergan',
    component:VerganComponent
  },
  {
    path: 'yoga',
    component:YogaComponent
  },

];
@NgModule({
  declarations: [VegetablesComponent, FruitsComponent, ContactComponent, CerealsComponent, BeansComponent, NutsSeedsComponent, SpicesComponent, NewsComponent, PolicyFaqComponent, AboutComponent, ContactComponent, OilComponent, VerganComponent, YogaComponent, KernelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Homeroutes)
  ]
})
export class PagesModule { }
