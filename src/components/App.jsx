import Header from "./Header/Header";
import MainHeading from "./MainHeading/MainHeading";
import Message from "./Message/Message";
import '../index.css';
import 'modern-normalize';
import Profile from "./Profile/Profile";
import profileData from './../assets/user.json';
import ClickComponent from "./ClickComponent/ClickComponent";
import SetIntervalComponent from "./SetIntervalComponent/SetIntervalComponent";
import Modal, { Button } from "./Modal/Modal";
import FewStatesComponent from "./FewStatesComponent/FewStatesComponent";
import ClickLocalStorage, { CommonState } from "./ClickLocalStorage/ClickLocalStorage";
import PrimaryButton, { ButtonEvt } from "./PrimaryButton/PrimaryButton";
import CustomButton, { ButtonFewStates, ButtonSeconds, ButtonThird } from "./CustomButton/CustomButton";
// import TextInput from "./TextInput/TextInput";
import Counter from "./Counter/Counter";
import  ColorPicker  from "./ColorPicker/ColorPicker";
import TodoList from "./TodoList/TodoList.jsx";
import { TodoItem } from "./TodoItem/TodoItem.jsx";



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
<Modal />
<Button />
<FewStatesComponent />
<ClickLocalStorage />
<PrimaryButton />
<ButtonEvt/>
<CustomButton/>
<ButtonSeconds/>
<ButtonThird />
<ButtonFewStates />
<CommonState />
{/* <TextInput value={input} handleInput={handleInput} /> */}
<Counter />
<ColorPicker />
<TodoList />
</div>

  );
 
};

export default App;