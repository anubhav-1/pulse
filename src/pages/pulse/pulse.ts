import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-pulse',
  templateUrl: 'pulse.html',
})
export class PulsePage {

  color = true;
  msg = 'PING';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.call();
  }

  call() {
    this.color = true;
    this.msg = 'PING';
    this.api.heartbeat().subscribe(data => {
      console.log(data);
      if (data) {
        this.msg=data;
        this.color = false;
      }
    });

  }

}
