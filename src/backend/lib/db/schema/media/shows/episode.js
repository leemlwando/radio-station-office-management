/**
 * SHOW EPISODES
 */



const showEpisode = (Schema) => {
    return new Schema({
        title:{type: String},
        scripts:[{type: Schema.Types.ObjectId, ref: "MediaScripts"}], //
        poster_images:[{type: Schema.Types.ObjectId, ref: "ImageMedia"}],
        audio_media_location:[{type: Schema.Types.ObjectId, ref: "AudioMedia"}],
        show_id:{type: Schema.Types.ObjectId, ref: "Shows"},
        date_aired:{type: Date},
        date_created: {type: Date, default: Date.now},
        uploaded_by:{type: Schema.Types.ObjectId, ref: "Employees"},
        aproved_by: {type: Schema.Types.ObjectId, ref: "Employees"},
        index:{type: Number} //number of episode
    });
}