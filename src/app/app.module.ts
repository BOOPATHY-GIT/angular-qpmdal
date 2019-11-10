import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { RecordComponent } from './record/record.component';
import { RecordAddComponent } from './record-add/record-add.component';
import { RecordUpdateComponent } from './record-update/record-update.component';
import { RecordDeleteComponent } from './record-delete/record-delete.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordAddComponent,
    RecordUpdateComponent,
    RecordDeleteComponent,
    RecordDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export * from './record.interface';
