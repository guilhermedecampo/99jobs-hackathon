SeoCollection.remove({});


var seo = [ {
    "route_name" : "index", // the name of the Iron-Router route
    "title" : "Helping bor | Cleanio",
    "meta" : [
      {
        "key" : "description",
        "value" : "Cleanio est la nouvelle façon de faire nettoyer vos vêtements, quand vous le souhaitez et sans vous déplacer. Commandez en quelques clics, on s’occupe du reste !"
      }
      // add more meta tags
    ]
  }
];


if (!SeoCollection.findOne()) {

_.each(seo, function(doc) {

  SeoCollection.insert(doc);

});

}
