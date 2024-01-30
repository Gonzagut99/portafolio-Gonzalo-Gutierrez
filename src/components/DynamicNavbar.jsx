import { CurrentItemProvider } from '../contexts/CurrentItemContext';
import {Navbar} from './Navbar'

function DynamicNavbar() {
  return (
    <CurrentItemProvider>
        <Navbar></Navbar>
    </CurrentItemProvider>
  )
}

export default DynamicNavbar