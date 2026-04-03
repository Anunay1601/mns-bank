import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-600" />
                Information We Collect
              </CardTitle>
              <CardDescription>
                Types of information we collect from our customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Personal Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Name and contact details</li>
                    <li>• Date of birth and PAN details</li>
                    <li>• Address and communication preferences</li>
                    <li>• Occupation and income details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Financial Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bank account details</li>
                    <li>• Transaction history</li>
                    <li>• Credit information</li>
                    <li>• Investment details</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Usage Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Services accessed and frequency</li>
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Session duration and patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Communication Data</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Email and phone interactions</li>
                    <li>• Customer service interactions</li>
                    <li>• Feedback and survey responses</li>
                    <li>• Social media engagements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                How We Use Your Information
              </CardTitle>
              <CardDescription>
                Purposes for which we utilize your personal and financial data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Service Delivery</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Account management and maintenance</li>
                    <li>• Transaction processing and verification</li>
                    <li>• Product recommendations and offers</li>
                    <li>• Customer support and assistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Security & Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fraud detection and prevention</li>
                    <li>• Regulatory compliance reporting</li>
                    <li>• Risk assessment and management</li>
                    <li>• Audit trail and record keeping</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Communication</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Transaction notifications and alerts</li>
                    <li>• Product updates and announcements</li>
                    <li>• Marketing communications (with consent)</li>
                    <li>• Customer service follow-ups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Analytics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Service usage analysis</li>
                    <li>• Customer behavior insights</li>
                    <li>• Product performance metrics</li>
                    <li>• Security threat analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-purple-600" />
                Data Protection & Security
              </CardTitle>
              <CardDescription>
                Measures we take to protect your personal and financial information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Security</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure data storage and backup systems</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Access Controls</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Role-based access permissions</li>
                    <li>• Regular access reviews and updates</li>
                    <li>• Employee background verification</li>
                    <li>• Confidentiality agreements and training</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Retention</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Minimum necessary retention periods</li>
                    <li>• Secure data disposal procedures</li>
                    <li>• Customer data export options</li>
                    <li>• Account deletion on request</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• RBI data protection guidelines</li>
                    <li>• IT Act 2000 compliance</li>
                    <li>• Regular compliance audits</li>
                    <li>• Data protection officer appointed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-600" />
                Your Rights & Choices
              </CardTitle>
              <CardDescription>
                Control you have over your personal information and how to exercise it
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Access Rights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Request copy of your personal data</li>
                    <li>• Correct inaccurate or incomplete information</li>
                    <li>• Object to processing of your data</li>
                    <li>• Request data deletion or portability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Communication Preferences</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose communication channels</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Set notification preferences</li>
                    <li>• Update contact information anytime</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">How to Exercise Your Rights</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Email:</strong> privacy@mnsbank.com</p>
                  <p><strong>Phone:</strong> 1800-123-4567</p>
                  <p><strong>In Person:</strong> Visit any branch with ID proof</p>
                  <p><strong>Online:</strong> Use customer portal or mobile app</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Questions About Privacy?</CardTitle>
              <CardDescription>
                Contact our privacy team for any concerns or requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Privacy Officer</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy.officer@mnsbank.com</p>
                    <p><strong>Phone:</strong> 1800-123-4568</p>
                    <p><strong>Address:</strong> Privacy Department, MNS Bank Head Office</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Grievance Officer</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> grievance@mnsbank.com</p>
                    <p><strong>Phone:</strong> 1800-123-4569</p>
                    <p><strong>Address:</strong> Grievance Redressal Cell, MNS Bank</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
