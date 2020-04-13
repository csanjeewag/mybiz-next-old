var nodemailer = require('nodemailer');

changedateFormat=(dateString)=>{
    var date = new Date(dateString)
    var year = date.getFullYear();
    var month = date.getMonth()+1;
   
    var day = date.getDate();

       return ' '+year+'-'+getMonthname(month)+'-'+day+' ';
   }

   getMonthname=(a)=>{
    var b = "";

    switch(a){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }
        return b;
   }

EmailSend = function(to,subject,body,htmlTrue,cc){
    var transporter = nodemailer.createTransport({
        // host: "smtp.mailtrap.io",
        // port: 2525,
        //https://myaccount.google.com/u/1/lesssecureapps?pageId=none
        service : 'gmail',
         auth: {
           user: "lankatourtaxi@gmail.com",
           pass: "l@nk@tourt@xi"
         }
       });
       
       if(htmlTrue){
         if(cc!=null && cc!=''){
          var mailOptions = {
            from: 'lankatourtaxi@gmail.com',
            to: to,
            cc: cc,
            subject: subject,
            html: body
          };
         }
         else{
          var mailOptions = {
            from: 'lankatourtaxi@gmail.com',
            to: to,
          //  cc:'maduwanthikamayuri@gmail.com',
            subject: subject,
            html: body
          };
         }
   
       }
       else{
        var mailOptions = {
            from: 'lankatourtaxi@gmail.com',
            to: to,
            subject: subject,
            text: body
          };
       }
  
       
       transporter.sendMail(mailOptions, function(err, info){
        if (err){
            return  res.status(404).json(result);
        }
        else{
    
        return  res.status(200).json(info);
        }
        
       })
}

