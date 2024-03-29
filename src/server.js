import express from 'express';
import cors from 'cors';
import { router } from '../src/router/index.js'

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api', router);

const port = process.env.PORT || 5000;
app.listen({ port }, () => {
    console.log(`🚀  Server ready at http://localhost:${port}`);
});