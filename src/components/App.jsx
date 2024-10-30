import Header from "./Header/Header";
import MainHeading from "./MainHeading/MainHeading";
import Message from "./Message/Message";
import '../index.css';
import 'modern-normalize';
import Profile from "./Profile/Profile";
import profileData from './../assets/user.json';
import ClickComponent from "./ClickComponent/ClickComponent";
import SetIntervalComponent from "./SetIntervalComponent/SetIntervalComponent";



const App = () => {
  return (
    <div>
    
      
<Header />
<MainHeading />
<Message text="Куплю фарбу" author="Олена" />
<Message text="Продам телевізор" author="Viktor"/>
<Message text="Куплю шапку" author="Ігор" />

<Profile user={profileData} />
<ClickComponent />
<SetIntervalComponent />
</div>

  );
 
};

export default App;