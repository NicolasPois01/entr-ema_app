import * as mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbproject",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
 con.query("SELECT * from product", function (err, result) {
      if (err) throw err;
      console.log(result);
      console.log("Base de données créée !");
    });
});

class server {
 
  constructor() {}
  

}