exports.sendEmail = function(req,res){

    var hostname = req.headers.host; // hostname = 'localhost:8080'
    //var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
    let Imagepath = 'https://api.lankatourtaxi.com/Images/';
    var email = req.body;
    let url = req.headers.origin;

    //let x = changedateFormat(Date.now());

    //console.log(x)

    var emails =
     { date: 'Date.now()',
        subject : '',
        companyName:'Sri lanka travel guide group,',
        heading: 'Thank you for comming sri lanka',       
        body1:'',
        body2:'',
        body3:'',
        booking : {
            country: 'Sri lanka',
            email: 'atoursrilanka@gmail.com',
            firstName: 'Chanaka',
            hometown: 'Balanagoda',
            lastName: 'Sanjeewa',
            number: '07142854514',

            startDate:'2012/8/2',
            endDate:'2012/8/5',
            vehicleName:'Honda FZ',
            vehicleImageUrl:'https://source.unsplash.com/random',
            vehicleType : 'Bike' 
        }

    }

    var html = `

    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" media="all" href="/assets/application-mailer-dbc5154d3c4160e8fa7ef52fa740fa402760c39b5d22c8f6d64ad5999499d263.css" />
      <style>

   #body { 
   hight:500px;
   background-image: linear-gradient(to right, rgba(51,153,255,0), rgba(51,153,255,0.8));
     background-repeat: no-repeat;
     background-attachment: fixed;
     background-size: cover;
   }
   #headingbody{
       
   }
   .maindiv{
    width: 80%; 
    hight:800px;
    padding: 2% 10% 10% 10%;
    
  
   }
   .companyName{
    font-family:verdana;
     color: #1d38f0;
     font-size:200%;
     text-shadow: 2px 2px 5px #D7DBF3;
   }
   .heading{
    font-family:verdana;
    text-align:center;
    color:#001499;
    font-size:300%;
    text-shadow: 4px 4px 8px #B7BFEB;
   }
   .salutation{
    font-size:200%
   }
   .bookingDetail{
    color:darkblue;
    font-size:150%
   }
   .body p{
    color: darkblue;
    font-size:150%
   }
   .footer p{
    font-size:150%
   }
   .footer h1{
    font-size:150%
   }
   .button {
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 16px;
    background-color: #8594ED;
    color: #081667;
    border: 2px solid #081667; 
 }

   </style>
    </head>

    <!-- Edit the code below this line
    <body style=" background-image: url('https://cdn.pixabay.com/photo/2014/10/03/12/05/elephant-471480_960_720.jpg'); background-repeat: no-repeat;
    background-attachment: fixed; background-size: cover;" >
    -->
    <body id="body"> 
     <div  class="maindiv">
         <div  >
         <h1 class="heading" >Lanka Tour Taxi</h1>
         <h4>we are offering comfortable safety day and round tours with 100% responsibility. All around Sri Lanka regarding customer satisfaction and their essentials with a good budget.</h4>
         <div  style="border-top: 5px solid white; ">

            
            <div style=" background-image: url('https://live.staticflickr.com/4007/4262234115_c530a55294_b.jpg'); background-repeat: no-repeat;
            background-attachment: fixed; background-size: cover;" >
  
           <h4 class="companyName">`+email.companyName+`</h4>

           <h1 class="heading"> `+email.heading+`</h1>
           <br/><hr>
           </div>


           <br/>
           <h3 class"salutation">`+changedateFormat(Date.now())+`, </h3>
           <h2 class"salutation"> Dear &nbsp; `+email.booking.firstName+`, </h2>
           
            <div class="bookingDetail">
            <h4> Your Booking Details here, Is there any mistake inform us,</h4>
           <h6>you are from: &nbsp;&nbsp; `+email.booking.country+`, `+email.booking.hometown+`</h6>
           <h6>Whatz app or viber number: &nbsp;&nbsp; `+email.booking.number+`</h6>
           <h6>booking start date: &nbsp;&nbsp; `+changedateFormat(email.booking.startDate)+`</h6>
           <h6>booking end date: &nbsp;&nbsp; `+changedateFormat(email.booking.endDate)+`</h6>
           <h6>vehicle: &nbsp;&nbsp; `+email.booking.vehicleType+` - `+email.booking.vehicleName+`</h6>
           </div>
           <img src='`+Imagepath+email.booking.vehicleImageUrl+`' alt="image" width="500">
         
           <div class="body">
                  <p >&nbsp;&nbsp;`+email.body1+`</p><br>
                  <p >&nbsp;&nbsp;`+email.body2+`</p><br>
                  <p >&nbsp;&nbsp;`+email.body3+`</p><br>
            </div>
           <a href="mailto:atoursrilanka@gmail.com" class="button" >Accept by email</a><br/><br/><br/>
           <a href="`+url+`/taxi/`+email.booking.vehicleId+`" class="button" >to taxi that you selected</a>
          <br><hr>
          <div class="footer">
            <h1> Thank you & best regards</h1>
            <p> Mr: Manoj Sanjeewa,</p>
            <p> Galweta waththa, weradhugoda, Ahangma,</p>
            <p> Sri lanka</p>
            <p> contact: +94 77-6712517, 
            +94 78-2430192 </p>
          </div>
          
         </div>
       </div>
   </div>
    </body>
   </html>
`
   return EmailSend(email.booking.email,email.subject,html,true,null)

}

