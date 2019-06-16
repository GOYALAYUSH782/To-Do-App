const List=require('../models/list');

module.exports.home=(req,res)=>{
    return res.render('home',{
        list:List,
    });
};
module.exports.create=(req,res)=>{
    List.create(req.body,(err,item)=>{
        if(err){console.log('error in adding item to db'); return;}
        return res.redirect('back');
    })
}
module.exports.destroy=(req,res)=>{
    List.findByIdAndDelete({id:req.body.id},(err)=>{
        if(err){console.log('error in filding the contact'); return;}
        return res.redirect('back');
    })
}