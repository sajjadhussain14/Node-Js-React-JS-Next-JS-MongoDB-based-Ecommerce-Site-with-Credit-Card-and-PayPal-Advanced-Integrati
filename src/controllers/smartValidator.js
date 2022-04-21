// START VALIDATOR

import validator from "validator";
import $ from "jquery";
export let validatedStatus = true;
export const validate = (formID) => {
  validatedStatus = true;
  validateInputs(formID);
  validateSelect(formID);
};

const validateInputs = (formID) => {
  var form = document.getElementById(formID);
  let formInputs = [];
  try {
    formInputs = form.getElementsByTagName("input");
  } catch (err) {}
  validateNow(formID, formInputs);
};

const validateSelect = (formID) => {
  var form = document.getElementById(formID);
  let formInputs = [];
  try {
    formInputs = form.getElementsByTagName("select");
  } catch (err) {}
  validateNow(formID, formInputs);
};

const validateNow = (formID, formInputs) => {
  if (!formInputs || formInputs == "") {
    validatedStatus = true;
  }
  for (let i = 0; i < formInputs.length; i++) {
    let e = formInputs[i];
    let id = e.id;
    let value = e.value;
    let name = e.name;

    let attrs = [
      { key: "isRequired", f: checkisRequired },
      { key: "isAlpha", f: checkAlpha },
      { key: "isNumeric", f: checkNumeric },
      { key: "isCreditCard", f: checkCreditCard },
      { key: "isCvv", f: checkCvv },
      { key: "isEmail", f: checkEmail },
      { key: "isZip", f: checkZip },
      { key: "isPhone", f: checkPhone },
      { key: "isMinLen", f: checkMinlen },
    ];
    let keyVal = false;
    let key = "";
    for (let i = 0; i < attrs.length; i++) {
      key = attrs[i].key;

      try {
        keyVal = e.getAttribute(key);
      } catch (err) {}
      if (keyVal) {
        attrs[i].f(id, name, value);
      }
    }
  }
};

const checkisRequired = (id, name, value) => {
  try {
    value = value.replace(/ /g, "");
  } catch (err) {}

  let v = true;
  if (validator.isEmpty(value, { ignore_whitespace: true })) {
    document.getElementById(id + "-error").innerHTML =
      name + " Should not be empty...";
    v = false;
    validatedStatus = false;
  }

  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";

      setTimeout(() => {}, 2000);
    } catch (err) {}
  }
};

