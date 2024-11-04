'use server'

import sendgrid from '@sendgrid/mail'
import { redirect } from 'next/navigation'

const sendInterest = async (formData: FormData) => {
  if (process.env.SENDGRID) {
    sendgrid.setApiKey(process.env.SENDGRID)
  } else {
    throw new Error('No Sendgrid API key found')
  }

  const email = formData.get('email')
  const name = formData.get('name')

  const msg = {
    from: 'bondbuddy@eviwammes.dev',
    to: 'mail@eviwammes.nl',
    subject: 'Nieuwe interesse in BondBuddy',
    text: `Nieuwe interesse in BondBuddy: ${email}, ${name}`,
  }

  sendgrid.send(msg)

  redirect('/thanks')
}

export default sendInterest
