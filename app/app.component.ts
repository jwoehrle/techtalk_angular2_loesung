
import { Component } from '@angular/core'
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { UserListComponent } from './user-list.component'
import { UserDetailComponent } from './user-detail.component'
import { UserService } from './user.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [UserListComponent, ROUTER_DIRECTIVES],
  providers: [UserService, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/users',      name: 'UserList',   component: UserListComponent,  useAsDefault: true },
  { path: '/users/:id',  name: 'UserDetail', component: UserDetailComponent }
])
export class AppComponent { 
	
}
