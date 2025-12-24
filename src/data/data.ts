import { EventItem, Invoice, NavItem, Order, Sale, UpdateItem } from "@/types/type";

export const NAVBAR_ITEMS: NavItem[] = [
  { key: "timer", src: "/timer.svg", alt: "timer", active: true },
  { key: "bag", src: "/bag.svg", alt: "bag" },
  { key: "correct", src: "/correct.svg", alt: "correct" },
  { key: "mails", src: "/mails.svg", alt: "mails" },
  { key: "calender", src: "/calender.svg", alt: "calender" },
  { key: "person", src: "/person.svg", alt: "person" },
  { key: "comments", src: "/comments.svg", alt: "comments" },
  { key: "dice", src: "/dice.svg", alt: "dice" },
  { key: "invoice", src: "/invoice.svg", alt: "invoice" },
  { key: "file", src: "/file.svg", alt: "file" },
  { key: "center", src: "/center.svg", alt: "center" },
  { key: "wave", src: "/wave.svg", alt: "wave" },
  { key: "question", src: "/questionMark.svg", alt: "question mark" },
];

export const DASHBOARD_3_UPDATES: UpdateItem[] = [
  { id: "u1", iconSrc: "/dashboard3Icons/cart.svg", iconAlt: "cart", title: "Item sale #340-00", right: "+$890.00" },
  { id: "u2", iconSrc: "/dashboard3Icons/newLead.svg", iconAlt: "new lead", title: "New lead created", right: "30 min" },
  { id: "u3", iconSrc: "/dashboard3Icons/cart.svg", iconAlt: "cart", title: "Item sale #360-20", right: "+$940.00" },
  { id: "u4", iconSrc: "/dashboard3Icons/upload.svg", iconAlt: "upload", title: "Items upload complete", right: "45 min" },
  { id: "u5", iconSrc: "/dashboard3Icons/notification.svg", iconAlt: "notification", title: "Email notifications sent", right: "2 hrs" },
];

export const DASHBOARD_3_EVENTS: EventItem[] = [
  { id: "e1", time: "05:48AM", title: "Meeting with a client", desc: "Tell how to boost website traffic", dot: "blue" },
  { id: "e2", time: "10:28AM", title: "New project discussion", desc: "Business Cards Does Your Business", dot: "amber" },
];

export const DASHBOARD_2_EVENTS: EventItem[] = [
  { id: "e1", time: "05:48AM", title: "Meeting with a client", desc: "Tell how to boost website traffic", dot: "blue" },
  { id: "e2", time: "10:28AM", title: "New project discussion", desc: "Business Cards Does Your Business", dot: "amber" },
  { id: "e3", time: "07:58PM", title: "Financial data overview", desc: "What Makes Flyers Unrivaled", dot: "green" },
];

 export const BARS = [
    { id: "b1", blue: 44, green: 30 },
    { id: "b2", blue: 78, green: 24 },
    { id: "b3", blue: 60, green: 38 },
    { id: "b4", blue: 86, green: 32 },
    { id: "b5", blue: 64, green: 44 },
    { id: "b6", blue: 92, green: 36 },
    { id: "b7", blue: 56, green: 30 },
    { id: "b8", blue: 70, green: 34 },
  ];
  
  export const SALES: Sale[] = [
    {
      product: "Macbook Pro",
      productId: "ID 10-3290-08",
      productImg: "/dashboard3Icons/mac1.svg",
      customer: "Rodney Cannon",
      email: "rodney.cannon@gmail.com",
      country: "United Kingdom",
      address: "193 Cole Plains Suite 649, 891203",
      shipping: "$18.00",
      total: "$118.00",
      status: "Shipped",
    },
    {
      product: "Dell Laptop",
      productId: "ID 10-3456-18",
      productImg: "/dashboard3Icons/mac2.svg",
      customer: "Mike Franklin",
      email: "mike.franklin@gmail.com",
      country: "United States",
      address: "619 Jeffrey Freeway Apt. 273",
      shipping: "$28.00",
      total: "$208.00",
      status: "Processing",
    },
    {
      product: "Macbook Air",
      productId: "ID 10-3786-23",
      productImg: "/dashboard3Icons/mac3.svg",
      customer: "Louis Franklin",
      email: "louis.franklin@gmail.com",
      country: "Germany",
      address: "200 Davis Estates Suite 621",
      shipping: "$18.00",
      total: "$118.00",
      status: "Processing",
    },
  ];

