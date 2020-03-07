import Head from 'next/head'
import Header from './Header';


const Layout = props => (
  <div >
<Head>
<title>Agency - Start Bootstrap Theme</title>

  


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
<link href="https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap" rel="stylesheet"></link>


      </Head>

        {props.children}
      
    

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


 <style global jsx>
   {`
   
   
  
   
   
   
   .font1 {
    font-family: 'Trade Winds', cursive;
   }
   .font2{
    font-family: 'Ubuntu', sans-serif;
   }
   .font3{
    font-family: 'Cabin', sans-serif;
   }
   .font4{
    font-family: 'Anton', sans-serif;
   }
   .font5{
    font-family: 'Indie Flower', cursive;
   }
   .font6{
    font-family: 'Acme', sans-serif;
   }

   .topicColor {
    color:darkblue;
   }
   .subtopicColor{
    color:blue;
   }
   `}
 </style>

  </div>
);

export default Layout;