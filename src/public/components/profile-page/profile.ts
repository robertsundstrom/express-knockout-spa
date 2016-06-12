import ko from "knockout";

export default class ProfileViewModel {
	title: string;

	constructor() {
		this.title = "Profile page.";
	}

	username: string = null;
}