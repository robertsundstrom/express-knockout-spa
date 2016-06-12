import ko from "knockout";

export default class RegisterViewModel {
	title: string;

	constructor() {
		this.title = "Register.";
	}

	email: string = null;
	password: string = null;
	confirmPassword: string = null;

	register() {
		
	}
}