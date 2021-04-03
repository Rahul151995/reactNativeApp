import * as yup from "yup";

export class Validators {

    static loginValidator() {
        return yup.object().shape({
            emailInputValue: yup.string().email("Not a Valid Email").required("Email is required"),
            passwordInputValue: yup.string().required("Password is required")
        })
    }

}