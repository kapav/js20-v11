import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

import {UserTe} from '../../interfaces/user'

@Component({
  selector: 'app-tilt',
  templateUrl: './tilt.component.html',
  styleUrls: ['./tilt.component.scss']
})
export class TiltComponent implements OnInit, AfterViewInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  modelEf: UserTe = new UserTe(0, '', '', 0)
  submittedEf: boolean = false

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    name: '',
    age: '',
    role: ''
  }

  // Объект с сообщениями ошибок
  validationMessages = {
    name: {
      required: 'Поле имя обязательное для заполнения',
      minlength: 'Значение должно быть не менее 4-х символов'
    },
    age: {
      required: 'Поле возраст обязательное для заполнения'
    },
    role: {
      required: 'Поле роль обязательное для заполнения'
    }
  }

  // ViewChild - используется для получения доступа к указанному компоненту и его методам
  @ViewChild('userformEf', { static: true }) userformEf: NgForm

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.userformEf.valueChanges.subscribe(data => this.onValueChanged(data))
  }

  onSubmitEf() {
    this.submittedEf = true
    console.log('Отправлено. Форма, управляемая шаблоном. Все ошибки формы одним объектом.')
  }

  get diagnosticEf() { return JSON.stringify(this.modelEf) }

  onValueChanged(data?: any) {
    if (!this.userformEf) { return }
    const form = this.userformEf.form

    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      // form.get - получение элемента управления
      const control = form.get(field)

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' '
        }
      }
    }
  }

}
