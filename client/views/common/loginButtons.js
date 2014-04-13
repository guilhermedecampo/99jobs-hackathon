Template.loginButtons.rendered = function () {
  $('#login-buttons-logout').text('Sair');
  $('.text-besides-image').text('Entrar com Facebook');
  $('.login-display-name').addClass('hidden');
};

Template._loginButtonsLoggedOutSingleLoginButton.rendered = function () {
  $('#login-buttons-logout').text('Sair');
  $('.text-besides-image').text('Entrar com Facebook');
  $('.login-display-name').addClass('hidden');
};

