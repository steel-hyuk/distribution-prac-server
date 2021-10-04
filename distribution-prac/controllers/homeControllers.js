const { User } = require('../models/user')

module.exports = {
    main: (req, res) => {
        res.send({message: 'WELCOME WELCOME!!!'})
    },
    test: (req, res) => {
        let text = req.body.text
        User.create({
            content: text,
        })
        .then(() => {
            res.send({message: `Added ${text} DONE!!!!!!`})
        })
        
    }
}