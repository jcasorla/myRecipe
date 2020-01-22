const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const testRoutes = require('./test.routes');
apiRouter.use('/tests', testRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
