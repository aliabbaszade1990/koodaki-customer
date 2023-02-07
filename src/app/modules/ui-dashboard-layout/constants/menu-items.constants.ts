export const HORN_MENU_ITEMS: MenuItem[] = [
  {
    text: 'پروژه های من',
    link: 'panel/project/list',
    icon: 'photo-library',
  },
];

export interface MenuItem {
  text: string;
  link: string;
  icon: string;
}
