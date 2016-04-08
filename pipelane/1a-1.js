db.item.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $group: {
       _id : "All",
       num : {$sum: 1},
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
