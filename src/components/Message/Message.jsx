import s  from './Message.module.css'
const Message = ({text, author = "Default author"}) => {
    return (
        <div>
        <h4 className={s.title}>{text}</h4>
        <span>{author}</span>
        </div>
    );
}

export default Message;