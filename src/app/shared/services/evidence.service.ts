import {Injectable} from '@angular/core'

@Injectable()
export class EvidenceService {

  getData() {
    let items: string[] = []
    for (let i = 0; i < 10; i++) {
      items[i] = 'Пункт ' + 1
    }
    return items
  }

}
