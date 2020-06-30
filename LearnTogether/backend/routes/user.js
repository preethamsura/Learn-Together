const router = require('express').Router();
let User = require('../models/user.model.js')

router.route('/').get((req,res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+err))     
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const date = req.body.date;
    const newUser = new User({username, password, name, date});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err ));
})



module.exports = router;