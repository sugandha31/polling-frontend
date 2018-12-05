import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';  
import { BehaviorSubject} from 'rxjs/BehaviorSubject'; 
@Injectable()
export class DataShareService {

  private Qid = new BehaviorSubject('');
  currentId = this.Qid.asObservable();
 
  constructor() { }

  changeId(id: string) {
    this.Qid.next(id);    
  }
}
