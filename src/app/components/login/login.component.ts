import { Component , EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public loginVal: string = "";
  public passVal: string = "";

  @Output() EvhideLogin = new EventEmitter<boolean>;

  constructor(private _encrypt: EncryptService){}

  public submit(login: string, pass: string):void {
    let encrypLogin = this._encrypt.encryptData(login);
    let encrypPass = this._encrypt.encryptData(pass);
    console.log('Login ecrypted ->', this._encrypt.encryptData(login));
    console.log('Pass encrypted ->', this._encrypt.encryptData(login));

    setTimeout(() => {
      console.log('decrypted login -> ', this._encrypt.decryptData(encrypLogin));
      console.log('decrypted pass -> ', this._encrypt.decryptData(encrypPass));
    }, 2000);
  }

  hideLogin(){
    this.EvhideLogin.emit(false);
  }
}
