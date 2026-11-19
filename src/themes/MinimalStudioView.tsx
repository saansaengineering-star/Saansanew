import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from 'lucide-react';
import heroStudioImg from '../assets/images/hero_engineering_pokhara_1795057427362.jpg';
import { ResilientImage } from '../components/ResilientImage';
import {
  CLIENT_SECTORS,
  COMPANY_INFO,
  HERO_METRICS,
  INQUIRY_OPTIONS,
  MACHINERY_DIVISION,
  MAJOR_WORKS,
  PROCESS_STEPS,
  SERVICES,
} from '../data/saansaData';
import { useRfqForm, WEEK_DAYS } from '../hooks/useRfqForm';

interface MinimalStudioViewProps {
  selectedInquiry: string;
  onInquiryChange: (value: string) => void;
  onScrollToContact: (serviceLabel: string) => void;
}

const DOSSIER_DISCIPLINES = [
  ...SERVICES.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
    shortLabel: s.shortLabel,
    description: s.description,
    deliverables: s.deliverables,
    image: s.image,
    imageAlt: s.imageAlt,
  })),
  {
    id: 'machinery',
    number: MACHINERY_DIVISION.number,
    title: MACHINERY_DIVISION.title,
    shortLabel: MACHINERY_DIVISION.shortLabel,
    description: MACHINERY_DIVISION.description,
    deliverables: MACHINERY_DIVISION.capabilities,
    image: MACHINERY_DIVISION.image,
    imageAlt: MACHINERY_DIVISION.imageAlt,
  },
];

const NAV_ITEMS = [
  { label: 'Practice', href: '#services' },
  { label: 'Method', href: '#process' },
  { label: 'Works', href: '#works' },
  { label: 'Invitation', href: '#coffee' },
  { label: 'Contact', href: '#contact' },
];

