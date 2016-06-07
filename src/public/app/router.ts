import $ from "jquery";
import ko from "knockout";
import crossroads from "crossroads";
import hasher from "hasher";

//function change(state) {
//    if (state === null) {
//        crossroads.parse('/');
//    } else {
//        crossroads.parse(state.url);
//    }
//}

//$(window).bind("popstate", function (e) {
//    change(e.originalEvent.state);
//})

class Router {
	constructor() {
		this.currentRoute = this.currentRoute = ko.observable({});
	}
	
	private parseHash(newHash, oldHash) {
		//if (newHash == "")
		//{
		//    if(location.pathname != "/" && location.pathname.length > 1)
		//    {
		//        newHash = location.pathname.slice(1);
		//    }
		//}
		crossroads.parse(newHash);
	}

	private changeHash(newHash, oldHash) {
		let route = newHash;
		//if (route) {
		//    history.replaceState({url: route}, "", location.protocol + '//' + location.host + '/' + route);
		//}
		//else {
		//    history.replaceState({url: '/' }, "", location.protocol + '//' + location.host);
		//}
		crossroads.parse(newHash);
	}
	
	private activateCrossroads() {

		crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;

		hasher.initialized.add(this.parseHash);
		hasher.changed.add(this.changeHash);
		hasher.init();
	}

	config(config) {
		ko.utils.arrayForEach(config.routes,(route) => {
			crossroads.addRoute(route.url,(requestParams) => {
				this.currentRoute(ko.utils.extend(requestParams, route.params));
			});
		});
		//crossroads.routed.add(console.log, console);
		this.activateCrossroads();
	}
}

export default new Router();