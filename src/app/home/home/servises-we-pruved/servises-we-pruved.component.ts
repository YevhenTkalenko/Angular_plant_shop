import { Component } from '@angular/core';

@Component({
  selector: 'app-servises-we-pruved',
  templateUrl: './servises-we-pruved.component.html',
  styleUrls: ['./servises-we-pruved.component.scss']
})
export class ServisesWePruvedComponent {

  show = true;

  closeWindow(): void {
    this.show = !this.show
  }
}
