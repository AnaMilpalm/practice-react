const Message = ({text, author = "Default author"}) => {
  

    return (
        <div>
        <h4>{text}</h4>
        <span>{author}</span>
        </div>
    );
}

export default Message;