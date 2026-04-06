'use client'

import { motion } from 'framer-motion'
import { Smartphone, Download, ArrowRight, Play, Star, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AppPreviewSection() {
  const router = useRouter()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadApp = async () => {
    setIsDownloading(true)
    try {
      // Simulate download process or tracking
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Detect user device and redirect to appropriate store
      const userAgent = navigator.userAgent.toLowerCase()
      if (userAgent.includes('android')) {
        window.open('https://play.google.com/store/apps/details?id=com.mnsbank', '_blank')
      } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        window.open('https://apps.apple.com/app/mns-bank/id123456789', '_blank')
      } else {
        // Default to App Store for desktop users
        window.open('https://apps.apple.com/app/mns-bank/id123456789', '_blank')
      }
    } catch (error) {
      console.error('Download error:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handleLearnMore = () => {
    // Navigate to mobile banking features page
    router.push('/mobile-banking#features')
  }

  const handleAppStoreDownload = async (store: 'ios' | 'android') => {
    const urls = {
      ios: 'https://apps.apple.com/app/mns-bank/id123456789',
      android: 'https://play.google.com/store/apps/details?id=com.mnsbank'
    }
    
    // Track download event
    try {
      await fetch('/api/track-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ store, timestamp: new Date().toISOString() })
      })
    } catch (error) {
      console.error('Tracking error:', error)
    }
    
    window.open(urls[store], '_blank')
  }
    return (
    <section className="app-preview-section">
      <div className="app-preview-container">
        <div className="app-preview-grid">
          {/* Left Side - Content */}
          <div className="app-preview-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <header className="app-preview-header">
                <h1 className="app-preview-title">
                  Banking at Your Fingertips
                </h1>
                <p className="app-preview-description">
                  Experience the future of banking with our secure and convenient mobile banking app. 
                  Manage your finances on the go with just a few taps. Available for both iOS and Android.
                </p>
              </header>

              {/* App Features */}
              <div className="app-features">
                <div className="app-feature">
                  <Shield className="app-feature-icon" />
                  <div className="app-feature-content">
                    <h3 className="app-feature-title">Banking-Level Security</h3>
                    <p className="app-feature-description">Advanced encryption and biometric authentication</p>
                  </div>
                </div>
                <div className="app-feature">
                  <Clock className="app-feature-icon" />
                  <div className="app-feature-content">
                    <h3 className="app-feature-title">24/7 Access</h3>
                    <p className="app-feature-description">Bank anytime, anywhere with instant transactions</p>
                  </div>
                </div>
                <div className="app-feature">
                  <Star className="app-feature-icon" />
                  <div className="app-feature-content">
                    <h3 className="app-feature-title">4.8★ Rating</h3>
                    <p className="app-feature-description">Loved by over 1 million users worldwide</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="app-preview-cta">
                <Button 
                  size="lg" 
                  className="primary-download-button" 
                  onClick={handleDownloadApp}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download App
                    </>
                  )}
                </Button>
                <Button size="lg" variant="outline" className="secondary-learn-button" onClick={handleLearnMore}>
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>

              {/* App Store Badges */}
              <div className="app-store-badges">
                <div className="store-badge" onClick={() => handleAppStoreDownload('ios')}>
                  <div className="store-badge-icon">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="store-badge-content">
                    <div className="store-badge-text">Download on the</div>
                    <div className="store-badge-name">App Store</div>
                  </div>
                </div>
                <div className="store-badge" onClick={() => handleAppStoreDownload('android')}>
                  <div className="store-badge-icon">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="store-badge-content">
                    <div className="store-badge-text">Get it on</div>
                    <div className="store-badge-name">Google Play</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - App Preview */}
          <div className="app-preview-visual">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="phone-mockup-container"
            >
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="app-interface">
                      {/* Status Bar */}
                      <div className="status-bar">
                        <span className="time">9:41</span>
                        <div className="status-icons">
                          <div className="signal"></div>
                          <div className="wifi"></div>
                          <div className="battery"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="app-header">
                        <div className="header-left">
                          <div className="app-logo">
                            <div className="logo-circle">M</div>
                          </div>
                          <h2 className="app-name">MNS Bank</h2>
                        </div>
                        <div className="header-right">
                          <div className="notification-bell"></div>
                        </div>
                      </div>

                      {/* Welcome Section */}
                      <div className="welcome-section">
                        <p className="welcome-text">Good morning,</p>
                        <h3 className="user-name">Rahul Sharma</h3>
                      </div>

                      {/* Balance Card */}
                      <div className="balance-card">
                        <div className="balance-label">Total Balance</div>
                        <div className="balance-amount">₹2,45,890</div>
                        <div className="balance-card-number">•••• •••• •••• 4589</div>
                      </div>

                      {/* Quick Actions */}
                      <div className="quick-actions">
                        <div className="action-item">
                          <div className="action-icon send">↑</div>
                          <span className="action-label">Send</span>
                        </div>
                        <div className="action-item">
                          <div className="action-icon receive">↓</div>
                          <span className="action-label">Receive</span>
                        </div>
                        <div className="action-item">
                          <div className="action-icon pay">₹</div>
                          <span className="action-label">Pay</span>
                        </div>
                        <div className="action-item">
                          <div className="action-icon more">⋯</div>
                          <span className="action-label">More</span>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div className="transactions">
                        <div className="transactions-header">
                          <h3 className="transactions-title">Recent Transactions</h3>
                          <a href="#" className="see-all">See all</a>
                        </div>
                        <div className="transaction-item">
                          <div className="transaction-icon grocery">🛒</div>
                          <div className="transaction-details">
                            <div className="transaction-name">Grocery Store</div>
                            <div className="transaction-date">Today, 2:30 PM</div>
                          </div>
                          <div className="transaction-amount">-₹450</div>
                        </div>
                        <div className="transaction-item">
                          <div className="transaction-icon salary">💰</div>
                          <div className="transaction-details">
                            <div className="transaction-name">Salary Credit</div>
                            <div className="transaction-date">Yesterday</div>
                          </div>
                          <div className="transaction-amount positive">+₹45,000</div>
                        </div>
                        <div className="transaction-item">
                          <div className="transaction-icon shopping">🛍️</div>
                          <div className="transaction-details">
                            <div className="transaction-name">Shopping Mall</div>
                            <div className="transaction-date">Dec 20</div>
                          </div>
                          <div className="transaction-amount">-₹2,350</div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="bottom-nav">
                        <div className="nav-item active">
                          <div className="nav-icon"></div>
                          <span className="nav-label">Home</span>
                        </div>
                        <div className="nav-item">
                          <div className="nav-icon"></div>
                          <span className="nav-label">Cards</span>
                        </div>
                        <div className="nav-item">
                          <div className="nav-icon"></div>
                          <span className="nav-label">Payments</span>
                        </div>
                        <div className="nav-item">
                          <div className="nav-icon"></div>
                          <span className="nav-label">More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Cards with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="floating-card atm-card"
              >
                <div className="card-chip"></div>
                <div className="card-network">VISA</div>
                <div className="card-number">4532 •••• •••• 8901</div>
                <div className="card-holder">
                  <div className="card-label">CARD HOLDER</div>
                  <div className="card-name">RAHUL SHARMA</div>
                </div>
                <div className="card-expiry">
                  <div className="card-label">EXPIRES</div>
                  <div className="card-date">12/26</div>
                </div>
                <div className="card-logo">
                  <div className="logo-circle">M</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="floating-card balance-card"
              >
                <div className="balance-header">
                  <div className="balance-icon">💰</div>
                  <div className="balance-trend positive">↑ 12.5%</div>
                </div>
                <div className="balance-label">Total Balance</div>
                <div className="balance-amount">₹2,45,890</div>
                <div className="balance-subtitle">Available now</div>
                <div className="balance-chart">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '80%' }}></div>
                  <div className="chart-bar" style={{ height: '45%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="floating-card transaction-card"
              >
                <div className="transaction-header">
                  <div className="transaction-icon">💸</div>
                  <div className="transaction-status sent">Sent</div>
                </div>
                <div className="transaction-details">
                  <div className="transaction-amount">-₹5,000</div>
                  <div className="transaction-to">To: Priya Patel</div>
                  <div className="transaction-time">Today, 3:45 PM</div>
                  <div className="transaction-method">UPI Transfer</div>
                </div>
                <div className="transaction-avatar">PP</div>
              </motion.div>

              {/* Additional Interactive Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="floating-card reward-card"
              >
                <div className="reward-icon">🎁</div>
                <div className="reward-label">Cashback Earned</div>
                <div className="reward-amount">₹250</div>
                <div className="reward-progress">
                  <div className="progress-bar"></div>
                </div>
                <div className="reward-text">₹750 more to next reward</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