const checkAlpha = (id, name, value) => {
  let v = true;
  if (!validator.isAlpha(value)) {
    document.getElementById(id + "-error").innerHTML = name + " is Invalid...";
    v = false;
    validatedStatus = false;
  }

  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkNumeric = (id, name, value) => {
  let v = true;
  if (!validator.isNumeric(value, { no_symbols: false })) {
    document.getElementById(id + "-error").innerHTML =
      name + " should be Numeric...";
    v = false;
    validatedStatus = false;
  }

  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkCreditCard = (id, name, value) => {
  let v = true;

  if (!validator.isCreditCard(value)) {
    document.getElementById(id + "-error").innerHTML =
      name + "is Invalid Credit Card Number...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkCvv = (id, name, value) => {
  let v = true;

  if (
    !validator.isNumeric(value, { ignore_whitespace: true }) ||
    value.length < 3 ||
    value.length > 4
  ) {
    document.getElementById(id + "-error").innerHTML = name + " is Invalid...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkEmail = (id, name, value) => {
  let v = true;

  if (!validator.isEmail(value)) {
    document.getElementById(id + "-error").innerHTML =
      name + " is Invalid Email...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkZip = (id, name, value) => {
  let v = true;
  if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) {
    document.getElementById(id + "-error").innerHTML =
      name + " is Invalid Email...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkPhone = (id, name, value) => {
  let v = true;
  if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)
  ) {
    document.getElementById(id + "-error").innerHTML =
      name + " is Invalid Email...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

const checkMinlen = (id, name, value) => {
  let v = true;

  if (value && value.length < 6) {
    document.getElementById(id + "-error").innerHTML =
      name + " Length should be more than 6 chracters...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(id + "-error").innerHTML = "";
    } catch (err) {}
  }
};

export const passwordMatch = (p, cp) => {
  let v = true;
  let pass = document.getElementById(p).value;
  let cPass = document.getElementById(cp).value;

  if (pass == cPass) {
    v = true;
  } else {
    document.getElementById(cp + "-error").innerHTML =
      name + " Password and Confirm password do not match...";
    v = false;
    validatedStatus = false;
  }
  if (v != false) {
    try {
      document.getElementById(cp + "-error").innerHTML = "";
    } catch (err) {}
  }
};

// END VALIDATOR

if (typeof window != "undefined") {
  $(document).ready(function () {
    validateOnInputChange();
    validateOnSelectChange();
  });
}

export const autoValidate = () => {
  if (typeof window != "undefined") {
    $(document).ready(function () {
      validateOnInputChange();
      validateOnSelectChange();
    });
  }
};

const validateOnInputChange = () => {
  $("input").on("input", function (e) {
    let id = e.target.id;
    let name = e.target.name;
    let value = e.target.value;

    let attrs = [
      { key: "isRequired", f: checkisRequired },
      { key: "isAlpha", f: checkAlpha },
      { key: "isNumeric", f: checkNumeric },
      { key: "isCreditCard", f: checkCreditCard },
      { key: "isCvv", f: checkCvv },
      { key: "isEmail", f: checkEmail },
      { key: "isZip", f: checkZip },
      { key: "isPhone", f: checkPhone },
    ];
    let keyVal = false;
    let key = "";
    for (let i = 0; i < attrs.length; i++) {
      key = attrs[i].key;
      keyVal = e.target.getAttribute(key);

      if (keyVal) {
        attrs[i].f(id, name, value);
      }
    }
  });
};

const validateOnSelectChange = () => {
  $("select").on("input", function (e) {
    let id = e.target.id;
    let name = e.target.name;
    let value = e.target.value;

    let attrs = [
      { key: "isRequired", f: checkisRequired },
      { key: "isAlpha", f: checkAlpha },
      { key: "isNumeric", f: checkNumeric },
      { key: "isCreditCard", f: checkCreditCard },
      { key: "isCvv", f: checkCvv },
      { key: "isEmail", f: checkEmail },
      { key: "isZip", f: checkZip },
      { key: "isPhone", f: checkPhone },
    ];
    let keyVal = false;
    let key = "";
    for (let i = 0; i < attrs.length; i++) {
      key = attrs[i].key;
      keyVal = e.target.getAttribute(key);
      if (keyVal) {
        attrs[i].f(id, name, value);
      }
    }
  });
};

if (typeof window != "undefined") {
  $(document).ready(function () {
    $(".form-wizard-next-btn").click(function (e) {
      let formID = $(this).attr("formID");
      validate($(this).attr("formID"));
      moveToNextStep($(this));
    });
  });
}

const moveToNextStep = (e) => {
  let formID = e.attr("formID");
  var parentFieldset = e.parents(".wizard-fieldset");
  var currentActiveStep = e
    .parents(".form-wizard")
    .find(".form-wizard-steps .active");
  var next = e;
  let isvalidated = false;

  var nextWizardStep = false;
  if (validatedStatus == true || formID == "PassValidation") {
    nextWizardStep = true;
  }
  parentFieldset.find(".wizard-required").each(function () {
    var thisValue = e.val();

    if (thisValue == "") {
      e.siblings(".wizard-form-error").slideDown();
      nextWizardStep = false;
    } else {
      e.siblings(".wizard-form-error").slideUp();
    }
  });
  if (nextWizardStep) {
    next.parents(".wizard-fieldset").removeClass("show", "400");
    currentActiveStep
      .removeClass("active")
      .addClass("activated")
      .next()
      .addClass("active", "400");
    next
      .parents(".wizard-fieldset")
      .next(".wizard-fieldset")
      .addClass("show", "400");
    $(document)
      .find(".wizard-fieldset")
      .each(function () {
        if (e.hasClass("show")) {
          var formAtrr = e.attr("data-tab-content");
          $(document)
            .find(".form-wizard-steps .form-wizard-step-item")
            .each(function () {
              if (e.attr("data-attr") == formAtrr) {
                e.addClass("active");
                var innerWidth = e.innerWidth();
                var position = e.position();
                $(document).find(".form-wizard-step-move").css({
                  left: position.left,
                  width: innerWidth,
                });
              } else {
                e.removeClass("active");
              }
            });
        }
      });
  }
};
