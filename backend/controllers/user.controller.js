import User from "../models/user.models.js"


export const getUsersForSidebar = async(req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        //find every user in the database but not (&ne) the one whose id we are providint in the find function
        const filterdUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");

        res.status(200).json({filterdUsers});

    } catch (error) {
        console.log("error in getUsersForSidebar controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
}