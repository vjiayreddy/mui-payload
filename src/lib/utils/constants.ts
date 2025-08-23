export const layoutConstant = {
  topbarHeight: 40,
  headerHeight: 80,
  mobileNavHeight: 64,
  containerWidth: 1200,
  mobileHeaderHeight: 64,
  grocerySidenavWidth: 280,
}

export const topbarSocialLinks = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
}

export const languageOptions = {
  en: {
    title: 'EN',
    value: 'en',
  },
  es: {
    title: 'DE',
    value: 'de',
  },
}

export const mobileNavigation = [
  {
    title: 'Home',
    icon: 'Home',
    href: '/',
    badge: false,
  },
  {
    title: 'Category',
    icon: 'CategoryOutlined',
    href: '/mobile-categories',
    badge: false,
  },
  {
    title: 'Cart',
    icon: 'ShoppingBagOutlined',
    href: '/cart',
    badge: true,
  },
  {
    title: 'Account',
    icon: 'User2',
    href: '/profile',
    badge: false,
  },
]

export const megaMenus = [
  [
    {
      title: 'Home',
      child: [
        {
          title: 'Market 1',
          url: '/market-1',
        },
        {
          title: 'Market 2',
          url: '/market-2',
        },
        {
          title: 'Gadget 1',
          url: '/gadget-1',
        },
        {
          title: 'Gadget 2',
          url: '/gadget-2',
        },
        {
          title: 'Grocery 1',
          url: '/grocery-1',
        },
        {
          title: 'Grocery 2',
          url: '/grocery-2',
        },

        // { title: "Grocery 3", url: "/grocery-3" },
        {
          title: 'Fashion 1',
          url: '/fashion-1',
        },
        {
          title: 'Fashion 2',
          url: '/fashion-2',
        },

        // { title: "Fashion 3", url: "/fashion-3" },
        {
          title: 'Gift Store',
          url: '/gift-shop',
        },
        {
          title: 'Furniture 1',
          url: '/furniture-1',
        },

        // { title: "Furniture 2", url: "/furniture-2" },
        {
          title: 'Health and Beauty',
          url: '/health-beauty',
        },
      ],
    },
  ],
  [
    {
      title: 'User Account',
      child: [
        {
          title: 'Order List',
          url: '/orders',
        },
        {
          title: 'Order Details',
          url: '/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8',
        },
        {
          title: 'View Profile',
          url: '/profile',
        },
        {
          title: 'Edit Profile',
          url: '/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75',
        },
        {
          title: 'Address List',
          url: '/address',
        },
        {
          title: 'Add Address',
          url: '/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
        },
        {
          title: 'All tickets',
          url: '/support-tickets',
        },
        {
          title: 'Ticket details',
          url: '/support-tickets/when-will-my-product-arrive',
        },
        {
          title: 'Wishlist',
          url: '/wish-list',
        },
      ],
    },
  ],
  [
    {
      title: 'Vendor Account',
      child: [
        {
          title: 'Dashboard',
          url: '/vendor/dashboard',
        },
        {
          title: 'Profile',
          url: '/vendor/account-settings',
        },
      ],
    },
    {
      title: 'Products',
      child: [
        {
          title: 'All products',
          url: '/admin/products',
        },
        {
          title: 'Add/Edit product',
          url: '/admin/products/create',
        },
      ],
    },
    {
      title: 'Orders',
      child: [
        {
          title: 'All orders',
          url: '/admin/orders',
        },
        {
          title: 'Order details',
          url: '/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8',
        },
      ],
    },
    {
      title: 'Authentication',
      child: [
        {
          title: 'Login',
          url: '/login',
        },
        {
          title: 'Register',
          url: '/register',
        },
      ],
    },
  ],
  [
    {
      title: 'Sale Page',
      child: [
        {
          title: 'Sales Version 1',
          url: '/sales-1',
        },
        {
          title: 'Sales Version 2',
          url: '/sales-2',
        },
      ],
    },
    {
      title: 'Shop',
      child: [
        {
          title: 'Search product',
          url: '/products/search?category=clothes',
        },
        {
          title: 'Single product',
          url: '/products/lord-2019',
        },
        {
          title: 'Cart',
          url: '/cart',
        },
        {
          title: 'Checkout',
          url: '/checkout',
        },
        {
          title: 'Alternative Checkout',
          url: '/checkout-alternative',
        },
        {
          title: 'Order confirmation',
          url: '/order-confirmation',
        },
      ],
    },
  ],
]

