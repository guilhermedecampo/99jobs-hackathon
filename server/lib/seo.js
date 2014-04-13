SeoCollection.remove({});


var seo = [ {
    "route_name" : "index", // the name of the Iron-Router route
    "title" : "Quem faz a diferença merece recompensa | Gente Boa",
    "meta" : [
      {
        "key" : "description",
        "value" : ""
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
