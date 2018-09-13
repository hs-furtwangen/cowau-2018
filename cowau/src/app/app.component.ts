import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

// NOTE: Auskommentiert da es sonnst unused ist.

import { Variables } from '../classes/variables';
import { IdlePage } from '../pages/idle/idle';
import { LoadingPage } from '../pages/load/load';
import { VisualPage } from '../pages/visual/visual';
import { Socket } from 'ng-socket-io';


@Component({
	templateUrl: 'app.html'
})


export class MyApp {
	rootPage:any = LoadingPage;
	// rootPage:any = VisualPage;

	@ViewChild('navCtrl') navCtrl:NavController;

	constructor(platform: Platform, statusBar: StatusBar, socket:Socket, globalVars:Variables) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.hide();

			platform.pause.subscribe(() => {
				if(globalVars.emojiID != null) {
					socket.emit('free-emoji', globalVars.emojiID);
					globalVars.emojiID = null;
				}
			});

			platform.resume.subscribe(() => {
				if(this.navCtrl.getActive().name != 'IdlePage') {
					this.navCtrl.setRoot(IdlePage);
				}
			});
		});
	}
}
