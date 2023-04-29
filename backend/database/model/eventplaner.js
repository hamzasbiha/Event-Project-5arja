
const conn=require("../../database/index")

module.exports = {
    
    getAll: function (callback) {
      const sql = 'SELECT * FROM `event planer`'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,id) {
        const sql = 'SELECT * FROM eventplaner where event_planer =?'
      conn.query(sql,id,function (error, results) {
        callback(error, results);
      });
        
      },
      
      add: function(callback,eventInfo) {
        const sql ='INSERT INTO  `event_planer` SET ?' 
        conn.query(sql,eventInfo,function (error, results) {
          callback(error, results);
        });  
      },
      deleteOne: function(callback,event_planer) {
        const sql = 'DELETE FROM event_planer  WHERE id = ?' 
        conn.query(sql,event_planer,function (error, results ) {
          callback(error, results);
        });
      }
    }