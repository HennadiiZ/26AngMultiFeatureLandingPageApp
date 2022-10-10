import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';
import { Command } from '../interfaces/command.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  // messages!: Subject<Command> ;
  messages!: any;

  constructor() {
    // this.messages = new Subject<Command>()

    // this.messages = new Subject<any>()
    //   .pipe(
    //     scan((acc: any, value: any) => {
    //       if (value.type === 'clear') {
    //         return acc.filter((message: { id: any; }) => message.id !== value.id)
    //       } else {
    //         return [...acc, value];
    //       }
    //     }, [])
    //   );

    // this.messages = new Subject<Command>()
    // .pipe(
    //   scan((acc: Command[], value: Command) => {
    //     if (value.type === 'clear') {
    //       return acc.filter((message: Command) => message.id !== value.id)
    //     } else {
    //       return [...acc, value];
    //     }
    //   }, [])
    // );

    this.messages = new Subject<Command>()
    // .pipe(
    //   scan((acc: Command[], value: Command) => {
    //     if (value.type === 'clear') {
    //       return acc.filter((message: Command) => message.id !== value.id)
    //     } else {
    //       return [...acc, value];
    //     }
    //   }, [])
    // );
  }

  getMessages() {
    return this.messages
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
