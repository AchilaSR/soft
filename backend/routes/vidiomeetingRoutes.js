const router = require("express").Router();
const vidiomeetingControlers = require('../controllers/vidiomeetingControlers');





router.post('/savemeetingid', vidiomeetingControlers.savemeetingid)
router.get('/getmeetingid/:id' , vidiomeetingControlers.getmeetingid)
router.delete('/deletemeeting/:id' , vidiomeetingControlers.deletemeeting)




module.exports  =  router