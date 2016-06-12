import ko from "knockout";

export default class ContactViewModel {
	title: string;
	message: string;

	constructor() {
		this.title = "Contact.";
		this.message = "Your contact page.";
	}
}