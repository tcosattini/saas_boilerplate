export interface NavbarNavigationElement {
  id: number;
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<any>;
  current: boolean;
}