export const categoriesMegaMenu = [
  {
    title: 'Fashion',
    child: [
      {
        title: "Men's Fashion",
        child: [
          {
            title: 'T-Shirt',
            url: '#',
            icon: 'Shirt',
          },
          {
            title: 'Formal Shirt',
            url: '#',
            icon: 'UserTie',
          },
          {
            title: 'Shirt',
            url: '#',
            icon: 'Shirt',
          },
          {
            title: 'Shoes',
            url: '#',
            icon: 'Shoe',
          },
          {
            title: 'Jeans Pant',
            url: '#',
            icon: 'Shirt',
          },
          {
            title: 'Gabardine Pant',
            url: '#',
            icon: 'Shirt',
          },
          {
            title: 'Formal Pant',
            url: '#',
            icon: 'Shirt',
          },
          {
            title: 'Sunglass',
            url: '#',
            icon: 'Vest',
          },
          {
            title: 'Formal Shoes',
            url: '#',
            icon: 'Shoe',
          },
          {
            title: 'Lungi',
            url: '#',
            icon: 'Vest',
          },
          {
            title: 'Tank',
            url: '#',
            icon: 'Shoe',
          },
          {
            title: 'Jacket',
            url: '#',
            icon: 'Vest',
          },
        ],
      },
      {
        title: "Women's Fashion",
        child: [
          {
            title: 'Clothing',
            url: '#',
            icon: 'UserProfile',
          },
          {
            title: 'Shoes',
            url: '#',
            icon: 'Shoe',
          },
          {
            title: 'Jewelry',
            url: '#',
            icon: 'Accounts',
          },
          {
            title: 'Watches',
            url: '#',
            icon: 'AdminEcommerce',
          },
          {
            title: 'Hand Bags',
            url: '#',
            icon: 'Calender',
          },
          {
            title: 'Accessories',
            url: '#',
            icon: 'Chat',
          },
          {
            title: 'Makeup',
            url: '#',
            icon: 'Customers',
          },
          {
            title: 'Clothing',
            url: '#',
            icon: 'Dashboard',
          },
          {
            title: 'Shoes',
            url: '#',
            icon: 'DataTable',
          },
          {
            title: 'Jewelry',
            url: '#',
            icon: 'Ecommerce',
          },
          {
            title: 'Watches',
            url: '#',
            icon: 'ElementHub',
          },
          {
            title: 'Hand Bags',
            url: '#',
            icon: 'Invoice',
          },
        ],
      },
      {
        title: "Girls' Fashion",
        child: [
          {
            title: 'Clothing',
            url: '#',
            icon: 'Logout',
          },
          {
            title: 'Shoes',
            url: '#',
            icon: 'Order',
          },
          {
            title: 'Jewelry',
            url: '#',
            icon: 'Pages',
          },
          {
            title: 'Watches',
            url: '#',
            icon: 'Pricing',
          },
          {
            title: 'Hand Bags',
            url: '#',
            icon: 'Products',
          },
          {
            title: 'Gadget',
            url: '#',
            icon: 'ProjectChart',
          },
          {
            title: 'Clothing',
            url: '#',
            icon: 'Refund',
          },
          {
            title: 'Watches',
            url: '#',
            icon: 'Review',
          },
          {
            title: 'Shoes',
            url: '#',
            icon: 'Seller',
          },
          {
            title: 'Gadget',
            url: '#',
            icon: 'Session',
          },
          {
            title: 'Jewelry',
            url: '#',
            icon: 'Settings',
          },
          {
            title: 'Hand Bags',
            url: '#',
            icon: 'TodoList',
          },
        ],
      },
    ],
  },
  {
    title: 'Electronics',
    child: [
      {
        title: 'Accessories & Supplies',
        child: [
          {
            url: '#',
            title: 'Audio & Video Accessories',
            img: '/assets/images/products/bgearphone.png',
          },
          {
            url: '#',
            title: 'Cables',
            img: '/assets/images/products/Electronics/35.beatsbluetoothearpohones.png',
          },
          {
            url: '#',
            title: 'Microphones',
            img: '/assets/images/products/Electronics/33.beatswirelessearphones.png',
          },
          {
            url: '#',
            title: 'Cord Management',
            img: '/assets/images/products/Electronics/2.COSOR1.png',
          },
          {
            url: '#',
            title: 'Power Protection',
            img: '/assets/images/products/Electronics/3.PanasonicCharge.png',
          },
          {
            url: '#',
            title: 'Cell Phone Accessories',
            img: '/assets/images/products/Electronics/32.iphone7.png',
          },
        ],
      },
      {
        title: 'Power Accessories',
        child: [
          {
            url: '#',
            title: 'AC Adapters',
            img: '/assets/images/products/Electronics/5.AtechCam1080p.png',
          },
          {
            url: '#',
            title: 'Isolation Transformers',
            img: '/assets/images/products/Electronics/6.Sonya9.png',
          },
          {
            url: '#',
            title: 'Line Conditioners',
            img: '/assets/images/products/Electronics/7.beatsw3.png',
          },
          {
            url: '#',
            title: 'PDUs',
            img: '/assets/images/products/Electronics/8.BenQ2020.png',
          },
          {
            url: '#',
            title: 'Power Converters',
            img: '/assets/images/products/Electronics/10.SonyPS4.png',
          },
        ],
      },
      {
        title: 'Video Game Consoles & Accessories',
        child: [
          {
            url: '#',
            title: 'PlayStation 4',
            img: '/assets/images/products/Electronics/12.SonyBGB.png',
          },
          {
            url: '#',
            title: 'PlayStation 3',
            img: '/assets/images/products/Electronics/13.LGProducts.png',
          },
          {
            url: '#',
            title: 'Xbox One',
            img: '/assets/images/products/Electronics/14.Panasonic2019.png',
          },
          {
            url: '#',
            title: 'Nintendo Switch',
            img: '/assets/images/products/Electronics/15.DuneHD.png',
          },
          {
            url: '#',
            title: 'Sony PSP',
            img: '/assets/images/products/Electronics/16.SonyCCTV.png',
          },
        ],
      },
    ],
  },
  {
    title: 'Books',
    child: [
      {
        title: 'Arts & Photography',
        child: [
          {
            title: 'Architecture',
            url: '#',
          },
          {
            title: 'Business of Art',
            url: '#',
          },
          {
            title: 'History & Criticism',
            url: '#',
          },
          {
            title: 'Individual Artists',
            url: '#',
          },
          {
            title: 'Photography & Video',
            url: '#',
          },
          {
            title: 'Study & Teaching',
            url: '#',
          },
        ],
      },
      {
        title: 'Biographies & Memoirs',
        child: [
          {
            title: 'Arts & Literature',
            url: '#',
          },
          {
            title: 'Leaders & Notable People',
            url: '#',
          },
          {
            title: 'Professionals & Academics',
            url: '#',
          },
          {
            title: 'Sports & Outdoors',
            url: '#',
          },
          {
            title: 'True Crime',
            url: '#',
          },
        ],
      },
      {
        title: "Children's Books",
        child: [
          {
            title: 'Action & Adventure',
            url: '#',
          },
          {
            title: 'Animals',
            url: '#',
          },
          {
            title: 'Biographies',
            url: '#',
          },
          {
            title: 'Geography & Cultures',
            url: '#',
          },
          {
            title: 'Holidays & Celebrations',
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: 'Sports and Outdoors',
    child: [
      {
        title: 'Outdoor Recreation',
        child: [
          {
            title: 'Accessories',
            url: '#',
          },
          {
            title: 'Camping & Hiking',
            url: '#',
          },
          {
            title: 'Climbing',
            url: '#',
          },
          {
            title: 'Cycling',
            url: '#',
          },
          {
            title: 'Paintball',
            url: '#',
          },
          {
            title: 'Water Sports',
            url: '#',
          },
        ],
      },
      {
        title: 'Exercise & Fitness',
        child: [
          {
            title: 'Balance Trainers',
            url: '#',
          },
          {
            title: 'Cardio Training',
            url: '#',
          },
          {
            title: 'Fitness Technology',
            url: '#',
          },
          {
            title: 'Footwear',
            url: '#',
          },
          {
            title: 'Running',
            url: '#',
          },
        ],
      },
      {
        title: 'Sports Medicine',
        child: [
          {
            title: 'Athletic Tape & Supplies',
            url: '#',
          },
          {
            title: 'First Aid Kits',
            url: '#',
          },
          {
            title: 'Padding Supplies',
            url: '#',
          },
          {
            title: 'Mouthguards',
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: 'Software',
    child: [
      {
        title: 'Accounting & Finance',
        child: [
          {
            title: 'Business Accounting',
            url: '#',
          },
          {
            title: 'Check Printing',
            url: '#',
          },
          {
            title: 'Personal Finance',
            url: '#',
          },
          {
            title: 'Tax Preparation',
            url: '#',
          },
        ],
      },
      {
        title: 'Antivirus & Security',
        child: [
          {
            title: 'Antivirus',
            url: '#',
          },
          {
            title: 'Internet Security Suites',
            url: '#',
          },
          {
            title: 'Parental Control',
            url: '#',
          },
        ],
      },
      {
        title: 'Business & Office',
        child: [
          {
            title: 'Communication',
            url: '#',
          },
          {
            title: 'Contact Management',
            url: '#',
          },
          {
            title: 'Database Management',
            url: '#',
          },
          {
            title: 'Document Management',
            url: '#',
          },
          {
            title: 'Office Suites',
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: 'Toys and Games',
    child: [
      {
        title: 'Arts & Crafts',
        child: [
          {
            title: 'Adhesives',
            url: '#',
          },
          {
            title: 'Aprons & Smocks',
            url: '#',
          },
          {
            title: 'Clay & Dough',
            url: '#',
          },
          {
            title: 'Craft Kits',
            url: '#',
          },
        ],
      },
      {
        title: 'Baby & Toddler Toys',
        child: [
          {
            title: 'Activity Centers',
            url: '#',
          },
          {
            title: 'Balls',
            url: '#',
          },
          {
            title: 'Bath Toys',
            url: '#',
          },
          {
            title: 'Car Seat & Stroller Toys',
            url: '#',
          },
        ],
      },
    ],
  },
]

export const navbarNavigation = [
  {
    title: 'Home',
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      {
        title: 'Market',
        child: [
          {
            title: 'Market 1',
            url: '/market-1',
          },
          {
            title: 'Market 2',
            url: '/market-2',
          },
        ],
      },
      {
        title: 'Gadget',
        child: [
          {
            title: 'Gadget 1',
            url: '/gadget-1',
          },
          {
            title: 'Gadget 2',
            url: '/gadget-2',
          },
          {
            title: 'Gadget 3',
            url: '/gadget-3',
          },
        ],
      },
      {
        title: 'Grocery',
        child: [
          {
            title: 'Grocery 1',
            url: '/grocery-1',
          },
          {
            title: 'Grocery 2',
            url: '/grocery-2',
          },
          {
            title: 'Grocery 3',
            url: '/grocery-3',
          },
          {
            title: 'Grocery 4',
            url: '/grocery-4',
          },
        ],
      },
      {
        title: 'Fashion',
        child: [
          {
            title: 'Fashion 1',
            url: '/fashion-1',
          },
          {
            title: 'Fashion 2',
            url: '/fashion-2',
          },
          {
            title: 'Fashion 3',
            url: '/fashion-3',
          },
        ],
      },
      {
        title: 'Furniture',
        child: [
          {
            title: 'Furniture 1',
            url: '/furniture-1',
          },
          {
            title: 'Furniture 2',
            url: '/furniture-2',
          },
          {
            title: 'Furniture 3',
            url: '/furniture-3',
          },
        ],
      },
      {
        title: 'Medical',
        url: '/medical',
      },
      {
        title: 'Gift Store',
        url: '/gift-shop',
      },
      {
        title: 'Health and Beauty',
        url: '/health-beauty',
      },
    ],
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: 'Mega Menu',
    child: megaMenus,
  },
  {
    megaMenu: false,
    megaMenuWithSub: true,
    title: 'Full Screen Menu',
    child: categoriesMegaMenu,
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: 'Pages',
    child: [
      {
        title: 'Sale Page',
        child: [
          {
            title: 'Version 1',
            url: '/sales-1',
          },
          {
            title: 'Version 2',
            url: '/sales-2',
          },
        ],
      },
      {
        title: 'Vendor',
        child: [
          {
            title: 'All vendors',
            url: '/shops',
          },
          {
            title: 'Vendor store',
            url: '/shops/scarlett-beauty',
          },
        ],
      },
      {
        title: 'Shop',
        child: [
          {
            title: 'Search product',
            url: '/products/search?category=clothes',
          },
          {
            title: 'Single product',
            url: '/products/lord-2019',
          },
          {
            title: 'Cart',
            url: '/cart',
          },
          {
            title: 'Checkout',
            url: '/checkout',
          },
          {
            title: 'Alternative Checkout',
            url: '/checkout-alternative',
          },
          {
            title: 'Order confirmation',
            url: '/order-confirmation',
          },
        ],
      },
      {
        title: 'Auth',
        child: [
          {
            title: 'Login',
            url: '/login',
          },
          {
            title: 'Register',
            url: '/register',
          },
        ],
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: 'User Account',
    child: [
      {
        title: 'Orders',
        child: [
          {
            title: 'Order List',
            url: '/orders',
          },
          {
            title: 'Order Details',
            url: '/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8',
          },
        ],
      },
      {
        title: 'Profile',
        child: [
          {
            title: 'View Profile',
            url: '/profile',
          },
          {
            title: 'Edit Profile',
            url: '/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75',
          },
        ],
      },
      {
        title: 'Address',
        child: [
          {
            title: 'Address List',
            url: '/address',
          },
          {
            title: 'Add Address',
            url: '/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
          },
        ],
      },
      {
        title: 'Support tickets',
        child: [
          {
            title: 'All tickets',
            url: '/support-tickets',
          },
          {
            title: 'Ticket details',
            url: '/support-tickets/when-will-my-product-arrive',
          },
        ],
      },
      {
        title: 'Wishlist',
        url: '/wish-list',
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: 'Vendor Account',
    child: [
      {
        title: 'Dashboard',
        url: '/vendor/dashboard',
      },
      {
        title: 'Products',
        child: [
          {
            title: 'All products',
            url: '/admin/products',
          },
          {
            title: 'Add/Edit product',
            url: '/admin/products/lord-2019',
          },
        ],
      },
      {
        title: 'Orders',
        child: [
          {
            title: 'All orders',
            url: '/admin/orders',
          },
          {
            title: 'Order details',
            url: '/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8',
          },
        ],
      },
      {
        title: 'Profile',
        url: '/vendor/account-settings',
      },
    ],
  },
]
