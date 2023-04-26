
const conn=require("../../database/index")

module.exports = {
    
    getAll: function (callback) {
      const sql = 'SELECT * FROM `eventplaner`'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,id) {
        const sql = 'SELECT * FROM eventplaner where ideventplaner =?'
      conn.query(sql,id,function (error, results) {
        callback(error, results);
      });
        
      },
      
      add: function(callback,eventInfo) {
        const sql ='INSERT INTO  `event planer` SET ?' 
        conn.query(sql,eventInfo,function (error, results) {
          callback(error, results);
        });  
      },
      deleteOne: function(callback,ideventplaner) {
        const sql = 'DELETE FROM eventplaner WHERE ideventplaner = ?' 
        conn.query(sql,ideventplaner,function (error, results ) {
          callback(error, results);
        });
      }
    }