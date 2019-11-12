import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import {UserCo} from '../../interfaces/user'

@Component({
  selector: 'app-stairwell',
  templateUrl: './stairwell.component.html',
  styleUrls: ['./stairwell.component.scss']
})
export class StairwellComponent implements OnInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  userForm: FormGroup
  user: UserCo = new UserCo()

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    name: '',
    age: '',
    email: '',
    role: ''
  }

  // Объект с сообщениями ошибок
  validationMessages = {
    name: {
      required: 'Обязательное поле имени',
      minlength: 'Значение должно быть не менее 4-х символов',
      maxlength: 'Значение не должно быть больше 15-и символов'
    },
    age: {
      required: 'Обязательное поле возраста',
      pattern: 'Значение должно быть натуральным числом'
    },
    email: {
      required: 'Обязательное поле почты',
      pattern: 'Неправильный формат адреса почты'
    },
    role: {
      required: 'Обязательное поле роли'
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {}

  onValueChanged(data?: any) {}

  onSubmit() {
    console.log('Отправлено. Реактивная форма. Сообщения об ошибках из кода компонента.')
    console.log(this.userForm.valid)
    console.log(this.userForm.value)
  }

}
