// Require mongoose
let mongoose = require("mongoose");
// Create a schema class
let Schema = mongoose.Schema;

// Create the Note schema
let NoteSchema = new Schema({
  // Just a string
  title: {
    type: String,
    required: true
  },
  // Just a string
  body: {
    type: String,
    required: true
  }
});

// Create the Note model with the NoteSchema
let Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
