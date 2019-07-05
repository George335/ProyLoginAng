import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  usuario:string;

  constructor( private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.usuario =params['usu'];
      console.log( this.usuario );
    });

  }

}
