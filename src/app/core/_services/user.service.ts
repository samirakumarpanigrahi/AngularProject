import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../_models';
import { SocialUser } from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class UserService {

socialUser:SocialUser;

    getSocialUser(): any {
  
     return this.socialUser;
    }


    setSocialUser(social: SocialUser) {
       this.socialUser=social;
    }

    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }
}