import ko from "knockout";
import router, { Route } from "app/router";

import navbarTemplate from "./nav-bar.html!text";

export class navBarViewModel {
    title: string;
    route: Route;

	constructor(params) {
		this.title = params.title;
        this.route = params.route;
	}
}

export default { viewModel: navBarViewModel, template: navbarTemplate };