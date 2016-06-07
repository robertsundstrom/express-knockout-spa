import ko from "knockout";
import router, { Route } from "app/router";

import "bootstrap-sass/assets/stylesheets/_bootstrap.scss!";
import "bootstrap-sass/assets/javascripts/bootstrap";

import "./styles/Site.scss!";

class Main {
	title: string;
	year: number;
	route: Route;

	constructor() {
		this.title = "My project";
		this.year = new Date().getFullYear();
		this.route = router.currentRoute;
	}
}

export default new Main();