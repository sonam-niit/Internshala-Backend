let express = require('express');
const myMiddleware1 = require('./middlewares/myMiddleware1');
const isAdmin = require('./middlewares/isAdmin');

const app = express();
app.use(express.json());

app.post('/adminDash',myMiddleware1, isAdmin, (req, res)=>{
    res.send('Welcome')
})

app.listen(5000,()=>{
    console.log('Server Started');
})