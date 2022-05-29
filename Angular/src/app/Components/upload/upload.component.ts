import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public message : string
  public progress :number
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile =(files :any) =>{
      if(files.length === 0) return;

      const formData = new FormData();
      let fileToUpload = <File>files[0];
      formData.append('file' , fileToUpload, fileToUpload.name);
      this.http.post(`${environment.baseUrl}/upload` , formData , {reportProgress : true , observe : 'events'})
      .subscribe( event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total)
        }
        else if(event.type === HttpEventType.Response){
          this.message = 'Succeeded';
          this.onUploadFinished.emit(event.body)
        }
      })
  }
}
