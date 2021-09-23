import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {VariationSelectionPage} from '../variation-selection/variation-selection.page';

@Component({
    selector: 'app-nursing-items',
    templateUrl: './nursing-items.page.html',
    styleUrls: ['./nursing-items.page.scss'],
})
export class NursingItemsPage implements OnInit {
    segment = 0;
    total: number = 0;
    serumCount: number = 0;
    @ViewChild('slides', {static: true}) slider: IonSlides;

    constructor(private route: Router, private modalController: ModalController) {
    }

    ngOnInit() {
    }


    async segmentChanged() {
        await this.slider.slideTo(this.segment);
    }

    async slideChanged() {
        this.segment = await this.slider.getActiveIndex();
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    reviews() {
        this.route.navigate(['./reviews']);
    }

    // variation_selection() {
    //     this.modalController.create({component: VariationSelectionPage}).then((modalElement) => {
    //             modalElement.present();
    //         }
    //     );
    // }
    addCount() {
        this.serumCount ++;
        this.total = this.total + 145000;
    }

    reduceCount() {
        this.serumCount --;
        this.total = this.total - 145000;
    }
}
