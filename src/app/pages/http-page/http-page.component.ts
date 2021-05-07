import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-http-page',
  templateUrl: './http-page.component.html',
  styleUrls: ['./http-page.component.scss']
})
export class HttpPageComponent implements OnInit {

  posts;
  constructor( private http: HttpClientService ) { }

  ngOnInit(): void {
    this.http.get().subscribe((res)=>{
      console.log('RES', res);
      this.posts = res;
    })

    this.http.post( { data: 1 } ).subscribe((res)=>{
      console.log('RESPUESTA POST', res);
    })

    

  }

}
