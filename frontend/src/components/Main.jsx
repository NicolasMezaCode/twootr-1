import React,{useState,useEffect} from 'react';
import Twoot from './Twoot';
import TwootList from './TwootList';
import axios from 'axios';
import Account from './Account';

export default function Main(props) {
    const {focus}=props
    const [twoot, setTwoot] = useState([]);
    const [username,setUsername]=useState('NicolasM');
    const [name,setName]=useState('Nicolas M');

    useEffect(() => {
        axios.get('https://twoot-react.herokuapp.com/twoot').then((res) => {
          console.log('get twoots buenas data', res.data);
          setTwoot(res.data);
        }).catch(err=>console.log(err))
    }, []);
    

    return (
        <>
            <Account username={username} name={name} setName={setName} setUsername={setUsername}/>
            <Twoot focus={focus} twoot={twoot} setTwoot={setTwoot} username={username} name={name} />
            <TwootList twoot={twoot} />
        </>
    );
}