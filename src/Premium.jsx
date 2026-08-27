import './Premium.css'
import Button from './components/button.jsx'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const premiumFeatures = [
    { icon: 'checkcircle', label: 'Verified checkmark' },
    { icon: 'grok', label: 'Enhanced Grok access' },
    { icon: 'chart', label: 'Advanced analytics' },
    { icon: 'star', label: 'Less ads in your feeds' },
    { icon: 'chat', label: 'Boosted replies' },
    { icon: 'plus', label: 'Everything in Basic' },
]

const premiumPlusFeatures = [
    { icon: 'sparkle', label: 'Fully ad-free' },
    { icon: 'reply', label: 'Highest reply boost' },
    { icon: 'plus', label: 'Everything in Premium' },
]

const compareSections = [
    {
        title: 'Enhanced Experience',
        rows: [
            { label: 'Ads', premium: 'Half in For You & Following', plus: 'Fully ad-free' },
            { label: 'Reply boost', premium: 'Larger', plus: 'Largest' },
            { label: 'Radar', premium: false, plus: true },
            { label: 'Edit post', premium: true, plus: true },
        ],
    },
    {
        title: 'Grok AI',
        rows: [
            { label: 'Usage limits', premium: 'Higher', plus: 'Highest' },
            { label: 'Early access to new features', premium: false, plus: true },
            { label: 'Tag @Grok in replies', premium: true, plus: true },
        ],
    },
    {
        title: 'Verification & Security',
        rows: [
            { label: 'Checkmark', premium: true, plus: true },
            { label: 'Optional ID verification', premium: true, plus: true },
        ],
    },
    {
        title: 'Customization',
        rows: [
            { label: 'Bookmark folders', premium: true, plus: true },
        ],
    },
]

