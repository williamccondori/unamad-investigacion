import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RoleModel } from '../../models/role.model';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  roles: RoleModel[];

  constructor() {
    this.roles = [
      {
        id: 1,
        name: 'Admin',
        description: 'Admin role'
      },
      {
        id: 2,
        name: 'User',
        description: 'User role'
      }];
  }

  onBack(): void {

  }

  onAdd(): void {

  }
}
