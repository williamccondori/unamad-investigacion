import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UserModel } from '../../models/user.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RolesFormComponent } from '../../components/roles-form/roles-form.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule
  ],
  providers: [NzModalService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: UserModel[] = [];

  constructor(private modalService: NzModalService) {
    this.users = [
      {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        lastName2: 'Smith',
        email: 'wcondori@senamhi.gob.pe',
        username: 'jdoe',
        password: '123456'
      }
    ];
  }

  onBack(): void {

  }

  onAdd(): void {
    const modalRef = this.modalService.create({
      nzTitle: 'Agregar usuario',
      nzContent: RolesFormComponent,
      nzFooter: null
    });
  }
}
