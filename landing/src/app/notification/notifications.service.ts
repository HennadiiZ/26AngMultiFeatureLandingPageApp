import { Injectable } from '@angular/core';
import { Observable, scan, Subject } from 'rxjs';
import { Command } from '../interfaces/command.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messagesInput!: Subject<Command>;
  messagesOutput!: Observable<Command[]> ;

  constructor() {
    this.messagesInput = new Subject<Command>();

    this.messagesOutput = this.messagesInput
    .pipe(
      scan((acc: Command[], value: Command) => {
        if (value.type === 'clear') {
          return acc.filter((message: Command) => message.id !== value.id)
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  getMessages() {
    return this.messagesInput
    .pipe(
      scan((acc: Command[], value: Command) => {
        if (value.type === 'clear') {
          return acc.filter((message: Command) => message.id !== value.id)
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  addSuccess(message: string): void {
    const id = this.randomId();

    this.messagesInput.next({
      id,
      text: message,
      type: 'success'
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  addError(message: string): void {
    const id = this.randomId();

    this.messagesInput.next({
      id,
      text: message,
      type: 'error'
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  clearMessage(id: number): void {
    this.messagesInput.next({
      id: id,
      type: 'clear'
    });
  }

  private randomId(): number {
    return Math.round(Math.random() * 10000);
  }
}
