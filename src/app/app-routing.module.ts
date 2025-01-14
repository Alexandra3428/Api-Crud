import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'product-create', loadChildren: () => import('./product-create/product-create.module').then(m => m.ProductCreatePageModule) },
  { path: 'product-update/:id', loadChildren: () => import('./product-update/product-update.module').then(m => m.ProductUpdatePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
