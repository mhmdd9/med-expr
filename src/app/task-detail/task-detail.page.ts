import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ChatPage} from '../chat/chat.page';
import {NursingItemsPage} from '../nursing-items/nursing-items.page';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  fabAction = false;
  showEm = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  toggleFab(){
    this.fabAction = !this.fabAction;
  }
  nursingItems(){
    this.modalController.create({component:NursingItemsPage}).then((modalElement)=>
        {
          modalElement.present();
        }
    )
  }

  confirm() {
    this.route.navigate(['./home']);
  }

  toggleInputs() {
    this.showEm = true;
  }
}
