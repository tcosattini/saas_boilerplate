import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigationElementsExample = [
  { id: 1, name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { id: 2, name: "Team", href: "#", icon: UsersIcon, current: false },
  { id: 3, name: "Projects", href: "#", icon: FolderIcon, current: false },
  { id: 4, name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { id: 4, name: "Documents", href: "#", icon: InboxIcon, current: false },
  { id: 5, name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
