

import { Component, OnInit } from '@angular/core'
import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { UserService } from './user.service'
import { User } from './user'

@Component({
    templateUrl: 'app/user-detail.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class UserDetailComponent implements OnInit {
    user: User;

    constructor(
        private userService: UserService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get("id");
        this.user = this.userService.getUser(id);
    }
}