import mongoose, { connect } from 'mongoose';


//const uri = '';
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(db => console.log('db connected'))
//   .catch(err => console.log(err));


export const connectDB = async () => {
    const DB:string = process.env.DB || "asd"
    try {
        connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await console.log('db connected', DB);
    } catch (err) {
        console.log(err, "error");
    };
};
