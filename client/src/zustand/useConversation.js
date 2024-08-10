import {create} from 'zustand'
// import {persist} from 'zustand/middleware'


const useConversation = create(
    // persist((set) => ({
    //     selectedConversation: null,
    //     setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    
    //     messages: null,
    //     setMessages: (messages) => set({messages})
    
    // }))

    (set) => ({
            selectedConversation: null,
            setSelectedConversation: (selectedConversation) => set({selectedConversation}),
        
            messages: [],
            setMessages: (messages) => set({messages})
        
        })
)

export default useConversation;