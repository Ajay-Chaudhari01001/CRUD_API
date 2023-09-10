const express = require("express");
const router = express.Router();
const MensRanking = require("../models/mens");

// handle postr equest
router.post("/mens", async(req, res)=> {
    try{
        const addingMensRecords = new MensRanking(req.body);
        // console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e.message);
    }
})

// handle get request
router.get("/mens", async(req, res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        // console.log(getMens)
        res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

// get request for one person
router.get("/mens/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.status(201).send(getMen);
    }catch(e){
        res.status(400).send(e.message);
    }
})

// patch request for update a document
router.patch("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).send(getMen);
    }catch(e){
        res.status(500).send(e.message);
    }
})

// delete request for update a document
router.delete("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id);
        res.status(201).send(getMen);
    }catch(e){
        res.status(500).send(e.message);
    }
})

router.get("/", async(req, res) => {
    res.send("Hello ther server at 3000");
})

module.exports = router;