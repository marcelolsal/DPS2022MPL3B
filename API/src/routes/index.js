const { Router } = require('express');
const { db } = require("../firebase");

const router = Router();

router.get('/user', async (req, res) => {
    const querySnapshot = await db.collection('users').get();
    
    const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    console.log(users)

    res.send(JSON.stringify(users));
});

router.post('/user/create', async (req, res) => {

    const { username, name, birthday, cellphone, email} = req.body;

    await db.collection('users').add({
        username,
        name,
        birthday, 
        email,
        cellphone
    });

    res.send({"msg":"User Created"});
});

router.get('/user/:username', async (req, res) => {
    const querySnapshot = await db.collection('users').get();
    const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    var status = false;
    users.forEach(user => {
        if(user.username == req.params.username){
            user.msg="success";
            res.send(JSON.stringify(user));
            status=true;
        }
    });
    if(!status){
        res.send({"msg":"error"});
    }
});

router.get('/user/delete/:id', async (req, res) => {
    
    await db.collection('users').doc(req.params.id).delete();

    res.send("User deleted");
});

router.post('/user/update:id', async (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    await db.collection('users').doc(req.params.id).update(req.body);

    res.send({"msg":"User Updated"});
})

module.exports = router;