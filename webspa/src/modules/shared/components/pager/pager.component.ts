import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { IPager } from '../../models/pager.model';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass'],
})
export class PagerComponent implements OnChanges {
  @Output()
  changed: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  model!: IPager;

  buttonStates: any = {
    nextDisabled: true,
    previousDisabled: true,
  };

  ngOnChanges() {
    console.log(this.model);
    if (this.model) {
      this.model.items =
        this.model.itemsPage > this.model.totalItems
          ? this.model.totalItems
          : this.model.itemsPage;

      this.buttonStates.previousDisabled = this.model.actualPage == 1;
      this.buttonStates.nextDisabled =
        this.model.actualPage >= this.model.totalPages;
      console.log(this.buttonStates);
    }
  }

  onNextClicked(event: any) {
    event.preventDefault();
    this.changed.emit(this.model.actualPage + 1);
  }

  onPreviousClicked(event: any) {
    event.preventDefault();
    this.changed.emit(this.model.actualPage - 1);
  }
}
