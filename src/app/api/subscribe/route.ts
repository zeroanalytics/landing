import { NextRequest, NextResponse } from 'next/server'

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || 'default'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          groups: [MAILERLITE_GROUP_ID],
          fields: {
            name: name || '',
            source: 'zeroanalytics-landing',
          },
          status: 'active',
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('MailerLite API error:', errorData)

      if (response.status === 422 && errorData.errors?.email) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 422 }
        )
      }

      throw new Error(`MailerLite API returned ${response.status}`)
    }

    const data = await response.json()
    console.log('Successfully added subscriber:', data.data?.email)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to updates',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
