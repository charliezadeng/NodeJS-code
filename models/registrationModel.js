/* import { validateUsername } from './validate';

const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true,
    validate: [{ validator: validateUsername, msg: 'Invalid username' }],
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User; */

/*
   * put code to call database here
   * this can be either an ORM model or code to call the database through a driver or querybuilder
   * i.e.-
    INSERT INTO blogposts (user_name, blogpost_body)
    VALUES (user, content);
  */


const registrationModel = (page, limit) => {
	console.log("inside model");
	console.log(page + " - " + limit);
	
	return 1
}

module.exports = registrationModel
