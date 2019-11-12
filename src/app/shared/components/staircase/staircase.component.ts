import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-staircase',
  templateUrl: './staircase.component.html',
  styleUrls: ['./staircase.component.scss']
})
export class StaircaseComponent implements OnInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  loginForm: FormGroup

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      // Validators - класс со статическими методами для валидации.
      // При вызове конструктора FormControl первый параметр - значение поля ввода,
      // второй параметр - валидатор или массив валидаторов.
      login: new FormControl('user1', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      role: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log('Отправлено. Реактивная форма. Сообщения об ошибках в шаблоне. Свои конструкторыдля контролов.')
    console.log(this.loginForm.valid)
    console.log(this.loginForm.value)
  }

}
