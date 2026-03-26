const mongoose = require(`mongoose`);

const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.knjs32o.mongodb.net/?appName=CursoNodeJS`,
    (error) => {
      if (error) return console.log(`Error while connecting to DB: ${error}`);

      return console.log(`Succesfully Connected to DB.`);
    },
  );
};

module.exports = connect;
