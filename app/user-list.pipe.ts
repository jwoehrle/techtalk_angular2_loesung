/**
 * Created by JWE on 16/06/03.
 */

import {Pipe, PipeTransform} from '@angular/core'
import {User} from './user'

@Pipe( {name:"userlistpipe",
pure:true})
export class UserListPipe implements PipeTransform {

    transform(allUsers: Array<User>, filterString: string):any {
        if ( filterString && filterString.length > 0) {
            return allUsers.filter( entry => entry.name.toUpperCase().startsWith(filterString.toUpperCase()))
        } else {
            return allUsers;
        }
    }

}