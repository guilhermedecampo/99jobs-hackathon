Meteor.startup(function () {

  // code to run on server at startup

  Meteor.methods({
    sendEmail: function(email) {
      console.log(email);
      Email.send({
        to: email,
        from: 'gentes@sejagenteboa.com.br',
        subject: 'Aqui está seu voucher!',
        text: 'Esse é seu voucher mostre para o caixa.'
      });
      return true;
    },
  });
});