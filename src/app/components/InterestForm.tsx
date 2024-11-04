'use client'

import sendInterest from '../actions/sendInterest'
import { useState } from 'react'

const InterestForm = () => {
  const [emailInput, setEmailInput] = useState('')
  const [nameInput, setNameInput] = useState('')

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return (
    <form action={sendInterest} className="grid grid-cols-2 gap-3 w-72">
      <div className="flex flex-col row-start-1 col-span-full gap">
        <label htmlFor="name">Naam</label>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          type="text"
          name="name"
          placeholder="Naam"
          className="px-3 py-1 rounded border focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col row-start-2 col-span-full gap">
        <label htmlFor="email">Email</label>
        <input
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          className="px-3 py-1 rounded border focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        disabled={!emailPattern.test(emailInput) || nameInput.length < 1}
        type="submit"
        className="row-start-3 col-span-full px-3 py-1 rounded bg-blue-500 text-white focus:bg-blue-600 focus:outline-none font-semibold disabled:bg-gray-500 disabled:opacity-50 hover:bg-blue-900 transition-all"
      >
        Aanmelden
      </button>
    </form>
  )
}

export default InterestForm
