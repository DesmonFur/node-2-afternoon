let messages = []
let id = 0

module.exports = {
create: (req, res) => {
    console.log(req.body)
    const {text, time} = req.body
messages.push({id, text, time})
id++
    res.status(200).send(messages)
}
,

read: (req, res) => {
res.status(200).send(messages)
}
,

update:(req, res) => {
const {text} = req.body
const {id} = req.params
const index = messages.findIndex(num => num.id === +id)
let message = messages[index]

messages[index] = {
    id: message.id,
    text: text || message.text,
    time: message.time
}

res.status(200).send(messages)
} 
,

delete: (req, res) => {
const {id} = req.params
const findIndex = messages.findIndex(message => message.id == id)
 messages.splice(findIndex, 1)


res.status(200).send(messages)
}

}
//xd