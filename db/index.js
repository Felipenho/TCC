const mongoose = require('mongoose')

mongoose
    .connect(`mongodb://127.0.0.1:27017/admin`, { useNewUrlParser: true})
    .catch(e => {
        console.error(`Erro na conexão`, e.message)
    })

const db = mongoose.connection
module.exports = db