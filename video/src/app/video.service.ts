import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Video } from './video';

@Injectable()
export class VideoService {

 // private _getUrl = "/api/videos";
 
  constructor(private _http : Http) { }

  getVideos(){
    return this._http.get('http://localhost:3000/api/videos')
      .map(res => res.json());
  }

  addVideo(video : Video){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers : headers});
    return this._http.post('http://localhost:3000/api/video', JSON.stringify(video),options)
    .map(res => res.json());
  }

  updateVideo(video : Video){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers : headers});
    return this._http.post('http://localhost:3000/api/video' + video._id, JSON.stringify(video),options)
    .map(res => res.json());
  }

  deleteVideo(video : Video){
    return this._http.delete('http://localhost:3000/api/video' + video._id)
    .map(res => res.json());
  }


}
