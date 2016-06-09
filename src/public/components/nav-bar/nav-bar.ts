import ko from "knockout";
import router from "app/router";

import navbarTemplate from "./nav-bar.html!text";

export class NavBarViewModel {
    title: string;
    route: any;

	constructor(params) {
		this.title = params.title;
        this.route = params.route;
	}
}

export default { viewModel: NavBarViewModel, template: navbarTemplate };