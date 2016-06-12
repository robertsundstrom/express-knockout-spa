import ko from "knockout";

export default class LoginViewModel {
	title: string;

	constructor() {
		this.title = "Log in.";
	}

	email: string = null;
	password: string = null;
	rememberMe: boolean = false;

	login() {
		console.log("hej");
	}
}