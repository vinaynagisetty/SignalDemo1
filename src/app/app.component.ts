import { Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignalDataService } from './signal-data.service';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,EditModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  data: Signal<{ id: number, name: string, age: number }[]>;
  selectedItem: { id: number, name: string, age: number } | null = null;

  constructor(private dataService: SignalDataService) {
    this.data = this.dataService.getData();
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }
}
