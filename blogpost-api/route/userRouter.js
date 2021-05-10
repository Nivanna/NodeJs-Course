const express = require('express');
const User = require('../model/User');
const router =  express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');
router.post('/signup', async (req, res)=>{
    try{
        const user = req.body;
        // check email
        const checkedEmail = validator.isEmail(user.user_email);
        if(!checkedEmail){
            res.send('Error Email is invalid.');
        }

        // if already has user_email
        const checkedHasEmail = await User.findOne({user_email:user.user_email})
        if(checkedHasEmail){
            res.status().send('Email has already existed')
        }
        user.user_password = await bcrypt.hash(user.user_password, 8)

        if(!user.user_password){
            throw Error('cannot hash.')
        }
        const saveUser = User(user)
        const result = await saveUser.save();
        if(!result){
            res.status(400).send('user cannot saved.')
        }
        res.status(201).send(result)
    }catch(e){
        res.status(500).send('inter server error.')
    }
})

module.exports = router;