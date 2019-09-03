

var registrationMiddleware = require('../middlewares/registrationMiddleware')    


// Controller for all root / routes


	
  module.exports = {
	  
	  getregistrationData(req, res) {
	  
	  console.log("inside controller");
	  
	  
	    
		try{
			
		var test = registrationMiddleware(req,res);
		//check the return value
		console.log(test);
        return res.render('index', { title: 'Express --- yahooooo ---' });
		}
		catch(e)
		{
			console.error(e.message);
			return res.status(400).json({ status: 400, message: e.message });
		}
	 
  
	  },
  
  };

