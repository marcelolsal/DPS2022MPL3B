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

router.post('/user/update/:id', async (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    await db.collection('users').doc(req.params.id).update(req.body);

    res.send({"msg":"User Updated"});
});

// Citas

router.get('/cita', async (req, res) => {
    const querySnapshot = await db.collection('citas').get();
    
    const citas = querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data()}));

    console.log(citas)

    res.send(JSON.stringify(citas));
});

router.get('/cita/user/:id', async (req, res) => {
    const querySnapshot = await db.collection('citas').get();
    const citas = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    var array = [];
    citas.forEach(cita => {
        if(cita.idCliente == req.params.id){
            cita.msg="success";
            array.push(cita);
            console.log(cita);
        }
    });
    res.send(JSON.stringify(array));
});

router.get('/cita/:id', async (req, res) => {
    const querySnapshot = await db.collection('citas').get();
    const citas = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    citas.forEach(cita => {
        if(cita.id == req.params.id){
            cita.msg="success";
            console.log(cita);
            res.send(JSON.stringify(cita));
        }
    });
    res.send(JSON.stringify(array));
});

router.post('/cita/create', async (req, res) => {

    const { idCliente, nombreExamen, fechaRegistro, fechaEntregaMuestra } = req.body;

    await db.collection('citas').add({ idCliente, nombreExamen, fechaRegistro, fechaEntregaMuestra });

    res.send({"msg":"Cita Created"});
});

router.get('/cita/delete/:id', async (req, res) => {
    
    await db.collection('citas').doc(req.params.id).delete();

    res.send("Cita deleted");
});

router.post('/cita/update/:id', async (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    await db.collection('citas').doc(req.params.id).update(req.body);

    res.send({"msg":"Cita Updated"});
})

module.exports = router;