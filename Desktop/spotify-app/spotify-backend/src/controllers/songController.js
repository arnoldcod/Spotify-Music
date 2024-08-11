import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
    try {
        const { name, desc, album } = req.body;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        if (!name || !desc || !album || !audioFile || !imageFile) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
            resource_type: "video",
        });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });
        const duration = `${Math.floor(audioUpload.duration / 60)}:${String(Math.floor(audioUpload.duration % 60)).padStart(2, '0')}`;

        console.log(name, desc, album, audioUpload, imageUpload);

        const songData = {
            name,
            desc,
            album,
            file: audioUpload.secure_url,
            image: imageUpload.secure_url,
            duration,
        };

        const song = new songModel(songData);
        await song.save();

        res.json({ success: true, message: "Song Added" });
    } catch (error) {
        console.error('Error adding song:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


const listSong = async (req, res) => {
    try {
        const allSongs = await songModel.find({});
        res.json({ success: true, songs: allSongs });
    } catch (error) {
        res.json({ success: false });
    }
};

const removeSong = async (req, res) => {
    try {
        await songModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Song removed" });
    } catch (error) {
        res.json({ success: false });
    }
};

export { addSong, listSong, removeSong };
