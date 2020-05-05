var jwt = require('jwt-simple');
var secret = 'ONSHOPCHANAKALK'; 


exports.createtoken = function(req,res) {

        var payload = { name: req.name, email:req.email,isseller:req.isseller, date:Date.now()};
       
        var token = jwt.encode(payload, secret,'HS512');
         return token;
       
 
}

exports.isvaliduser = function(req,res){

    try{
      var body =  JSON.parse(req);
      var decode = jwt.decode(body.token, secret);
          if(body.email==decode.email){
            return true;
          }else{
            return false;
          }
      }catch(err){
        return  false
      }

}