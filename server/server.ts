import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-server',
  templateUrl: 'server.html',
})

export class ServerPage {
	@Input() testMessage:string = "";

	checklist: any;
	checklistObserver: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
		this.checklist = Observable.create(observer => {
			this.checklistObserver = observer;
		});

		//Observable.interval(5000).take(10).subscribe()

		setInterval(() => {this.repeatMe();}, 5000);
		//this.repeatMe();
	}

	repeatMe(){
		console.log("repeat");
		this.http.get('http://192.168.0.102:8080/posts', {}, {}).then(
				(data) => {
					console.log(data.data);
				}
			);
		//Observable.
	}

	sendMessage(){
		console.log(this.testMessage);
		/*this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
			console.log(data);
		});*/
		this.http.get('http://141.28.131.171:8080/posts', {}, {}).then(data => {
			console.log("Data: " + data.data);
		})
		.catch(error => {
			console.log("Error Status: " + error.status);
			console.log("Error ERROR: " + error.error);
			console.log("Error Headers: " + error.headers);
		})

		setInterval(this.sendMessage(), 10000);
	}

}