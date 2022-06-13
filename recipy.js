class Recipy
{
    constructor(id,name,category,level,kosher,img,ingrediens,instruction){
        this.id=id;
        this.name=name;
        this.category=category;
        this.level=level;
        this.kosher=kosher;
        this.img=img;
        this.ingrediens=ingrediens;
        this.instruction=instruction;
        this.like=0;
    }
}
let recpies=[
    new Recipy(1,"aa","manaHacroona",10,"chalavit","",{'milk':1,'sugar':0.5},'kashea meodd'),
    new Recipy(1,"bb","manaYikarit",8,"besarit","",{'meat':2,'salt':1},'kashea meodd'),
    new Recipy(1,"cc","manaRishoona",2,"parve","",{'batzek':8,'sugar':0.5},'kashea meodd'),
    new Recipy(1,"dd","manaHacroona",10,"chalavit","",{'milk':1,'sugar':0.5},'kashea meodd')
]
module.exports={Recipy,recpies};