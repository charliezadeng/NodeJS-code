
var registrationService = require('../services/registrationService')

/*
 * call other imported services, or same service but different functions here if you need to
*/

var middleware = async(req, res, next) => {
	  
	console.log("inside middleware");
	var page= 1;
	var limit =10	
	try{
	   var result= await registrationService(page, limit);
	  
	   return result;
      // return res.render('index', { title: 'Express --- yahooooo ---' });
     // next();
	}
	catch(e)
	{
		//throw Error('Error while Paginating Users');
		console.log(e);
	}
  }
module.exports = middleware;
 
 