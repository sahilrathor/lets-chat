import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessagesSkeleton from './MessagesSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

gsap.registerPlugin(ScrollToPlugin);

const Messages = () => {
  const { messages, isLoading } = useGetMessages();
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      gsap.to(messagesContainerRef.current, {
        scrollTo: { y: 'max' },
        duration: .75,
        ease: 'liner',
      });
    }

  }, [messages]);

  useListenMessages();

  return (
    <div ref={messagesContainerRef} className='p-2 flex flex-col flex-1 overflow-y-auto'>
      {isLoading && <MessagesSkeleton />}
      {!isLoading && messages && messages.length > 0 && messages.map((item, index) => (
        <div key={item._id || index}>
          <Message msg={item} />
        </div>
      ))}
      {!isLoading && messages.length === 0 && (
        <p className='text-center my-auto justify-self-center'>Send a message to start conversation</p>
      )}
    </div>
  );
};

export default Messages;
