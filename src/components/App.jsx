import Header from "./Header/Header";
import MainHeading from "./MainHeading/MainHeading";
import Message from "./Message/Message";


const App = () => {
  return (
    <div>
<Header />
<MainHeading />
<Message text="Куплю фарбу" author="Олена" />
<Message text="Продам телевізор" author="Viktor"/>
<Message text="Куплю шапку" author="Ігор" />
<Message />
<Message />
</div>
  );
};

export default App;