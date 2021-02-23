(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\MEAN\frontend\cypher\src\main.ts */"zUnb");


/***/ }),

/***/ "3yZ9":
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ConnectService {
    constructor(http) {
        this.http = http;
        this.apiHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.apiKey = 'YOUR-APIKEY-YOUTUBE';
    }
    initGoogleAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // function is the callback passed to gapi.load
            const pload = new Promise((resolve) => {
                gapi.load('auth2', resolve);
            });
            return pload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield gapi.auth2.init({ client_id: '50157134636-rna8rp9hup0culic8vd0d5e6o2881bdj.apps.googleusercontent.com' })
                    .then(auth => {
                    this.gAuth = auth;
                });
            }));
        });
    }
    fbLogin() {
        FB.init({
            appId: '644636159526585',
            status: false,
            cookie: false,
            xfbml: false,
            version: 'v4.0'
        });
        return new Promise((resolve, reject) => {
            FB.login(result => {
                if (result.authResponse) {
                    console.log('result.authResponse' + JSON.stringify(result));
                    const body = {
                        connectorName: 'FACEBOOK',
                        idToken: result.authResponse.accessToken,
                        refreshToken: result.authResponse.accessToken
                    };
                    const token = body.idToken;
                    if (token) {
                        localStorage.setItem('id_token', JSON.stringify(token));
                    }
                    FB.api('/access-token', 'get', { grant_type: result.authResponse.accessToken, client_id: '644636159526585', client_secret: '226a9d01880a6b71af6a27b20684ffdc', fb_exchange_token: result.authResponse.accessToken }, (response1) => {
                        FB.api('/me', { fields: 'id,about,age_range,picture,bio,birthday,context,email,first_name,gender,hometown,link,location,middle_name,name,timezone,website,work' }, (response2) => {
                            console.log('Good to see you, ' + JSON.stringify(response2) + '.');
                        });
                    });
                }
                else {
                    reject();
                }
            }, { scope: 'public_profile, manage_page, email,user_likes' });
        });
    }
    googleLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.initGoogleAuth();
            // Resolve or reject signin Promise
            return new Promise(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.gAuth.signIn().then(user => {
                    const body = {
                        connectorName: 'YOUTUBE',
                        idToken: user.xc.access_token,
                        refreshToken: user.xc.access_token
                    };
                }, error => console.log(error));
            }));
        });
    }
    redditLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.apiHeaders = this.apiHeaders.set('Authorization', 'Basic ' + btoa('Wg_Z5u_6iTcL8Q:YoAQ7xUHFETylDU7G-F_PNc_-ng'));
            this.apiHeaders = this.apiHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
            const responseType = 'code';
            const state = 'DCEeFWf45A53sdfKef424';
            const scope = 'identity';
            const redirectUri = 'https://snehalkhade.github.io';
            const clientId = 'Wg_Z5u_6iTcL8Q';
            const postdata = `?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
            return this.http.get('https://www.reddit.com/api/v1/authorize' + postdata, { headers: this.apiHeaders });
        });
    }
    amazonLogin() {
        const options = { client_id: '1234567890', scope: 'profile', response_type: 'code' };
        amazon.Login.authorize(options, 'https://snehalkhade.github.io');
    }
    linkedInLogin() {
        this.apiHeaders = this.apiHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
        this.apiHeaders = this.apiHeaders.set('Access-Control-Allow-Credentials', 'true');
        const responseType = 'code';
        // const state = 'DCEeFWf45A53sdfKef424';
        const scope = 'r_emailaddress';
        const redirectUri = 'https://snehalkhade.git.io';
        const clientId = '781v82w0mv53dr';
        const postdata = `?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
        return this.http.get('https://www.linkedin.com/oauth/v2/authorization' + postdata, { headers: this.apiHeaders });
        /*return await fetch('https://www.linkedin.com/oauth/v2/authorization' + postdata)
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(error => {
                return null;
            });*/
    }
    instagramAuthorize() {
        this.apiHeaders = this.apiHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
        this.apiHeaders = this.apiHeaders.set('Access-Control-Allow-Credentials', 'true');
        const scope = 'user_profile,user_media';
        const responseType = 'code';
        const redirectUri = 'https://snehalkhade.git.io';
        const clientId = '423885488748488';
        const postdata = `?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
        return this.http.get('https://api.instagram.com/oauth/authorize' + postdata, { headers: this.apiHeaders });
    }
    walmartAuthorize() {
        this.apiHeaders = this.apiHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
        this.apiHeaders = this.apiHeaders.set('Access-Control-Allow-Credentials', 'true');
        this.apiHeaders = this.apiHeaders.set('WM_QOS.CORRELATION_ID', 'b3261d2d-028a-4ef7-8602-633c23200af6');
        this.apiHeaders = this.apiHeaders.set('WM_SVC.NAME', 'Walmart marketplace');
        const clientId = '423885488748488';
        const clientSecret = '423885488748488';
        this.apiHeaders = this.apiHeaders.set('Authorization', btoa(clientId + ':' + clientSecret));
        const grantType = 'client_credentials';
        return this.http.get('https://api.instagram.com/oauth/authorize', { headers: this.apiHeaders });
    }
    getVideosForChanel(channel, maxResults) {
        let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConnectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demo/demo.component */ "xw5f");


class AppComponent {
    constructor() {
        this.title = 'cypher';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-demo");
    } }, directives: [_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: MEMBER_INTERFACE_NAMES, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_INTERFACE_NAMES", function() { return MEMBER_INTERFACE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/connect.service */ "3yZ9");



const _c0 = ["yourDataTabset"];
const MEMBER_INTERFACE_NAMES = ['AMAZON', 'AMAZONPRIMEVIDEO', 'EBAY', 'ETSY', 'FACEBOOK', 'HOMEDEPOT', 'HULU', 'INSTAGRAM', 'LINKEDIN', 'NETFLIX', 'PINTEREST', 'REDDIT', 'TWITTER', 'VIMEO', 'WALMART', 'YOUTUBE'];
class LoginComponent {
    constructor(router, activedRoute, connectService) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.connectService = connectService;
        this.selectedTabName = 'connectTab';
    }
    ngOnInit() {
        /*this.member.properties.push({
            category: 'SETTINGS',
            memberId: this.member.id,
            name: 'FACEBOOK',
            value: '120',
            createdTimestamp: Date.now()
        });
        this.member.properties.push({
            category: 'SETTINGS',
            memberId: this.member.id,
            name: 'TWITTER',
            value: '120',
            createdTimestamp: Date.now()
        });
        this.member.properties.push({
            category: 'SETTINGS',
            memberId: this.member.id,
            name: 'AMAZON',
            value: '120',
            createdTimestamp: Date.now()
        });
        this.member.properties.push({
            category: 'SETTINGS',
            memberId: this.member.id,
            name: 'PINTEREST',
            value: '120',
            createdTimestamp: Date.now()
        });
        this.member.properties.push({
            category: 'SETTINGS',
            memberId: this.member.id,
            name: 'YOUTUBE',
            value: '120',
            createdTimestamp: Date.now()
        });*/
    }
    fbLogin() {
        this.connectService.fbLogin().then(() => {
            console.log('Connected to fb');
        });
    }
    googleLogin() {
        this.connectService.googleLogin().then(() => {
            console.log('Connected to google');
        });
    }
    getRedditAccessToken() {
        this.connectService.redditLogin().then(response => response.subscribe(res => console.log(res)));
    }
    amazonLogin() {
        this.connectService.amazonLogin();
    }
    linkedInLogin() {
        this.connectService.linkedInLogin()
            .subscribe(response => console.log(response));
    }
    instagramLogin() {
        this.connectService.instagramAuthorize()
            .subscribe(response => console.log(response));
    }
    walmartAuthorizeLogin() {
        this.connectService.walmartAuthorize()
            .subscribe(response => console.log(response));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yourDataTabset = _t.first);
    } }, decls: 17, vars: 0, consts: [[1, "col-12"], [1, "container"], [1, "mt-3"], [1, "row", "mt-2"], [1, "col-6"], [1, "btn", "btn-light"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_8_listener() { return ctx.googleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_15_listener() { return ctx.fbLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/demo/demo.component */ "xw5f");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]('50157134636-rna8rp9hup0culic8vd0d5e6o2881bdj.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"]('810879902800593')
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xw5f":
/*!***************************************************!*\
  !*** ./src/app/components/demo/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connect.service */ "3yZ9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DemoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.email);
} }
function DemoComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.user.email);
} }
function DemoComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r2.videos));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.user.email);
} }
const fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages,id,about,age_range,picture,bio,birthday,context,first_name,gender,hometown,link,location,middle_name,name,timezone,website,work',
    return_scopes: true,
    enable_profile_selector: true
};
const googleLoginOptions = {
    scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
/*
const vkLoginOptions = {
  fields: 'photo_max,contacts', // Profile fields to return, see: https://vk.com/dev/objects/user
  version: '5.124', // https://vk.com/dev/versions
}; // https://vk.com/dev/users.get
*/
/*
let config = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id", googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("810879902800593", fbLoginOptions)
  }
];

let config = [{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider("810879902800593", fbLoginOptions)
}];
*/
class DemoComponent {
    constructor(authService, spinner, connectService) {
        this.authService = authService;
        this.spinner = spinner;
        this.connectService = connectService;
        let config = [{
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]("50157134636-rna8rp9hup0culic8vd0d5e6o2881bdj.apps.googleusercontent.com", googleLoginOptions)
            },
            {
                id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID,
                provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"]("810879902800593", fbLoginOptions)
            }];
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID).then(x => console.log(x)).catch(error => console.log('Thank you'));
    }
    signInWithFB1() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID);
    }
    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response); // The current login status of the person.
        if (response.status === 'connected') { // Logged into your webpage and Facebook.
            this.signInWithFB();
        }
        else { // Not logged into your webpage or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this webpage.';
        }
    }
    signInWithFB() {
        FB.init({
            appId: '644636159526585',
            cookie: true,
            xfbml: true,
            version: 'v4.0' // Use this Graph API version for this call.
        });
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response); // Returns the login status.
        });
        FB.getLoginStatus((response) => {
            // console.log('Hello World', response);
            this.statusChangeCallback(response);
        });
    }
    getFBData() {
        console.log('Welcome!  Fetching your information.... ');
        /*FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });*/
        FB.api('/me', 'GET', { 'fields': 'about,birthday,id,age_range,education,email,first_name,gender,interested_in,last_name,is_guest_user,languages,link,location,middle_name,name,meeting_for,name_format,hometown,political,favorite_athletes,favorite_teams,inspirational_people,quotes,relationship_status,religion,short_name,sports,website,albums' }, (response) => {
            if (response && !response.error) {
                console.log('Taggable Friends Data: ', response);
            }
        });
        FB.api('/me/accounts', (response) => {
            if (response && !response.error) {
                console.log('Accounts Data: ', response);
            }
        });
        FB.api('/me/albums', function (response) {
            if (response && !response.error) {
                console.log('Albums Data: ', response);
            }
        });
        FB.api('/me/assigned_product_catalogs', function (response) {
            if (response && !response.error) {
                console.log('Assigned Product Catalogs Data: ', response);
            }
        });
        FB.api('/me/conversations', function (response) {
            if (response && !response.error) {
                console.log('Conversations Data: ', response);
            }
        });
        FB.api('/me/custom_labels', function (response) {
            if (response && !response.error) {
                console.log('Custom Labels Data: ', response);
            }
        });
        FB.api('/me/events', function (response) {
            if (response && !response.error) {
                console.log('Events Data: ', response);
            }
        });
        FB.api('/me/friends', function (response) {
            if (response && !response.error) {
                console.log('Friends Data: ', response);
            }
        });
        FB.api('/me/feed', function (response) {
            if (response && !response.error) {
                console.log('Feed Data: ', response);
            }
        });
        FB.api('/me/groups', function (response) {
            if (response && !response.error) {
                console.log('Groups Data: ', response);
            }
        });
        FB.api('/me/likes', function (response) {
            if (response && !response.error) {
                console.log('Likes Data: ', response);
            }
        });
        FB.api('/me/music', function (response) {
            if (response && !response.error) {
                console.log('Music Data: ', response);
            }
        });
        FB.api('/me/permissions', function (response) {
            if (response && !response.error) {
                console.log('Permissions Data: ', response);
            }
        });
        FB.api('/me/posts', function (response) {
            if (response && !response.error) {
                console.log('Posts Data: ', response);
            }
        });
        FB.api('/me/photos', function (response) {
            if (response && !response.error) {
                console.log('Photos Data: ', response);
            }
        });
        FB.api('/me/picture', function (response) {
            if (response && !response.error) {
                console.log('Picture Data: ', response);
            }
        });
        FB.api('/me/permissions', function (response) {
            if (response && !response.error) {
                console.log('Permissions Data: ', response);
            }
        });
        FB.api('/me/payment.subscriptions', function (response) {
            if (response && !response.error) {
                console.log('Payment Subscriptions Data: ', response);
            }
        });
        FB.api('/me/videos', function (response) {
            if (response && !response.error) {
                console.log('Videos Data: ', response);
            }
        });
        FB.api('/me/taggable_friends', function (response) {
            if (response && !response.error) {
                console.log('Taggable Friends Data: ', response);
            }
        });
        FB.api('/me', 'GET', { 'fields': 'businesses' }, function (response) {
            if (response && !response.error) {
                console.log('Taggable Friends Data: ', response);
            }
        });
    }
    signInWithYT() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 3000);
        this.videos = [];
        this.connectService
            .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe(lista => {
            for (let element of lista["items"]) {
                this.videos.push(element);
            }
        });
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_connect_service__WEBPACK_IMPORTED_MODULE_4__["ConnectService"])); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 14, vars: 3, consts: [[3, "click"], [3, "ngIf"], [3, "src"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "demo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_3_listener() { return ctx.signInWithFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "FB Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DemoComponent_ng_template_5_Template, 6, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_7_listener() { return ctx.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Google Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DemoComponent_ng_template_9_Template, 6, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_11_listener() { return ctx.signInWithYT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Youtube Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DemoComponent_ng_template_13_Template, 9, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map