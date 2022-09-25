import Sidebar from './Sidebar'
import NavDropDown from './NavDropDown'

export default function Layout(props) {
  return (
    <div className='flex font-nunito min-h-screen antialiased'>
      <Sidebar />
      <div className='flex-1'>
        <nav className='flex py-3 px-6 justify-between items-center bg-white shadow'>
          <div></div>

        <NavDropDown />
        </nav>
        
        <main className='px-4 pt-4 flex-1 bg-gray-100'>{props.children}</main>
      </div>
    </div>
  );
}
