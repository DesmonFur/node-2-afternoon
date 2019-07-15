const express = require("express")
const messages = require("./controllers/messages_controller")
// const messages = require("./controllers/messages_controller");

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


const messagesBaseUrl = "/api/messages"
app.post(messagesBaseUrl, messages.create);
app.get(messagesBaseUrl, messages.read);
app.put(`${messagesBaseUrl}/:id`, messages.update);
app.delete(`${messagesBaseUrl}/:id`, messages.delete);


// app.get("/api/messages", messages.create)
// app.post("/api/messages" , messages.read)
// app.put("/api/messages/:id", messages.update)
// app.delete("/api/messages/:id", messages.delete)


const PORT = 3001
app.listen(PORT, () => {console.log(` Pikachu use Thunderbolt on ${PORT}`)})
