// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Title,CurlyBraces} from './Title.jsx'
import ProductTab from './ProductTab.jsx';
import ConditionalsTab from './ConditionalsTab.jsx';
import MsgBox from './MsgBox.jsx';
import AmzProductTab from './AmzProductTab.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';

// 1. 1st component
function Description() {
  return <h3>I am a Description Component!I will tell about the Title Component</h3>
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <ProductTab />
        <h1>Welcome to React</h1>
        <Title />  
        <CurlyBraces />
        <Description />
                <h1>Welcome to React</h1>
        <Title />  
        <CurlyBraces />
        <Description /> 
        <ConditionalsTab/>
        <MsgBox userName="Aditya" textColor="skyblue"/>
                    <h2 style={{textAlign:"center"}}>Blockbuster Deasls | Shop now</h2>
        <AmzProductTab/> */}
        <Button/>
        <hr/>
        <Form/>
    </>
  );
}

export default App
