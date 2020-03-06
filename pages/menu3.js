import Layout from './../layouts/MainLayout';
import Link from 'next/link';


const Index = props => (

  

 <Layout>


    


        <div className="Categories">
      <h1 className="font1 topicC topicColor">{props.topic}</h1>

    <div className=" row projects">
      {props.catageries.map(c => (

       <div className="col-sm-6 col-lg-4 col-xl-3"> <div className="card">
       <div className="image ">
         <img src={c.imageUrl}  width="100%" height="200px" />
       </div>
       <div className="card-inner">
         <div className="header">
           <h3 className="font4 topicColor">{c.topic}</h3>
        
       </div>
       <div className="content">
       <h4 className="font6 subtopicColor">{c.subtopic}</h4>
       </div>
         </div>
     </div></div>
     
     
      ))}
   </div>
</div>
      <style jsx>
      {`
  .Categories{
    border-style: outset none none none;
    margin:20px;
  }
  .topicC {
    padding : 10px;
  }
   .card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    margin-top:10px;
    margin-bottom:10px;
    background-color:#FFF;
  }
  
  .card:hover {
    box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .card > .card-inner {
    padding:10px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .card .header h2, h3 {
    margin-bottom: 0px;
    margin-top:0px;
  }
  .card .header {
    margin-bottom:5px;
  }
  .card img{
    width:100%;
    transition: 0.5s;
  }
  .image{
    height : 100px;

  }
  .image img:hover{
    opacity: 0.5;
    transition: 0.5s;
    
  }
  .card:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
    .projects div {
        animation-name: fade-in;
        animation-fill-mode: both;
        animation-duration: 1s;
   }
    .projects div:nth-of-type(1) {
        animation-delay: 0.6s;
   }
    .projects div:nth-of-type(2) {
        animation-delay: 0.8s;
   }
    .projects div:nth-of-type(3) {
        animation-delay: 1.0s;
   }
    .projects div:nth-of-type(4) {
        animation-delay: 1.2s;
   }
    .projects div:nth-of-type(5) {
        animation-delay: 1.4s;
   }
    .projects div:nth-of-type(6) {
        animation-delay: 1.6s;
   }
    .projects div:nth-of-type(7) {
        animation-delay: 1.8s;
   }
    .projects div:nth-of-type(8) {
        animation-delay: 2.0s;
   }
    .projects div:nth-of-type(9) {
        animation-delay: 2.2s;
   }
    .projects div:nth-of-type(10) {
        animation-delay: 2.4s;
   }
    .projects div:nth-of-type(11) {
        animation-delay: 2.6s;
   }
    .projects div:nth-of-type(12) {
        animation-delay: 2.8s;
   }
    .projects div:nth-of-type(13) {
        animation-delay: 3.0s;
   }
    .projects div:nth-of-type(14) {
        animation-delay: 3.2s;
   }
    .projects div:nth-of-type(15) {
        animation-delay: 3.4;
   }
    @keyframes fade-in {
        0% {
            opacity: 0;
       }
        100% {
            opacity: 1;
       }
   }
    
      `}
      </style>
  </Layout>
);

Index.getInitialProps = async function() {


  const Catageries = [
    {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'},
    {id:2 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'},
    {id:3 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'},
    {id:4 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'},
    {id:5 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=5'},
    {id:6 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=6'},
    {id:7 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=7'},
    {id:8 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=8'},
    {id:9 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=9'},
    {id:10 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=10'},
    {id:11 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=11'}
    
]
 

  return {
  
    catageries : Catageries
  };
};

export default Index;