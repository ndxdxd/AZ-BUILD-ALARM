
const mongoose = require('mongoose');
let recentInsert = null;




function setUpChangeStream(alarmsCollection) {
  // Set up change stream on your collection
  const changeStream = alarmsCollection.watch();

  // Set up change stream listener BEFORE performing any queries or actions
  changeStream.on('change', (change) => {
    const recentEntry = change.fullDocument;
    console.log('recent entry:', recentEntry);
    recentInsert = recentEntry;
  });
}


//get all alarms
const getAlarms = async(req,res) => {
    try {
        
        const db = req.app.get('db'); // Access the existing Mongoose connection from app
        const alarmStatusDb = mongoose.connection.useDb('alarmStatus');
        const alarmsCollection = alarmStatusDb.collection('lockedStatus');
        
        
        const alarms = await alarmsCollection.find({}).toArray();
        res.status(200).json(alarms);
      } catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).json({ error: error.message });
      }
}
// Function to return the current value of recentInsert
function getRecentInsert() {
    return recentInsert;
}


module.exports = {
    getAlarms,
    recentInsert,
    setUpChangeStream,
    getRecentInsert
    
}