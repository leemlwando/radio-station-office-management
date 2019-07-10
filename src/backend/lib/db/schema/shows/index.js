/**
 * SHOWS
 * COMPONENTS:
 *  1. title
 *  2. description
 *  3. genre
 *  4. target market
 *  5. listership
 *  6. presenters
 *  7. monthly schedules
 *  8. episodes
 */




 const showSchema = (Schema) => {
     return new Schema({
        title:{type: String},
        description: {type: String},
        genre:{type: Array},
        target_audience: {type: Array},
        target_market: {type: Schema.Types.ObjectId, ref: "Leads"}, //to market to
        listernership:{type: Schema.Types.ObjectId, ref: "Listernership"}, //details about listership e.g geographic, demographic etc
        presenters: {type: Schema.Types.ObjectId, ref: "Employees"},
        Schedules:[{type: Schema.Types.ObjectId, ref: "Schedules"}], //monthly
        episodes: [{type: Schema.Types.ObjectId, ref: "Episodes"}],
        producers:[{type: Schema.Types.ObjectId, ref: "Employees"}],
        aproved_by:[{type: Schema.Types.ObjectId, ref: "Employees"}],
        timetable:{type: Schema.Types.ObjectId, ref: "TimeTables"} //when the show comes up
     });
 }