import s  from './Message.module.css'
const Message = ({text, author = "Default author"}) => {
    return (
        <div className={s.messageBox}>
           <h4 className={s.title}>{text}</h4>
           <span className={s.textAuthor}>{author}</span>
        </div>
    );
}

export default Message;