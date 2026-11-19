import { useState } from 'react';
import { INQUIRY_OPTIONS } from './data/saansaData';
import { MinimalStudioView } from './themes/MinimalStudioView';

export default function App() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>(INQUIRY_OPTIONS[0]);

  const scrollToContactWithService = (serviceLabel: string) => {
    const matched = INQUIRY_OPTIONS.find(
      (opt) => opt.toLowerCase() === serviceLabel.toLowerCase()
    );
    if (matched) {
      setSelectedInquiry(matched);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      const nameInput = document.getElementById('rfq-name');
      if (nameInput instanceof HTMLInputElement) {
        nameInput.focus({ preventScroll: true });
      }
    }, 350);
  };

  return (
    <MinimalStudioView
      selectedInquiry={selectedInquiry}
      onInquiryChange={setSelectedInquiry}
      onScrollToContact={scrollToContactWithService}
    />
  );
}
