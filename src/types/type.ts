export type NavItem = {
  key: string;
  src: string;
  alt: string;
  active?: boolean;
};

export type UpdateItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  right: string;
};

export type EventItem = {
  id: string;
  time: string;
  title: string;
  desc: string;
  dot: DotColor;
};
export type DotColor = "blue" | "amber" | "green";

export type Sale = {
  product: string;
  productId: string;
  productImg: string;
  customer: string;
  email: string;
  country: string;
  address: string;
  shipping: string;
  total: string;
  status: "Shipped" | "Processing";
  createdAt: string;
};

export type Invoice = {
  id: string;
  title: string;
  company: string;
  amount: string;
  icon: string;
  status: "Paid" | "Pending" | "Processing";
  createdAt: string;
};

export type Order = {
  id: string;
  product: string;
  address: string;
  price: string;
  status: "Shipped" | "Processing" | "Cancelled";
  img: string;
  createdAt: string;
};

export type Tab = { key: string; label: string };

export type sectionHeaderProps = {
  title: string;
  activeKey: string;
  onChange?: (key: string) => void;
  tabs?: Tab[];
  rightIconSrc?: string;
  rightIconAlt?: string;
  onRightIconClick?: () => void;
};