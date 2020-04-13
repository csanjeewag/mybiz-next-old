import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';
import GoogleSign from './../components/GoogleSign';
import ReactCrop from 'react-image-crop';

class Index extends Component {

  constructor() {
    super();
    this.state = {
      crop: {
        unit: 'px', // default, can be 'px' or '%'
        x: 130,
        y: 50,
        width: 200,
        height: 200
      }
    }

  }

  componentDidMount= ()=> {

  }
  showsidebar(){
    this.refs.child.showSidebar();
  }

  CropDemo({ src }) {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
  }

  onChange = crop => {
    this.setState({ crop });
  };
  
render(){

  const sidenavlink = [
    {id:1,link:'/',linkname:'home'},
    {id:1,link:'/menu',linkname:'menu'},
    {id:1,link:'/',linkname:'menu2'},
    {id:1,link:'/',linkname:'menu3'},
    {id:1,link:'/',linkname:'menu4'},
    {id:1,link:'/',linkname:'menu5'},
  ];
  const topic = 'Categeries';
  return(
<Layout>


<h1 className="font1">Catageries</h1>
<h1 className="font2">Catageries</h1>
<h1 className="font3">Catageries</h1>
<h1 className="font4">Catageries</h1>
<h1 className="font5">Catageries</h1>
<h1 className="font6">Catageries</h1>
<h1 className="font1 topicColor">Catageries</h1>
<h1 className="font1 subtopicColor">Catageries</h1>


<GoogleSign></GoogleSign>

<div className="col-3">

</div>
</Layout>
  )
}
 
}



export default Index;