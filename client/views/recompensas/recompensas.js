Template['recompensas'].helpers({
});

Template['recompensas'].events({
  'click .magazine': function(event, template) {
    console.log('teste');
    Meteor.call('sendEmail', Meteor.user().profile.email, function (error, result) {
      if (error) {
        humane.log('ERRO');
      }
      if (result) {
        humane.log('Voucher enviado! Obrigado.');
      }
    });

  }
});

