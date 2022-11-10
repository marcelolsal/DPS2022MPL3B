const { Router } = require('express');
const { db } = require("../firebase");

const router = Router();

router.get('/', async (req, res) => {
    const querySnapshot = await db.collection('users').get();
    console.log(querySnapshot.docs[0].data());
    res.send("Hello");
});

module.exports = router;