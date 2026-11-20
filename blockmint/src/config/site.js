/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS CONTACT CONFIGURATION
 *  Update these values when the official details are available.
 *  Leave a value as an empty string to show its placeholder.
 * ─────────────────────────────────────────────────────────────
 */
export const contact = {
  // e.g. '+91 98765 43210'
  phone: '',
  // e.g. 'hello@blockmint.in'
  email: '',
  // e.g. 'Floor, Building, Street, City, State PIN'
  address: '',
  // WhatsApp number in international format, digits only, e.g. '919876543210'
  whatsappNumber: '',
}

export const placeholders = {
  phone: '[BUSINESS PHONE NUMBER]',
  email: '[OFFICIAL EMAIL ADDRESS]',
  address: '[OFFICE ADDRESS]',
}

export const brand = {
  name: 'BlockMint Technology Services',
  tagline: 'Smart Technology. Reliable Services. Better Solutions.',
}

/** Builds a WhatsApp link. Without a configured number it opens WhatsApp's share sheet. */
export function whatsappLink(message = 'Hello BlockMint, I would like to enquire about your services.') {
  const text = encodeURIComponent(message)
  return contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`
}

/** mailto link when an email is configured, otherwise jumps to the contact details. */
export function emailLink(subject = 'Enquiry for BlockMint Technology Services') {
  return contact.email ? `mailto:${contact.email}?subject=${encodeURIComponent(subject)}` : '#contact-details'
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why BlockMint', href: '#why' },
  { label: 'Contact', href: '#contact' },
]
