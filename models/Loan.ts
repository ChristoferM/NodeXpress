import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const loanSchema = new Schema({
    totalvalue: {
        type: Number
        // required: true
    },
    payments: 
        [{
            date: String,
            amount: Number
        }]
        // required: false
    
});

const Loan = mongoose.model('loan', loanSchema);

export { Loan }
