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
    productImg: string; // keep as svg/png from /public
    customer: string;
    email: string;
    country: string;
    address: string;
    shipping: string;
    total: string;
    status: "Shipped" | "Processing";
  };

 export type Invoice = {
    id: string;
    title: string;
    company: string;
    amount: string;
      icon: string;
    status: "Paid" | "Pending" | "Processing";
  };

export type Order = {
  id: string;
  product: string;
  address: string;
  price: string;
  status: "Shipped" | "Processing" | "Cancelled";
  img: string;
};