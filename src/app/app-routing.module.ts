import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'carros-importados',
    loadChildren: () => import('./carros-importados/carros-importados.module').then( m => m.CarrosImportadosPageModule)
  },
  {
    path: 'carros-nacionais',
    loadChildren: () => import('./carros-nacionais/carros-nacionais.module').then( m => m.CarrosNacionaisPageModule)
  },
  {
    path: 'motos-harley',
    loadChildren: () => import('./motos-harley/motos-harley.module').then( m => m.MotosHarleyPageModule)
  },
  {
    path: 'motos-yamaha',
    loadChildren: () => import('./motos-yamaha/motos-yamaha.module').then( m => m.MotosYamahaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
