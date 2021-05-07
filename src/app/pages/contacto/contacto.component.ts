import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.http.get().subscribe((res)=>{
      console.log('res', res)
    })
  }

}
