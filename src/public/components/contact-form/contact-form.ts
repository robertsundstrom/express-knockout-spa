import ko from "knockout";

import formTemplate from "./contact-form.html!text";

export class ContactFormViewModel {
    name: string = null;
	email: string = null;
	subject: string = null;
	text: string = null;

	constructor() {
        
	}

	send() {
		let x = this.isValid;	
	}

	get isValid() {
        let observable = ko.getObservable(this, "name");
        let observable2 = ko.getObservable(this, "subject");

		let validationModel = ko.validation.group([observable, observable2]);
        observable.isModified(true);
		validationModel.showAllMessages(true);

		return validationModel.isValid();
    };
}

export default { viewModel: ContactFormViewModel, template: formTemplate };