var mongoose = require("mongoose");
var dbURI = "mongodb+srv://bilbul14597:*123456*@cluster0.xqegprh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresine bağlandı!");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Bağlantı kesildi!");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("Bağlantı kapandı!");
  process.exit(0);
});

require("./venue")