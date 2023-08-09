const db=connect("mongodb://root:test123*@localhost:27017")
//<protocole>:<username>password@host:port
console.log(db);

db=db.getSiblingDB("technocite");

const result=db.classrooms.insertOne({
    code:'SPirou',
    capacity:20,
    teacher:["sebastien","bernard de larue","jean michel zecca"]
});

  console.log(result);

 let toInsert=[
    {code:'SPirou', capacity:20},
    {code:'SPirou', capacity:20},
    {code:'SPirou', capacity:20},
    {code:'SPirou', capacity:20},

 ]



  const multiResult=db.classrooms.insertMany(toInsert);
  const classrooms=[];
  for(let i=0; i<100000; i++){
    classrooms.push({
        code:`${i.toString()}`,
    })
  }
  db.classrooms.insertMany(classrooms)