const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.connect("mongodb+srv://HJ:rarepst@cluster0.esdw4.mongodb.net/test", {
  userNewUrlParser: true,
});
mongoose.Promise = global.Promise;
