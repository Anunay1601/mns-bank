/**
 * Download utility for MNS Bank documents
 */

export const downloadFile = async (filename: string, displayName?: string) => {
  try {
    // Create the file URL
    const fileUrl = `/docs/${filename}`
    
    // Fetch the file
    const response = await fetch(fileUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`)
    }
    
    // Get the file content as blob
    const blob = await response.blob()
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob)
    
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = url
    
    // Set the download filename
    link.download = displayName || filename
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up the URL
    window.URL.revokeObjectURL(url)
    
    // Track download (optional)
    await trackDownload(filename)
    
    return true
  } catch (error) {
    console.error('Download failed:', error)
    return false
  }
}

export const trackDownload = async (filename: string) => {
  try {
    // Send download tracking to analytics
    await fetch('/api/track-download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }),
    })
  } catch (error) {
    console.error('Failed to track download:', error)
  }
}

// Available download files
export const DOWNLOAD_FILES = {
  RBI_GUIDELINES: {
    filename: 'rbi-guidelines.txt',
    displayName: 'MNS_Bank_RBI_Guidelines.txt',
    title: 'RBI Guidelines'
  },
  BCSBI_CERTIFICATE: {
    filename: 'bcsbi-certificate.txt',
    displayName: 'MNS_Bank_BCSBI_Certificate.txt',
    title: 'BCSBI Certificate'
  },
  BANKING_OMBUDSMAN_FORM: {
    filename: 'banking-ombudsman-form.txt',
    displayName: 'Banking_Ombudsman_Complaint_Form.txt',
    title: 'Banking Ombudsman Form'
  },
  CONSUMER_PROTECTION_GUIDE: {
    filename: 'consumer-protection-guide.txt',
    displayName: 'MNS_Bank_Consumer_Protection_Guide.txt',
    title: 'Consumer Protection Guide'
  }
} as const

export type DownloadFileKey = keyof typeof DOWNLOAD_FILES
