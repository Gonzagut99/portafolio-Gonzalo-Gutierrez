import { CurrentItemProvider } from '../contexts/CurrentItemContext';
import {Navbar} from './Navbar'
import { ThemeProvider } from '../contexts/ThemeContext';

function DynamicNavbar() {
  return (
    <CurrentItemProvider>
        <Navbar></Navbar>
    </CurrentItemProvider>
  )
}

export default DynamicNavbar