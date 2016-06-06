
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'
import { UserService } from './user.service'
import { User } from './user'
import {UserListPipe} from './user-list.pipe'

@Component({
    selector: 'user-list',
    templateUrl: 'app/user-list.component.html'
   
})
export class UserListComponent implements OnInit {
    users: Array<User>;
    
    filteredUsers: Array<User>;
    
    

    constructor(private userService: UserService,
        private router: Router) {
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => this.users = this.filteredUsers = users
        );    }

    filter(inputString: string) {
        if ( inputString && inputString.length > 0) {
            this.filteredUsers = this.users.filter( entry => entry.name.toUpperCase().startsWith(inputString.toUpperCase()))
        } else {
            this.filteredUsers = this.users;
        }
    }

    onUserSelected(user: User) {
        this.router.navigate(['UserDetail', { id: user.id }]);
    }
}