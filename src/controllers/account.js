import Router from "next/router";
let { URL } = process.env;

export const createAccountHandle = (e, setScreen) => {
  e.preventDefault();
  setScreen("create");
};

export const CreateUser = async (e, setScreen) => {
  e.preventDefault();
  let { URL } = process.env;

  let ID = Array.from(Array(20), () =>
    Math.floor(Math.random() * 20).toString(20)
  ).join("");

  let email = document.getElementById("new-email").value;
  let password = document.getElementById("new-password").value;
  let fname = document.getElementById("new-fname").value;
  let lname = document.getElementById("new-lname").value;
  let phone = document.getElementById("new-phone").value;
  let address1 = document.getElementById("new-address1").value;
  let address2 = document.getElementById("new-address2").value;
  let city = document.getElementById("new-city").value;
  let state = document.getElementById("new-state").value;
  let zcode = document.getElementById("new-zcode").value;
  let country = document.getElementById("country").value;

  const response = await fetch(URL + "/api/account/createAccount", {
    method: "POST",
    body: JSON.stringify({
      ID: ID,
      email: email,
      password: password,
      fname: fname,
      lname: lname,
      phone: phone,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zcode: zcode,
      country: country,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let uAlert = document.getElementById("create-user");

  if (response.status == 200) {
    try {
      uAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      uAlert.classList.remove("alert-danger");
    } catch (err) {}

    try {
      uAlert.classList.add("alert-primary");
    } catch (err) {}
    uAlert.innerHTML = "User Created Successfully";
    setTimeout(() => {
      setScreen("login");
    }, 2000);
  } else if (response.status == 409) {
    try {
      uAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      uAlert.classList.remove("alert-primary");
    } catch (err) {}

    try {
      uAlert.classList.add("alert-danger");
    } catch (err) {}
    uAlert.innerHTML = "Failed. User Already Exists!";
  } else {
    try {
      uAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      uAlert.classList.remove("alert-primary");
    } catch (err) {}

    try {
      uAlert.classList.add("alert-danger");
    } catch (err) {}
    uAlert.innerHTML = "User Creation Failed. Please Try Again";
  }
  setTimeout(() => {
    try {
      uAlert.classList.add("d-none");
    } catch (err) {}
    uAlert.innerHTML = "";
  }, 3000);
};

export const authenticateUser = async (e, setScreen, fromPage) => {
  e.preventDefault();
  let { URL } = process.env;
  let email = document.getElementById("login_email").value;
  let password = document.getElementById("login_password").value;
  const resp = await fetch(URL + "/api/account/authenticateUser", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let response = await resp.json();

  let loginAlert = document.getElementById("login-user");

  if (response.status == 200) {
    try {
      loginAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      loginAlert.classList.remove("alert-danger");
    } catch (err) {}

    try {
      loginAlert.classList.add("alert-primary");
    } catch (err) {}
    loginAlert.innerHTML = "User Logged in Successfully";
    localStorage.setItem("isLogin", "yes");
    localStorage.setItem("currentAliveUser", response.data.ID);
    if (fromPage && fromPage == "loginPage") {
      Router.push(URL + "/account");
    } else {
      setScreen("authenticated");
    }
  } else {
    try {
      loginAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      loginAlert.classList.add("alert-danger");
    } catch (err) {}

    try {
      loginAlert.classList.remove("alert-primary");
    } catch (err) {}
    loginAlert.innerHTML =
      "Failed! Invalid Email or Password. Please try Agian.";

    setTimeout(() => {
      loginAlert.innerHTML = "";
      loginAlert.classList.add("d-none");
    }, 3000);
  }
  if (fromPage == "checkout") {
    Router.push(URL + "/checkout");
  }
};

export const authenticateUserFromLogin = async (e, setScreen, fromPage) => {
  e.preventDefault();
  let { URL } = process.env;
  let email = document.getElementById("login_email2").value;
  let password = document.getElementById("login_password2").value;
  const resp = await fetch(URL + "/api/account/authenticateUser", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let response = await resp.json();

  let loginAlert = document.getElementById("login-user2");

  if (response.status == 200) {
    try {
      loginAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      loginAlert.classList.remove("alert-danger");
    } catch (err) {}

    try {
      loginAlert.classList.add("alert-primary");
    } catch (err) {}
    loginAlert.innerHTML = "User Logged in Successfully";
    localStorage.setItem("isLogin", "yes");
    localStorage.setItem("currentAliveUser", response.data.ID);
    if (fromPage && fromPage == "loginPage") {
      Router.push(URL + "/account");
    } else {
      setScreen("authenticated");
    }
  } else {
    try {
      loginAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      loginAlert.classList.add("alert-danger");
    } catch (err) {}

    try {
      loginAlert.classList.remove("alert-primary");
    } catch (err) {}
    loginAlert.innerHTML =
      "Failed! Invalid Email or Password. Please try Agian.";
  }

  setTimeout(() => {
    try {
      loginAlert.innerHTML = "";

      loginAlert.classList.add("d-none");
    } catch (err) {}
  }, 3000);
};

export const resetScreen = (setScreen, loginstatus) => {
  if (loginstatus && loginstatus == "yes") {
    Router.reload();
  }
  setScreen("login");
};

export const getCurrentUserData = async (e) => {
  try {
    e.preventDefault();
  } catch (err) {}
  let { URL } = process.env;
  let ID = localStorage.getItem("currentAliveUser");
  let userInfo = [];
  const response = await fetch(URL + `/api/account/userInfo/${ID}`);
  let responseData = await response.json();

  if (!responseData.length > 0) {
    userInfo = responseData.userInfo;
  } else {
    userInfo = [];
  }
  return userInfo;
};

export const updateAccountInfo = async (e, user) => {
  e.preventDefault();
  let { URL } = process.env;

  const response = await fetch(URL + "/api/account/updateAccount", {
    method: "POST",
    body: JSON.stringify({
      data: user,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const logOut = () => {
  if (typeof window != "undefined") {
    localStorage.setItem("isLogin", "no");
    Router.push(URL + "/login");
  }
};

export const getCurrentUserID = async () => {
  let userID = "";
  if (typeof window != "undefined") {
    try {
      userID = localStorage.getItem("currentAliveUser");
    } catch (err) {
      console.log(err);
    }
  }
  return userID;
};
