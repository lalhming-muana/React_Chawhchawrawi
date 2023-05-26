import ProfileCard from './ProfileCard'
import CortanaImage from './images/cortana.png'
import AlexaImage from './images/alexa.png'
import SiriImage from './images/siri.png'
import bulma from 'bulma/css/bulma.css';

function App(){
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
         <p class="title">
            Personal Digital Assistant
          </p>
    <p class="subtitle">
     A first look at React
    </p>
  </div>
</section>
      
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} 
              description="Alexa was created by Amazon and helps you buy things"/>
            </div>

            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cartona01" image={CortanaImage}
              description="Cortana was created by Microsoft and helps you buy things"/>  
            </div>

            <div className="column is-4">
             <ProfileCard title="Siri" handle="@siri19" image={SiriImage}
             description="Siri was created by Apple and helps you buy things"/> 
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
}

export default App;