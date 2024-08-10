import SearchBar from './SearchBar'
import Conversations from './Conversations'
// import useListenMessages from '../../hooks/useListenMessages';
// import useGetMessages from '../../hooks/useGetMessages';

const Sidebar = () => {

  // const messages = useGetMessages();
  // // if(messages){
  // //   useListenMessages();
  // // }
  // console.log(messages)
  
  return (
    <div className='p-4 pt-20 border-r h-full w-80 overflow-auto  border-slate-800 relative'>
      <SearchBar />
      <Conversations />

    </div>
  )
}

export default Sidebar