export function MinimalStudioView({
  selectedInquiry,
  onInquiryChange,
  onScrollToContact,
}: MinimalStudioViewProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string>(DOSSIER_DISCIPLINES[0].id);
  const rfq = useRfqForm(selectedInquiry);

  const handleHeaderAction = () => {
    setMobileOpen(false);
    onScrollToContact('Design & Procurement Support');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#18181B]">
      {/* Strict 3-Zone Sticky Gallery Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC2626]"
          >
            {COMPANY_INFO.brandShort}
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#18181B] transition-colors py-1 border-b border-transparent hover:border-[#DC2626] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC2626]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleHeaderAction}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold bg-[#18181B] hover:bg-[#DC2626] text-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
            >
              Start Inquiry
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden w-11 h-11 inline-flex items-center justify-center border border-zinc-200 text-[#18181B] cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 px-2 text-sm font-medium text-[#18181B] hover:text-[#DC2626]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-100">
              <button
                type="button"
                onClick={handleHeaderAction}
                className="w-full py-3 text-xs font-semibold bg-[#18181B] hover:bg-[#DC2626] text-white transition-colors cursor-pointer"
              >
                Start Inquiry
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Ultra-Airy Gallery Hero */}
        <section id="home" aria-labelledby="hero-h1" className="border-b border-zinc-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs text-[#DC2626] mb-5">
                  {COMPANY_INFO.legalName} <span aria-hidden="true">·</span> Pokhara-08, Nepal
                </p>
                <h1
                  id="hero-h1"
                  className="font-display font-bold tracking-tight text-[#18181B] leading-[1.04] text-balance"
                  style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.1rem)' }}
                >
                  Engineering with clarity, restraint, and field rigor.
                </h1>
                <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-[56ch]">
                  High-precision property valuation, statutory procurement documentation, insurance
                  loss survey, MEP &amp; HVAC design, construction supervision, and turnkey
                  industrial machinery supply across Nepal.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => onScrollToContact('Design & Procurement Support')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold bg-[#18181B] hover:bg-[#DC2626] text-white transition-colors duration-150 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
                  >
                    <span>Request Engineering Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-[#18181B] underline underline-offset-4 hover:text-[#DC2626] transition-colors py-2"
                  >
                    View Practice Dossier
                  </a>
                </div>
              </div>

              <div
                role="list"
                aria-label="Practice track record"
                className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-zinc-200 pt-6 lg:pt-0 lg:pl-8 space-y-5"
              >
                {HERO_METRICS.map((m) => (
                  <div
                    key={m.label}
                    role="listitem"
                    className="flex items-baseline justify-between pb-3 border-b border-zinc-100"
                  >
                    <span className="text-xs font-medium text-zinc-500">{m.label}</span>
                    <span className="font-display text-2xl font-bold text-[#18181B] tabular-nums">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 aspect-[16/9] sm:aspect-[21/9] w-full bg-zinc-100 border border-zinc-200 overflow-hidden">
              <ResilientImage
                src={heroStudioImg}
                alt="Saansa Engineering architectural consultancy studio in Pokhara overlooking Himalayan hills"
                className="w-full h-full object-cover"
                fallbackTitle="Saansa Engineering · Pokhara Studio"
              />
            </div>
          </div>
        </section>

        {/* Expandable Accordion Practice Dossier */}
        <section
          id="services"
          aria-labelledby="practice-heading"
          className="py-16 lg:py-24 bg-[#F5F5F4] border-b border-zinc-200"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pb-8 border-b border-zinc-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[#DC2626] mb-2">Practice Dossier</p>
                <h2
                  id="practice-heading"
                  className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#18181B]"
                >
                  Six areas of specialization.
                </h2>
              </div>
              <p className="text-sm text-zinc-600">
                Select any discipline below to inspect scope and deliverables.
              </p>
            </div>

            <div className="divide-y divide-zinc-300 border-b border-zinc-300">
              {DOSSIER_DISCIPLINES.map((item) => {
                const isOpen = expandedId === item.id;
                return (
                  <div key={item.id} className="py-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setExpandedId(isOpen ? '' : item.id)}
                      className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC2626]"
                    >
                      <div className="flex items-baseline gap-5 sm:gap-8">
                        <span className="font-mono text-xs text-[#DC2626] tabular-nums shrink-0">
                          {item.number}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#18181B] group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#DC2626]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-6 pl-0 sm:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5 aspect-[4/3] bg-zinc-200 border border-zinc-300 overflow-hidden">
                          <ResilientImage
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover"
                            fallbackTitle={item.title}
                          />
                        </div>
                        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                            {item.description}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-zinc-300">
                            {item.deliverables.map((del) => (
                              <li
                                key={del}
                                className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#18181B]"
                              >
                                <Check className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <button
                              type="button"
                              onClick={() => onScrollToContact(item.shortLabel)}
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#18181B] hover:bg-[#DC2626] text-white transition-colors duration-150 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
                            >
                              <span>Request Quote for {item.shortLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Minimal Method */}
        <section
          id="process"
          aria-labelledby="method-heading"
          className="py-16 bg-white border-b border-zinc-200"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="method-heading" className="sr-only">
              Four-Stage Delivery Method
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                <li key={step.number}>
                  <span className="font-mono text-xs text-[#DC2626] tabular-nums">
                    {step.number}.
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-[#18181B]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{step.summary}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Selected Institutional Works */}
        <section
          id="works"
          aria-labelledby="works-heading"
          className="py-16 lg:py-24 bg-white border-b border-zinc-200"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pb-6 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[#DC2626] mb-2">Portfolio &amp; Proof</p>
                <h2
                  id="works-heading"
                  className="font-display text-3xl font-bold tracking-tight text-[#18181B]"
                >
                  Selected Institutional Works
                </h2>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                Across Pokhara &amp; Nepal
              </span>
            </div>

            <div className="divide-y divide-zinc-200">
              {MAJOR_WORKS.map((work) => (
                <article
                  key={work.id}
                  className="py-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-3 font-mono text-xs text-zinc-500">
                    <div>{work.sector}</div>
                    <div className="text-[#DC2626] mt-0.5">{work.location}</div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-xl font-bold text-[#18181B]">
                      {work.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-zinc-600">{work.outcome}</p>
                  </div>
                  <p className="lg:col-span-4 text-sm text-zinc-600 leading-relaxed">
                    {work.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {CLIENT_SECTORS.map((sec) => (
                <div key={sec.label}>
                  <div className="font-display text-3xl font-bold text-[#18181B] tabular-nums">
                    {sec.count}
                  </div>
                  <div className="text-sm font-semibold text-[#18181B] mt-1">{sec.label}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{sec.context}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimalist MD Coffee Invitation */}
        <section id="coffee" aria-labelledby="coffee-heading" className="py-16 lg:py-24 bg-[#18181B] text-white">
          <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs text-red-400 mb-3">An Open Invitation</p>
            <h2
              id="coffee-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white"
            >
              A handshake over coffee.
            </h2>
            <div className="mt-6 space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                Namaste. Every good project begins with a conversation, and every lasting
                partnership begins with a handshake. I would be honoured to host you at our Pokhara
                office for a cup of coffee, to hear about your plans and to share ours.
              </p>
              <p className="text-white font-medium">
                Whether or not a project comes our way, a handshake with you is worth having.
              </p>
              <p>
                Bring your drawings, site photos, or just an idea. We will talk it through before
                anything is quoted or signed.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-700 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 56 56"
                  aria-hidden="true"
                  className="w-11 h-11 shrink-0 text-red-400"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <text
                    x="28"
                    y="35"
                    textAnchor="middle"
                    fill="currentColor"
                    fontFamily="Urbanist, sans-serif"
                    fontWeight="700"
                    fontSize="20"
                  >
                    S
                  </text>
                </svg>
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    {COMPANY_INFO.managingDirector}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Managing Director, {COMPANY_INFO.legalName}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onScrollToContact('Coffee Meeting at Pokhara Office')}
                  className="px-5 py-2.5 text-xs font-semibold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors duration-150 cursor-pointer min-h-[40px]"
                >
                  Schedule Coffee Visit
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="px-4 py-2.5 text-xs font-mono font-medium border border-zinc-600 hover:border-zinc-400 text-zinc-200 transition-colors min-h-[40px] inline-flex items-center"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Phirke Map */}
        <section id="contact" aria-labelledby="contact-heading" className="py-16 lg:py-24 bg-[#F5F5F4]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 bg-white border border-zinc-200 p-6 sm:p-8">
              <h2
                id="contact-heading"
                className="font-display text-2xl font-bold text-[#18181B]"
              >
                Get in Touch
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Share your project brief, RFQ, or preferred coffee meeting time.
              </p>

              {rfq.submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-5 bg-[#F5F5F4] border border-zinc-200 space-y-4"
                >
                  <p className="text-sm font-bold text-[#18181B]">
                    Inquiry Brief Prepared for {COMPANY_INFO.email}
                  </p>
                  <pre className="text-xs font-mono whitespace-pre-wrap text-zinc-700 bg-white p-3 border border-zinc-200">
                    {rfq.formattedRfqBody}
                  </pre>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={rfq.mailtoHref}
                      className="px-4 py-2.5 text-xs font-semibold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors"
                    >
                      Open in Email Client
                    </a>
                    <button
                      type="button"
                      onClick={rfq.handleCopySummary}
                      className="px-4 py-2.5 text-xs font-semibold border border-zinc-300 bg-white hover:border-[#18181B] cursor-pointer"
                    >
                      {rfq.copiedSummary ? 'Copied Brief' : 'Copy Brief'}
                    </button>
                    <button
                      type="button"
                      onClick={rfq.handleReset}
                      className="text-xs text-zinc-600 underline cursor-pointer px-2 py-2"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={rfq.handleSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="rfq-service"
                      className="block text-xs font-semibold text-zinc-700 mb-1.5"
                    >
                      Service or Inquiry Type
                    </label>
                    <select
                      id="rfq-service"
                      value={selectedInquiry}
                      onChange={(e) => onInquiryChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 bg-white text-[#18181B] focus:outline-none focus:border-[#18181B]"
                    >
                      {INQUIRY_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="rfq-name"
                        className="block text-xs font-semibold text-zinc-700 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="rfq-name"
                        type="text"
                        value={rfq.name}
                        onChange={(e) => rfq.setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 focus:outline-none focus:border-[#18181B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-org"
                        className="block text-xs font-semibold text-zinc-700 mb-1.5"
                      >
                        Organization (Optional)
                      </label>
                      <input
                        id="rfq-org"
                        type="text"
                        value={rfq.organization}
                        onChange={(e) => rfq.setOrganization(e.target.value)}
                        placeholder="Bank, office, or company"
                        className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 focus:outline-none focus:border-[#18181B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-contact"
                      className="block text-xs font-semibold text-zinc-700 mb-1.5"
                    >
                      Phone Number or Email Address
                    </label>
                    <input
                      id="rfq-contact"
                      type="text"
                      value={rfq.contactDetail}
                      onChange={(e) => rfq.setContactDetail(e.target.value)}
                      placeholder="+977-98... or name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 focus:outline-none focus:border-[#18181B]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-brief"
                      className="block text-xs font-semibold text-zinc-700 mb-1.5"
                    >
                      Project Location &amp; Scope
                    </label>
                    <textarea
                      id="rfq-brief"
                      rows={4}
                      value={rfq.brief}
                      onChange={(e) => rfq.setBrief(e.target.value)}
                      placeholder="Site location, scope summary, or preferred meeting time..."
                      className="w-full px-3.5 py-2.5 text-sm border border-zinc-300 focus:outline-none focus:border-[#18181B]"
                    />
                  </div>

                  {rfq.errorMsg && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 px-3 py-2"
                    >
                      {rfq.errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold bg-[#18181B] hover:bg-[#DC2626] text-white transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare Brief</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="bg-white border border-zinc-200 divide-y divide-zinc-200">
                {[
                  { k: 'email', label: 'Email', val: COMPANY_INFO.email, icon: Mail },
                  { k: 'phone', label: 'Phone', val: COMPANY_INFO.phone, icon: Phone },
                  { k: 'addr', label: 'Office', val: COMPANY_INFO.address, icon: MapPin },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.k} className="p-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className="w-4 h-4 text-[#DC2626] shrink-0" />
                        <div className="min-w-0">
                          <span className="block font-mono text-[11px] text-zinc-500">
                            {row.label}
                          </span>
                          <span className="block text-sm font-semibold truncate">{row.val}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => rfq.handleCopy(row.k, row.val)}
                        className="px-2.5 py-1.5 text-xs font-mono border border-zinc-200 hover:border-[#18181B] transition-colors cursor-pointer shrink-0"
                      >
                        {rfq.copiedField === row.k ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white border border-zinc-200 p-4 sm:p-5">
                <div className="flex justify-between font-mono text-xs mb-3">
                  <span className="text-zinc-500">Office Hours</span>
                  <span className="font-semibold tabular-nums">{COMPANY_INFO.hours}</span>
                </div>
                <div className="grid grid-cols-7 gap-1 font-mono text-xs text-center">
                  {WEEK_DAYS.map((day) => (
                    <div
                      key={day}
                      className={`py-1.5 border ${
                        day === rfq.todayCode
                          ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                          : day === 'Sat'
                          ? 'bg-zinc-100 text-zinc-400 border-zinc-200'
                          : 'bg-[#F5F5F4] border-zinc-200'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 text-xs text-zinc-500">{COMPANY_INFO.hoursNote}</p>
              </div>

              <div className="bg-white border border-zinc-200">
                <div className="aspect-[16/8] bg-zinc-100">
                  <iframe
                    title="Google Map showing Pokhara Engineering College, Phirke, Pokhara"
                    src={COMPANY_INFO.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>
                <a
                  href={COMPANY_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 flex items-center justify-between text-xs font-semibold border-t border-zinc-200 hover:text-[#DC2626] transition-colors"
                >
                  <span>Pokhara Engineering College, Phirke · Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <span className="font-display font-bold text-[#18181B]">
            {COMPANY_INFO.legalName}
          </span>
          <nav aria-label="Footer links" className="flex flex-wrap gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#18181B] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className="font-mono">
            {COMPANY_INFO.address} · {COMPANY_INFO.phone}
          </span>
        </div>
      </footer>
    </div>
  );
}
