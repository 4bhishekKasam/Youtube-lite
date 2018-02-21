import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute, Params } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';

const routes : Routes = [
 { path:'', redirectTo:'/home', pathMatch:'full'},
 { path:'home', redirectTo:'HomeComponent'},
 { path:'videos', redirectTo:'VideoCenterComponent'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule{    
}