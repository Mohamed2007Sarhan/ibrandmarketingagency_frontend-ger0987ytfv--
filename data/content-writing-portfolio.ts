<<<<<<< HEAD
export interface ContentWritingProject {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  category: string
  categoryAr: string
  client: string
  clientAr: string
  duration: string
  durationAr: string
  services: string[]
  images: string[]
  results: {
    metric: string
    metricAr: string
    value: string
    description: string
    descriptionAr: string
  }[]
}

export const contentWritingPortfolio: ContentWritingProject[] = [
  // الملابس - صور 2-4
  {
    id: "fashion-content-1",
    title: "Fashion Content Strategy",
    titleAr: "استراتيجية محتوى الأزياء",
    description: "Comprehensive content strategy for fashion brands to increase sales and market presence",
    descriptionAr: "استراتيجية محتوى شاملة لعلامات الأزياء لزيادة المبيعات والحضور في السوق",
    category: "Fashion & Beauty",
    categoryAr: "أزياء وجمال",
    client: "Luxury Fashion House",
    clientAr: "دار أزياء فاخرة",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Content Strategy", "Copywriting", "Social Media Content"],
    images: [
      "/new/content-writing/slide_2.png",
      "/new/content-writing/slide_3.png",
      "/new/content-writing/slide_4.png"
    ],
    results: [
      {
        metric: "Sales Increase",
        metricAr: "زيادة المبيعات",
        value: "+45%",
        description: "Significant boost in online sales through targeted content",
        descriptionAr: "زيادة كبيرة في المبيعات عبر الإنترنت من خلال المحتوى المستهدف"
      },
      {
        metric: "Engagement Rate",
        metricAr: "معدل التفاعل",
        value: "+78%",
        description: "Higher customer engagement on social media platforms",
        descriptionAr: "تفاعل أعلى للعملاء على منصات التواصل الاجتماعي"
      }
    ]
  },

  // الملابس - صور 5-7
  {
    id: "fashion-content-2",
    title: "Fashion Brand Development",
    titleAr: "تطوير العلامة التجارية للأزياء",
    description: "Advanced content creation for fashion brands to enhance market positioning and customer loyalty",
    descriptionAr: "إنشاء محتوى متقدم لعلامات الأزياء لتعزيز الموضع في السوق وولاء العملاء",
    category: "Fashion & Beauty",
    categoryAr: "أزياء وجمال",
    client: "Premium Fashion Brand",
    clientAr: "علامة أزياء فاخرة",
    duration: "4 months",
    durationAr: "4 أشهر",
    services: ["Brand Storytelling", "Social Media Content", "Product Marketing"],
    images: [
      "/new/content-writing/slide_5.png",
      "/new/content-writing/slide_6.png",
      "/new/content-writing/slide_7.png"
    ],
    results: [
      {
        metric: "Brand Awareness",
        metricAr: "الوعي بالعلامة التجارية",
        value: "+65%",
        description: "Increased brand recognition and market visibility",
        descriptionAr: "زيادة في الاعتراف بالعلامة التجارية والرؤية في السوق"
      },
      {
        metric: "Customer Retention",
        metricAr: "الاحتفاظ بالعملاء",
        value: "+52%",
        description: "Improved customer loyalty and repeat purchases",
        descriptionAr: "تحسين ولاء العملاء والمشتريات المتكررة"
      }
    ]
  },

  // الصناعة - صور 8-10
  {
    id: "industrial-content-1",
    title: "Industrial Manufacturing Content",
    titleAr: "محتوى التصنيع الصناعي",
    description: "Professional content creation for industrial manufacturing companies to showcase expertise",
    descriptionAr: "إنشاء محتوى احترافي لشركات التصنيع الصناعي لعرض الخبرة",
    category: "Manufacturing",
    categoryAr: "تصنيع",
    client: "Industrial Solutions Co.",
    clientAr: "شركة الحلول الصناعية",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Technical Writing", "Case Studies", "Industry Reports"],
    images: [
      "/new/content-writing/slide_8.png",
      "/new/content-writing/slide_9.png",
      "/new/content-writing/slide_10.png"
    ],
    results: [
      {
        metric: "Lead Generation",
        metricAr: "توليد العملاء المحتملين",
        value: "+120%",
        description: "Increased qualified leads through educational content",
        descriptionAr: "زيادة في العملاء المحتملين المؤهلين من خلال المحتوى التعليمي"
      },
      {
        metric: "Industry Authority",
        metricAr: "السلطة في الصناعة",
        value: "+65%",
        description: "Enhanced reputation as industry thought leader",
        descriptionAr: "تعزيز السمعة كقائد فكري في الصناعة"
      }
    ]
  },

  // التصدير والنقل الدولي - صور 11-16
  {
    id: "export-logistics-content",
    title: "Export & International Logistics",
    titleAr: "التصدير والنقل الدولي",
    description: "Content marketing for export and logistics companies to expand global reach",
    descriptionAr: "تسويق المحتوى لشركات التصدير والنقل لامتداد عالمي",
    category: "Export & Logistics",
    categoryAr: "تصدير ونقل",
    client: "Global Trade Solutions",
    clientAr: "حلول التجارة العالمية",
    duration: "4 months",
    durationAr: "4 أشهر",
    services: ["International Content", "Logistics Writing", "Trade Documentation"],
    images: [
      "/new/content-writing/slide_11.png",
      "/new/content-writing/slide_12.png",
      "/new/content-writing/slide_13.png",
      "/new/content-writing/slide_14.png",
      "/new/content-writing/slide_15.png",
      "/new/content-writing/slide_16.png"
    ],
    results: [
      {
        metric: "International Reach",
        metricAr: "الوصول الدولي",
        value: "+200%",
        description: "Expanded market presence in 15+ countries",
        descriptionAr: "توسع في الحضور بالسوق في أكثر من 15 دولة"
      },
      {
        metric: "Export Volume",
        metricAr: "حجم التصدير",
        value: "+85%",
        description: "Significant increase in export operations",
        descriptionAr: "زيادة كبيرة في عمليات التصدير"
      }
    ]
  },

  // صناعة الأثاث والخشب - صور 17-22
  {
    id: "furniture-wood-content",
    title: "Furniture & Wood Manufacturing",
    titleAr: "صناعة الأثاث والخشب",
    description: "Content creation for furniture manufacturers to highlight craftsmanship and quality",
    descriptionAr: "إنشاء محتوى لصناع الأثاث لتسليط الضوء على الحرفية والجودة",
    category: "Furniture Manufacturing",
    categoryAr: "صناعة الأثاث",
    client: "Premium Furniture Co.",
    clientAr: "شركة الأثاث الفاخر",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Product Descriptions", "Craftsmanship Stories", "Design Content"],
    images: [
      "/new/content-writing/slide_17.png",
      "/new/content-writing/slide_18.png",
      "/new/content-writing/slide_19.png",
      "/new/content-writing/slide_20.png",
      "/new/content-writing/slide_21.png",
      "/new/content-writing/slide_22.png"
    ],
    results: [
      {
        metric: "Customer Trust",
        metricAr: "ثقة العملاء",
        value: "+90%",
        description: "Increased customer confidence in product quality",
        descriptionAr: "زيادة ثقة العملاء في جودة المنتج"
      },
      {
        metric: "Premium Pricing",
        metricAr: "التسعير الفاخر",
        value: "+35%",
        description: "Ability to command premium prices through storytelling",
        descriptionAr: "القدرة على فرض أسعار فاخرة من خلال رواية القصص"
      }
    ]
  },

  // المطابخ والتجهيزات - صور 23-25
  {
    id: "kitchen-equipment-content",
    title: "Kitchen Equipment & Design",
    titleAr: "معدات وتصميم المطابخ",
    description: "Content marketing for kitchen equipment companies to showcase innovation and functionality",
    descriptionAr: "تسويق المحتوى لشركات معدات المطابخ لعرض الابتكار والوظائف",
    category: "Kitchen Equipment",
    categoryAr: "معدات المطابخ",
    client: "Modern Kitchen Solutions",
    clientAr: "حلول المطبخ الحديث",
    duration: "2.5 months",
    durationAr: "شهران ونصف",
    services: ["Product Marketing", "Design Content", "Installation Guides"],
    images: [
      "/new/content-writing/slide_23.png",
      "/new/content-writing/slide_24.png",
      "/new/content-writing/slide_25.png"
    ],
    results: [
      {
        metric: "Installation Requests",
        metricAr: "طلبات التركيب",
        value: "+150%",
        description: "More customers requesting professional installation",
        descriptionAr: "المزيد من العملاء يطلبون التركيب الاحترافي"
      },
      {
        metric: "Design Consultations",
        metricAr: "استشارات التصميم",
        value: "+95%",
        description: "Increased demand for design consultation services",
        descriptionAr: "زيادة الطلب على خدمات استشارات التصميم"
      }
    ]
  },

  // السفر والجوازات - صور 26-28
  {
    id: "travel-visa-content",
    title: "Travel & Visa Services",
    titleAr: "خدمات السفر والجوازات",
    description: "Content creation for travel agencies to simplify visa and travel processes",
    descriptionAr: "إنشاء محتوى لوكالات السفر لتبسيط عمليات التأشيرة والسفر",
    category: "Travel Services",
    categoryAr: "خدمات السفر",
    client: "World Travel Agency",
    clientAr: "وكالة السفر العالمية",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Travel Guides", "Visa Information", "Destination Content"],
    images: [
      "/new/content-writing/slide_26.png",
      "/new/content-writing/slide_27.png",
      "/new/content-writing/slide_28.png"
    ],
    results: [
      {
        metric: "Visa Applications",
        metricAr: "طلبات التأشيرة",
        value: "+180%",
        description: "Significant increase in visa application inquiries",
        descriptionAr: "زيادة كبيرة في استفسارات طلبات التأشيرة"
      },
      {
        metric: "Travel Bookings",
        metricAr: "حجوزات السفر",
        value: "+110%",
        description: "More customers booking travel packages",
        descriptionAr: "المزيد من العملاء يحجزون حزم السفر"
      }
    ]
  },

  // الشقق - صورة 29
  {
    id: "apartment-content",
    title: "Apartment & Real Estate",
    titleAr: "الشقق والعقارات",
    description: "Content marketing for real estate companies to showcase properties effectively",
    descriptionAr: "تسويق المحتوى لشركات العقارات لعرض العقارات بفعالية",
    category: "Real Estate",
    categoryAr: "عقارات",
    client: "Premium Properties",
    clientAr: "العقارات الفاخرة",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Property Descriptions", "Real Estate Marketing", "Investment Content"],
    images: [
      "/new/content-writing/slide_29.png"
    ],
    results: [
      {
        metric: "Property Views",
        metricAr: "مشاهدات العقار",
        value: "+220%",
        description: "Increased property listing views and inquiries",
        descriptionAr: "زيادة مشاهدات قوائم العقارات والاستفسارات"
      },
      {
        metric: "Sales Conversion",
        metricAr: "تحويل المبيعات",
        value: "+75%",
        description: "Higher conversion rate from views to sales",
        descriptionAr: "معدل تحويل أعلى من المشاهدات إلى المبيعات"
      }
    ]
  },

  // المطاعم - صور 30-32
  {
    id: "restaurant-content",
    title: "Restaurant & Food Services",
    titleAr: "المطاعم وخدمات الطعام",
    description: "Content creation for restaurants to attract customers and showcase culinary excellence",
    descriptionAr: "إنشاء محتوى للمطاعم لجذب العملاء وعرض التميز الطهي",
    category: "Food & Beverage",
    categoryAr: "طعام ومشروبات",
    client: "Gourmet Restaurant Chain",
    clientAr: "سلسلة مطاعم فاخرة",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Menu Descriptions", "Food Photography", "Restaurant Marketing"],
    images: [
      "/new/content-writing/slide_30.png",
      "/new/content-writing/slide_31.png",
      "/new/content-writing/slide_32.png"
    ],
    results: [
      {
        metric: "Customer Reservations",
        metricAr: "حجوزات العملاء",
        value: "+160%",
        description: "Significant increase in table reservations",
        descriptionAr: "زيادة كبيرة في حجوزات الطاولات"
      },
      {
        metric: "Social Media Engagement",
        metricAr: "تفاعل وسائل التواصل",
        value: "+200%",
        description: "Higher engagement on food-related content",
        descriptionAr: "تفاعل أعلى على المحتوى المتعلق بالطعام"
      }
    ]
  },

  // شركة ibrand - صور 33-38
  {
    id: "ibrand-company-content",
    title: "iBrand Company Profile",
    titleAr: "ملف شركة أي براند",
    description: "Comprehensive content strategy for iBrand company to establish market leadership",
    descriptionAr: "استراتيجية محتوى شاملة لشركة أي براند لترسيخ القيادة في السوق",
    category: "Company Branding",
    categoryAr: "علامة الشركة",
    client: "iBrand Company",
    clientAr: "شركة أي براند",
    duration: "6 months",
    durationAr: "6 أشهر",
    services: ["Company Profile", "Brand Storytelling", "Corporate Communication"],
    images: [
      "/new/content-writing/slide_33.png",
      "/new/content-writing/slide_34.png",
      "/new/content-writing/slide_35.png",
      "/new/content-writing/slide_36.png",
      "/new/content-writing/slide_37.png",
      "/new/content-writing/slide_38.png"
    ],
    results: [
      {
        metric: "Market Position",
        metricAr: "الموقف في السوق",
        value: "Top 3",
        description: "Established as top 3 content writing service provider",
        descriptionAr: "ترسيخ كأفضل 3 مزودي خدمات كتابة المحتوى"
      },
      {
        metric: "Client Retention",
        metricAr: "احتفاظ العملاء",
        value: "+95%",
        description: "Exceptional client retention rate through quality content",
        descriptionAr: "معدل احتفاظ استثنائي بالعملاء من خلال المحتوى عالي الجودة"
      },
      {
        metric: "Industry Recognition",
        metricAr: "الاعتراف بالصناعة",
        value: "+300%",
        description: "Increased industry awards and recognition",
        descriptionAr: "زيادة في جوائز الصناعة والاعتراف"
      }
    ]
  }
]

