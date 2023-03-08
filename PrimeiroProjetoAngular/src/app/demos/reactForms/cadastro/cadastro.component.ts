import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup 
  formResult: string = ''
  usuario: Usuario
  MASKS = utilsBr.MASKS

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.cadastroForm = this.fb.group({
        nome: ['', Validators.required],
        cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
        email: ['', [Validators.required, Validators.email]],
        senha: [''],
        senhaConfirmacao: [''],
      })
  }

  adicionarUsuario(){

    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      const result = this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      this.formResult = JSON.stringify(this.cadastroForm.value)
  
      console.log(result)
    }else{
      this.formResult = "Não submeteu!!!"
    }
   }
}