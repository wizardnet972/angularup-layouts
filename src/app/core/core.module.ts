import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FullscreenLayoutComponent } from './layouts/fullscreen-layout/fullscreen-layout.component';
import { MaterialModule } from '../material.module';
import { Route, RouterModule } from '@angular/router';

const layoutComponents = { frontend: FrontendLayoutComponent, auth: AuthLayoutComponent, fullscreen: FullscreenLayoutComponent }

export function layout(name: keyof typeof layoutComponents, children: Route[], ...args: any): Route {
  return {
    path: '',
    component: layoutComponents[name],
    children,
    ...args
  };
}

@NgModule({
  declarations: [ToolbarComponent, DrawerComponent, FrontendLayoutComponent, AuthLayoutComponent, FullscreenLayoutComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
