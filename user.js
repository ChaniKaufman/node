const recpies=require("./recipy").recpies
class User{
    constructor(id,name,password,email,adress,recpies)
    {
        this.id=id;
        this.name=name;
        this.password=password;
        this.email=email;
        this.adress=adress;
        this.recpies=recpies;
    }
}
let users=[
    new User(1,"aaa","12qw23","aaa@gmail.com","aaa",recpies),
    new User(2,"bbb","12qss23","bbb@gmail.com","bbb",[recpies[1]]),
    new User(3,'ccc','ccc','c@c','ccc',[recpies[2]])
]
module.exports={User,users};