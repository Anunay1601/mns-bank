import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, subject, message, inquiryType } = body

    // Validate required fields
    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Generate reference number
    const referenceNumber = 'MNS' + Date.now().toString().slice(-8)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email to customer
    // 3. Send notification to admin
    // 4. Log the contact request
    
    console.log('Contact form submission:', {
      referenceNumber,
      name,
      phone,
      email,
      subject,
      message,
      inquiryType,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Contact form submitted successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
