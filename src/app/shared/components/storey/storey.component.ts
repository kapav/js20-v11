import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-storey',
  templateUrl: './storey.component.html',
  styleUrls: ['./storey.component.scss']
})
export class StoreyComponent implements OnInit {

  @Output('onStoreyToggle') tumblerToHomePage = new EventEmitter()

  payload = {}

  positiveNotificFromStorey = 'Отображено во втором предке'
  negativeNotificFromStorey = 'Скрыто во втором предке'

  constructor() {}

  ngOnInit() {}

  tumblerFromStorey(payload) {
    this.payload = payload
    this.tumblerToHomePage.emit(this.payload)
  }

}
