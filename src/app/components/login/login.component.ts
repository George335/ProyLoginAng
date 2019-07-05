import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  usuarios:any[] = []
  termino:string;


  constructor( private router: Router, 
    private _loginService: LoginService ) { }
    

  loguearse( usuario:string, clave:string ){

    this.usuarios = this._loginService.buscarUsuario( usuario );

    this.termino =usuario;

    if ( usuario === 'admin' ) {
      if( clave === '123456' ) {
        this.router.navigate([ '/home', usuario  ]);
      }
    } else {
      console.log(" Credenciales no existe.");
    }
    
    

  }


}
