const router = require('express').Router();
module.export = router;

router.use('/students', require('./students'));

router.use((req, res, next) => {
    const error = new Error ('Not Found')
})