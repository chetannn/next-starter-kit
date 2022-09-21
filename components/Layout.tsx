import Sidebar from "./Sidebar";

export default function Layout(props) {
  return (
    <div className='flex min-h-screen antialiased'>
        <Sidebar />
      <div className='flex-1'>
        <nav className='flex py-3 px-6 justify-between items-center bg-gray-50 border-b'>
          <div>Menu 1</div>
          <div className='bg-red-400 rounded-full h-10 w-10'></div>
        </nav>
        <main className='px-4 pt-4'>{props.children}</main>
      </div>
    </div>
  );
}
