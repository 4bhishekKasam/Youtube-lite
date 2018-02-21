import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
//import { ActivatedRoute, Params } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import {VideoService} from './video.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [ AppComponent, HomeComponent,VideoCenterComponent, VideoListComponent, VideoDetailComponent, SafePipe ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'videos',component:VideoCenterComponent}
    ])
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
