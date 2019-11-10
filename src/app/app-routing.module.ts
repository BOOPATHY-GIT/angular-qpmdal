import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RecordAddComponent } from './record-add/record-add.component';
import { RecordUpdateComponent } from './record-update/record-update.component';


const routes: Routes = [
  {
    path: 'records',
    component: RecordComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'record-detail/:id',
    component: RecordDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'record-add',
    component: RecordAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'record-update/:id',
    component: RecordUpdateComponent,
    data: { title: 'Product Edit' }
  },
  { path: '',
    redirectTo: '/records',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
