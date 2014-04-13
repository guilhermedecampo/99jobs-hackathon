Events.remove({});

if (Events.find().count() === 0) {
Events.insert({
  createDate: moment(),
  date: moment().format('DD/MM/YY'),
  time: moment().format('HH mm'),
  title: 'Almoço beneficiente de dias da criança no orfanato',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia ipsum ut arcu sollicitudin, ultrices mattis risus ultricies. Nunc accumsan, augue id tempor tincidunt, nisl metus accumsan felis, ac pulvinar lectus augue a nisl. Integer laoreet sollicitudin vehicula. Integer venenatis est eu dictum imperdiet. Phasellus vitae ornare neque, vel auctor est. Fusce ante arcu, pretium pulvinar ante a, dignissim sollicitudin justo. Curabitur scelerisque feugiat hendrerit. Etiam tempor consequat sapien, ut semper lacus sagittis vel. Mauris mattis augue vel massa auctor ultricies. Sed pellentesque nisi eu nisi commodo pellentesque. Ut in ornare tortor. Donec sodales nulla at lacinia pharetra. Curabitur dictum aliquam enim non posuere. Donec lectus ipsum, tristique lacinia ornare eget, tempor sit amet elit. Ut accumsan orci et dolor commodo commodo. Pellentesque aliquet nec enim ac iaculis. Aenean ullamcorper facilisis volutpat. Nam iaculis elit dui, in aliquam erat eleifend vitae. Mauris at ullamcorper tortor. Nam rhoncus, sem sed dapibus faucibus, sem ante sollicitudin risus, eu iaculis dolor mauris convallis elit. Nullam vitae eleifend nisi.',
  ong: 'Só amor',
  type: 'uma notícia',
  linkong: 'ong',
  subscribed: []
});

Events.insert({
  createDate: moment(),
  date: moment().format('DD/MM/YY'),
  time: moment().format('HH MM'),
  title: 'Almoço beneficiente de dias da criança no orfanato',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia ipsum ut arcu sollicitudin, ultrices mattis risus ultricies. Nunc accumsan, augue id tempor tincidunt, nisl metus accumsan felis, ac pulvinar lectus augue a nisl. Integer laoreet sollicitudin vehicula. Integer venenatis est eu dictum imperdiet. Phasellus vitae ornare neque, vel auctor est. Fusce ante arcu, pretium pulvinar ante a, dignissim sollicitudin justo. Curabitur scelerisque feugiat hendrerit. Etiam tempor consequat sapien, ut semper lacus sagittis vel. Mauris mattis augue vel massa auctor ultricies. Sed pellentesque nisi eu nisi commodo pellentesque. Ut in ornare tortor. Donec sodales nulla at lacinia pharetra. Curabitur dictum aliquam enim non posuere. Donec lectus ipsum, tristique lacinia ornare eget, tempor sit amet elit. Ut accumsan orci et dolor commodo commodo. Pellentesque aliquet nec enim ac iaculis. Aenean ullamcorper facilisis volutpat. Nam iaculis elit dui, in aliquam erat eleifend vitae. Mauris at ullamcorper tortor. Nam rhoncus, sem sed dapibus faucibus, sem ante sollicitudin risus, eu iaculis dolor mauris convallis elit. Nullam vitae eleifend nisi.',
  local: 'Casa da maria',
  ong: 'Só amor',
  type: 'uma notícia',
  linkong: 'ong',
  subscribed: []
});

Events.insert({
  createDate: moment(),
  date: moment().format('DD/MM/YY'),
  time: moment().format('HH MM'),
  title: 'Almoço beneficiente de dias da criança no orfanato',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia ipsum ut arcu sollicitudin, ultrices mattis risus ultricies. Nunc accumsan, augue id tempor tincidunt, nisl metus accumsan felis, ac pulvinar lectus augue a nisl. Integer laoreet sollicitudin vehicula. Integer venenatis est eu dictum imperdiet. Phasellus vitae ornare neque, vel auctor est. Fusce ante arcu, pretium pulvinar ante a, dignissim sollicitudin justo. Curabitur scelerisque feugiat hendrerit. Etiam tempor consequat sapien, ut semper lacus sagittis vel. Mauris mattis augue vel massa auctor ultricies. Sed pellentesque nisi eu nisi commodo pellentesque. Ut in ornare tortor. Donec sodales nulla at lacinia pharetra. Curabitur dictum aliquam enim non posuere. Donec lectus ipsum, tristique lacinia ornare eget, tempor sit amet elit. Ut accumsan orci et dolor commodo commodo. Pellentesque aliquet nec enim ac iaculis. Aenean ullamcorper facilisis volutpat. Nam iaculis elit dui, in aliquam erat eleifend vitae. Mauris at ullamcorper tortor. Nam rhoncus, sem sed dapibus faucibus, sem ante sollicitudin risus, eu iaculis dolor mauris convallis elit. Nullam vitae eleifend nisi.',
  ong: 'Só amor',
  type: 'uma notícia',
  linkong: 'ong',
  subscribed: []
});




}

Meteor.users.remove({});
if (Meteor.users.find().count() === 0) {
 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });





}


