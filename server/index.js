const express = require('express')
const messagesCtrl = require('./controllers/messages_controller')

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', messagesCtrl.read);
app.post('/api/messages', messagesCtrl.create);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.delete);

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
