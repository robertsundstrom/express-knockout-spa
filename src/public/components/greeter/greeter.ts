import ko from "knockout";
import $ from "jquery";
import greeterTemplate from "./greeter.html!text";

export class greeterViewModel {
	constructor(params) {		
		this.name = params.name;
	}
}

export default { viewModel: greeterViewModel, template: greeterTemplate };