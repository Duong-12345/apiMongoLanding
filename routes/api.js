const express = require("express");
const { default: mongoose } = require("mongoose");
const { db } = require("../models/api");
const router = express.Router();
const test = require("../models/api");


//GETTING ALL
router.get("/", async (req, res) => {
  try {
    const test1 = await test.find();
    res.json(test1);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting province
router.get('/province', async (req, res) =>{
// res.send('this is pro')
  try{
    const province = await db.collection('province').find({}).toArray()
    res.json(province);
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})

//GETTING DISTRICT
router.get('/district', async (req, res) =>{
  try{
    const district = await db.collection('district').find({}).toArray()
    res.json(district);
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})

//GETTING DISTRICT
router.get('/school', async (req, res) =>{
  try{
    const school = await db.collection('school').find({}).toArray()
    res.json(school);
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})
//GETTING DEPARTMENT
router.get('/department', async (req, res) =>{
  try{
    const department = await db.collection('department').find({}).toArray()
    res.json(department);
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})
//GETTING PROGRAM
router.get('/program', async (req, res) =>{
  try{
    const program = await db.collection('program').find({}).toArray()
    res.json(program);
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})

//GETTING ONE
router.get("/:id", getPerson, (req, res)=>{
    res.send(res.person)
});

//CREATING ONE
router.post("/", async (req, res) => {
  console.log(req)
  try {
    const test1Person = new test({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        provinceCode: req.body.provinceCode,
        districtCode: req.body.districtCode,
        schoolCode: req.body.schoolCode,
        type: req.body.type,
        date: req.body.date,
        time: req.body.time,
        numberOfParticipant: req.body.numberOfParticipant,
        programCodes: req.body.programCodes,
        departmentCodes: req.body.departmentCodes,
      });
    const newPerson = await test1Person.save();
    
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

//Create Student
// router.post('/', async(req, res)=>{
//   try{
//     const stu = new student({
//       name: req.body.name,
//       address: req.body.address,
//     })
//     var conn = mongoose.connection;
//     conn.collection('student').insertOne(stu)
//     res.status(201).json(stu);
//   }
//   catch(err){
//     res.status(400).json({
//       message: err.message,
//     });
//   }
// })

//UPDATING ONE
router.patch("/:id", getPerson,async (req, res) => {
    if(req.body.name != null){
        res.person.name = req.body.name
    }
    if(req.body.address != null){
        res.person.address = req.body.address
    }
    try {
        const updatePerson = await res.person.save()
        res.json(updatePerson)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
});

//DELETING ONE
router.delete("/:id", getPerson , async (req, res) => {
    try{
        await res.person.remove()
        res.json({ message: 'Deleted person'})
    }
    catch(err){
        res.status(500).json({ message: err.message})
    }
});

async function getPerson(req, res, next){
    let person
    try{
        person = await test.findById(req.params.id)
        if(person == null){
            return res.status(404).json({message:'Cannot find that person'})
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.person = person
    next()
}

module.exports = router;
