import ko from "knockout";

export default class HomeViewModel {
	title: string;
	greeting: string;

	constructor() {
		this.title = "Welcome";
		this.greeting = "Hello, World!"
	}
}