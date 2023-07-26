import mongoose from 'mongoose';


const mongoURI =
  config.get('dbConfig.connectionString') +
  config.get('dbConfig.databaseName');

const mongoConnection = () => {
  mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  mongoose.connection.on('connected', () => {
    logger.message(`Mongoose connected to ${mongoURI}`);
  });

  mongoose.connection.on('error', (err) => {
    logger.message(
      `Failed to connect mongoose to ${mongoURI} due to error ${err}`,
    );
    process.exit(0);
  });

  mongoose.connection.on('disconnected', () => {
    logger.message(`Mongoose disconnected from ${mongoURI}`);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.message(
        `Mongoose connection terminated due to termination of application`,
      );
      process.exit(0);
    });
  });
};

export default mongoConnection;
