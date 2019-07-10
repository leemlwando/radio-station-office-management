// components
/**
 * 1. date
 * 2. producer
 * 3. station manager
 * 4 .entries
 *       - time 
 *       - duration
 *       - presenters
 *       - name of show
 *       - name of guests
 *       - comment
 */




 const logSheetSchema = (Schema) => {
     return new Schema({
        date:{type: Date, default: Date.now},
        producer:{type: Schema.Types.ObjectId, ref: "Employees"},
        station_manager:{type: Schema.Types.ObjectId, ref: "Employees"},
        entries:[{type: Schema.Types.ObjectId, ref: "LogSheetEntries"}],
        aproved_by:{type: Schema.Types.ObjectId, ref: "Employees"}
     });
 }

 const logSheetEntriesSchema  = (Schema) => {
     return new Schema({
        show_start:{type:Date},
        show_end:{type:Date},
        show_title:{type: Schema.Types.ObjectId, ref: "Shows"},
        presenters:[{type: Schema.Types.ObjectId, ref: "Employees"}],
        guests:[{type: Schema.Types.ObjectId, ref: "Guests"}],
        comment:{type: String, enums:["very good","good","not good", "not aired"]}
     });
 }


 module.exports = { logSheetSchema, logSheetEntriesSchema };


