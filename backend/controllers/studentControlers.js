const Users = require("../model/studentModel");
const bcrypt = require("bcrypt");

const studentControlers = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email already exists" });

      const passwordEncrypt = await bcrypt.hash(password, 10); // encrypt the password

      const newUser = new Users({
        email,
        password: passwordEncrypt,
      });

      // res.json(newUser);

      await newUser.save();
      res.json({ msg: "Registration successful" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User doesn't exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });

      res.send(user.id);
      
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  saveinfo: async (req,res) =>{
    try {
        const id = req.params.id;
        const user = await Users.findById(id).select('-password')
        if(!user) res.status(400).json({msg: "User doesn't exists"})
        Object.assign(user,req.body);
        user.save();
        res.send({user})

        
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
},
getUser: async (req, res) => {
  try {
      const id = req.params.id;
      const user = await Users.findById(id).select('-password')
      if(!user) res.status(400).json({msg: "User doesn't exists"})

      res.json(user)
  } catch (err) {
      return res.status(500).json({msg: err.message});
  }

},


changep: async(req,res) =>{
  try {
      const {id,password, newpassword} = req.body;
      const user = await Users.findById(id)

      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) return res.status(400).json({msg: "Incorrect Password"});

      const passwordEncrypt = await bcrypt.hash(newpassword, 10); // encrypt the password
      
      Object.assign(user,{password:passwordEncrypt}); 
      user.save();  
      res.json({msg: "Successfully change password"});
      
  } catch (err) {
      return res.status(500).json({msg: err.message});
  }
},
delectacc: async(req,res) => {
  try {
      const id = req.params.id;
      const user = await Users.findById(id)
      await user.remove();
      res.send({data:true});

  } catch (err) {
      return res.status(500).json({msg: err.message});
  }
}
};

module.exports = studentControlers;
