const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: [3, 'At least 3 characters long']

    },
}, {timestamps: true });
mongoose.model('Test', TestSchema);
