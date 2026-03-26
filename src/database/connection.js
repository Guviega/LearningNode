const mongoose = require(`mongoose`);

const connect = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.knjs32o.mongodb.net/?appName=CursoNodeJS`,
    )
    .then(console.log(`Succesfully Connected to DB.`))
    .catch((error) => console.log(`Error while connecting to DB: ${error}`));
};

module.exports = connect;
