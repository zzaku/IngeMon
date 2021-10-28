const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);

    } catch(err) {
        res.json({message: err});
    }
});

router.get('/cpu', (req, res) => {
    res.send('voila tes perfs du cpu :');
});

router.get('/ram', (req, res) => {
    res.send('voila tes perfs de la ram :');
});

router.get('/disk', (req, res) => {
    res.send('voila tes perfs du disk :');
});

router.get('/debit', (req, res) => {
    res.send('voila tes perfs du debit :');
});


//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({

            performance:{
                cpu:{
                    use: req.body.use,
                    threads: req.body.threads,
                    speed: req.body.speed,
                    process: req.body.process,
                },
                ram:{
                    useram: req.body.useram,
                    free: req.body.free,
                    cache: req.body.cache,
                },
                disk:{
                    activtime: req.body.activtime,
                    readspeed: req.body.readspeed,
                    writespeed: req.body.writespeed,
                },
                debit:{
                    send: req.body.send,
                    receive: req.body.receive,
                }}
            
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);

    } catch(err) {
        res.json({message: err});
    }
    
});

//SPECIFIC POST
router.get('/:composantId', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.composantId);
    res.json(post);

    } catch(err) {
        res.json({message: err});
    }
    
})


//DELETE SPECIFIC POST
router.delete('/:composantId', async (req, res) =>{
    try{
        const removedPost = await Post.remove({_id: req.params.composantId});
        res.json(removedPost);

    } catch(err) {
        res.json({message: err});
    }
    
})



//UPDATE SPECIFIC POST
router.patch('/:composantId', async (req, res) =>{
    try{
        const updatedPost = await Post.updateOne({_id: req.params.composantId}, {$set: {performance:{
            cpu:{
                use: req.body.use,
                threads: req.body.threads,
                speed: req.body.speed,
                process: req.body.process,
            },
            ram:{
                useram: req.body.useram,
                free: req.body.free,
                cache: req.body.cache,
            },
            disk:{
                activtime: req.body.activtime,
                readspeed: req.body.readspeed,
                writespeed: req.body.writespeed,
            },
            debit:{
                send: req.body.send,
                receive: req.body.receive,
            }}
        }}
            );
        res.json(updatedPost);

    } catch(err) {
        res.json({message: err});
    }
})


module.exports = router;