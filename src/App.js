import {useState, useEffect} from 'react'
import './s.css'

function App() {
  const [box1, setbox1] = useState('')
  const [box2, setbox2] = useState('')
  const [box3, setbox3] = useState('')
  const [box4, setbox4] = useState('')
  const [show, setshow] = useState(false)
  const [final, setfinal] = useState([])

  useEffect (() =>{
    if (box1.length===4){
      const nextbox=document.getElementById('box2')
      nextbox.focus()
    }
  }, [box1])

  useEffect (() =>{
    if (box2.length===4){
      const nextbox = document.getElementById('box3')
      nextbox.focus()
    }
  }, [box2])
  
  useEffect (() =>{
    if (box3.length===4){
      const nextbox = document.getElementById('box4')
      nextbox.focus()
    }
  }, [box3])

  useEffect (() =>{
    if (box4.length===4){
      const nextbox = document.getElementById('button')
      nextbox.focus()
    }
  }, [box4])

  const onenter = () => {
    setfinal(box1+"-"+box2+"-"+box3+"-"+box4)
    setshow(true)
  }
  return (
    <div className='parent1'>
      <div className='parnt2'>
      <h3>Card No:</h3>
      <input maxlength="4" id="box1"  value={box1} onChange={(e) => {setbox1(e.target.value)}} />
      <input maxlength="4" id="box2"  value={box2} onChange={(e) => {setbox2(e.target.value)}} />
      <input maxlength="4" id="box3"  value={box3} onChange={(e) => {setbox3(e.target.value)}} />
      <input maxlength="4" id="box4"  value={box4} onChange={(e) => {setbox4(e.target.value)}} />
      <button id="button" onClick = {() =>{onenter()}}>Submit</button>
      </div>
        { show &&
          <div className='parent3'>
            <h1>{final}</h1>
          </div>
        }
    </div>
  );
}

export default App;

