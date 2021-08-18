const contactSchema = require('../Models/conctactSchema');


// SUBMIT POST
    const submitPost = async (req, res) => {

        const newPost = new contactSchema(req.body)
    
        try {
            const savedPost = await newPost.save()
            res.status(200).json({savedPost});
        } catch (error) {
            res.status(500).json({message: 'There is an error', error})
        }
    
  }

  // FETCH ALL POST (GET REQUEST)
 const getPosts = async (req, res) => { 
    try {
        const postMessages = await contactSchema.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { submitPost, getPosts }