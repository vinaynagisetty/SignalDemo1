import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() item?: { id: number; name: string; age: number; } 
  editForm: FormGroup | undefined;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [{ value: this.item?.id, disabled: true }],
      name: [this.item?.name],
      age: [this.item?.age]
    });
  }

  save() {
    console.log(this.editForm?.value);
  }
}
