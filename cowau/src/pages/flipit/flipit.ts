import { Component } from '@angular/core';
import { NavController, NavParams, Platform, PopoverController, Events} from 'ionic-angular';
import { Popover } from '../../classes/popover';
import { GesturesService } from '../../services/gestures.service';
import { NewSoundPopoverPage } from '../../newsound-popover/newsound-popover';
import { ThrowItPopoverPage } from '../../throwit-popover/throwit-popover';
import { EditPage } from '../edit/edit';


/**
 * Generated class for the FlipitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-flipit',
	templateUrl: 'flipit.html'
})

export class FlipitPage {
	popover:Popover;
	motion_subscription: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private gesturesService:GesturesService, public platform:Platform, 
		public popoverCtrl:PopoverController, public events:Events) {
		this.popover = new Popover(popoverCtrl);
		
		platform.ready().then((readySource) => {
			if(readySource == 'cordova') {
				this.gesturesService.isFlipItGesture();
			}
		});

		events.subscribe('flipped', (acceleration) => {
			console.log('FLIPPED');
			this.popover.show(NewSoundPopoverPage, 6000);
			this.navCtrl.push(EditPage);
		});
	}

	ionViewDidLoad() {
		
		// this.popover.show(ThrowItPopoverPage, 3000);
	}

	// +++ Load popover on click event +++
	// presentPopover(myEvent) {
	// 	let popover = this.popoverCtrl.create(PopoverPage);
	// 	popover.present({
	// 		ev:myEvent
	// 	});
	// } 
}