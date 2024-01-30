import React, {useState, useEffect} from 'react'
import {type Skill} from './aboutMeInfo'
import Badge from '../Badge'
import './styles.css'
import Close from '../icons/Close'

type CardDialogProps = {
    skillProps:Skill
    setIsOpen:(value: boolean) => void;
    isOpen:boolean
}

function CardDialog({skillProps,setIsOpen,isOpen}:CardDialogProps) {
    const {name, icon: Icon, level, description, levelVariant} = skillProps

    const [className, setClassName] = useState('');

    useEffect(() => {
        if (isOpen) {
        setClassName("fade-in");
        } else {
        setClassName("fade-out");
        }
    }, [isOpen]);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
      };
    
      const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
      };
    
    const paragraphs = description?.split('.')
  return (
    <div className={`opacity-0 ${className} fixed inset-0 z-10 w-full h-full bg-[#1b1b28]/80 flex justify-center items-center px-4`} onClick={handleClose}>
        <dialog
          open={isOpen}
          className='relative items-center justify-center bg-[#15151d] rounded-lg p-6 shadow-lg'
        >
          <div className="flex flex-col gap-3 p-4 rounded max-w-md m-auto" onClick={handleContentClick}>
            <div className='flex gap-x-3 items-end'>
                <Icon className="size-10 opacity-80" />
                
            </div>
            <div className='flex gap-x-3 items-center'>
              <header className="font-medium text-lg text-gray-200/90">{name}</header>
              <Badge className="placeholder-opacity-80 h-fit" variant={levelVariant}>
                    {level}
                  </Badge>
            </div>
            <div className='flex flex-col gap-y-2'>
              {paragraphs?.map((paragraph,index)=>(
                <p key={index} className="font-extralight text-pretty text-xs text-gray-200/90">
                {paragraph}.
                </p>
              ))}
            </div>
            <Close className='text-gray-200 size-6 absolute top-4 right-4' onClick={handleClose}></Close>
          </div>
        </dialog>
    </div>
  );
}

export default CardDialog