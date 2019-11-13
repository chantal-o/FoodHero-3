const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.organization = !isEmpty(data.organization) ? data.organization : "";
  data.streetnum = !isEmpty(data.streetnum) ? data.streetnum : "";
  data.streetname = !isEmpty(data.streetname) ? data.streetname : "";
  data.cityname = !isEmpty(data.cityname) ? data.cityname : "";
  data.province = !isEmpty(data.province) ? data.province : "";
  data.postalcode = !isEmpty(data.postalcode) ? data.postalcode : "";
  data.accepttc = !isEmpty(data.accepttc) ? data.accepttc : "";

  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.usertype = !isEmpty(data.usertype) ? data.usertype : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First Name field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last Name field is required";
  }
  if (Validator.isEmpty(data.organization)) {
    errors.organization = "organization Name field is required";
  } if (Validator.isEmpty(data.streetnum)) {
    errors.streetnum = "Street Num field is required";
  } if (Validator.isEmpty(data.streetname)) {
    errors.streetname = "Street Name field is required";
  } if (Validator.isEmpty(data.cityname)) {
    errors.cityname = "Street Name field is required";
  } if (Validator.isEmpty(data.province)) {
    errors.province = "Street Name field is required";
  } if (Validator.isEmpty(data.postalcode)) {
    errors.postalcode = "Street Name field is required";
  } if (Validator.isEmpty(data.accepttc)) {
    errors.accepttc = "Street Name field is required";
  } if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile Number field is required";
  }
  if (Validator.isEmpty(data.usertype)) {
    errors.usertype = "User Typefield is required";
}
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
