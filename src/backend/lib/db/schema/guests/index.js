/**
 * GUEST
 */



const guestSchema = (Schema) => {
    return new Schema({
        guest_id:{type: String},
        user_id: {type: Schema.Types.ObjectId, ref: "Users"},
        featured_episodes:[{type: Schema.Types.ObjectId, ref: "Episodes"}]
    });
}

module.exports = { guestSchema };