function CompareCell({ value }) {
    if (value === true) {
        return <img className="compareCheck" src="" alt="" />
    }
    if (value === false) {
        return <img className="compareX" src="" alt="" />
    }
    return <span className="compareText">{value}</span>
}
function Premium() {
    const navigate = useNavigate()
    const location = useLocation()
    const previousSection = location.state?.activeLabel
    const [billing, setBilling] = useState('monthly')
    const [selectedPlan, setSelectedPlan] = useState('premium')

    const isAnnual = billing === 'annual'

    const plans = {
        premium: {
            name: 'Premium',
            monthlyPrice: '4',
            annualPrice: '7',
            annualSub: '$84 billed annually',
            monthlyNote: 'For first 2 months, then $8 billed monthly',
            annualTotal: '84',
        },
        plus: {
            name: 'Premium+',
            monthlyPrice: '10',
            annualPrice: '16.46',
            annualSub: '$197.50 billed annually',
            monthlyNote: 'For first 2 months, then $20 billed monthly',
            annualTotal: '197.50',
        },
    }

    const activePlan = plans[selectedPlan]
    const checkoutPrice = isAnnual ? activePlan.annualTotal : activePlan.monthlyPrice
    const checkoutUnit = isAnnual ? '/ year' : '/ month'
    const checkoutNote = isAnnual ? 'Billed annually' : activePlan.monthlyNote

    return (
        <div className="premiumSignup">
            <div className="premiumTopBar">
                <Button className="premiumCloseButton" onClick={() => navigate(`/${previousSection}`)}>
                    <img src="/whitex.png" alt="" />
                </Button>
            </div>

            <div className="premiumHeader">
                <img className="premiumCheckIcon" src="/bluecheckmark.png" alt="" />
                <h1 className="premiumHeadline">
                    Don't lose <span className="premiumHeadlineBlue">50% off</span> your first 2 months
                </h1>

                <div className="billingToggle">
                    <Button
                        className={billing === 'monthly' ? 'billingOptionActive' : 'billingOption'}
                        onClick={() => setBilling('monthly')}
                    >
                        Monthly
                    </Button>
                    <Button
                        className={isAnnual ? 'billingOptionActive' : 'billingOption'}
                        onClick={() => setBilling('annual')}
                    >
                        Annual
                    </Button>
                </div>
            </div>

            <div className="planCards">
                <Button
                    className={selectedPlan === 'premium' ? 'planCardActive' : 'planCard'}
                    onClick={() => setSelectedPlan('premium')}
                >
                    <div className="planCardTop">
                        <h2 className="planCardName">Premium</h2>
                        {!isAnnual && <span className="planCardBadge">50% off for 2 months</span>}
                    </div>
                    <div className="planCardPrice">
                        <span className="planCardPriceValue">
                            ${isAnnual ? plans.premium.annualPrice : plans.premium.monthlyPrice}
                        </span>
                        <span className="planCardPriceUnit">/ month</span>
                    </div>
                    <p className="planCardSub">{isAnnual ? plans.premium.annualSub : ''}</p>
                    <div className="planFeatureList">
                        {premiumFeatures.map((element, index) => (
                            <div className="planFeatureRow" key={index}>
                                <img className="planFeatureIcon" src="" alt="" />
                                <span className="planFeatureLabel">{element.label}</span>
                            </div>
                        ))}
                    </div>
                </Button>

                <Button
                    className={selectedPlan === 'plus' ? 'planCardActive' : 'planCard'}
                    onClick={() => setSelectedPlan('plus')}
                >
                    <div className="planCardTop">
                        <h2 className="planCardName">Premium+</h2>
                        {!isAnnual && <span className="planCardBadge">50% off for 2 months</span>}
                    </div>
                    <div className="planCardPrice">
                        <span className="planCardPriceValue">
                            ${isAnnual ? plans.plus.annualPrice : plans.plus.monthlyPrice}
                        </span>
                        <span className="planCardPriceUnit">/ month</span>
                    </div>
                    <p className="planCardSub">{isAnnual ? plans.plus.annualSub : ''}</p>
                    <div className="planFeatureList">
                        {premiumPlusFeatures.map((element, index) => (
                            <div className="planFeatureRow" key={index}>
                                <img className="planFeatureIcon" src="" alt="" />
                                <span className="planFeatureLabel">{element.label}</span>
                            </div>
                        ))}
                    </div>
                </Button>
            </div>

            <div className="compareSectionHeading">
                <div>Compare tiers & features</div>
            </div>

            {compareSections.map((section, index) => (
                <div className="compareCard" key={index}>
                    <div className="compareRowHeader">
                        <span className="compareColHeading">{section.title}</span>
                        <span className="compareColHeading">Premium</span>
                        <span className="compareColHeading">Premium+</span>
                    </div>
                    {section.rows.map((row, j) => (
                        <div className="compareRow" key={j}>
                            <span className="compareLabel" style={{ fontWeight: '500', fontSize: '15px' }}>
                                {row.label}
                            </span>
                            <div className="compareCol"><CompareCell value={row.premium} /></div>
                            <div className="compareCol"><CompareCell value={row.plus} /></div>
                        </div>
                    ))}
                </div>
            ))}

            <div className="premiumFooter">
                <div className="premiumFooterInner">
                    <div className="premiumFooterInfo">
                        <span className="premiumFooterPlanName">{activePlan.name}</span>
                        <div className="premiumFooterPriceRow">
                            <span className="premiumFooterPriceValue">${checkoutPrice}</span>
                            <span className="premiumFooterPriceUnit">{checkoutUnit}</span>
                        </div>
                        <span className="premiumFooterNote">{checkoutNote}</span>
                    </div>
                    <div className="premiumFooterAction">
                        <Button className="premiumFooterSubscribeButton" text="Subscribe & Pay" />
                        <p className="premiumFooterLegal">
                            By subscribing, you agree to our <a href="" className="premiumFooterLink">Purchaser Terms</a>, and that subscriptions
                            auto-renew until you cancel. <a href="" className="premiumFooterLink">Cancel anytime</a>, at least 24 hours prior to
                            renewal to avoid additional charges. Price subject to change. <em>Manage your subscription through the platform you subscribed on.</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium