var LoginService = {
  init: function () {
    // This function should check if the user is already logged in
    // If the user is logged in, then redirect to the index.html page
    // This function also initializes the validation of the login form and handles form submission
    // This function should be called from the login.html page
  },

  login: function (entity) {
    // This function should send the login ajax request to the server, using the RestClient
  },

  logout: function () {
    // This function should clear the local storage and redirect to the login page (login.html)
  },

  checkLoginStatus: function(token){
    // This function should be called upon opening the application (from the index.html page)
    // This function should check if the user is logged in and redirect to the login page (login.html) if not
    // This function should also check if the user is an admin and display the admin functions if so
  }
};