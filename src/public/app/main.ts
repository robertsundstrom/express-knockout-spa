import ko from "knockout";
import router from "app/router";

// Import styles (incl. bootstrap-sass)
import "styles!scss";

// Import Bootstrap JS
import "bootstrap-sass/assets/javascripts/bootstrap";

class Main {
	title: string;
	year: number;
	route: any;

	constructor() {
		this.title = "My project";
		this.year = new Date().getFullYear();
		this.route = router.currentRoute;
	}
}

export default new Main();