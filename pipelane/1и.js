db.item.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
       category:"Umbrellas"
      }
    },

    // Stage 2
    {
      $skip: 10
    },

    // Stage 3
    {
      $limit: 5
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
