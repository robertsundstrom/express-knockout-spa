import ko from "knockout";

export default class ContactViewModel {
	title: string;
	message: string;

	constructor() {
		this.title = "Contact";
		this.message = "Your contact page.";
	}

	name: string = null;
	email: string = null;
	subject: string = null;
	text: string = null;

	send() {
		let x = this.isValid;	
	}
}