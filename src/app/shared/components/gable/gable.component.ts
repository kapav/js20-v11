import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gable',
  templateUrl: './gable.component.html',
  styleUrls: ['./gable.component.scss']
})
export class GableComponent implements OnInit {

  @Input('gableLettering') obscureInscription: string
  @Input('gableAnnouncement') showNotice: string
  @Input('gableToggle') dissembled: boolean

  constructor() {}

  ngOnInit() {}

}
