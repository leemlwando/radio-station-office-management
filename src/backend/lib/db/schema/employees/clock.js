/**
 * CLOCKING FOR EMPLOYEES , VISITORS ETC
 */


const clockSchema = (Schema) => {
    return new Schema({
        clockin:{type: Date},
        clockout:{type: Date},
        officer_on_duty:{type: Schema.Types.ObjectId, ref: "Employees"},
        signee:{
            type: {type: String, enums: ["employee", "visitor", "guest"]},
            id: {type: Schema.Types.ObjectId, ref: "Users"} //register as user
        }
    });
}


module.exports = { clockSchema };