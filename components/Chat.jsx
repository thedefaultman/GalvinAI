'use client'

import { generateChatResponse } from '@/utils/action'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'

const Chat = () => {
  const [text, setText] = useState('')
  const [message, setMessage] = useState([])

  const {mutate} = useMutation({
    mutationFn: (message)=> generateChatResponse(message)
  })

    //e is for event
  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(text)
  }


  return (
    <div className=' min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className=' max-w-4xl pt-12'>
        <div className="join w-full">
          <input type='text' className="input input-bordered join-item w-full" placeholder="Message Galvin" value={text} required onChange={(e)=> setText(e.target.value)}/>
          <button className="btn btn-primary join-item" type='submit'>Ask Question</button>
        </div>
      </form>
    </div>
  )
}

export default Chat
