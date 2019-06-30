const List=require('../models/list');

// controller when you visit localhost
module.exports.home=(req,res)=>{
    List.findById({},(err,item)=>{
        if(err){
            console.log('error in fetching');
            return;
        }
        return res.render('home',{
            items:item,
        });
    })
};
// controller for creatig the list item
module.exports.create=(req,res)=>{
    List.create(req.body,(err,item)=>{
        if(err){console.log('error in adding item to db'); return;}
        return res.redirect('back');
    })
};
//controller for deleting the list item
module.exports.destroy=(req,res)=>{
    List.findByIdAndDelete({id:req.body.id},(err)=>{
        if(err){console.log('error in filding the contact'); return;}
        return res.redirect('back');
    })
};