exports.sendEmailAboutBoooking = function(req,res,id){

    var hostname = req.headers.host; // hostname = 'localhost:8080'
    //var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
    let Imagepath = 'https://api.lankatourtaxi.com/Images/';
    let url = req.headers.origin;
    

    //let x = changedateFormat(Date.now());

    //console.log(x)
    let email =
    { date: Date.now(),
       subject : 'Booking a new Taxi',
       companyName:'lanka Tour Taxi,',
       heading: 'There is a new Booking ',       
       body1:'Check your website and take a quick reply to customer.',
       myEmail : 'hk.manojsanjeewa@gmail.com',
     //  myEmail : 'csanjeewag@gmail.com',
       booking:{}
    }
    email.booking = req.body;
    var emails =
     { date: Date.now(),
        subject : 'Booking a new Taxi',
        companyName:'Sri lanka travel guide group,',
        heading: 'There is a new Booking ',       
        body1:'Check your website give a quick reply',
        myEmail : 'lankatourtaxi@gmail.com',

        booking : {
            country: 'Sri lanka',
            email: 'lankatourtaxi@gmail.com',
            firstName: 'Chanaka',
            hometown: 'Balanagoda',
            lastName: 'Sanjeewa',
            number: '07142854514',

            startDate:'2012/8/2',
            endDate:'2012/8/5',
            vehicleName:'Honda FZ',
            vehicleImageUrl:'https://source.unsplash.com/random',
            vehicleType : 'Bike' 
        }

    }

    var html = `

    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" media="all" href="/assets/application-mailer-dbc5154d3c4160e8fa7ef52fa740fa402760c39b5d22c8f6d64ad5999499d263.css" />
      <style>

   #body { 
   hight:500px;
   background-image: linear-gradient(to right, rgba(51,153,255,0), rgba(51,153,255,0.8));
     background-repeat: no-repeat;
     background-attachment: fixed;
     background-size: cover;
   }
   #headingbody{
       
   }
   .maindiv{
    width: 80%; 
    hight:800px;
    padding: 2% 10% 10% 10%;
  
   }
   .companyName{
    font-family:verdana;
     color: #1d38f0;
     font-size:200%;
     text-shadow: 2px 2px 5px #D7DBF3;
   }
   .heading{
    font-family:verdana;
    text-align:center;
    color:#001499;
    font-size:300%;
    text-shadow: 4px 4px 8px #B7BFEB;
   }
   .salutation{
    font-size:200%
   }
   .bookingDetail{
    color:darkblue;
    font-size:150%
   }
   .body p{
    color: darkblue;
    font-size:150%
   }
   .footer p{
    font-size:150%
   }
   .footer h1{
    font-size:150%
   }
   .button {
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 16px;
    background-color: #8594ED;
    color: #081667;
    border: 2px solid #081667; 
 }

   </style>
    </head>

    <!-- Edit the code below this line
    <body style=" background-image: url('https://cdn.pixabay.com/photo/2014/10/03/12/05/elephant-471480_960_720.jpg); background-repeat: no-repeat;
    background-attachment: fixed; background-size: cover;" >
    -->
    <body id="body"> 
     <div  class="maindiv">
         <div  >
         <h1 class="heading" >Lanka Tour Taxi</h1>
         <h4>we are offering comfortable safety day and round tours with 100% responsibility. All around Sri Lanka regarding customer satisfaction and their essentials with a good budget.</h4>
      
         <div  style="border-top: 5px solid white; ">

            <div style=" background-image: url('https://live.staticflickr.com/4007/4262234115_c530a55294_b.jpg'); background-repeat: no-repeat;
            background-attachment: fixed; background-size: cover;" >
  
           <h4 class="companyName">`+email.companyName+`</h4>

           <h1 class="heading"> `+email.heading+`</h1>
           <br/><hr>
           </div>

           <br/>
           <h3 class"salutation">`+changedateFormat(Date.now())+`, </h3>
           <h2 class"salutation"> Dear &nbsp; , </h2>
           
            <div class="bookingDetail">
            <h4> Booking Details here,</h4>
           <h6>booking from: &nbsp;&nbsp; `+email.booking.country+`, `+email.booking.hometown+`</h6>          
           <h6>booking start date: &nbsp;&nbsp; `+changedateFormat(email.booking.startDate)+`</h6>
           <h6>booking end date: &nbsp;&nbsp; `+changedateFormat(email.booking.endDate)+`</h6>
           <h6>Pick up point: &nbsp;&nbsp; `+email.booking.pickupPoint+`</h6>
           <h6>vehicle: &nbsp;&nbsp; `+email.booking.vehicleType+` - `+email.booking.vehicleName+` - `+email.booking.vehicleNo+`</h6>

            <h6>Name: &nbsp;&nbsp; `+email.booking.firstName+` `+email.booking.lastName+`</h6>
           <h6>Country and town: &nbsp;&nbsp; `+email.booking.country+`, `+email.booking.hometown+`</h6>
           <h6>Whatz app or viber number: &nbsp;&nbsp; `+email.booking.number+`</h6>

           </div>

           <img src='`+Imagepath+email.booking.vehicleImageUrl+`' alt="image" width="500">
          
         
           <div class="body">
                  <p >&nbsp;&nbsp;`+email.body1+`</p><br>

            </div>
           <a href="`+url+`/allbooking" class="button" >Accept</a><br/><br/><br/>
           <a href=`+url+'/sendemail/'+id+` class="button" >to send mail</a>
          <br><hr>
          <div class="footer">
            <h1> Thank you & best regards</h1>
          
          </div>
          
         </div>
       </div>
   </div>
    </body>
   </html>
`
   return EmailSend(email.myEmail,email.subject,html,true,'maduwanthikamayuri@gmail.com')

}

