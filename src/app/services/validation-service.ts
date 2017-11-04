export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'This field is required.',
            'invalidName': 'Name cannot contain numbers or special characters.',
            'invalidUsername': "Username should contain only small letters, numbers, and the '.' and '_' characters.",
            'invalidEmailAddress': 'Invalid email address.',
            'minlength': `Must be at least ${validatorValue.requiredLength} characters long.`
        };

        return config[validatorName];
    }

    static nameValidator(control) {
        // first and last names should contain only small and capital letters, no numbers, special characters, etc.
        if (control.value.match(/^[a-zA-ZäöüßÄÖÜ]+$/)) {
            return null;
        } else {
            return { 'invalidName': true };
        }
    }

    static usernameValidator(control) {
        // should contain only small letters. May contain also numbers, the "." and "_" characters
        if (control.value.match(/^[a-z0-9\._]+$/)) {
            return null;
        } else {
            return { 'invalidUsername': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
}