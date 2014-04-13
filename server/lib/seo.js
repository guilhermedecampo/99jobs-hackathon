SeoCollection.remove({});


var seo = [ {
    "route_name" : "index", // the name of the Iron-Router route
    "title" : "tasdfasdf asdfasdf",
    "meta" : [
      {
        "key" : "description",
        "value" : "asdf !"
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
