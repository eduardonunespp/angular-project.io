import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanLoad {

    user = { admin: false, logged: false }

    canLoad(): boolean{
        return this.user.admin;
    }
 
    canActived(): boolean {
        return this.user.logged;
    }
        

}