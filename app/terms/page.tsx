import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using MNS Bank services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                General Terms & Definitions
              </CardTitle>
              <CardDescription>
                Basic terms governing your relationship with MNS Bank
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Acceptance of Terms</h4>
                  <p className="text-gray-600">
                    By using MNS Bank services, you agree to be bound by these terms and conditions. 
                    Continued use of our services constitutes acceptance of any modified terms.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Eligibility</h4>
                  <p className="text-gray-600">
                    You must be at least 18 years old and capable of entering into legally binding contracts. 
                    Some services may have additional eligibility requirements as specified.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account credentials. 
                    MNS Bank will never ask for your password or sensitive information via email or phone.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Service Availability</h4>
                  <p className="text-gray-600">
                    Our services are subject to maintenance schedules and system availability. 
                    We strive to provide uninterrupted service but reserve the right to suspend services for maintenance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banking Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Banking Services & Products
              </CardTitle>
              <CardDescription>
                Terms specific to our banking products and services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Deposit Accounts</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interest rates subject to RBI guidelines</li>
                    <li>• Minimum balance requirements may apply</li>
                    <li>• Tax deduction at source as applicable</li>
                    <li>• Premature withdrawal penalties may apply</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Loan Products</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credit approval at bank&apos;s discretion</li>
                    <li>• Interest rates based on credit assessment</li>
                    <li>• Collateral requirements for secured loans</li>
                    <li>• Prepayment charges may apply</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-3">Card Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Annual fees and charges apply</li>
                    <li>• Credit limit assigned by bank</li>
                    <li>• Lost card liability reporting required</li>
                    <li>• International transaction charges apply</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Digital Banking</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Secure login with two-factor authentication</li>
                    <li>• Transaction limits for security</li>
                    <li>• Service availability subject to internet connectivity</li>
                    <li>• Mobile app terms and conditions apply</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Transactions & Payments
              </CardTitle>
              <CardDescription>
                Terms governing transactions and payment processing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Transaction Processing</h4>
                  <p className="text-gray-600">
                    All transactions are processed according to RBI guidelines and banking regulations. 
                    Transaction times may vary based on service type and cutoff times.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                  <p className="text-gray-600">
                    Any transaction disputes must be reported within 30 days. 
                    The bank will investigate and resolve disputes as per regulatory guidelines.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">International Transfers</h4>
                  <p className="text-gray-600">
                    International transactions are subject to FEMA regulations and require proper documentation. 
                    Exchange rates and charges are displayed before transaction confirmation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                User Responsibilities & Security
              </CardTitle>
              <CardDescription>
                Your responsibilities when using MNS Bank services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Security Practices</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep credentials confidential and secure</li>
                    <li>• Use strong passwords and change regularly</li>
                    <li>• Log out from shared devices properly</li>
                    <li>• Report suspicious activity immediately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Account Monitoring</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Review statements regularly</li>
                    <li>• Report unauthorized transactions promptly</li>
                    <li>• Keep contact information updated</li>
                    <li>• Enable transaction alerts and notifications</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3 text-yellow-800">
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  Important Security Notice
                </h4>
                <p className="text-yellow-700">
                  MNS Bank will never ask for your account details, passwords, or OTP through email, 
                  phone, or social media. Always verify requests through official channels only.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                Privacy & Data Protection
              </CardTitle>
              <CardDescription>
                How we protect and use your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Data Collection</h4>
                  <p className="text-gray-600">
                    We collect only necessary information for service delivery and regulatory compliance. 
                    Your data is processed securely and used only for specified purposes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Third-Party Sharing</h4>
                  <p className="text-gray-600">
                    We may share information with regulatory authorities, law enforcement, or 
                    service partners only with your consent or as required by law.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cookies & Tracking</h4>
                  <p className="text-gray-600">
                    Our website uses cookies for functionality and analytics. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal & Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>Legal & Compliance</CardTitle>
              <CardDescription>
                Legal jurisdiction and compliance information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Governing Law</h4>
                  <p className="text-gray-600">
                    These terms are governed by the laws of India. 
                    Any disputes shall be subject to the exclusive jurisdiction of Indian courts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Regulatory Compliance</h4>
                  <p className="text-gray-600">
                    We comply with all applicable RBI regulations, banking guidelines, and data protection laws. 
                    Terms may be updated to reflect regulatory changes.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">Contact for Legal Matters</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Legal Department:</strong> legal@mnsbank.com</p>
                  <p><strong>Regulatory Officer:</strong> compliance@mnsbank.com</p>
                  <p><strong>Address:</strong> Legal Department, MNS Bank Head Office</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Agreement & Acceptance</CardTitle>
              <CardDescription>
                By using our services, you acknowledge and agree to these terms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-gray-700 mb-4">
                  By clicking &quot;I Agree&quot; or continuing to use MNS Bank services, you acknowledge that 
                  you have read, understood, and agree to be bound by these Terms &amp; Conditions.
                </p>
                
                <div className="bg-white p-6 rounded-lg inline-block">
                  <h4 className="font-semibold mb-3">Last Updated</h4>
                  <p className="text-gray-600">
                    These terms and conditions were last updated on March 1, 2024. 
                    We may update these terms periodically and will notify users of significant changes.
                  </p>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    <strong>For questions about these terms:</strong><br />
                    Email: legal@mnsbank.com | Phone: 1800-123-4567
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
