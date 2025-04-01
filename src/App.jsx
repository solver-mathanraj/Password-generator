
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(4);
  const [special, setspecial] = useState(true)
  const [number, setnumber] = useState(true);
  const [lcase, setlcase] = useState(true);
  const [ucase, setucase] = useState(true);
  const [pass, setpass] = useState("");

  const genpass = () =>{
    const small="abcdefghijklmnopqrstuvwxyz"
    const big= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num= "1234567890"
    const speciall="!@#$%^&*()_+-~`?,.<>"
    let passpool ="";

    if(special){passpool+=speciall}
    if(number){passpool+=num}
    if(ucase){passpool+=big}
    if(lcase){passpool+=small}
    if(passpool==""){
      setpass("please select any attributes") 
      return }
    let password=""
    for(let i=0;i<length;i++){
      let random=Math.floor(Math.random()*passpool.length)
      password+=passpool[random]
    }
    setpass(password)

  }

 
  return (
    <>
      <div className="con">
        <h1>Password Generator</h1>
        <div className="con2">
          <div><input type="checkbox" name="setlcase" id="lc" onChange={(e)=> {setlcase(e.target.checked)} }checked={lcase}/>
          <label htmlFor="lc">lowecase</label></div>
          <div><input type="checkbox" name="setucase" id="uc" onChange={(e)=> {setucase(e.target.checked)}} checked={ucase}/>
          <label htmlFor="uc">uppercase</label></div>
          <div><input type="checkbox" name="setnumber" id="num" onChange={(e)=> {setnumber(e.target.checked)}} checked={number} />
          <label htmlFor="num">number</label></div>
          <div><input type="checkbox" name="setspecial" id="sp" onChange={(e)=> {setspecial(e.target.checked)}} checked={special}/>
          <label htmlFor="sp">special</label></div>
          <div><input type="number" name="setlength" id="count" onChange={(e)=> {setlength(e.target.value)}} step="8" min="8" value={length} />
           <label htmlFor='count'>count</label></div>
          <input type="button" value="Generate" onClick={genpass}/>
          <div> 
            <input type="text" name="" id=""  value={pass} readOnly/>
            <input 
            type="button"
             value="copy"
              id='copy' 
              onClick={() => {
              navigator.clipboard.writeText(pass);
              alert("password coppied");
            }}/>
          
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
