import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from 'src/app/interfaces/command.interface';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  messages!: Observable<Command[]>;

  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.messagesOutput;

    setInterval(() => this.notificationsService.addSuccess('WORKING!!!'), 2000);
  }

  ngOnInit(): void {}

  clearMessage(id: number): void {
    console.log(id);
    this.notificationsService.clearMessage(id);
  }

}
