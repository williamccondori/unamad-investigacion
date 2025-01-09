import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-roles-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './roles-form.component.html',
  styleUrl: './roles-form.component.scss'
})
export class RolesFormComponent implements OnInit {
  validateForm: any;

  @Input() formData: any = {};

  constructor(
    private fb: NonNullableFormBuilder,
    private modal: NzModalRef
  ) {
    this.validateForm = this.fb.group({
      name: [null],
      description: [null]
    });
  }

  ngOnInit(): void {
    console.log(this.formData);
  }

  onSubmit(): void {
    console.log(this.validateForm.value);
    this.modal.destroy();
  }
}
