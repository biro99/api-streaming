const express =  require('express');
const moongosse = require('mongoose');
const cors = require('cors');
const dotenv = express();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, )
mongoose.connection.on('connected', () => {
    console.log('Connectado ao MongoDB');
});

app.listen(3000, () => {
    console.log('Server is rodando porta 3000');
});