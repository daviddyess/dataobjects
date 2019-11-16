import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Welcome to the API Boilerplate Server'))

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`API Boilerplate Server is running!`);
    console.log(`Read on http://localhost:${port}`)
  })

export default app;
