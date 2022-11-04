import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    gameType: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }, 
    rating: {
        type: String,
        required: false,
        default: 'Not Checked Yet'
    },
    downloadTotals: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const gamesModel = mongoose.model('Game', gamesSchema);

export default gamesModel;