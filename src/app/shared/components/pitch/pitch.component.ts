import { Component, OnInit } from '@angular/core';

import {UserTe} from '../../interfaces/user'

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  modelOe: UserTe = { id: 0, name: '', role: '', age: 0 }
  submittedOe: boolean = false

  constructor() {}

  ngOnInit() {}

  onSubmitOe() {
    this.submittedOe = true
    console.log('Отправлено. Форма, управляемая шаблоном. По одной ошибке на контрол.')
  }

  get diagnosticOe() { return JSON.stringify(this.modelOe) }

}
