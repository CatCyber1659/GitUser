import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { paths } from './app-path';
// export const paths = {
//   home: 'home',
//   shop: 'shop',
//   contact: 'contact',
//   cart: 'cart',
//   blog: 'blog',
//   checkout: 'checkout',
//   confirmation: 'confirmation',
//   elements: 'elements',
//   login: 'login',
//   singleBlog: 'single-blog/:id',
//   singleProduct: 'single-product/:id',
//   tracking: 'tracking',
// };
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  // {
  //   path: paths.home,
  //   component: HomeComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
