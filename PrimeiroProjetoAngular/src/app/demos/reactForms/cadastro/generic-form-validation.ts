import { FormGroup, AbstractControl, ValidationErrors } from "@angular/forms";

export interface DisplayMessage {
  [key: string]: string;
}
export interface ValidationMessages {
  [key: string]: { [key: string]: string };
}

export class GenericValidator {
  constructor(private validationMessages: ValidationMessages) {}

  processMessages(container: FormGroup): DisplayMessage {
    const messages: DisplayMessage = {};

    Object.keys(container.controls).forEach((controlKey) => {
      const controlProperty = container.controls[controlKey];

      if (controlProperty instanceof FormGroup) {
        const childMessages = this.processMessages(controlProperty);
        Object.assign(messages, childMessages);
      } else {
        const controlErrors = this.getControlErrors(controlProperty);
        if (controlErrors) {
          messages[controlKey] = "";
          Object.keys(controlErrors).forEach((messageKey) => {
            const validationMessage =
              this.validationMessages[controlKey]?.[messageKey];
            if (validationMessage) {
              messages[controlKey] += validationMessage + " ";
            }
          });
        }
      }
    });

    return messages;
  }

  private getControlErrors(control: AbstractControl): ValidationErrors | null {
    if ((control.dirty || control.touched) && control.errors) {
      return control.errors;
    }
    return null;
  }
}