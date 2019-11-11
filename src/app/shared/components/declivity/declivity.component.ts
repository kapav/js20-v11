import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-declivity',
  templateUrl: './declivity.component.html',
  styleUrls: ['./declivity.component.scss']
})
export class DeclivityComponent implements OnInit {

  xValue: number = 0
  yValue: number = 0
  zValue: number = 0
  wValue: number = 0
  vValue: FormControl = new FormControl(0)
  result: number

  settings = {
    accent: true,
    error: true,
    highlighted: false
  }

  showUl: boolean = true
  items: string[] = [
    'Первый', '[Второй]', '{Третий}', '(Четвёртый)', 'Пятый'
  ]

  constructor() {}

  ngOnInit() {}

  calculate() {
    this.result = +this.xValue + +this.yValue + +this.zValue + +this.wValue + +this.vValue.value
  }

  reset() {
    this.xValue = 0
    this.yValue = 0
    this.zValue = 0
    this.wValue = 0
    this.vValue.reset(0)
    this.result = undefined
  }

  getStyles() {
    return {
      "background-color": "yellow",
      "font-weight": "bold",
      "font-size": "20px"
    }
  }

  toggleVisibility() {
    this.showUl = !this.showUl
  }

}
