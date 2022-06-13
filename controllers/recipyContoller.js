var express=require("express");
var router=express.Router();

var crs=require("cors")
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

let recpies = require('../recipy').recpies;

router.get('/getRecipies', (req, res) => {
    if (recpies)
        res.status(200).send(recpies)
    }
)
router.post('/addRecipy', (req, res) => {
    let newRecipy = req.body;
    if (newRecipy) {
        recpies.push(newRecipy);
        res.status(200).send(recpies)
    }
    else res.status(400).json({error:true, error_description:'recipy not found'})
})
router.put('/addLike/:idRecipy',(req,res)=>{
    let ind=recpies.findIndex(x=>x.id==req.params.idRecipy)
    if(ind>-1)
    {
        recpies[ind].like++;
        res.status(200).send(recpies[ind]);
    }
    else res.status(400).json({error:true, error_description:'recipy not found'})
})

module.exports= router;