export const INVOICES_DATA: Invoice[] = [
  { id: "AA-04-19-1890677", title: "Website Development", icon: "/invoice.svg", company: "New Madieton LLC.", amount: "$1,250.00", status: "Paid" },
  { id: "AA-04-19-1890678", title: "UI/UX Design", icon: "/invoice.svg", company: "TechVerse Pvt Ltd", amount: "$980.00", status: "Pending" },
  { id: "AA-04-19-1890679", title: "API Integration", icon: "/invoice.svg", company: "CloudNova Inc.", amount: "$1,500.00", status: "Processing" },
  { id: "AA-04-19-1890680", title: "Mobile App Development", icon: "/invoice.svg", company: "PixelCraft Studio", amount: "$2,300.00", status: "Paid" },
  { id: "AA-04-19-1890681", title: "Maintenance & Support", icon: "/invoice.svg", company: "BluePeak Solutions", amount: "$450.00", status: "Pending" },
  { id: "AA-04-19-1890682", title: "Cloud Hosting", icon: "/invoice.svg", company: "InfraWorks Ltd.", amount: "$720.00", status: "Paid" },
  { id: "AA-04-19-1890683", title: "Performance Optimization", icon: "/invoice.svg", company: "NextGen Systems", amount: "$860.00", status: "Processing" },
];

export const ORDERS_DATA: Order[] = [
  {
    id: "10-3290-08",
    product: "MacBook Pro 2013, 16 GB, 256 GB SSD",
    address: "4574 Bashirian Creek Suite 631",
    price: "$118.00",
    status: "Shipped",
    img: "/dashboard3Icons/mac1.svg",
  },
  {
    id: "10-3291-12",
    product: "iPhone 13 Pro, 128 GB",
    address: "9027 Wilkinson Locks Apt 210",
    price: "$999.00",
    status: "Processing",
    img: "/dashboard3Icons/mac2.svg",
  },
  {
    id: "10-3292-19",
    product: "Apple Watch Series 7, 45mm",
    address: "1293 Leannon Street, NY",
    price: "$399.00",
    status: "Processing",
    img: "/dashboard3Icons/mac3.svg",
  },
  {
    id: "10-3293-23",
    product: "iPad Pro 11-inch, 256 GB",
    address: "6689 Abbott Prairie",
    price: "$799.00",
    status: "Shipped",
    img: "/dashboard3Icons/mac1.svg",
  },
  {
    id: "10-3294-31",
    product: "AirPods Pro (2nd Generation)",
    address: "3147 Kertzmann Summit",
    price: "$249.00",
    status: "Cancelled",
    img: "/dashboard3Icons/mac2.svg",
  },
  {
    id: "10-3295-44",
    product: "Mac Mini M1, 8 GB, 512 GB SSD",
    address: "7802 Effertz Throughway",
    price: "$699.00",
    status: "Cancelled",
    img: "/dashboard3Icons/mac3.svg",
  },
  {
    id: "10-3296-58",
    product: "Magic Keyboard with Touch ID",
    address: "5591 Cartwright Bridge",
    price: "$179.00",
    status: "Cancelled",
    img: "/dashboard3Icons/mac1.svg",
  },
];

export const MONTHS_DATA = [
  { m: "Jan", a: 28, b: 22 },
  { m: "Feb", a: 24, b: 18 },
  { m: "Mar", a: 18, b: 14 },
  { m: "Apr", a: 42, b: 36 },
  { m: "Jun", a: 54, b: 20 },
  { m: "Jul", a: 46, b: 18 },
  { m: "Aug", a: 30, b: 26 },
  { m: "Sep", a: 18, b: 30 },
  { m: "Oct", a: 26, b: 22 },
  { m: "Nov", a: 40, b: 30 },
  { m: "Dec", a: 32, b: 36 },
];