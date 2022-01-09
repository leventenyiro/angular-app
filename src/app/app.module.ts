import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent // ezt hozzá kell adni - deklarációk a html-hez
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService // dependency injection nem fog működni enélkül
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
