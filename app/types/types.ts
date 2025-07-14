export interface NavItem {
  title: string;
  link?: string;
  children?: NavItem[];
  site?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
