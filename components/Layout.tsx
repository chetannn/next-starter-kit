import Sidebar from "./Sidebar";

export default function Layout(props) {
  return (
    <div className='flex min-h-screen antialiased'>
        <Sidebar />
      <div className='flex-1'>
        <nav className='flex py-3 px-6 justify-between items-center bg-white shadow'>
          <div></div>
          <div className='bg-red-400 rounded-full h-8 w-8'></div>
        </nav>
        <main className='px-4 pt-4'>{props.children}</main>
      </div>
    </div>
  );
}
