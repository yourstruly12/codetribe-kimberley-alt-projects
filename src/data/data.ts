export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NFTCardData {
  id: number;
  title: string;
  author: string;
  price: string;
  bid: string;
  image: string;
  isMain?: boolean;
}

export interface SellerData {
  id: number;
  name: string;
  price: string;
  avatar: string;
}

export interface CategoryData {
  id: number;
  title: string;
  items: string;
  images: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Explore", href: "#explore" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Artists", href: "#artists" },
  { label: "News", href: "#news" },
];

export const STATS: StatItem[] = [
  { value: "27k+", label: "Art works" },
  { value: "20k+", label: "Auctions" },
  { value: "7k+", label: "Artists" },
];

export const POPULAR_NFTS: NFTCardData[] = [
  {
    id: 1,
    title: "Crypto Queen",
    author: "Lily",
    price: "1.5 ETH",
    bid: "39k",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Versace",
    author: "Gianni",
    price: "2.45 ETH",
    bid: "48k",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Digital Decade",
    author: "Anthony Gorgaz",
    price: "2.45 ETH",
    bid: "50k",
    image:
      "https://images.unsplash.com/photo-1633519101434-4a9868599de0?auto=format&fit=crop&q=80&w=600",
    isMain: true,
  },
  {
    id: 4,
    title: "Winter Jamz",
    author: "Kolex",
    price: "2.21 ETH",
    bid: "47k",
    image:
      "https://images.unsplash.com/photo-1614726365723-49cfae96727d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Praxel Wifey",
    author: "Unknown",
    price: "2.21 ETH",
    bid: "46k",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400",
  },
];

export const TOP_SELLERS: SellerData[] = [
  {
    id: 1,
    name: "Leighton Kramer",
    price: "276.7 ETH",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Haylie Arcand",
    price: "345.6 ETH",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Bowen Higgins",
    price: "323.7 ETH",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "Saige Fuentes",
    price: "347.7 ETH",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "Sophie Mclain",
    price: "230.6 ETH",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: 6,
    name: "Jeremy Burch",
    price: "267.3 ETH",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
  {
    id: 7,
    name: "Amelio Griffith",
    price: "354.1 ETH",
    avatar: "https://i.pravatar.cc/150?u=7",
  },
  {
    id: 8,
    name: "Isabelle Hart",
    price: "289.1 ETH",
    avatar: "https://i.pravatar.cc/150?u=8",
  },
  {
    id: 9,
    name: "Diego Bentley",
    price: "290.7 ETH",
    avatar: "https://i.pravatar.cc/150?u=9",
  },
  {
    id: 10,
    name: "Daisy Armand",
    price: "205.4 ETH",
    avatar: "https://i.pravatar.cc/150?u=10",
  },
];

export const CATEGORIES: CategoryData[] = [
  {
    id: 1,
    title: "Abstract",
    items: "30 Items",
    images: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1506259091721-347f798197d4?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1558470598-a5dda9640f68?auto=format&fit=crop&q=80&w=200",
    ],
  },
  {
    id: 2,
    title: "3D Art",
    items: "45 Items",
    images: [
      "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=200",
    ],
  },
  {
    id: 3,
    title: "Modern Art",
    items: "59 Items",
    images: [
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=200",
    ],
  },
  {
    id: 4,
    title: "Game",
    items: "25 Items",
    images: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=200",
    ],
  },
  {
    id: 5,
    title: "Graffiti",
    items: "36 Items",
    images: [
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1572376007425-8b3e05563e1f?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=200",
    ],
  },
  {
    id: 6,
    title: "Watercolor",
    items: "40 Items",
    images: [
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200",
    ],
  },
];