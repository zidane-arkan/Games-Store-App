import express from 'express';
// import gamesModel from '../models/GamesModel.js';
import { getAllGames, getGame, addGame, updateGame, deleteGame } from '../controllers/gameController.js';

const router = express.Router();

//Games Data Get
router.get('/', getAllGames);
//Single Games Data Get
router.get(`/:id`, getGame);

//Games Data Post
router.post('/', addGame);

//Games Data Delete
router.delete('/:id', deleteGame);

//Games Data Put
router.patch('/:id', updateGame);

export default router;