export default contentWritingPortfolio
=======
export interface ContentWritingProject {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  category: string
  categoryAr: string
  client: string
  clientAr: string
  duration: string
  durationAr: string
  services: string[]
  images: string[]
  results: {
    metric: string
    metricAr: string
    value: string
    description: string
    descriptionAr: string
  }[]
}

export const contentWritingPortfolio: ContentWritingProject[] = [
  // الملابس - صور 2-4
  {
    id: "fashion-content-1",
    title: "Fashion Content Strategy",
    titleAr: "استراتيجية محتوى الأزياء",
    description: "Comprehensive content strategy for fashion brands to increase sales and market presence",
    descriptionAr: "استراتيجية محتوى شاملة لعلامات الأزياء لزيادة المبيعات والحضور في السوق",
    category: "Fashion & Beauty",
    categoryAr: "أزياء وجمال",
    client: "Luxury Fashion House",
    clientAr: "دار أزياء فاخرة",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Content Strategy", "Copywriting", "Social Media Content"],
    images: [
      "/new/content-writing/slide_2.png",
      "/new/content-writing/slide_3.png",
      "/new/content-writing/slide_4.png"
    ],
    results: [
      {
        metric: "Sales Increase",
        metricAr: "زيادة المبيعات",
        value: "+45%",
        description: "Significant boost in online sales through targeted content",
        descriptionAr: "زيادة كبيرة في المبيعات عبر الإنترنت من خلال المحتوى المستهدف"
      },
      {
        metric: "Engagement Rate",
        metricAr: "معدل التفاعل",
        value: "+78%",
        description: "Higher customer engagement on social media platforms",
        descriptionAr: "تفاعل أعلى للعملاء على منصات التواصل الاجتماعي"
      }
    ]
  },

  // الملابس - صور 5-7
  {
    id: "fashion-content-2",
    title: "Fashion Brand Development",
    titleAr: "تطوير العلامة التجارية للأزياء",
    description: "Advanced content creation for fashion brands to enhance market positioning and customer loyalty",
    descriptionAr: "إنشاء محتوى متقدم لعلامات الأزياء لتعزيز الموضع في السوق وولاء العملاء",
    category: "Fashion & Beauty",
    categoryAr: "أزياء وجمال",
    client: "Premium Fashion Brand",
    clientAr: "علامة أزياء فاخرة",
    duration: "4 months",
    durationAr: "4 أشهر",
    services: ["Brand Storytelling", "Social Media Content", "Product Marketing"],
    images: [
      "/new/content-writing/slide_5.png",
      "/new/content-writing/slide_6.png",
      "/new/content-writing/slide_7.png"
    ],
    results: [
      {
        metric: "Brand Awareness",
        metricAr: "الوعي بالعلامة التجارية",
        value: "+65%",
        description: "Increased brand recognition and market visibility",
        descriptionAr: "زيادة في الاعتراف بالعلامة التجارية والرؤية في السوق"
      },
      {
        metric: "Customer Retention",
        metricAr: "الاحتفاظ بالعملاء",
        value: "+52%",
        description: "Improved customer loyalty and repeat purchases",
        descriptionAr: "تحسين ولاء العملاء والمشتريات المتكررة"
      }
    ]
  },

  // الصناعة - صور 8-10
  {
    id: "industrial-content-1",
    title: "Industrial Manufacturing Content",
    titleAr: "محتوى التصنيع الصناعي",
    description: "Professional content creation for industrial manufacturing companies to showcase expertise",
    descriptionAr: "إنشاء محتوى احترافي لشركات التصنيع الصناعي لعرض الخبرة",
    category: "Manufacturing",
    categoryAr: "تصنيع",
    client: "Industrial Solutions Co.",
    clientAr: "شركة الحلول الصناعية",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Technical Writing", "Case Studies", "Industry Reports"],
    images: [
      "/new/content-writing/slide_8.png",
      "/new/content-writing/slide_9.png",
      "/new/content-writing/slide_10.png"
    ],
    results: [
      {
        metric: "Lead Generation",
        metricAr: "توليد العملاء المحتملين",
        value: "+120%",
        description: "Increased qualified leads through educational content",
        descriptionAr: "زيادة في العملاء المحتملين المؤهلين من خلال المحتوى التعليمي"
      },
      {
        metric: "Industry Authority",
        metricAr: "السلطة في الصناعة",
        value: "+65%",
        description: "Enhanced reputation as industry thought leader",
        descriptionAr: "تعزيز السمعة كقائد فكري في الصناعة"
      }
    ]
  },

  // التصدير والنقل الدولي - صور 11-16
  {
    id: "export-logistics-content",
    title: "Export & International Logistics",
    titleAr: "التصدير والنقل الدولي",
    description: "Content marketing for export and logistics companies to expand global reach",
    descriptionAr: "تسويق المحتوى لشركات التصدير والنقل لامتداد عالمي",
    category: "Export & Logistics",
    categoryAr: "تصدير ونقل",
    client: "Global Trade Solutions",
    clientAr: "حلول التجارة العالمية",
    duration: "4 months",
    durationAr: "4 أشهر",
    services: ["International Content", "Logistics Writing", "Trade Documentation"],
    images: [
      "/new/content-writing/slide_11.png",
      "/new/content-writing/slide_12.png",
      "/new/content-writing/slide_13.png",
      "/new/content-writing/slide_14.png",
      "/new/content-writing/slide_15.png",
      "/new/content-writing/slide_16.png"
    ],
    results: [
      {
        metric: "International Reach",
        metricAr: "الوصول الدولي",
        value: "+200%",
        description: "Expanded market presence in 15+ countries",
        descriptionAr: "توسع في الحضور بالسوق في أكثر من 15 دولة"
      },
      {
        metric: "Export Volume",
        metricAr: "حجم التصدير",
        value: "+85%",
        description: "Significant increase in export operations",
        descriptionAr: "زيادة كبيرة في عمليات التصدير"
      }
    ]
  },

  // صناعة الأثاث والخشب - صور 17-22
  {
    id: "furniture-wood-content",
    title: "Furniture & Wood Manufacturing",
    titleAr: "صناعة الأثاث والخشب",
    description: "Content creation for furniture manufacturers to highlight craftsmanship and quality",
    descriptionAr: "إنشاء محتوى لصناع الأثاث لتسليط الضوء على الحرفية والجودة",
    category: "Furniture Manufacturing",
    categoryAr: "صناعة الأثاث",
    client: "Premium Furniture Co.",
    clientAr: "شركة الأثاث الفاخر",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Product Descriptions", "Craftsmanship Stories", "Design Content"],
    images: [
      "/new/content-writing/slide_17.png",
      "/new/content-writing/slide_18.png",
      "/new/content-writing/slide_19.png",
      "/new/content-writing/slide_20.png",
      "/new/content-writing/slide_21.png",
      "/new/content-writing/slide_22.png"
    ],
    results: [
      {
        metric: "Customer Trust",
        metricAr: "ثقة العملاء",
        value: "+90%",
        description: "Increased customer confidence in product quality",
        descriptionAr: "زيادة ثقة العملاء في جودة المنتج"
      },
      {
        metric: "Premium Pricing",
        metricAr: "التسعير الفاخر",
        value: "+35%",
        description: "Ability to command premium prices through storytelling",
        descriptionAr: "القدرة على فرض أسعار فاخرة من خلال رواية القصص"
      }
    ]
  },

  // المطابخ والتجهيزات - صور 23-25
  {
    id: "kitchen-equipment-content",
    title: "Kitchen Equipment & Design",
    titleAr: "معدات وتصميم المطابخ",
    description: "Content marketing for kitchen equipment companies to showcase innovation and functionality",
    descriptionAr: "تسويق المحتوى لشركات معدات المطابخ لعرض الابتكار والوظائف",
    category: "Kitchen Equipment",
    categoryAr: "معدات المطابخ",
    client: "Modern Kitchen Solutions",
    clientAr: "حلول المطبخ الحديث",
    duration: "2.5 months",
    durationAr: "شهران ونصف",
    services: ["Product Marketing", "Design Content", "Installation Guides"],
    images: [
      "/new/content-writing/slide_23.png",
      "/new/content-writing/slide_24.png",
      "/new/content-writing/slide_25.png"
    ],
    results: [
      {
        metric: "Installation Requests",
        metricAr: "طلبات التركيب",
        value: "+150%",
        description: "More customers requesting professional installation",
        descriptionAr: "المزيد من العملاء يطلبون التركيب الاحترافي"
      },
      {
        metric: "Design Consultations",
        metricAr: "استشارات التصميم",
        value: "+95%",
        description: "Increased demand for design consultation services",
        descriptionAr: "زيادة الطلب على خدمات استشارات التصميم"
      }
    ]
  },

  // السفر والجوازات - صور 26-28
  {
    id: "travel-visa-content",
    title: "Travel & Visa Services",
    titleAr: "خدمات السفر والجوازات",
    description: "Content creation for travel agencies to simplify visa and travel processes",
    descriptionAr: "إنشاء محتوى لوكالات السفر لتبسيط عمليات التأشيرة والسفر",
    category: "Travel Services",
    categoryAr: "خدمات السفر",
    client: "World Travel Agency",
    clientAr: "وكالة السفر العالمية",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Travel Guides", "Visa Information", "Destination Content"],
    images: [
      "/new/content-writing/slide_26.png",
      "/new/content-writing/slide_27.png",
      "/new/content-writing/slide_28.png"
    ],
    results: [
      {
        metric: "Visa Applications",
        metricAr: "طلبات التأشيرة",
        value: "+180%",
        description: "Significant increase in visa application inquiries",
        descriptionAr: "زيادة كبيرة في استفسارات طلبات التأشيرة"
      },
      {
        metric: "Travel Bookings",
        metricAr: "حجوزات السفر",
        value: "+110%",
        description: "More customers booking travel packages",
        descriptionAr: "المزيد من العملاء يحجزون حزم السفر"
      }
    ]
  },

  // الشقق - صورة 29
  {
    id: "apartment-content",
    title: "Apartment & Real Estate",
    titleAr: "الشقق والعقارات",
    description: "Content marketing for real estate companies to showcase properties effectively",
    descriptionAr: "تسويق المحتوى لشركات العقارات لعرض العقارات بفعالية",
    category: "Real Estate",
    categoryAr: "عقارات",
    client: "Premium Properties",
    clientAr: "العقارات الفاخرة",
    duration: "2 months",
    durationAr: "شهران",
    services: ["Property Descriptions", "Real Estate Marketing", "Investment Content"],
    images: [
      "/new/content-writing/slide_29.png"
    ],
    results: [
      {
        metric: "Property Views",
        metricAr: "مشاهدات العقار",
        value: "+220%",
        description: "Increased property listing views and inquiries",
        descriptionAr: "زيادة مشاهدات قوائم العقارات والاستفسارات"
      },
      {
        metric: "Sales Conversion",
        metricAr: "تحويل المبيعات",
        value: "+75%",
        description: "Higher conversion rate from views to sales",
        descriptionAr: "معدل تحويل أعلى من المشاهدات إلى المبيعات"
      }
    ]
  },

  // المطاعم - صور 30-32
  {
    id: "restaurant-content",
    title: "Restaurant & Food Services",
    titleAr: "المطاعم وخدمات الطعام",
    description: "Content creation for restaurants to attract customers and showcase culinary excellence",
    descriptionAr: "إنشاء محتوى للمطاعم لجذب العملاء وعرض التميز الطهي",
    category: "Food & Beverage",
    categoryAr: "طعام ومشروبات",
    client: "Gourmet Restaurant Chain",
    clientAr: "سلسلة مطاعم فاخرة",
    duration: "3 months",
    durationAr: "3 أشهر",
    services: ["Menu Descriptions", "Food Photography", "Restaurant Marketing"],
    images: [
      "/new/content-writing/slide_30.png",
      "/new/content-writing/slide_31.png",
      "/new/content-writing/slide_32.png"
    ],
    results: [
      {
        metric: "Customer Reservations",
        metricAr: "حجوزات العملاء",
        value: "+160%",
        description: "Significant increase in table reservations",
        descriptionAr: "زيادة كبيرة في حجوزات الطاولات"
      },
      {
        metric: "Social Media Engagement",
        metricAr: "تفاعل وسائل التواصل",
        value: "+200%",
        description: "Higher engagement on food-related content",
        descriptionAr: "تفاعل أعلى على المحتوى المتعلق بالطعام"
      }
    ]
  },

  // شركة ibrand - صور 33-38
  {
    id: "ibrand-company-content",
    title: "iBrand Company Profile",
    titleAr: "ملف شركة أي براند",
    description: "Comprehensive content strategy for iBrand company to establish market leadership",
    descriptionAr: "استراتيجية محتوى شاملة لشركة أي براند لترسيخ القيادة في السوق",
    category: "Company Branding",
    categoryAr: "علامة الشركة",
    client: "iBrand Company",
    clientAr: "شركة أي براند",
    duration: "6 months",
    durationAr: "6 أشهر",
    services: ["Company Profile", "Brand Storytelling", "Corporate Communication"],
    images: [
      "/new/content-writing/slide_33.png",
      "/new/content-writing/slide_34.png",
      "/new/content-writing/slide_35.png",
      "/new/content-writing/slide_36.png",
      "/new/content-writing/slide_37.png",
      "/new/content-writing/slide_38.png"
    ],
    results: [
      {
        metric: "Market Position",
        metricAr: "الموقف في السوق",
        value: "Top 3",
        description: "Established as top 3 content writing service provider",
        descriptionAr: "ترسيخ كأفضل 3 مزودي خدمات كتابة المحتوى"
      },
      {
        metric: "Client Retention",
        metricAr: "احتفاظ العملاء",
        value: "+95%",
        description: "Exceptional client retention rate through quality content",
        descriptionAr: "معدل احتفاظ استثنائي بالعملاء من خلال المحتوى عالي الجودة"
      },
      {
        metric: "Industry Recognition",
        metricAr: "الاعتراف بالصناعة",
        value: "+300%",
        description: "Increased industry awards and recognition",
        descriptionAr: "زيادة في جوائز الصناعة والاعتراف"
      }
    ]
  }
]

export default contentWritingPortfolio
>>>>>>> b41833514eaf2332264247fa336a44d3c5ef9c78
