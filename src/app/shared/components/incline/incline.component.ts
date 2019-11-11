import { Component, OnInit } from '@angular/core';

import {EvidenceService} from '../../services/evidence.service'

@Component({
  selector: 'app-incline',
  templateUrl: './incline.component.html',
  styleUrls: ['./incline.component.scss']
})
export class InclineComponent implements OnInit {

  public itemSource: string[]

  messageIncontinently: string
  messageKeypress: string
  messageTwoEvents: string

  fillingList: string[] = []

  dataTestingInput = 'Изменение классов инпута при действиях'

  // private evidenseService: EvidenceService внедрение зависимости через конструктор
  constructor(private evidenceService: EvidenceService) {}

  ngOnInit() {
    this.itemSource = this.evidenceService.getData()
  }

  onKeyupIncontinently(data) {
    this.messageIncontinently = data
  }

  onKeyupKeypress(data) {
    this.messageKeypress = data
  }

  onKeyupTwoEvents(data) {
    this.messageTwoEvents = data
  }

  addListItem(item: string) {
    this.fillingList.push(item)
  }

}
