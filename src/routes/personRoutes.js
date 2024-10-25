    import express from 'express'
    import readAllPersons from '../controllers/personControllers.js'

    const router = express.Router();

    router.get('/', readAllPersons);

    export default router