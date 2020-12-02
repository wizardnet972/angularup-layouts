import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, layout } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  layout('frontend', [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
  ]),
  layout('auth', [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
      path: 'auth',
      loadChildren: () =>
        import('./auth/auth.module').then((m) => m.AuthModule),
    },
  ]),
  layout('fullscreen', [
    { path: '', redirectTo: '/fullpage', pathMatch: 'full' },
    {
      path: 'reports',
      loadChildren: () =>
        import('./reports/reports.module').then((m) => m.ReportsModule),
    },
  ]),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
