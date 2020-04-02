import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import chalk from 'chalk';

import helloRoutes from './routes/hello';

let app = express();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log(chalk.blue.bold('MongoDB is connected'));
  });

mongoose.set('useFindAndModify', false); //fixes a deprecation error for findOneAndUpdate mongoose method

//middleware
app.use(morgan('dev'));
app.use('/api', helloRoutes);

const port = process.env.PORT || 3200;

app.listen(port, () => {
  console.log(chalk.green.bold(`Server has been enabled on port ${port}`));
});
