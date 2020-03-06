var models = require('../model/user');

var exports = module.exports = {};

exports.viewall = function(req,res) {

    models.find(req,function(error,data){
        if(error){
            return   res.status(404).json('error');
            
        }else{
            
              return   res.status(200).json(data);
            
        }
    }).sort({date:-1})
   
  }

  exports.create = function(){

    let body=  { a_string: 'test' };
         
        
        var data = new models(body);
            data.save(function(err,result) {
                if (err){
                  
                    return  res.status(404).json(result);
                }
                else{
                    
                return  res.status(200).json(result);
                }
                
              });
    
 
  }

