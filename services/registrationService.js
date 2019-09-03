var model = require('../models/registrationModel');


/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/

var service = async(page, limit) => {
	  
	  console.log("inside service");
try{
	  var res= await model(page, limit);
	  return res
   
	}
	catch(e)
	{
		 throw new Error(e.message);
	}
  }
  
module.exports = service;