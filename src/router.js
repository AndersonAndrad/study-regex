import { Router } from 'express';

// controllers
import Text from './App/controller/text.controller';

const router = new Router();

router.get('/', (request, respose) => {
  return respose.json('ok');
});

router.get('/text', Text.showText);

export default router;
