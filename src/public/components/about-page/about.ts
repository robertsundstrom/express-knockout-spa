import ko from "knockout";

export default class AboutViewModel {
	title: string;
	message: string;
	
	constructor() {
		this.title = "About.";
		this.message = "Your application description page.";
	}
}