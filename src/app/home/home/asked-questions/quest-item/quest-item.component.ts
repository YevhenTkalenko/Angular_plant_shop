import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.scss']
})
export class QuestItemComponent {

  @Input('title') titleProps!: string;
  @Input('text') textProps!: string;
  @Input('isVisible') isVisibleProps: boolean = false;

  showHide(): void {
    this.isVisibleProps = !this.isVisibleProps
  }

}
