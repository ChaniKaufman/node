
var express = require("express");
var router = express.Router();
var crs = require("cors")
router.use(crs())

// router.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authoriztion");
//     if(req.method == "OPTIONS")
//     {
//         res.header("Access-Control-Allow-Method","PUT, POST, PATCH, GET, DELETE");
//         return res.status(200).json({});
//     }
//     next();
// })
let users = require('../user').users;

router.post('/addUser', (req, res) => {
    let newUser = req.body;
    if (newUser) {
        users.push(newUser);
        res.status(200).send(users)
    }
    else res.status(400).json({ error: true, error_description: 'user not found' })
})
router.get('/getUserByNamePassword', (req, res) => {
    if (req.query.name && req.query.password) {
        let user = users.find(x => x.name == req.query.name && x.password == req.query.password)
        if (user)
            res.status(200).send(user)
        else
            res.status(400).json({ error: true, error_description: 'user not found' })
    }
})
router.get('/getUsers', (req, res) => {
    if (users)
        res.status(200).send(users)
}
)
router.delete('/deleteUser/:id', (req, res) => {
    if (req.params.id) {
        users = users.filter(x => x.id != req.params.id)
        res.status(200).send(users)
    }

    else res.status(400).json({ error: true, error_description: 'user not found' })
}
)
router.put('/editUser', (req, res) => {
    if (req.body && req.body.id) {
        let ind = users.findIndex(x => x.id == req.body.id);
        if (ind) {
            users[ind].name = req.body.name;
            users[ind].password = req.body.password;
            users[ind].email = req.body.email;
            users[ind].adress = req.body.adress;
            users[ind].recpies = req.body.recpies;
            res.status(200).send(users)
        }
        else res.status(400).json({ error: true, error_description: 'user not found' })
    }
    else res.status(400).json({ error: true, error_description: 'user not found' })

}
)
router.post('/addRecipyToUser/:idUser', (req, res) => {
    if (req.body && req.params.idUser) {
        let newRecipy = req.body;
        let ind = users.findIndex(x => x.id == req.params.idUser)
        if (ind > -1) {
            users[ind].recpies.push(newRecipy);
            // recpies.push(newRecipy);
            res.status(200).send('המתכון נוסף בהצלחה')
        }
    }
    else res.status(400).json({ error: true, error_description: 'recipy not found' })
})
router.put('/editRecipyToUser/:idUser', (req, res) => {
    if (req.body && req.body.id && req.params.idUser) {
        // console.log(idUser);
        let index = users.findIndex(x => x.id == req.params.idUser);


        if (users[index]) {
            let indexRe = recpies.findIndex(x => x.id == req.body.id);
            users[index].recpies[indexRe].name = req.body.name;
            users[index].recpies[indexRe].category = req.body.category;
            users[index].recpies[indexRe].level = req.body.level;
            users[index].recpies[indexRe].kosher = req.body.kosher;
            users[index].recpies[indexRe].img = req.body.img;
            users[index].recpies[indexRe].ingrediens = req.body.ingrediens;
            users[index].recpies[indexRe].instruction = req.body.instruction;
            res.status(200).send(users)
        }
        else res.status(400).json({ error: true, error_description: 'user not found' })
    }
    else res.status(400).json({ error: true, error_description: 'missing idUser or recipy' })

}
)
router.delete('/deleteRecipyFromUser', (req, res) => {
    if (req.query.idUser && req.query.idRecipy) {
        let ind = users.findIndex(x => x.id == req.query.idUser);
        users[ind].recpies = users[ind].recpies.filter(x => x.id != req.query.idRecipy);
        res.status(200).send(users[ind])
    }

    else res.status(400).json({ error: true, error_description: 'user not found' })
}
)
module.exports = router;