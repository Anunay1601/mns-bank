'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SmartLink from '@/components/smart-link'
import './feature-card.css'

// Type definitions
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  link: string
  buttonText: string
  badge?: string
  iconType: 'home' | 'personal' | 'savings' | 'education' | 'credit' | 'fixed'
  index?: number
}

// Animation variants
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15
    }
  }
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const listItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Reusable Feature Card Component
export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  features = [], 
  link, 
  buttonText, 
  badge, 
  iconType,
  index = 0
}: FeatureCardProps) {
  return (
    <motion.article
      className="feature-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2 }}
    >
      {badge && (
        <motion.div 
          className="feature-card-badge"
          variants={contentVariants}
          transition={{ delay: 0.3 }}
        >
          {badge}
        </motion.div>
      )}
      
      {/* Feature Icon */}
      <motion.div 
        className={`feature-card-icon ${iconType}`}
        variants={contentVariants}
        transition={{ delay: 0.2 }}
      >
        {icon}
      </motion.div>
      
      {/* Feature Content */}
      <div className="feature-card-content">
        <motion.header variants={contentVariants} transition={{ delay: 0.4 }}>
          <h3 className="feature-card-title">
            {title}
          </h3>
        </motion.header>
        
        <motion.p 
          className="feature-card-description"
          variants={contentVariants}
          transition={{ delay: 0.5 }}
        >
          {description}
        </motion.p>
        
        {/* Feature List - Only show if features exist */}
        {features.length > 0 && (
          <motion.ul 
            className="feature-card-list"
            variants={contentVariants}
            transition={{ delay: 0.6 }}
          >
            {features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex} 
                className="feature-card-item"
                variants={listItemVariants}
                transition={{ delay: 0.7 + featureIndex * 0.15 }}
              >
                <span className="feature-card-bullet"></span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
        
        {/* CTA Button */}
        <motion.div
          variants={contentVariants}
          transition={{ delay: 0.8 + features.length * 0.15 }}
        >
          <SmartLink href={link} className="feature-card-cta">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </SmartLink>
        </motion.div>
      </div>
    </motion.article>
  )
}
