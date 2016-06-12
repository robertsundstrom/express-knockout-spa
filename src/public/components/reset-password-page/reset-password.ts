import ko from "knockout";

export default class ResetViewModel {
	title: string;

	constructor() {
		this.title = "Reset password.";
	}

	email: string = null;
	password: string = null;
	confirmPassword: string = null;

	reset() {
		
	}
}