exports.sendEmailForgetpassword = function(req,doc){

    var hostname = req.headers.host; // hostname = 'localhost:8080'
    //var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
    let Imagepath = 'https://api.lankatourtaxi.com/Images/';
    let url = req.headers.origin;
    

    //let x = changedateFormat(Date.now());

    //console.log(x)
    let email =
    { date: Date.now(),
        subject : 'Reset your password',
        companyName:'Lanka tour taxi,',
        heading: 'Reset your password.',       
        body1:'you request a new password, please use this password as your password, after that reset your password.',
        name : doc.firstName,
        password: doc.password,
        toemail : doc.email,
    }
    email.booking = req.body;
    var emails =
     { date: Date.now(),
        subject : 'Booking a new Taxi',
        companyName:'Sri lanka travel guide group,',
        heading: 'There is a new Booking ',       
        body1:'you request new password, please use this password as your password, after that reset your password.',
        name : 'chanaka',
        password: 'kjsfhk',
        toemail : 'lankatourtaxi@gmail.com',

    }

    var html = `

    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" media="all" href="/assets/application-mailer-dbc5154d3c4160e8fa7ef52fa740fa402760c39b5d22c8f6d64ad5999499d263.css" />
      <style>

   #body { 
   hight:500px;
   background-image: linear-gradient(to right, rgba(51,153,255,0), rgba(51,153,255,0.8));
     background-repeat: no-repeat;
     background-attachment: fixed;
     background-size: cover;
   }
   #headingbody{
       
   }
   .maindiv{
    width: 80%; 
    hight:800px;
    padding: 2% 10% 10% 10%;
  
   }
   .companyName{
    font-family:verdana;
     color: #1d38f0;
     font-size:200%;
     text-shadow: 2px 2px 5px #D7DBF3;
   }
   .heading{
    font-family:verdana;
    text-align:center;
    color:#001499;
    font-size:300%;
    text-shadow: 4px 4px 8px #B7BFEB;
   }
   .salutation{
    font-size:200%
   }
   .bookingDetail{
    color:darkblue;
    font-size:150%
   }
   .body p{
    color: darkblue;
    font-size:150%
   }
   .footer p{
    font-size:150%
   }
   .footer h1{
    font-size:150%
   }
   .button {
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 16px;
    background-color: #8594ED;
    color: #081667;
    border: 2px solid #081667; 
 }

   </style>
    </head>

    <!-- Edit the code below this line
    <body style=" background-image: url('https://cdn.pixabay.com/photo/2014/10/03/12/05/elephant-471480_960_720.jpg); background-repeat: no-repeat;
    background-attachment: fixed; background-size: cover;" >
    -->
    <body id="body"> 
     <div  class="maindiv">
         <div  >
         <h1 class="heading" >Lanka Tour Taxi</h1>
         <h4>we are offering comfortable safety day and round tours with 100% responsibility. All around Sri Lanka regarding customer satisfaction and their essentials with a good budget.</h4>
      
         <div  style="border-top: 5px solid white; ">

            <div style=" background-image: url('https://live.staticflickr.com/4007/4262234115_c530a55294_b.jpg'); background-repeat: no-repeat;
            background-attachment: fixed; background-size: cover;" >
  
           <h4 class="companyName">`+email.companyName+`</h4>

           <h1 class="heading"> `+email.heading+`</h1>
           <br/><hr>
           </div>

           <br/>
           <h3 class"salutation">`+changedateFormat(Date.now())+`, </h3>
           <h2 class"salutation"> Dear, &nbsp; </h2>

        
         
           <div class="body">
                  <p >&nbsp;&nbsp;`+email.body1+`</p> <p >New password;&nbsp;`+email.password+`</p> <br/>

            </div>
           <a href="`+url+`/signin" class="button" >Sign in</a>
          
          <br><hr>
          <div class="footer">
            <h1> Thank you & best regards</h1>
            <p> Mr: Manoj Sanjeewa,</p>
            <p> Galweta waththa, weradhugoda, Ahangma,</p>
            <p> Sri lanka</p>
            <p> contact: +94 77-6712517, 
            +94 78-2430192 </p>
          </div>
          
         </div>
       </div>
   </div>
    </body>
   </html>
`
   return EmailSend(email.toemail,email.subject,html,true,null)

}