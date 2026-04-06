'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'EN' | 'HI'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    personal: 'Personal',
    business: 'Business',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    findBranch: 'Find Branch',
    emiCalculator: 'EMI Calculator',
    
    // Common
    home: 'Home',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    search: 'Search',
    menu: 'Menu',
    close: 'Close',
    open: 'Open',
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    
    // Contact Info
    phoneNumber: '1800-123-4567',
    emailAddress: 'info@mnsbank.com',
    
    // Footer
    rbiRegulated: 'RBI Regulated',
    isoCertified: 'ISO Certified',
    oneCroreCustomers: '1 Crore+ Customers',
    banking24x7: '24/7 Banking',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    tollFree: 'Toll Free',
    email: 'Email',
    headOffice: 'Head Office',
    headOfficeAddress: '123 Banking Street, Financial District, Mumbai - 400001',
    importantLinks: 'Important Links',
    grievanceRedressal: 'Grievance Redressal',
    unclaimedDeposits: 'Unclaimed Deposits',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    bankingSecurity: 'Banking Security',
    fraudAwareness: 'Fraud Awareness',
    cyberSecurity: 'Cyber Security',
    reportFraud: 'Report Fraud',
    regulatory: 'Regulatory',
    rbiGuidelines: 'RBI Guidelines',
    bankingOmbudsman: 'Banking Ombudsman',
    bcsbiCode: 'BCSBI Code',
    consumerProtection: 'Consumer Protection',
    allRightsReserved: 'All rights reserved',
    regulatedByRBI: 'Regulated by Reserve Bank of India',
    bankDescription: 'Serving the nation with integrity and excellence since 1950. Your trusted banking partner for all financial needs.',
    bankTagline: 'Banking with Trust, Growing with Excellence',
    
    // Banking Terms
    account: 'Account',
    balance: 'Balance',
    transaction: 'Transaction',
    transfer: 'Transfer',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    loan: 'Loan',
    interest: 'Interest',
    rate: 'Rate',
    rates: 'Rates',
    emi: 'EMI',
    card: 'Card',
    credit: 'Credit',
    debit: 'Debit',
    banking: 'Banking',
    mobile: 'Mobile',
    internet: 'Internet',
    savings: 'Savings',
    education: 'Education',
    
    // Security
    security: 'Security',
    password: 'Password',
    otp: 'OTP',
    verification: 'Verification',
    authenticate: 'Authenticate',
    authorize: 'Authorize',
    protected: 'Protected',
    threat: 'Threat',
    alert: 'Alert',
    notification: 'Notification',
    scan: 'Scan',
    monitor: 'Monitor',
    block: 'Block',
    report: 'Report',
    
    // Time
    today: 'Today',
    yesterday: 'Yesterday',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month',
    year: 'Year',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    hour: 'Hour',
    minute: 'Minute',
    second: 'Second',
    
    // Numbers
    one: 'One',
    two: 'Two',
    three: 'Three',
    four: 'Four',
    five: 'Five',
    six: 'Six',
    seven: 'Seven',
    eight: 'Eight',
    nine: 'Nine',
    ten: 'Ten',
    hundred: 'Hundred',
    thousand: 'Thousand',
    lakh: 'Lakh',
    crore: 'Crore',
    
    // Actions
    apply: 'Apply',
    knowMore: 'Know More',
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    getStarted: 'Get Started',
    explore: 'Explore',
    discover: 'Discover',
    
    // Status
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    cancelled: 'Cancelled',
    approved: 'Approved',
    rejected: 'Rejected',
    processing: 'Processing',
    
    // Qualifiers
    all: 'All',
    any: 'Any',
    none: 'None',
    available: 'Available',
    unavailable: 'Unavailable',
    enabled: 'Enabled',
    disabled: 'Disabled',
    on: 'On',
    off: 'Off',
    yes: 'Yes',
    no: 'No',
    true: 'True',
    false: 'False',
    
    // Messages
    welcome: 'Welcome',
    thankYou: 'Thank You',
    goodbye: 'Goodbye',
    please: 'Please',
    sorry: 'Sorry',
    congratulations: 'Congratulations',
    
    // Placeholders
    enterYourName: 'Enter your name',
    enterYourEmail: 'Enter your email',
    enterYourPassword: 'Enter your password',
    enterYourPhone: 'Enter your phone number',
    selectOption: 'Select an option',
    chooseFile: 'Choose file',
    
    // Units
    rs: 'Rs.',
    inr: '₹',
    percent: '%',
    
    // Locations
    india: 'India',
    mumbai: 'Mumbai',
    delhi: 'Delhi',
    bangalore: 'Bangalore',
    chennai: 'Chennai',
    kolkata: 'Kolkata',
    pune: 'Pune',
    hyderabad: 'Hyderabad',
    
    // Time periods
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    yearly: 'Yearly',
    annually: 'Annually',
    
    // Support
    help: 'Help',
    support: 'Support',
    customer: 'Customer',
    service: 'Service',
    assistance: 'Assistance',
    guidance: 'Guidance',
    
    // Legal
    terms: 'Terms',
    conditions: 'Conditions',
    policy: 'Policy',
    privacy: 'Privacy',
    legal: 'Legal',
    disclaimer: 'Disclaimer',
    rights: 'Rights',
    reserved: 'Reserved',
    
    // Marketing
    offer: 'Offer',
    discount: 'Discount',
    promotion: 'Promotion',
    deal: 'Deal',
    special: 'Special',
    limited: 'Limited',
    exclusive: 'Exclusive',
    new: 'New',
    featured: 'Featured',
    popular: 'Popular',
    recommended: 'Recommended',
    best: 'Best',
    top: 'Top',
    
    // Technical
    online: 'Online',
    offline: 'Offline',
    digital: 'Digital',
    electronic: 'Electronic',
    automatic: 'Automatic',
    manual: 'Manual',
    instant: 'Instant',
    quick: 'Quick',
    fast: 'Fast',
    secure: 'Secure',
    safe: 'Safe',
    encrypted: 'Encrypted',
    
    // Carousel & Marketing
    homeLoansAt: 'Home Loans at',
    dreamHomeEasyEMI: 'Dream Home, Easy EMI',
    homeLoanDescription: 'Get your dream home with our competitive interest rates and flexible repayment options. Quick approval and minimal documentation.',
    applyNow: 'Apply Now',
    personalLoansInstant: 'Personal Loans Instant',
    getApprovedIn5Minutes: 'Get Approved in 5 Minutes',
    personalLoanDescription: 'Personal loans up to ₹25 lakhs with instant approval. No collateral required. Flexible tenure options from 12 to 60 months.',
    checkEligibility: 'Check Eligibility',
    savingsAccount: 'Savings Account',
    interestRate: 'Interest Rate',
    savingsDescription: 'Open a savings account with attractive interest rates, zero balance facility, and comprehensive digital banking features.',
    openAccount: 'Open Account',
    
    // Products & Services
    ourProductsServices: 'Our Products & Services',
    discoverComprehensiveRange: 'Discover our comprehensive range of banking products designed to meet all your financial needs',
    
    // Security
    securityDescription: 'Learn how we protect your money and personal information with industry-leading security measures',
    ourSecurityFeatures: 'Our Security Features',
    
    // Branches
    findOurBranches: 'Find Our Branches',
    branchesDescription: 'Locate MNS Bank branches near you. We have a strong presence across India with branches in major cities offering comprehensive banking services.',
    searchBranches: 'Search Branches',
    findBranchesByLocation: 'Find branches by location or filter by state',
    
    // Credit Cards
    creditCards: 'Credit Cards',
    creditCardsDescription: 'Choose from our range of credit cards designed to suit your lifestyle. Enjoy exclusive benefits, rewards, and seamless banking experience.',
    whyChooseMNSBank: 'Why Choose MNS Bank Credit Cards?',
    secureSafe: 'Secure & Safe',
    secureDescription: 'Advanced security features to protect your transactions',
    excitingRewards: 'Exciting Rewards',
    rewardsDescription: 'Earn reward points on every purchase and redeem them easily',
    exclusiveOffers: 'Exclusive Offers',
    offersDescription: 'Special discounts and cashback at partner merchants',
    travelBenefits: 'Travel Benefits',
    travelDescription: 'Airport lounge access and travel insurance on select cards',
    easyApplicationProcess: 'Easy Application Process',
    chooseCard: 'Choose Card',
    fillApplication: 'Fill Application',
    submitDocuments: 'Submit Documents',
    getCard: 'Get Card',
    chooseCardDescription: 'Select the card that suits your needs',
    fillApplicationDescription: 'Complete the online application form',
    submitDocumentsDescription: 'Upload required documents for verification',
    getCardDescription: 'Receive your card within 7 working days',
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    minimumIncome: 'What is the minimum income required for credit cards?',
    minimumIncomeAnswer: 'The minimum income requirement varies by card type. Student cards have no income requirement, while premium cards may require monthly income of ₹80,000 or more.',
    checkApplicationStatus: 'How can I check my credit card application status?',
    checkApplicationStatusAnswer: 'You can check your application status online through our mobile app or website, or call our customer service at 1800-123-4567.',
    lostCard: 'What should I do if my credit card is lost or stolen?',
    lostCardAnswer: 'Immediately call our 24/7 helpline at 1800-123-4568 to block your card. You can also block it through our mobile app or internet banking.'
  },
  HI: {
    // Navigation
    personal: 'व्यक्तिगत',
    business: 'व्यवसाय',
    about: 'हमारे बारे में',
    services: 'सेवाएं',
    contact: 'संपर्क करें',
    findBranch: 'शाखा खोजें',
    emiCalculator: 'ईएमआई कैलक्युलेटर',
    
    // Common
    home: 'घर',
    login: 'लॉगिन',
    register: 'रजिस्टर करें',
    logout: 'लॉगआउट',
    search: 'खोजें',
    menu: 'मेनू',
    close: 'बंद करें',
    open: 'खोलें',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    submit: 'जमा करें',
    edit: 'संपादित करें',
    delete: 'मिटाएं',
    view: 'देखें',
    back: 'पीछे',
    next: 'अगला',
    previous: 'पिछला',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलत',
    warning: 'चेतावनी',
    info: 'जानकारी',
    
    // Contact Info
    phoneNumber: '1800-123-4567',
    emailAddress: 'info@mnsbank.com',
    
    // Footer
    rbiRegulated: 'आरबीआई विनियमित',
    isoCertified: 'आईएसओ प्रमाणित',
    oneCroreCustomers: '1 करोड़+ ग्राहक',
    banking24x7: '24/7 बैंकिंग',
    quickLinks: 'त्वरित लिंक',
    contactUs: 'संपर्क करें',
    tollFree: 'टोल फ्री',
    email: 'ईमेल',
    headOffice: 'मुख्य कार्यालय',
    headOfficeAddress: '123 बैंकिंग स्ट्रीट, वित्तीय जिला, मुंबई - 400001',
    importantLinks: 'महत्वपूर्ण लिंक',
    grievanceRedressal: 'शिकायत निवारण',
    unclaimedDeposits: 'दावा नहीं किए गए जमा',
    privacyPolicy: 'गोपनीयता नीति',
    termsConditions: 'नियम और शर्तें',
    bankingSecurity: 'बैंकिंग सुरक्षा',
    fraudAwareness: 'धोखाधड़ी जागरूकता',
    cyberSecurity: 'साइबर सुरक्षा',
    reportFraud: 'धोखाधड़ी की रिपोर्ट करें',
    regulatory: 'नियामक',
    rbiGuidelines: 'आरबीआई दिशानिर्देश',
    bankingOmbudsman: 'बैंकिंग लोकपाल',
    bcsbiCode: 'बीसीएसबीआई कोड',
    consumerProtection: 'उपभोक्ता संरक्षण',
    allRightsReserved: 'सभी अधिकार सुरक्षित',
    regulatedByRBI: 'भारतीय रिजर्व बैंक द्वारा विनियमित',
    bankDescription: '1950 से ईमानदारी और उत्कृष्टता के साथ राष्ट्र की सेवा। सभी वित्तीय जरूरतों के लिए आपका विश्वसनीय बैंकिंग साथी।',
    bankTagline: 'विश्वास के साथ बैंकिंग, उत्कृष्टता के साथ विकास',
    
    // Banking Terms
    account: 'खाता',
    balance: 'बैलेंस',
    transaction: 'लेनदेन',
    transfer: 'हस्तांतरण',
    deposit: 'जमा',
    withdraw: 'निकालन',
    loan: 'ऋण',
    interest: 'ब्याज',
    rate: 'दर',
    emi: 'ईएमआई',
    card: 'कार्ड',
    credit: 'क्रेडिट',
    debit: 'डेबिट',
    banking: 'वैंकिंग',
    mobile: 'मोबाइल',
    internet: 'इंटरनेट',
    
    // Security
    security: 'सुरक्षा',
    password: 'पासवर्ड',
    otp: 'ओटीपी',
    verification: 'सत्यापन',
    authenticate: 'प्रमाणित',
    authorize: 'अधिकृति',
    protected: 'सुरक्षित',
    threat: 'खतरा',
    alert: 'चेतावनी',
    notification: 'सूचना',
    scan: 'स्कैन',
    monitor: 'निगरान',
    block: 'ब्लॉक',
    report: 'रिपोर्ट',
    
    // Time
    today: 'आज',
    yesterday: 'कल',
    lastWeek: 'पिछले सप्ताह',
    lastMonth: 'पिछले महीने',
    year: 'साल',
    month: 'महीना',
    week: 'सप्ताह',
    day: 'दिन',
    hour: 'घंटा',
    minute: 'मिनट',
    second: 'सेकंड',
    
    // Numbers
    one: 'एक',
    two: 'दो',
    three: 'तीन',
    four: 'चार',
    five: 'पांच',
    six: 'छह',
    seven: 'सात',
    eight: 'आठ',
    nine: 'नौ',
    ten: 'दस',
    hundred: 'सौ',
    thousand: 'हज़ार',
    lakh: 'लाख',
    crore: 'करोड़',
    
    // Actions
    apply: 'आवेदन करें',
    knowMore: 'और जानें',
    learnMore: 'और अधिक जानें',
    readMore: 'और पढ़ें',
    viewAll: 'सभी देखें',
    getStarted: 'शुरू करें',
    explore: 'अन्वेषण करें',
    discover: 'खोजें',
    
    // Status
    active: 'सक्रिय',
    inactive: 'निष्क्रिय',
    pending: 'लंबित',
    completed: 'पूर्ण',
    failed: 'असफल',
    cancelled: 'रद्द किया गया',
    approved: 'स्वीकृत',
    rejected: 'अस्वीकृत',
    processing: 'प्रक्रिया चल रहा है',
    
    // Qualifiers
    all: 'सभी',
    any: 'कोई भी',
    none: 'कोई नहीं',
    available: 'उपलब्ध',
    unavailable: 'अनुपलब्ध',
    enabled: 'सक्षम',
    disabled: 'अक्षम',
    on: 'चालू',
    off: 'बंद',
    yes: 'हां',
    no: 'नहीं',
    true: 'सच',
    false: 'गलत',
    
    // Messages
    welcome: 'स्वागतम',
    thankYou: 'धन्यवाद',
    goodbye: 'अलविदा',
    please: 'कृपया',
    sorry: 'क्षमा करें',
    congratulations: 'बधाईवाद',
    
    // Placeholders
    enterYourName: 'अपना नाम दर्ज करें',
    enterYourEmail: 'अपना ईमेल दर्ज करें',
    enterYourPassword: 'अपना पासवर्ड दर्ज करें',
    enterYourPhone: 'अपना फोन नंबर दर्ज करें',
    selectOption: 'कोई विकल्प चुनें',
    chooseFile: 'फाइल चुनें',
    
    // Units
    rs: 'रु.',
    inr: '₹',
    percent: '%',
    
    // Locations
    india: 'भारत',
    mumbai: 'मुंबई',
    delhi: 'दिल्ली',
    bangalore: 'बंगलोर',
    chennai: 'चेन्नई',
    kolkata: 'कोलकाता',
    pune: 'पुणे',
    hyderabad: 'हैदराबाद',
    
    // Time periods
    daily: 'रोज',
    weekly: 'साप्ताहिक',
    monthly: 'मासिक',
    quarterly: 'त्रैमासिक',
    yearly: 'वार्षिक',
    annually: 'वार्षिक',
    
    // Support
    help: 'मददत',
    support: 'समर्थन',
    customer: 'ग्राहक',
    service: 'सेवा',
    assistance: 'सहायता',
    guidance: 'मार्गदर्शी',
    
    // Legal
    terms: 'नियम व शर्तें',
    conditions: 'शर्तें',
    policy: 'नीति',
    privacy: 'गोपनीयता',
    legal: 'कानूनी',
    disclaimer: 'अस्वीकरण',
    rights: 'अधिकार',
    reserved: 'आरक्षित',
    
    // Marketing
    offer: 'ऑफर',
    discount: 'छूट',
    promotion: 'प्रचार',
    deal: 'सौदा',
    special: 'विशेष',
    limited: 'सीमित',
    exclusive: 'अनन्य',
    new: 'नया',
    featured: 'विशेषित',
    popular: 'लोकप्रिय',
    recommended: 'अनुशंसित',
    best: 'श्रेष्ठ',
    top: 'शीर्ष',
    
// Technical
online: 'ऑनलाइन',
offline: 'ऑफलाइन',
digital: 'डिजिटल',
electronic: 'इलेक्ट्रॉनिक',
automatic: 'स्वचालित',
manual: 'मैन्युअल',
instant: 'तत्काल',
quick: 'तेजी',
fast: 'तेजी',
secure: 'सुरक्षित',
safe: 'सुरक्षित',
encrypted: 'एन्क्रिप्टेड',
    
// Carousel & Marketing
homeLoansAt: 'होम लोन',
dreamHomeEasyEMI: 'ड्रीम होम, आसान ईएमआई',
homeLoanDescription: 'हमारी प्रतिस्पर्धी ब्याज दरों और लचीले भुगतान विकल्पों के साथ अपने ड्रीम होम प्राप्त करें। त्वरित स्वीकृति और न्यूनतम दस्तावेज।।',
applyNow: 'अभी दें',
personalLoansInstant: 'तत्काल व्यक्तिगत ऋण',
getApprovedIn5Minutes: '5 मिनट में स्वीकृत',
personalLoanDescription: 'तत्काल स्वीकृति के साथ ₹25 लाख तक के व्यक्तिगत ऋण। कोई बंधक आवश्यक नहीं। 12 से 60 महीने के लचीले कार्यकाल विकल्प।',
checkEligibility: 'पात्रता जांचें',
savingsAccount: 'बचत खाता',
interestRate: 'ब्याज दर',
savingsDescription: 'आकर्षक ब्याज दरों, जीरो बैलेंस सुविधा और व्यापक डिजिटल बैंकिंग सुविधाओं के साथ बचत खाता खोलें।',
openAccount: 'खाता खोलें',
    
// Products & Services
ourProductsServices: 'हमारे उत्पाद और सेवाएं',
discoverComprehensiveRange: 'अपनी सभी वित्तीय आवश्यकताओं को पूरा करने वाले हमारे व्यापक बैंकिंग उत्पादों की खोज करें',
    
// Security
securityDescription: 'हम आपके पैसे और व्यक्तिगत जानकारी की उद्योग-अग्रणी सुरक्षा उपायों के साथ कैसे सुरक्षित करते हैं जानें',
ourSecurityFeatures: 'हमारी सुरक्षा विशेषताएं',
    
// Branches
findOurBranches: 'हमारी शाखाएं खोजें',
branchesDescription: 'अपने पास MNS बैंक शाखाएं खोजें। भारत में हमारी मजबूत उपस्थिति है और प्रमुख शहरों में शाखाएं हैं जो व्यापक बैंकिंग सेवाएं प्रदान करती हैं।',
searchBranches: 'शाखाएं खोजें',
findBranchesByLocation: 'स्थान के अनुसार शाखाएं खोजें या राज्य से फ़िल्टर करें',
    
// Credit Cards
creditCards: 'क्रेडिट कार्ड',
creditCardsDescription: 'अपनी जीवनशैली के अनुकूल हमारी क्रेडिट कार्ड की श्रृंखला से चुनें। अनन्य लाभ, पुरस्कार, और निर्बाध बैंकिंग अनुभव का आनंद करें।',
whyChooseMNSBank: 'MNS बैंक क्रेडिट कार्ड क्यों चुनें?',
secureSafe: 'सुरक्षित और सुरक्षित',
secureDescription: 'आपके लेन-देन की सुरक्षा के लिए उन्नत सुरक्षा विशेषताएं',
excitingRewards: 'रोमांचक पुरस्कार',
rewardsDescription: 'हर खरीद पर रिवॉर्ड पॉइंट्स कमाएं और उन्हें आसानी से रिडीम करें',
exclusiveOffers: 'अनन्य ऑफर',
offersDescription: 'साझेदार व्यापारियों पर विशेष छूट और कैशबैक',
travelBenefits: 'यात्रा लाभ',
travelDescription: 'चयनित कार्ड पर एयरपोर्ट लाउंज पहुंच और यात्रा बीमा',
easyApplicationProcess: 'आसान आवेदन प्रक्रिया',
chooseCard: 'कार्ड चुनें',
fillApplication: 'आवेदन भरें',
submitDocuments: 'दस्तावेज जमा करें',
getCard: 'कार्ड प्राप्त करें',
chooseCardDescription: 'अपनी जरूरतों के अनुकूल कार्ड का चयन करें',
fillApplicationDescription: 'ऑनलाइन आवेदन पत्र पूरा करें',
submitDocumentsDescription: 'सत्यापन के लिए आवश्यक दस्तावेज अपलोड करें',
getCardDescription: '7 कार्य दिवसों के भीतर अपना कार्ड प्राप्त करें',
frequentlyAskedQuestions: 'अक्सर पूछे जाने वाले प्रश्न',
minimumIncome: 'क्रेडिट कार्ड के लिए न्यूनतम आय क्या है?',
minimumIncomeAnswer: 'न्यूनतम आय आवश्यकता कार्ड प्रकार के अनुसार भिन्न होती है। छात्र कार्ड में कोई आय आवश्यकता नहीं है, जबकि प्रीमियम कार्ड में मासिक आय ₹80,000 या अधिक हो सकती है।',
checkApplicationStatus: 'मैं अपने क्रेडिट कार्ड आवेदन की स्थिति कैसे जांच सकता हूं?',
checkApplicationStatusAnswer: 'आप हमारे मोबाइल ऐप या वेबसाइट के माध्यम से ऑनलाइन अपनी आवेदन स्थिति जांच सकते हैं, या 1800-123-4567 पर हमारी ग्राहक सेवा को कॉल करें।',
lostCard: 'यदि मेरा क्रेडिट कार्ड खो गया या चोरी हो गया है तो मुझे क्या करना चाहिए?',
lostCardAnswer: 'अपना कार्ड ब्लॉक करने के लिए तुरंत हमारे 24/7 हेल्पलाइन 1800-123-4568 पर कॉल करें। आप हमारे मोबाइल ऐप या इंटरनेट बैंकिंग के माध्यम से भी इसे ब्लॉक कर सकते हैं।'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')

  // Initialize language from localStorage
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language | null
      if (savedLanguage && ['EN', 'HI'].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.warn('Error loading language from localStorage:', error)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('language', language)
    } catch (error) {
      console.warn('Error saving language to localStorage:', error)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'HI' : 'EN')
  }

  const t = (key: string): string => {
    return translations[language][key] || translations.EN[key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
