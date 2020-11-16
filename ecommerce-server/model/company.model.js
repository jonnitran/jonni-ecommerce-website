const mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.pluralize(null);           //avoid s post fix for collection. 

const companySchema = mongoose.Schema;

const companySchemaRef = new companySchema({
    _companyId:Number,
    compnayName:String,
    companyDescr: String,
    //productCompany:{ type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
});


module.exports = mongoose.model('Company', companySchemaRef);