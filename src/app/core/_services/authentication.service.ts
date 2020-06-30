import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User, SocialLoggedUser } from '../_models';
import { SocialUser } from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    socialLoggedUsed:SocialLoggedUser;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    socialLogin(socialUser: SocialUser) {
        
        this.socialLoggedUsed=new SocialLoggedUser();
        this.socialLoggedUsed.firstName=socialUser.firstName;
        this.socialLoggedUsed.lastName=socialUser.lastName;
        this.socialLoggedUsed.image=socialUser.photoUrl;
        this.socialLoggedUsed.token=socialUser.authToken;

        
        
        localStorage.setItem('currentUser', JSON.stringify(this.socialLoggedUsed));
        this.currentUserSubject.next(this.socialLoggedUsed);
       
        
        return socialUser;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}