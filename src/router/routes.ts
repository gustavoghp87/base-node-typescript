import { Router, Request, Response } from 'express';
const router:Router = Router();


router.get('/', (req:Request, res:Response) => {
    console.log(req.params)
    res.json({llega: "ok simple"})
});

router.get('/section', (req:Request, res:Response) => {
    console.log(req.params)
    res.json({llega: "ok simple section"})
});


export default router;