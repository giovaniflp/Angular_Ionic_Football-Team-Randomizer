import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RandomizeLogicComponent } from '../randomize-logic/randomize-logic.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RandomizeLogicComponent],
})
export class HomePage {

}
