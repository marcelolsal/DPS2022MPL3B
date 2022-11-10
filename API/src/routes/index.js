const { Router } = require('express');
const { db } = require("../firebase");

const router = Router();

router.get('/users', async (req, res) => {
    const querySnapshot = await db.collection('users').get();
    
    const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    console.log(users)

    res.send("Hello");
});

router.post('/new-user', async (req, res) => {

    const { username, name, birthday, cellphone, email} = req.body;

    await db.collection('users').add({
        username,
        name,
        birthday, 
        email,
        cellphone
    });

    res.send("User created");
});

router.get('/user/:id', async (req, res) => {

    const doc = await db.collection('users').doc(req.params.id).get();

    console.log(doc.data());

    res.send("User");
});

router.get('/delete-user/:id', async (req, res) => {
    
    await db.collection('users').doc(req.params.id).delete();

    res.send("User deleted");
});

router.post('/update-user/:id', async (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    await db.collection('users').doc(req.params.id).update(req.body);

    res.send("User updated")
})

module.exports = router;