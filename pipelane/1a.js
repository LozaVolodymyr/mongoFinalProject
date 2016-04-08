db.item.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      category: {$ne:null}
      }
    },

    // Stage 2
    {
      $group: {
       _id : {"category":"$category"},
       num : {$sum: 1}
      }
    },

    // Stage 3
    {
      $sort: {
       num: -1
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
