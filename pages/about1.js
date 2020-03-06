import Layout from './../layouts/MainLayout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
   
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 
  
})
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const mystyle = {
    mainimage:{
      Width: '100%',
      height: 'auto',
     
    },
    center :{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '18px',
      
    },
    container:{
      position: 'relative',
      backgroundImage: "url('/mainimage.jpg')",
      backgroundPosition: 'right bottom, left top',
      backgroundRepeat: 'no-repeat, repeat'
    }
  }

  return (
      <Layout>
   

    <div className='container'>
  
  <div >Centered</div>
  </div>

  <style JSX>{`
    .container {
        width:100%;
        height:100%;
        position:absolute;
        background: url('/mainimage.jpg') no-repeat;
    }
`}</style>
    </Layout>
  );
}
