import { Router } from 'express';
import {
  getAllAnimes,
  getAnimesCount,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
} from './../controllers/animes.controllers';

const router: Router = Router();

router.get('/animes', getAllAnimes);
router.get('/animes/count', getAnimesCount);
router.get('/animes/:id', getAnimeById);
router.post('/animes', addAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);

export default router;
