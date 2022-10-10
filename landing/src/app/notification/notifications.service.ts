import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Command } from '../interfaces/command.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messages!: Subject<Command> ;

  constructor() {
    this.messages = new Subject<Command>();
  }

  addSuccess(message: string): void {
    // this.messages.next(message);
    this.messages.next({
      id: this.randomId(),
      text: message,
      type: 'success'
    });
  }

  addError(message: string): void {
    // this.messages.next(message);
    this.messages.next({
      id: this.randomId(),
      text: message,
      type: 'error'
    });
  }

  clearMessage(id: number): void {
    this.messages.next({
      id: id,
      type: 'clear'
    });
  }

  private randomId(): number {
    return Math.round(Math.random() * 10000);
  }
}
