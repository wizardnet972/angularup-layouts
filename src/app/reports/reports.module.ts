import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: GraphComponent }];

@NgModule({
  declarations: [GraphComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ReportsModule {}
