import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: FormGroup;
  public usuario: string = 'alexis@gmail.com';
  public contra: string = '123456';
  constructor(private formBuilder:FormBuilder, 
    private router: Router, 
    private toastController: ToastController) { 

    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


public async login() {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  
  if (this.usuario === email && this.contra === password) {
    this.router.navigate(['/tabs/tab1']);
  } else {
    const toast = await this.toastController.create({
      message: 'Email or password incorrect',
      duration: 2000
    });
    toast.present();
  }
}

}
