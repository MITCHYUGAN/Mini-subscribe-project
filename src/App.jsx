import { useState } from 'react'
import './style/App.css'
import tick from './images/icon-success.svg'
import img from './images/illustration-sign-up-desktop.svg'
import mobileimg from './images/illustration-sign-up-mobile.svg'

function App() {
  
  const [show, setShow] = useState("subscribe")
  const [inputvalue, setInputValue] = useState("")

  const setValue = event => {
    setInputValue(event.target.value)
  }

 const validateInput = () => {
    const rejex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i
    
    if(rejex.test(inputvalue) || rejex === null){
      setShow("thankyoushow")
    } else{
      document.getElementById("input").style.borderColor = "red"
      document.getElementById("validemailtext").style.display = "block"
    }
 }

  return (
    <>
    {
      show === "subscribe" 
      ? 
      <div className='wrapper'>
        <div className='contents'>
          <div className='texts'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className='lists'>
              <div className='list'>
                <img src={tick} alt="" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className='list'>
                <img src={tick} alt="" />
                <p>Measuring to ensure updates are a sucess</p>
              </div>
              <div className='list'>
                <img src={tick} alt="" />
                <p>And much more!</p>
              </div>
            </div>
          </div>
          <div className='emailSection'>
            <div className='emaildiv'>
              <div className='emailtexts'>
                <h5>Email address</h5>
                <h5 id='validemailtext'>Enter valid email</h5>
              </div>
              <input required onChange={setValue} id='input' placeholder='ash@loremcompany.com' value={inputvalue} />
            </div>
            <button onClick={() => validateInput()}>Subcribe to montly newsletter</button>
          </div>
        </div>
        <img className='big-img' src={img} alt="" />
        <img className='mobile-img' src={mobileimg} alt="" />
      </div>
      :
      <section className="thankyousection">
            <div className='thankyouwraper'>
              <div className='thankyou'>
                <div className='thankyoutext'>
                  <img src={tick} alt="" />
                  <h1>Thanks for subscribing!</h1>
                  <p>A confirmations email has been sent to <strong>{inputvalue}</strong> please open it and click the button to confirm your subscription </p>
                </div>
                <button onClick={() => setShow("subscribe")}>Dismiss message</button>
              </div>
            </div>
      </section>
    }

    </>
  )
}

export default App
