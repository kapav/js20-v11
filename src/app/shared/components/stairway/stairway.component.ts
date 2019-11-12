import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-stairway',
  templateUrl: './stairway.component.html',
  styleUrls: ['./stairway.component.scss']
})
export class StairwayComponent implements OnInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // FormBuilder - класс, предоставляющий удобный интерфейс для создания экземпляров FormControl'а
    this.loginForm = this.fb.group({
      // Validators - класс со статическими методами для валидации.
      // При передаче объекта структуры модели
      // первый параметр - значение поля ввода,
      // второй параметр - валидатор или массив валидаторов.
      login: ['user1', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      role: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log('Отправлено. Реактивная форма. Сообщения об ошибках в шаблоне. Построитель формы для контролов.')
    console.log(this.loginForm.valid)
    console.log(this.loginForm.value)
  }

}
