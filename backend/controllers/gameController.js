import mongoose from 'mongoose';
import gamesModel from '../models/GamesModel.js';

//Get All Games Controller
const getAllGames = async (req, res) => {
    const allGames = await gamesModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(allGames);
};

//Get a single games
const getGame = async (req, res) => {
    //Menangkap id dari url
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Your Id is Invalid' });
    }
    const singleGame = await gamesModel.findById(id);
    if (!singleGame) {
        res.status(404).json({ error: 'Games Not Found, Please wait for it :)' });
    }
    res.status(200).json(singleGame);
};

//Add new Games
const addGame = async (req, res) => {
    const { title, gameType, publisher, rating, downloadTotals } = req.body;
    try {
        const game = await gamesModel.create({
            title, gameType, publisher, rating, downloadTotals
        });
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json(error.message);
    }
    // res.json({ msg: "POST New Games" });
};

//Update Game
const updateGame = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Your Id is Invalid' });
    }
    await gamesModel.findOneAndUpdate({ _id: id }, {
        ...req.body
        // gameType: "Violance,Action-RPG",
        // publisher: "Rocstar",
        // rating: "18+ (Violence, Adult)",
        // downloadTotals: 50000
    });
    const newUpdatedGame = await gamesModel.findById(id);
    res.status(200).json(newUpdatedGame);
};

//Delete Games
const deleteGame = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Your Id is Invalid' });
    }
    const deletedGame = await gamesModel.findByIdAndDelete(id);
    res.status(200).json(deletedGame);
    // res.redirect(200 ,"/");
};

export { getAllGames, getGame, addGame, updateGame, deleteGame };