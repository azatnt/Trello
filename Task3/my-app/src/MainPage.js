// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Service from './service'
import CardsList from './CardsList';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  }
}));

function MainPage() {


  const classes = useStyles();
  const [name,setName] = useState("");
  const [cardsList,setCardsList] = useState(null);


  const cardsListReques = () => {
    const response = new Service().getCardsList()
    response.then(res=>{
      console.log(res)
      setCardsList(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  const createCardHandleChanged = () => {
    console.log("created")
      const response = new Service().createCard(name)
      response.then(res=>{
        console.log(res)
        setName(" ")
        cardsListReques()
      }).catch(err=>{
        console.log(err)
      })
  }

  useEffect(() => {
    cardsListReques()
  }, [])



  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <TextField value={name} onChange={(e)=>setName(e.target.value)} id="filled-basic" label="new Card" variant="filled" />
          <Button onClick={createCardHandleChanged} variant="contained" color="secondary">
            ADD
          </Button>
        </CardContent>
      </Card>
      <CardsList data={cardsList}/>
    </div>
  );
}

export default MainPage;
