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
    const email = req.body.email;
    const name = req.body.name;
    const skills_completed = req.body.skills_completed;
    const skills_interested= req.body.skills_interested;
    const friends = req.body.freinds;
    const pfp = req.body.pfp;
    const date = Date.parse(req.body.date);

    const newUser = new User({
        username, password, name, date, email, pfp, skills_completed, skills_interested, friends
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err ));
})


module.exports = router;