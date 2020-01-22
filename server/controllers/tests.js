const mongoose = require('mongoose');
const Test = mongoose.model('Test')
module.exports = {
    all: async (req, res) => {
        try {
            const tests = await Test.find();
            res.json({tests: tests});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Test.findById({ _id : req.params.id })
            .then((data) => {
                res.json({test: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const test = new Test(req.body);
        test.save()
            .then((data) => {
                res.json({newTest: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
    update: (req, res) => {
        Test.findByIdAndUpdate(req.params.id , req.body, {runValidators: true, new: true} )
            .then((data) => {
                res.json({updatedTest: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
	
    delete: (req, res) => {
        Test.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
	
	//very important if you are going to copy and past this code make sure to rename Product to appropiate
	// createComment: function(req,res){
    //     Comment.create(req.body, function(err, data){
    //         if (err){
    //             const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
    //             res.status(422).json(errors );
    //         }
    //         else{//note it may remove the . be sure to add it before : {comment: data}}
    //             Cake.findOneAndUpdate({_id:req.params.id}, { : {comment: data}}, {runValidators: true, new: true}, function(err, data){
    //                 if (err){
    //                     const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
    //                     res.status(422).json(errors );
    //                 }
    //                 else{
    //                    res.json(data)
    //                 }
    //             })
               
                
    //         }
    //     })
    // }
	
}
