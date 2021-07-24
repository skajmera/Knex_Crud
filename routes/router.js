const router = require("express").Router()
const knex = require("knex")
router.get('/', (req, res) => {
    res.send('hello brother!! :)')
})

router.post('/', (req, res) => {


    knex('NG2').insert({
        Name: req.body.Name,
        email: req.body.email,
        password: req.body.password
    }).then((data) => {
        console.log(data);
        res.send("singup successfully")
    })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });

})


module.exports = router