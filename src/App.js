import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import {useEffect,useState} from 'react'
import Chats from './Components/Chats'
import Login from './Components/Login'
import styled from 'styled-components'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import db, {auth} from './Firebase'

function App() {

  const [Rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const getRooms = () => {
      db.collection('Rooms').onSnapshot(snapshot => {
        setRooms(snapshot.docs.map(doc => {
            return { id : doc.id, name: doc.data().Name}
        })) 
      })
  }

  const signOut = () => {
    auth.signOut()
    .then(() => {
      localStorage.removeItem('user')
      setUser(null);
    })
  }

  useEffect(() => {
    
    getRooms();
    
  }, [])

  return (
    <div className="App">
      <Router>
       {
         !user ? <Login setUser = {setUser}/> :
         <Container>
         <Header signOut = {signOut} user = {user}/>
         <Main>
           <Sidebar rooms = {Rooms} />
           <Switch>
             <Route path = '/room/:channelId' >
                 <Chats user = {user}/>
             </Route>
             <Route path = '/'>
                Select or Create a Channel
             </Route>
           </Switch>
         </Main>
       </Container>
       }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div` 
  width:100%;
  height:100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
` // This is basically a style Tag

const Main = styled.div`
  display: grid;
  grid-template-columns: 200px auto;

`