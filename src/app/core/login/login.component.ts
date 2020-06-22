import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthenticationService, UserService } from '../_services';
import { User } from '../_models';
import { MatIconRegistry } from '@angular/material/icon';
const googleLogoURL = "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';
@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;
    social: SocialUser;
    socialUser: User;
    out: any;



    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private authService: AuthService, private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private userService: UserService,
        private toasterService:ToastrService
    ) {





        this.matIconRegistry.addSvgIcon(
            "logo",
            this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));




        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.authService.authState.subscribe((user) => {
            this.social = user;
            console.log(this.socialUser);
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.loading);

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.toasterService.success("Wellcome to Flight Services");
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    this.toasterService.error("Wrong Credential");
                });
    }


    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
            this.social = x;
            console.log(this.social);
            this.userService.setSocialUser(this.social);

            this.authenticationService.socialLogin(this.social)
            this.toasterService.success("Wellcome to Flight Services");
            this.router.navigate([this.returnUrl]);




        });




    }

}
