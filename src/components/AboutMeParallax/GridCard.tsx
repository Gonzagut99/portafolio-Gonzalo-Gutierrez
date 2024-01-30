import {useState} from 'react'
import {type Skill} from './aboutMeInfo'
import Badge from '../Badge'
import CardDialog from './CardDialog';
import ReactDOM from 'react-dom';
import './styles.css'


function gridCard({name,icon:Icon,level,description,levelVariant}:Skill) {
    const [isOpen, setIsOpen] = useState(false);
    const skillProps:Skill = {name,icon:Icon,level,description,levelVariant}
  return (
    <>
      <article className="rounded-lg flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#15151d] p-4">
        <Icon className="size-8 opacity-80" />
        <header className="font-light text-xs text-gray-200/90 text-center">{name}</header>
        <Badge className="placeholder-opacity-80" variant={levelVariant}>
          {level}
        </Badge>
        <p className="break_word font-extralight text-pretty text-[0.65rem] line-clamp-2 text-gray-200/90 break-words ">
          {description}
        </p>
        <a
          className="text-xs font-normal cursor-pointer text-gray-200 hover:text-yellow-200/90"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          Leer todo
        </a>
      </article>
      {isOpen && ReactDOM.createPortal(
        <CardDialog skillProps={skillProps} setIsOpen={setIsOpen} isOpen={isOpen}></CardDialog>,document.body
      )}
    </>
  );
}

export default gridCard