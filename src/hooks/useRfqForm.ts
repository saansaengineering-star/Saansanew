import { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../data/saansaData';

export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

export function useRfqForm(selectedInquiry: string) {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contactDetail, setContactDetail] = useState('');
  const [brief, setBrief] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [todayCode, setTodayCode] = useState<string>('Sun');

  useEffect(() => {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
    const nepalDate = new Date(utcMs + (5 * 60 + 45) * 60_000);
    setTodayCode(WEEK_DAYS[nepalDate.getDay()]);
  }, []);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Ignore if clipboard unavailable
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contactDetail.trim();
    const trimmedBrief = brief.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = trimmedContact.replace(/\D/g, '');
    if (!emailRegex.test(trimmedContact) && phoneDigits.length < 7) {
      setErrorMsg('Please provide a valid email address or phone number.');
      return;
    }

    if (!trimmedBrief) {
      setErrorMsg('Please add a brief note about your project or preferred visit time.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const formattedRfqBody = `Inquiry Type: ${selectedInquiry}\nName: ${name.trim()}\nOrganization: ${
    organization.trim() || 'Individual / Not specified'
  }\nContact: ${contactDetail.trim()}\n\nProject Brief:\n${brief.trim()}`;

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `[RFQ / Inquiry] ${selectedInquiry} — ${name.trim()}`
  )}&body=${encodeURIComponent(formattedRfqBody)}`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(formattedRfqBody);
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2000);
    } catch {
      // Ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setOrganization('');
    setContactDetail('');
    setBrief('');
    setErrorMsg('');
  };

  return {
    name,
    setName,
    organization,
    setOrganization,
    contactDetail,
    setContactDetail,
    brief,
    setBrief,
    errorMsg,
    submitted,
    copiedField,
    copiedSummary,
    todayCode,
    formattedRfqBody,
    mailtoHref,
    handleCopy,
    handleSubmit,
    handleCopySummary,
    handleReset,
  };
}
