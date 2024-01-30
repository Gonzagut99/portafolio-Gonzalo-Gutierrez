
import SpinningIcon from './icons/SpinningIcon'

function Spinner({size='size-4'}:{size:string}) {
  return (
    <div className='w-full !h-full p-12 flex justify-center items-center'>
        <SpinningIcon className={`${size} animate-spin text-yellow-200/95`}></SpinningIcon>
    </div>
  )
}

export default Spinner