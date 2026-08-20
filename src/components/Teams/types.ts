export interface TeamInfo {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  row: 1 | 2;
  orderInRow: 0 | 1 | 2;
  isWideByDefault?: boolean;
  layoutType: 'image-top' | 'info-top';
  accentColor?: string;
  slug: string;
}
