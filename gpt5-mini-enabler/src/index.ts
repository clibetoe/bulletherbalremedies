import express from 'express';
import bodyParser from 'body-parser';
import { FeatureController } from './controllers/featureController';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const featureController = new FeatureController();

app.post('/enable-gpt5-mini', featureController.enableFeature.bind(featureController));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});