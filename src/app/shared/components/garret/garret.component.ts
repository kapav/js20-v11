import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-garret',
  templateUrl: './garret.component.html',
  styleUrls: ['./garret.component.scss']
})
export class GarretComponent implements OnInit {

  @Input('garretLettering') tuckInscription: string
  @Input('garretAnnouncement') revealNotice: string
  @Input('garretToggle') stashed: boolean

  positiveNotificFromGarret = 'Отображено в первом предке'
  negativeNotificFromGarret = 'Скрыто в первом предке'

  constructor() {}

  ngOnInit() {}

}
