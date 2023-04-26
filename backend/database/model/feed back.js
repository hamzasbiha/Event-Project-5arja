
const conn=require("../../database/index")

module.exports = {
    
    getAll: function (callback) {
      const sql = 'SELECT * FROM `feed back`'
      conn.query(sql, function (error, results) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,id) {
        const sql = 'SELECT * FROM feed back where idfeed back =?'
      conn.query(sql,id,function (error, results) {
        callback(error, results);
      });
        
      },
      
      add: function(callback,feedbackInfo) {
        const sql = 'INSERT INTO feed back set  ?' 
        conn.query(sql,feedbackInfo,function (error, results) {
          callback(error, results);
        });  
      },
      deleteOne: function(callback,idfeedback) {
        const sql = 'DELETE FROM feed back WHERE idfeed back = ?' 
        conn.query(sql,idfeedback,function (error, results ) {
          callback(error, results);
        });
      }
    }