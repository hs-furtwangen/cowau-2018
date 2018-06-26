import { Component, ViewChild } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';

@Component({
	selector: 'throw-it-popover',
	templateUrl: 'throwit-popover.html'
})

export class ThrowItPopoverPage {
	
	constructor(public popoverCtrl: PopoverController, private viewCtrl:ViewController) {}

	closePopover() {
		this.viewCtrl.dismiss();
	}
}
