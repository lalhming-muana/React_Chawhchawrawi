// Component siam dan step 5

function App(){

  let message = 'Hi there, you lucky Cow'; 
  const secondMessage = 123; // hetah hian boolean, null , undefined leh object a hman theihloh

 const date = new Date();
 const time = date.toLocaleString();

  return <div>
            <h1>{message} {secondMessage} {time}</h1>
            <input type="number" 
              min={5} 
              max={20}
              placeholder={"number enter rawh"}
              style={{border: '3px solid red'}}/>
              <br>
              </br>
              {/* Hetah hian textarea kan dah belh ang html to jsx eg  */}
              
              <textarea autoFocus={true}
                spellCheck
                // Hetah hian number hman ngai lo awm se
                maxLength={5}
                // inline style kan hman reng rengin object angin pass tur.
                // chuanin , background-color ang chi hi backgroundColor tih tur
                style={{border: '3px solid blue'}}
                
                /> 


         </div>  
}


export default App;