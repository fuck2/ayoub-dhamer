import { Injectable,Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class UserObjectService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  getStorage(message: any,storageKey:string) {
    //this.messageSource.next(message)
    this.storage.get(storageKey,message);
  }

  setStorage(message: any,storageKey:string) {
    //this.messageSource.next(message)
    this.storage.set(storageKey,message);
  }
}
