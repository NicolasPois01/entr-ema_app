const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dbprojet"
});
// @ts-ignore
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "INSERT INTO produit (idProduit, nomProduit, poids_quantite, prix, stock, categorie_idCategorie ) VALUES ('1', 'Pomme', '3', '1', '900', '4')";
  // @ts-ignore
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Valeur insérée");
  });
});

