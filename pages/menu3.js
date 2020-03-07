import Layout from './../layouts/MainLayout';
import Link from 'next/link';


const Index = props => (

  

 <Layout>


    <h1 className="font1">Catageries</h1>
    <h1 className="font2">Catageries</h1>
    <h1 className="font3">Catageries</h1>
    <h1 className="font4">Catageries</h1>
    <h1 className="font5">Catageries</h1>
    <h1 className="font6">Catageries</h1>
    <h1 className="font1 topicColor">Catageries</h1>
    <h1 className="font1 subtopicColor">Catageries</h1>



      <style jsx>
      {`
 
    
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