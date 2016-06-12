import ko from "knockout";

export default class ForgotPasswordViewModel {
	title: string;

	constructor() {
		this.title = "Forgot your password?.";
	}

	email: string = null;

	submit() {
		
	}
}