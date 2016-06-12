import ko from "knockout";

import loginPartialTemplate from "./login-partial.html!text";

export class LoginPartialViewModel {
    route: any;

	constructor(params) {
        this.route = params.route;
	}

    username: string = "Test";
    loggedIn: boolean = false;

    logOff() {
        
    }
}

export default { viewModel: LoginPartialViewModel, template: loginPartialTemplate };