const Users = require('../model/vidiomeetingModel')

const vidiomeetingControlers = {

    savemeetingid: async(req, res) =>{
        try {
            const {userid,meetingid} = req.body;
 
            const user = await Users.findOne({userid});
            if(user){
                Object.assign(user,{meetingid:meetingid}); 
               await user.save(); 
            }
            else{
                const newUser = new Users({
                    userid,meetingid
                })
                await newUser.save();
            }
            

            res.json("sucess")
            
            // res.json({msg: "Registration successful"})
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
},
    getmeetingid: async (req, res) => {
        try {
            const userid = req.params.id;
            const user = await Users.findOne({userid});

            res.json(user)
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }

},
    deletemeeting: async(req,res) => {
        try {
            const userid = req.params.id;
            const user = await Users.findOne({userid});
            await user.remove();
            res.send({data:true});

        } catch (err) {
        return res.status(500).json({msg: err.message});
        }
}
}
module.exports = vidiomeetingControlers