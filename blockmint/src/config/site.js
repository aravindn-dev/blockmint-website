/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS CONTACT CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 */
export const contact = {
  phone: '+91 85001 92449',
  email: 'info@blockmint.in',
  address: `1st floor, 2nd chamber, House no 30-14-12/1\nSrinilayam building, Near Saraswati park\nBeside leelamahal theatre, Dabagardens\nVisakhapatnam - 530020`,
  whatsappNumber: '918500192449',
}

export const placeholders = {
  phone: '+91 85001 92449',
  email: 'info@blockmint.in',
  address: 'Dabagardens, Visakhapatnam - 530020',
}

export const brand = {
  name: 'BlockMint Technology Services',
  tagline: 'Build Something Today That Inspires Tomorrow.',
  quotation: 'Build Something Today That Inspires Tomorrow.',
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
  { label: 'Home', href: '/', id: 'home' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Why BlockMint', href: '/why', id: 'why' },
  { label: 'Contact', href: '/contact', id: 'contact' },
]
