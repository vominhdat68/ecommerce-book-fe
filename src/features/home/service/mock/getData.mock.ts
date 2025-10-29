// scrollbar nằm chỗ nào thì load data phạm vi chõ đó
// api check 

// lần đầu vào trang api duoc call
    // getMyInfo -> checkInfo
    // banner (fahasa render từ server )
    // danh muc icon menu (fahasa render từ server )
    // getData -> lấy  1 danh sách product event(getData_eventMoon)
    // slider -> flash sale

// khi scroll tới Component flase sale
    // getData -> lấy  1 danh sách product component tiếp theo (getData_TAB1XHMS)
    // dataProgressBar -> lấy  1 lần danh sách các product có trạng thái hiển thị progressbar

// khi scroll tới Component getData_TAB1XHMS
    // getData -> lấy  1 danh sách product component tiếp theo (getData_even2_9)

// khi scroll tới Component getData_TAB1XHMS
    // getData -> lấy  1 danh sách product component tiếp theo (getData_even2_9)
// cu the cho den thet lazy load cho cac component con lai


//LABEL TABS
export const tabsLABEL_TRENDING = [
    { key: 'daily', label: 'Xu Hướng Theo Ngày', order: 1, is_active: true },
    { key: 'hot', label: 'Sách HOT - Giảm Sốc', order: 2, is_active: true },
    { key: 'foreign', label: 'Bestseller Ngoại Văn', order: 3, is_active: true }
  ]

export const tabsLABEL_STUDY = [
                { key: 'reference', label: 'Sách Tham Khảo', order: 1, is_active: true },
                { key: 'english', label: 'Giáo trình học ngữ Tiếng Anh', order: 2, is_active: true },
                { key: 'tools', label: 'Bộ Dụng Cụ Học Tập', order: 3, is_active: true }
              ]

export const tabsLABEL_SUPPLIERS = [
                { key: 'alphabooks', label: 'AlphaBooks', order: 1, is_active: true },
                { key: 'sbooks', label: 'Sbooks', order: 2, is_active: true },
                { key: 'mcbooks', label: 'MCBooks', order: 3, is_active: true }
              ]

export const tabsLABEL_PUSHLISHER = [
                { key: 'yamaha', label: 'Yamaha', order: 1, is_active: true },
                { key: 'tan_viet', label: 'Tân Việt', order: 2, is_active: true }
              ]

export const tabsLABEL_COMBOS = [
                { key: 'economics', label: 'Combo Kinh Tế', order: 1, is_active: true },
                { key: 'language', label: 'Combo Sách Học Ngoại Ngữ', order: 2, is_active: true },
                { key: 'self-help', label: 'Combo Tâm Lý - Kĩ Năng Sống', order: 3, is_active: true },
                { key: 'literature', label: 'Combo Văn Học', order: 4, is_active: true },
                { key: 'children', label: 'Combo Thiếu Nhi', order: 5, is_active: true }
              ]           

export const tabsLABEL_RANK = [
      { key: 'rank_literature', label: 'Văn học', order: 1, is_active: true },
      { key: 'rank_economics', label: 'Kinh Tế', order: 2, is_active: true },
      { key: 'rank_psychology_skills', label: 'Tâm lý - Kỹ năng sống', order: 3, is_active: true },
      { key: 'rank_children', label: 'Thiếu nhi', order: 4, is_active: true },
      { key: 'rank_foreign_language', label: 'Sách học ngoại ngữ', order: 5, is_active: true },
      { key: 'rank_foreign_books', label: 'Foreign books', order: 6, is_active: true },
      { key: 'rank_other', label: 'Thể loại khác', order: 7, is_active: true }
    ]    
              
//BANNER
export const mockBannerData = {
  mainBanners: [
    {
      id: "1",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/TrangT10_840x320_fix.png",
      redirect_url: "sale",
      title: "#banner7-caption1",
      description: "Sale Banner",
      order: 1,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "2",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/TanVietT09_bac_resize840x320.png",
      redirect_url: "tan-viet",
      title: "#banner7-caption2",
      description: "Tan Viet Banner",
      order: 2,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "3",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/KC_MCbooks_resize840x320.png",
      redirect_url: "mc-books",
      title: "#banner7-caption3",
      description: "MC Books Banner",
      order: 3,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "4",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/Partnership_resize_840x320.png",
      redirect_url: "uu-dai-ngap-tran",
      title: "#banner7-caption4",
      description: "Partnership Banner",
      order: 4,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "5",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/zalopayT09_840x320.png",
      redirect_url: "zalopay",
      title: "#banner7-caption5",
      description: "ZaloPay Banner",
      order: 5,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "6",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/Cardgame_resize_Slide_840x320.png",
      redirect_url: "card-games",
      title: "#banner7-caption6",
      description: "Card Games Banner",
      order: 6,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "7",
      image_src: "https://cdn1.fahasa.com/media/magentothem/banner7/NgoaiVanT10_Resize_840x320.png",
      redirect_url: "multilingual-bookshelf",
      title: "#banner7-caption7",
      description: "Multilingual Bookshelf Banner",
      order: 7,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    }
  ],
  sideBanners: [
    {
      id: "1",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/QuaBanh310x210.png",
      redirect_url: "mayora",
      title: "Mayora Banner",
      description: "Mayora promotional banner",
      order: 1,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "2",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/VietCoCo_392x156.png",
      redirect_url: "vietcoco",
      title: "VietCoCo Banner",
      description: "VietCoCo promotional banner",
      order: 2,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    }
  ],
  promotionalBanners: [
    {
      id: "1",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/homepagetrungthu_1_fix.png",
      redirect_url: "link-page-categories",
      title: "Promotional Banner 1",
      description: "Mid-Autumn Festival Promotion 1",
      order: 1,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "2",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/homepagetrungthu_2.png",
      redirect_url: "link-page-categories",
      title: "Promotional Banner 2",
      description: "Mid-Autumn Festival Promotion 2",
      order: 2,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "3",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/homepagetrungthu_alphabook.png",
      redirect_url: "link-page-categories",
      title: "Promotional Banner 3",
      description: "AlphaBook Mid-Autumn Promotion",
      order: 3,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    },
    {
      id: "4",
      image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/smallbanner_4_trungthu_Ngoaivan.png",
      redirect_url: "link-page-categories",
      title: "Promotional Banner 4",
      description: "Foreign Language Mid-Autumn Promotion",
      order: 4,
      is_active: true,
      start_date: "2024-09-01",
      end_date: "2024-09-30"
    }
  ]
};


export const dataProgressBar = {
  "success": true,
  "startTime": "2024-01-01 00:00:00", // Thêm startTime
  "endTime": "2026-01-31 23:59:59",   // Thêm endTime
  "data": [
    {product_id:704881,qty_sold:444.0,percent:59},
    {product_id:705611,qty_sold:592.0,percent:45},
    {product_id:668655,qty_sold:139.0,percent:18},
    {product_id:769148,qty_sold:0.0,percent:0},
    {product_id:712294,qty_sold:33.0,percent:4},
    {product_id:705071,qty_sold:341.0,percent:45},
    {product_id:706039,qty_sold:105.0,percent:14},
    {product_id:732521,qty_sold:698.0,percent:90},
    {product_id:739339,qty_sold:156.0,percent:20},
    {product_id:435387,qty_sold:3543.0,percent:90},
    {product_id:639555,qty_sold:18902.0,percent:50},
    {product_id:556492,qty_sold:3266.0,percent:80},
    {product_id:574588,qty_sold:2320.0,percent:30},
    {product_id:426354,qty_sold:3152.0,percent:90},
    {product_id:637079,qty_sold:2703.0,percent:70},
    {product_id:170554,qty_sold:4042.0,percent:90},
    {product_id:426320,qty_sold:2915.0,percent:40},
    {product_id:433671,qty_sold:2071.0,percent:90},
    {product_id:426331,qty_sold:2745.0,percent:60},
    {product_id:426105,qty_sold:2287.0,percent:60},
    {product_id:401217,qty_sold:1255.0,percent:20},
    {product_id:426333,qty_sold:2688.0,percent:40},
    {product_id:292248,qty_sold:2684.0,percent:40},
    {product_id:575312,qty_sold:1588.0,percent:30},
    {product_id:170555,qty_sold:4037.0,percent:10},
    // Bổ sung các product_id mới
    {product_id:426603,qty_sold:123.0,percent:50},
    {product_id:265590,qty_sold:4231.0,percent:90},
    {product_id:690186,qty_sold:312.0,percent:20},
    {product_id:417352,qty_sold:1232.0,percent:85},
    {product_id:678957,qty_sold:654.0,percent:50},
    {product_id:600709,qty_sold:123.0,percent:30},
    {product_id:682268,qty_sold:2386.0,percent:10},
    {product_id:385217,qty_sold:7324.0,percent:70},
    {product_id:435334,qty_sold:6934.0,percent:30},
    {product_id:637270,qty_sold:234.0,percent:10}
  ]
}

export const categoryMenuItems = [
  {
    "id": 1,
    "name": "10.10",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-10-2025/Icon_1010_120x120.png",
    "category_url": "/sale?fhs_campaign=homepageicon"
  },
  {
    "id": 2,
    "name": "Ngoại Văn",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/ico_foreignbooks.png",
    "category_url": "/multilingual-bookshelf?fhs_campaign=homepageicon"
  },
  {
    "id": 3,
    "name": "McBooks",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-04-2025/Icon_MCbook_120x120_2.png",
    "category_url": "/mc-books?fhs_campaign=homepageicon"
  },
  {
    "id": 4,
    "name": "Alpha Books",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-04-2025/Icon_AlphaBooks_120x120.png",
    "category_url": "/alpha-books?fhs_campaign=homepageicon"
  },
  {
    "id": 5,
    "name": "Flash Sale",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-01-2025/IconFlashSale120x120.png",
    "category_url": "/flashsale?fhs_campaign=homepageicon"
  },
  {
    "id": 6,
    "name": "Mã Giảm Giá",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png",
    "category_url": "/ma-giam-gia-hot?fhs_campaign=homepageicon"
  },
  {
    "id": 7,
    "name": "Sản Phẩm Mới",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png",
    "category_url": "/new-product?category=all&sort_by=created_at&fhs_campaign=homepageicon"
  },
  {
    "id": 8,
    "name": "Phiên Chợ Đồ Cũ",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png",
    "category_url": "/phien-cho-do-cu?fhs_campaign=homepageicon"
  },
  {
    "id": 9,
    "name": "Bán Sỉ",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/ICON/Icon_DonSi_120x120.png",
    "category_url": "/trang-kinh-doanh-si?fhs_campaign=homepageicon"
  },
  {
    "id": 10,
    "name": "Manga",
    "image_src": "https://cdn1.fahasa.com/media/wysiwyg/Thang-06-2024/icon_ManngaT06.png",
    "category_url": "/nhap-hoi-manga-comic?fhs_campaign=homepageicon"
  }
]

// 5
export const dmsp = [
  { id: 1, name: "Đồ Chơi Lắp Ráp", image_src: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/8935339411178-5-removebg-preview.png", category_url: "/books/hp" },
  { id: 2, name: "Giấy Photo", image_src: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/8934986004412-_4-removebg-preview.png", category_url: "/books/eco" },
  { id: 3, name: "Thiết Bị Số", image_src: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/3900000304702_1-removebg-preview.png", category_url: "/books/eco" },
  { id: 4, name: "SGK 2025", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Thang-08-2025/SGK-Lop3-1.jpg", category_url: "/books/eco" },
  { id: 5, name: "Lịch Sử Việt Nam", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/2502/8935244874389.jpg", category_url: "/books/eco" },
  { id: 6, name: "Văn Học", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-tu-sach/8934974182375.jpg", category_url: "/books/eco" },
  { id: 7, name: "Tâm Lý Kỹ Năng", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/atomichabit100x100.jpg", category_url: "/books/eco" },
  { id: 8, name: "Thiếu Nhi", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/bup-sen-xanh-100x100.png", category_url: "/books/eco" },
  { id: 9, name: "Sách Học Ngoại Ngữ", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/hsk100x100.jpg", category_url: "/books/eco" },
  { id: 10, name: "Ngoại Văn", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/ngoai-van-t1-24(1).jpg", category_url: "/books/eco" },

];
// 10
export const tsnb = [
  {
    name: "Tủ Sách Kinh Tế",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935251422481.jpg"
  },
  {
    name: "Tủ Sách Trinh Thám",
    "category_url": "",
    "image_src": "https://www.fahasa.com/media/catalog/product/b/i/bia-ho-so-mau---bia-truoc-1_1.jpg"
  },
  {
    name: "Tủ Sách Kinh Dị",
    "category_url": "",
    "image_src": "https://www.fahasa.com/media/catalog/product/2/4/24d0a082-972d-44c5-bcc3-5b41f575cbd5.jpg"
  },
  {
    name: "Tủ Sách Trung Thu",
    "category_url": "",
    "image_src": "https://www.fahasa.com/media/catalog/product/8/9/8935072959111.jpg"
  },
  {
    name: "Tủ Sách Mùa Thu",
    "category_url": "",
    "image_src": "https://www.fahasa.com/media/catalog/product/b/i/bia-2d_ho-diep-va-kinh-ngu_17307.jpg"
  },
  {
    name: "Harry Potter",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974203018_2.jpg"
  },
  {
    name: "Ôn Luyện THPT",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043519112_1_1.jpg"
  },
  {
    name: "Kinh dị - Bí ẩn",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/d/_/d_-m_t-qu_-2.jpg"
  },
  {
    name: "Take note! Ngắn gọn - Dễ học",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236433587.jpg"
  },
  {
    name: "Donald Trump - Không đầu hàng",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974177623.jpg"
  },
  {
    name: "Song ngữ Thiếu nhi",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-1_6_6.jpg"
  },
  {
    name: "Ehon Nhật Bản",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/h/u/huong-dan-su-dung-me.jpg"
  },
  {
    name: "Tô màu cảm xúc",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/t/ttph---y_u-nh_ng-ng_y-n_ng-ch_ng-gh_t-nh_ng-ng_y-m_a.jpg"
  },
  {
    name: "Tư duy siêu việt",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390010.jpg"
  },
  {
    name: "Nghệ thuật MKT",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/3/z3191421803753_d34be7758308b8ee74572ebf885cbf9a.jpg"
  },
  {
    name: "Đầu tư tương lai",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia_daututudau.jpg"
  },
  {
    name: "Chữa lành tâm hồn",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/h/chua_lanh_noi_dau_final-01-_2__2.jpg"
  },
  {
    name: "Nguyễn Nhật Ánh",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974178637.jpg"
  },
  {
    name: "Văn học Việt Nam",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043947441.jpg"
  },
  {
    name: "Nâng bậc ngoại ngữ",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236433587.jpg"
  },
  {
    name: "Tác phẩm kinh điển",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/0/0/00_2.jpg"
  },
  {
    name: "Nuôi con thảnh thơi",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/n/u/nuoi-con-khong-phai-cuoc-chien_bia-1-.jpg"
  },
  {
    name: "Truyện đọc cho bé",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043486643_1.jpg"
  },
  {
    name: "Tự tin vào lớp 1",
    "category_url": "",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786049575716.jpg"
  }
]
// 12
export const bst_nb = [
  { id: 1, label: "Doraemon", image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936134264082.jpg", category_url: "" },
  { id: 2, label: "Capybara", image_src: "https://cdn1.fahasa.com/media/catalog/product/1/8/1890000035121-_3_.jpg", category_url: "" },
  { id: 3, label: "Conan", image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936134261302.jpg", category_url: "" },
  { id: 4, label: "One Piece", image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936134262521.jpg", category_url: "" },
  { id: 5, label: "Panda - Gấu trúc", image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935306041285-mau1.jpg", category_url: "" },
  { id: 6, label: "Disney", image_src: "https://cdn1.fahasa.com/media/catalog/product/f/u/fun-with-mickey-and-friends-9781788108676_2.jpg", category_url: "" },
  { id: 7, label: "Sanrio", image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936134263238-_1_.jpg", category_url: "" },
  { id: 8, label: "Pokémon", image_src: "https://cdn1.fahasa.com/media/catalog/product/6/9/6974192330891-_2_.jpg", category_url: "" },
];
//16
export const ncc = [
  { id: 1, label: "Alpha Books", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_AlphaBooks_115x115.png", category_url: "" },
  { id: 2, label: "SBooks", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_SBooks_115x115.png", category_url: "" },
  { id: 3, label: "MC Books", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/5_NCC_McBook_115x115.png", category_url: "" },
  { id: 4, label: "Yamaha Music", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_Yamaha_115x115.png", category_url: "" },
  { id: 5, label: "Đinh Tị", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_DinhTi_115x115.png", category_url: "" },
  { id: 6, label: "Minh Long", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/9_NCC_MinhLong_115x115.png", category_url: "" },
  { id: 7, label: "Đồ chơi Duka", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/12_NCC_Duka_115x115.png", category_url: "" },
  { id: 8, label: "Tuệ Trí", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_TueTri_115x115.png", category_url: "" },
  { id: 9, label: "Huy Hoàng", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/6_NCC_HuyHoang_115x115.png", category_url: "" },
  { id: 10, label: "Hương Trang", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_HuongTrang_115x115.png", category_url: "" },
  { id: 11, label: "Lyceum", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_LYCEUM_115x115.png", category_url: "" },
  { id: 12, label: "Hải Đăng", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_HaiDang_115x115.png", category_url: "" },
  { id: 13, label: "Muki", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/14_NCC_MuKi_115x115.png", category_url: "" },
  { id: 14, label: "Đồ chơi Niềm Vui", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_DoChoiNiemVUi_115x115.png", category_url: "" },
  { id: 15, label: "Truyền Thống Việt Nam", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_TruyenThongVN_115x115_1.png", category_url: "" },
  { id: 16, label: "Patech", image_src: "https://cdn1.fahasa.com/media/wysiwyg/Hien_UI/LogoNCC/NCC_patech_1_115x115.png", category_url: "" }
];



import bg_flashsale from '/cfhs/image/bg_image/flash_sale_background_image.jpg'
// render sẳn từ server (thay thế call lần đầu trc)
// slider flashsale
export const flashSale = {
  "result": true,
  "event": {
    "id": "flash-sale",
    "product_name": 'Flash Sale',
    "bg_image": {bg_flashsale},
    "description": "Flash_01.10.2025",
    "start_date": "2025-10-01 00:00:00",
    "end_date": "2025-10-17 23:59:59",
    "created_at": "2025-10-01 08:51:36",
    "update_at": "2025-10-01 08:51:36",
    "active": "1",
    "type": "flash-sale",
 
  },

  "products": [
    {
      "id": "22406045",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "426603",
      "original_price": "248000.0000",
      "final_price": "178560.0000",
      "flashsale_price": "148800.0000",
      "total_items": 51,
      "total_sold": 0,
      "product_name": "Sơn Trà Nở Muộn -  Tặng Kèm 1 Bookmark Hoa Sơn Trà + 1 Bookmark Chiếc Bật Lửa + 1 Postcard",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212360913.jpg",
      "is_combo": "0",
      "bundle_final_price": "178560.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT02213",
      "supplier_name": "Đinh Tị",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "son-tra-no-muon-tang-kem-1-bookmark-hoa-son-tra-1-bookmark-chiec-bat-lua-1-postcard",
      "old_discount": 28,
      "discount": 40,
      "display_old_price": "248.000",
      "display_old_final_price": "178.560",
      "display_new_price": "148.800",
      "buffer_value": 51
    },
    {
      "id": "22406046",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "265590",
      "original_price": "52000.0000",
      "final_price": "44000.0000",
      "flashsale_price": "39000.0000",
      "total_items": 79,
      "total_sold": 0,
      "product_name": "Ba Ơi Mình Đi Đâu (Giải Femina) - Tái Bản 2019",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_12612.jpg",
      "is_combo": "0",
      "bundle_final_price": "44000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT00024",
      "supplier_name": "Nhã Nam",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "ba-oi-minh-di-dau-giai-femina-tai-ban-2019",
      "old_discount": 15,
      "discount": 25,
      "display_old_price": "52.000",
      "display_old_final_price": "44.000",
      "display_new_price": "39.000",
      "buffer_value": 79
    },
    {
      "id": "22406047",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "690186",
      "original_price": "199000.0000",
      "final_price": "159000.0000",
      "flashsale_price": "139000.0000",
      "total_items": 70,
      "total_sold": 0,
      "product_name": "Siêu Cấp Cưng Chiều - Tập 6 - Tặng Kèm Bookmark Bồi Cứng 2 Mặt",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-1-t_p-6-1.jpg",
      "is_combo": "0",
      "bundle_final_price": "159000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "KI14557",
      "supplier_name": "Công Ty Cổ Phần Waka",
      "episode": "Tập 6",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "sieu-cap-cung-chieu-tap-6-tang-kem-bookmark-boi-cung-2-mat",
      "old_discount": 20,
      "discount": 30,
      "display_old_price": "199.000",
      "display_old_final_price": "159.000",
      "display_new_price": "139.000",
      "buffer_value": 70
    },
    {
      "id": "22406048",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "417352",
      "original_price": "199000.0000",
      "final_price": "169000.0000",
      "flashsale_price": "149000.0000",
      "total_items": 42,
      "total_sold": 0,
      "product_name": "Chuyện Của Chúng Tôi",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935251419795.jpg",
      "is_combo": "0",
      "bundle_final_price": "169000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT03363",
      "supplier_name": "Alpha Books",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "chuyen-cua-chung-toi",
      "old_discount": 15,
      "discount": 25,
      "display_old_price": "199.000",
      "display_old_final_price": "169.000",
      "display_new_price": "149.000",
      "buffer_value": 42
    },
    {
      "id": "22406049",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "678957",
      "original_price": "105000.0000",
      "final_price": "89000.0000",
      "flashsale_price": "79000.0000",
      "total_items": 47,
      "total_sold": 0,
      "product_name": "Phố Hàn",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786326031096.jpg",
      "is_combo": "0",
      "bundle_final_price": "89000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "NX00013",
      "supplier_name": "NXB Tổng Hợp TPHCM",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "pho-han",
      "old_discount": 15,
      "discount": 24,
      "display_old_price": "105.000",
      "display_old_final_price": "89.000",
      "display_new_price": "79.000",
      "buffer_value": 47
    },
    {
      "id": "22406050",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "600709",
      "original_price": "135000.0000",
      "final_price": "114500.0000",
      "flashsale_price": "101000.0000",
      "total_items": 55,
      "total_sold": 0,
      "product_name": "Ý Và Tình",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044834979.jpg",
      "is_combo": "0",
      "bundle_final_price": "114500.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "NX00013",
      "supplier_name": "NXB Tổng Hợp TPHCM",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "y-va-tinh",
      "old_discount": 15,
      "discount": 25,
      "display_old_price": "135.000",
      "display_old_final_price": "114.500",
      "display_new_price": "101.000",
      "buffer_value": 55
    },
    {
      "id": "22406051",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "682268",
      "original_price": "420000.0000",
      "final_price": "357000.0000",
      "flashsale_price": "315000.0000",
      "total_items": 76,
      "total_sold": 0,
      "product_name": "45 Người Lính - Bìa Cứng",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/h/h/hh_bia-1_45-nguoi-linh-.jpg",
      "is_combo": "0",
      "bundle_final_price": "357000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CN03148",
      "supplier_name": "Huy Hoang Bookstore",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "45-nguoi-linh-bia-cung",
      "old_discount": 15,
      "discount": 25,
      "display_old_price": "420.000",
      "display_old_final_price": "357.000",
      "display_new_price": "315.000",
      "buffer_value": 76
    },
    {
      "id": "22406052",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "385217",
      "original_price": "42000.0000",
      "final_price": "35500.0000",
      "flashsale_price": "31000.0000",
      "total_items": 60,
      "total_sold": 0,
      "product_name": "Trước Mùa Mưa Bão",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_5676.jpg",
      "is_combo": "0",
      "bundle_final_price": "35500.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT00542",
      "supplier_name": "Cty Văn Hóa Đông Tây",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "truoc-mua-mua-bao",
      "old_discount": 15,
      "discount": 26,
      "display_old_price": "42.000",
      "display_old_final_price": "35.500",
      "display_new_price": "31.000",
      "buffer_value": 60
    },
    {
      "id": "22406053",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "435334",
      "original_price": "135000.0000",
      "final_price": "105000.0000",
      "flashsale_price": "92000.0000",
      "total_items": 48,
      "total_sold": 0,
      "product_name": "Đừng Tức Giận Số Phận",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-tr_c-_ng-t_c-gi_n-s_-ph_n-file-in-1.jpg",
      "is_combo": "0",
      "bundle_final_price": "105000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT01732",
      "supplier_name": "Bách Việt",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "dung-tuc-gian-so-phan",
      "old_discount": 22,
      "discount": 31,
      "display_old_price": "135.000",
      "display_old_final_price": "105.000",
      "display_new_price": "92.000",
      "buffer_value": 48
    },
    {
      "id": "22406054",
      "flashsale_id": "508",
      "period_id": "23783",
      "product_id": "637270",
      "original_price": "199000.0000",
      "final_price": "159000.0000",
      "flashsale_price": "139000.0000",
      "total_items": 40,
      "total_sold": 0,
      "product_name": "Cuộc Chiến Trắng",
      "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786326040463.jpg",
      "is_combo": "0",
      "bundle_final_price": "159000.0000",
      "category_mid": "Văn học",
      "category_mid_id": "9",
      "supplier": "CT03448",
      "supplier_name": "Cty Sách Hương Giang",
      "episode": "",
      "icon_src": "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_VanHoc_120x120.png",
      "product_url": "cuoc-chien-trang",
      "old_discount": 20,
      "discount": 30,
      "display_old_price": "199.000",
      "display_old_final_price": "159.000",
      "display_new_price": "139.000",
      "buffer_value": 40
    }
  ],
 
  "success": true
}

// co mot api check cac component nao duoc render
// event 
// call api lay ds san pham event 
// payload 
// limit 20
// list 708904,708903,582660,582656,582662,582657,582666,582663,582659,582661,582664,441122,441133,441121,441138,441120,441123,441139,441124,441142,441125,441127,441130,441128,441129
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
/**
 * Mảng dữ liệu sản phẩm mẫu theo interface ProductData
 * Chứa các sản phẩm đa dạng với đầy đủ các trường dữ liệu
 */
// 6
 
export const event_Moon = {
  "result": true,
  "event": {
    "id": "moon-festival",
    "product_name": 'Trung Thu 2024',
    "bg_image": "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/Web_BlockTrungThu_PTS.png",
    "description": "Moon_01.10.2025",
    "start_date": "2025-10-01 00:00:00",
    "end_date": "2025-10-07 23:59:59",
    "created_at": "2025-10-01 08:51:36",
    "update_at": "2025-10-01 08:51:36",
    "active": "1",
    "type": "festival",
 
  },
 
  "products": [
  {
    id: "708904",
    product_url: "long-den-trung-thu-lan-ngoc-trong-trang-xep-gon-ky-uc-tuoi-tho-tayta",
    image_label: "Lồng Đèn Trung Thu - Lân Ngọc Trông Trăng - Xếp Gọn Ký Ức Tuổi Thơ - TAYTA",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000333856_3.jpg",
    product_name: "Lồng Đèn Trung Thu - Lân Ngọc Trông Trăng - Xếp Gọn Ký Ức Tuổi Thơ - TAYTA",
    original_price: 89000,
    final_price: 71200,
    product_id: "708904",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 19,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        "key": "568809",
        "value": "Lồng đèn tặng pin",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/Mua_10_t_ng_01_m_c_kh_a_m_u_ng_u_nhi_n_2_.png"
      }
    ]
  },
  {
    id: "708903",
    product_url: "long-den-trung-thu-rong-ngoc-bien-dong-xep-gon-ky-uc-tuoi-tho-tayta",
    image_label: "Lồng Đèn Trung Thu - Rồng Ngọc Biển Đông - Xếp Gọn Ký Ức Tuổi Thơ - TAYTA",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000333849.jpg",
    product_name: "Lồng Đèn Trung Thu - Rồng Ngọc Biển Đông - Xếp Gọn Ký Ức Tuổi Thơ - TAYTA",
    original_price: 89000,
    final_price: 71200,
    product_id: "708903",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 21,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        "key": "568808",
        "value": "Lồng đèn tặng pin",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/Mua_10_t_ng_01_m_c_kh_a_m_u_ng_u_nhi_n_2_.png"
      }
    ]
  },
  {
    id: "582660",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-chi-em",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Chị Em",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258586.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Chị Em",
    original_price: 80000,
    final_price: 64000,
    product_id: "582660",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 11,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582656",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-chi-hang",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Chị Hằng",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258548.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Chị Hằng",
    original_price: 80000,
    final_price: 64000,
    product_id: "582656",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 11,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582662",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-dau-lan",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Đầu Lân",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258609.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Đầu Lân",
    original_price: 80000,
    final_price: 64000,
    product_id: "582662",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 20,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582657",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-gau-truc",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Gấu Trúc",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258555.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Gấu Trúc",
    original_price: 80000,
    final_price: 64000,
    product_id: "582657",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 14,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582666",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-lan-tron",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Lân Tròn",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258647.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Lân Tròn",
    original_price: 80000,
    final_price: 64000,
    product_id: "582666",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 5,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582663",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-mua-lan",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Múa Lân",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258616.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Múa Lân",
    original_price: 80000,
    final_price: 64000,
    product_id: "582663",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 8,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582659",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-pha-co",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Phá Cỗ",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258579.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Phá Cỗ",
    original_price: 80000,
    final_price: 64000,
    product_id: "582659",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 8,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582661",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-ruoc-den-hoa",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Rước Đèn Hoa",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258593.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Rước Đèn Hoa",
    original_price: 80000,
    final_price: 64000,
    product_id: "582661",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 14,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "582664",
    product_url: "long-den-trung-thu-go-2-mat-mau-bach-moc-ruoc-den-tron",
    image_label: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Rước Đèn Tròn",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000258623.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ 2 Mặt Màu - Bách Mộc - Rước Đèn Tròn",
    original_price: 80000,
    final_price: 64000,
    product_id: "582664",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 11,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441122",
    product_url: "long-den-trung-thu-go-moc-khong-mau-vi-6-mau-nuoc-den-hang-sao-moc-bach-moc-11-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Hằng Sao Mộc - Bách Mộc 11 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158138.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Hằng Sao Mộc - Bách Mộc 11 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441122",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 3,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441133",
    product_url: "long-den-trung-thu-go-moc-khong-mau-vi-6-mau-nuoc-den-hang-tron-moc-bach-moc-07-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Hằng Tròn Mộc - Bách Mộc 07 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158244.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Hằng Tròn Mộc - Bách Mộc 07 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441133",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 6,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441138",
    product_url: "long-den-trung-thu-go-moc-khong-mau-vi-6-mau-nuoc-den-tho-banh-moc-bach-moc-04-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Thỏ Bánh Mộc - Bách Mộc 04 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158299.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Đèn Thỏ Bánh Mộc - Bách Mộc 04 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441138",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 2,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441120",
    product_url: "long-den-trung-thu-go-moc-khong-mau-vi-6-mau-nuoc-lan-sao-bach-moc-09-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Lân Sao - Bách Mộc 09 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158114.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Không Màu + Vỉ 6 Màu Nước: Lân Sao - Bách Mộc 09 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441120",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 3,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441123",
    product_url: "long-den-trung-thu-go-moc-mau-den-ca-mau-bach-moc-02-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Cá Màu - Bách Mộc 02 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158145.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Cá Màu - Bách Mộc 02 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441123",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 81,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441139",
    product_url: "long-den-trung-thu-go-moc-mau-den-chi-em-bach-moc-10-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Chị Em - Bách Mộc 10 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158305.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Chị Em - Bách Mộc 10 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441139",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 37,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441124",
    product_url: "long-den-trung-thu-go-moc-mau-den-dau-lan-bach-moc-01-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Đầu Lân - Bách Mộc 01 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158152.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Đầu Lân - Bách Mộc 01 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441124",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 78,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441142",
    product_url: "long-den-trung-thu-go-moc-mau-den-hang-sao-bach-moc-11-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Hằng Sao - Bách Mộc 11 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158336.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Hằng Sao - Bách Mộc 11 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441142",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 14,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "441125",
    product_url: "long-den-trung-thu-go-moc-mau-den-hang-tron-bach-moc-04-co-kem-pin",
    image_label: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Hằng Tròn - Bách Mộc 04 (Có Kèm Pin)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000158169.jpg",
    product_name: "Lồng Đèn Trung Thu Gỗ Mộc Màu : Đèn Hằng Tròn - Bách Mộc 04 (Có Kèm Pin)",
    original_price: 80000,
    final_price: 64000,
    product_id: "441125",
    discount_percent: 20,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  }
],
 
  "success": true
}
// limit 36
// list 704881,705611,705212,668655,705071,769148,732521,712294,706039,739339,575215,575210,575194,575195,435387,639555,556492,575205,574588,426354,637079,170554,426320,433671,426331,426105,401217,426333,426584,292248,575312,170555
// bar_gridSlider true
// show_buy_now false
/**
 * Mảng dữ liệu sản phẩm được transform từ API response
 * Tuân thủ theo interface ProductData với đầy đủ các trường dữ liệu
 */

/**
 * Mảng dữ liệu sản phẩm được transform từ API response
 * Tuân thủ theo interface ProductData với đầy đủ các trường dữ liệu
 */


// limit 20
// list 637079,689891,689892,689893,689894,689895,678984,690515,444199,690500,585126,639555,400520,696124,696263,643343,278727
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
// 8
export const event_NationalDay = {
  "result": true,
  "event": {
    "id": "holiday-National",
    "product_name": 'Quốc Khánh 2/9',
    "bg_image": "https://cdn1.fahasa.com/media/wysiwyg/Thang-08-2025/Web_Block2Thang9_3000.png",
    "description": "National_01.10.2025",
    "start_date": "2025-10-01 00:00:00",
    "end_date": "2025-10-07 23:59:59",
    "created_at": "2025-10-01 08:51:36",
    "update_at": "2025-10-01 08:51:36",
    "active": "1",
    "type": "holiday",
 
  },
 
  "products": [
  {
    "id": "637079",
    "product_url": "gau-bong-yeu-nuoc-chu-bo-doi-25-cm-zoozoo-25250-mau-xanh-la",
    "image_label": "Gấu Bông Chiến Sĩ Yêu Nước 25 cm - ZooZoo 25250 - Màu Xanh Lá",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/2/0/2000214296235_3.jpg",
    "product_name": "Gấu Bông Chiến Sĩ Yêu Nước 25 cm - ZooZoo 25250 - Màu Xanh Lá",
    "original_price": 270000,
    "final_price": 243000,
    "product_id": "637079",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2703",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689891",
    "product_url": "gau-bong-dong-chi-nu-thanh-nien-xung-phong-25-cm-zoozoo",
    "image_label": "Gấu Bông Đồng Chí Nữ Thanh Niên Xung Phong 25 cm - ZooZoo",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/b/gbdcntnxp.jpg",
    "product_name": "Gấu Bông Đồng Chí Nữ Thanh Niên Xung Phong 25 cm - ZooZoo",
    "original_price": 270000,
    "final_price": 243000,
    "product_id": "689891",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "547",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689892",
    "product_url": "gau-bong-dong-chi-ve-quoc-quan-25-cm-zoozoo",
    "image_label": "Gấu Bông Đồng Chí Vệ Quốc Quân 25 cm - ZooZoo",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/b/gbdcvqq.jpg",
    "product_name": "Gấu Bông Đồng Chí Vệ Quốc Quân 25 cm - ZooZoo",
    "original_price": 302000,
    "final_price": 271800,
    "product_id": "689892",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "492",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689893",
    "product_url": "gau-bong-dong-chi-hau-phuong-25-cm-zoozoo",
    "image_label": "Gấu Bông Đồng Chí Hậu Phương 25 cm - ZooZoo - Áo Dài Trắng",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/b/gbdchpadt.jpg",
    "product_name": "Gấu Bông Đồng Chí Hậu Phương 25 cm - ZooZoo - Áo Dài Trắng",
    "original_price": 238000,
    "final_price": 214000,
    "product_id": "689893",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "119",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689894",
    "product_url": "gau-bong-dong-chi-hau-phuong-25-cm-zoozoo-689894",
    "image_label": "Gấu Bông Đồng Chí Hậu Phương - 25 cm - ZooZoo - Áo Dài Đỏ",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/b/gbdchpadd.jpg",
    "product_name": "Gấu Bông Đồng Chí Hậu Phương - 25 cm - ZooZoo - Áo Dài Đỏ",
    "original_price": 238000,
    "final_price": 214000,
    "product_id": "689894",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "121",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689895",
    "product_url": "gau-bong-yeu-nuoc-ao-quoc-ky-20-cm-zoozoo",
    "image_label": "Gấu Bông Yêu Nước Áo Quốc Kỳ 20 cm - ZooZoo",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/y/gynaqk.jpg",
    "product_name": "Gấu Bông Yêu Nước Áo Quốc Kỳ 20 cm - ZooZoo",
    "original_price": 173000,
    "final_price": 155500,
    "product_id": "689895",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "58",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678984",
    "product_url": "dat-nuoc-gam-hoa-atlas-viet-nam-an-ban-luu-dau-63-tinh-thanh-bia-cung",
    "image_label": "Đất Nước Gấm Hoa - Atlas Việt Nam - Ấn Bản Lưu Dấu 63 Tỉnh Thành - Bìa Cứng",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/d/a/dat-nuoc-gam-hoa_an-ban-dac-biet_bia.jpg",
    "product_name": "Đất Nước Gấm Hoa - Atlas Việt Nam - Ấn Bản Lưu Dấu 63 Tỉnh Thành - Bìa Cứng",
    "original_price": 350000,
    "final_price": 315000,
    "product_id": "678984",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "915",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": "Tập 63",
    "frame_images": []
  },
  {
    "id": "690515",
    "product_url": "bac-ho-viet-tuyen-ngon-doc-lap-an-ban-ki-niem-80-nam-quoc-khanh-tang-kem-postcard-doc-quyen",
    "image_label": "Bác Hồ Viết Tuyên Ngôn Độc Lập - Ấn Bản Kỉ Niệm 80 Năm Quốc Khánh - Tặng Kèm Postcard - Độc Quyền Fahasa",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/6/z6879296494675_70a537fe23016622b5f036060d3cad64.jpg",
    "product_name": "Bác Hồ Viết Tuyên Ngôn Độc Lập - Ấn Bản Kỉ Niệm 80 Năm Quốc Khánh - Tặng Kèm Postcard - Độc Quyền Fahasa",
    "original_price": 75000,
    "final_price": 75000,
    "product_id": "690515",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5722",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "444199",
    "product_url": "nguoi-thay-tai-ban",
    "image_label": "Người Thầy (Tái Bản)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786045193327.jpg",
    "product_name": "Người Thầy (Tái Bản)",
    "original_price": 267000,
    "final_price": 240000,
    "product_id": "444199",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1779",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "690500",
    "product_url": "hanh-trinh-vi-hoa-binh",
    "image_label": "Hành Trình Vì Hòa Bình",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-1_3_21.jpg",
    "product_name": "Hành Trình Vì Hòa Bình",
    "original_price": 240000,
    "final_price": 204000,
    "product_id": "690500",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "256",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "585126",
    "product_url": "lich-su-viet-nam-bang-hinh-bia-cung-tang-kem-1-bookmark-4-postcard",
    "image_label": "Lịch Sử Việt Nam Bằng Hình - Bìa Cứng - Tặng Kèm 1 Bookmark + 4 Postcard",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-2_28.jpg",
    "product_name": "Lịch Sử Việt Nam Bằng Hình - Bìa Cứng - Tặng Kèm 1 Bookmark + 4 Postcard",
    "original_price": 900000,
    "final_price": 765000,
    "product_id": "585126",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1394",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "639555",
    "product_url": "bup-sen-xanh-bia-cung-tang-kem-obi-postcard-hanh-trinh-cuu-nuoc-doc-quyen",
    "image_label": "Búp Sen Xanh - Bìa Cứng - Tặng Kèm Obi + Postcard Hành Trình Cứu Nước - Độc Quyền Fahasa",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-7.jpg",
    "product_name": "Búp Sen Xanh - Bìa Cứng - Tặng Kèm Obi + Postcard Hành Trình Cứu Nước - Độc Quyền Fahasa",
    "original_price": 110000,
    "final_price": 110000,
    "product_id": "639555",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "18940",
    "rating": {
      "reviews_count": "10",
      "rating_summary": 100
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "400520",
    "product_url": "luoc-su-nuoc-viet-bang-tranh-tai-ban-2024",
    "image_label": "Lược Sử Nước Việt Bằng Tranh (Tái Bản 2024)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935244874389.jpg",
    "product_name": "Lược Sử Nước Việt Bằng Tranh (Tái Bản 2024)",
    "original_price": 140000,
    "final_price": 126000,
    "product_id": "400520",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "10020",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "696124",
    "product_url": "ho-chi-minh-tieu-su-bang-hinh-bia-cung-tang-kem-1-bookmark-4-postcard",
    "image_label": "Hồ Chí Minh - Tiểu Sử Bằng Hình - Bìa Cứng - Tặng Kèm 1 Bookmark + 4 Postcard",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/h/ch_nh-s_ch-_i-l_---h_-ch_-minh---ti_u-s_-b_ng-h_nh.jpg",
    "product_name": "Hồ Chí Minh - Tiểu Sử Bằng Hình - Bìa Cứng - Tặng Kèm 1 Bookmark + 4 Postcard",
    "original_price": 680000,
    "final_price": 578000,
    "product_id": "696124",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "154",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "696263",
    "product_url": "tam-long-voi-dat-nuoc",
    "image_label": "Tấm Lòng Với Đất Nước",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/l/tlvdn.jpg",
    "product_name": "Tấm Lòng Với Đất Nước",
    "original_price": 292000,
    "final_price": 248000,
    "product_id": "696263",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "72",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577061",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "643343",
    "product_url": "mua-do-643343",
    "image_label": "Mưa Đỏ",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/m/u/muado.jpg",
    "product_name": "Mưa Đỏ",
    "original_price": 205000,
    "final_price": 184500,
    "product_id": "643343",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "10278",
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "278727",
    "product_url": "combo-tuoi-tho-du-doi-tap-1-va-2-tai-ban-2019-bo-2-tap",
    "image_label": "Combo Tuổi Thơ Dữ Dội - Tập 1 Và 2 (Tái Bản 2019) (Bộ 2 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935244827972-8935244827989.jpg",
    "product_name": "Combo Tuổi Thơ Dữ Dội - Tập 1 Và 2 (Tái Bản 2019) (Bộ 2 Tập)",
    "original_price": 160000,
    "final_price": 125440,
    "product_id": "278727",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "3052",
    "rating": {
      "reviews_count": "16",
      "rating_summary": 99
    },
    "label": "trending",
    "episode": "Tập 1+2",
    "frame_images": []
  }
],
  "success": true
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//         LAZY lOAD SCROLLBAR-Y
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//         TAB2 LAZY lOAD CLICK
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7
export const getData_TAB1XHMS = [
  {
    id: "704881",
    product_url: "qua-tet-doc-lap-2-9-nhung-la-thu-thoi-chien-doc-quyen",
    image_label: "Quà Tết Độc Lập 2/9 - Những Lá Thư Thời Chiến - Độc Quyền Fahasa",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/z/6/z6908775100595_1a6b8b6feb89fbbb4d00e110dabb1217.jpg",
    product_name: "Quà Tết Độc Lập 2/9 - Những Lá Thư Thời Chiến - Độc Quyền Fahasa",
    original_price: 299000,
    final_price: 269000,
    product_id: "704881",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "705611",
    product_url: "tu-sach-thanh-nien-mai-mai-tuoi-hai-muoi-nhat-ky-thoi-chien-viet-nam-bia-cung-doc-quyen",
    image_label: "Tủ Sách Thanh Niên - Mãi Mãi Tuổi Hai Mươi - Nhật Ký Thời Chiến Việt Nam - Bìa Cứng - Độc Quyền Fahasa",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/z/6/z6923363964831_c6d0801298a97c228cf13c4609936b6a-1_1.jpg",
    product_name: "Tủ Sách Thanh Niên - Mãi Mãi Tuổi Hai Mươi - Nhật Ký Thời Chiến Việt Nam - Bìa Cứng - Độc Quyền Fahasa",
    original_price: 135000,
    final_price: 114500,
    product_id: "705611",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "668655",
    product_url: "english-grammar-in-use-with-answer-and-interactive-e-book",
    image_label: "English Grammar In Use With Answer And Interactive E-book",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009826464.jpg",
    product_name: "English Grammar In Use With Answer And Interactive E-book",
    original_price: 375000,
    final_price: 356000,
    product_id: "668655",
    discount_percent: 5,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "705071",
    product_url: "mo-hinh-ky-niem-45-nam-phim-dien-anh-doraemon",
    image_label: "Mô Hình Kỷ Niệm 45 Năm Phim Điện Ảnh Doraemon (Mẫu Sản Phẩm Giao Ngẫu Nhiên)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/l/e/le.jpg",
    product_name: "Mô Hình Kỷ Niệm 45 Năm Phim Điện Ảnh Doraemon (Mẫu Sản Phẩm Giao Ngẫu Nhiên)",
    original_price: 165000,
    final_price: 165000,
    product_id: "705071",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "769148",
    product_url: "so-da-bia-mem-coffee-lovers-a6-dong-ke-cham-120-trang-100gsm-the-sun-macchiato",
    image_label: "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8934986016248.jpg",
    product_name: "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    original_price: 46000,
    final_price: 41400,
    product_id: "769148",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "new_arrival",
    episode: null,
    frame_images: []
  },
  {
    id: "732521",
    product_url: "premium-boxset-thanh-guom-diet-quy-kimetsu-no-yaiba-hop-23-tap-tang-kem-qua-tang-shikishi",
    image_label: "Premium Boxset Thanh Gươm Diệt Quỷ - Kimetsu No Yaiba (Hộp 23 Tập) - Tặng Kèm Quà Tặng + Shikishi",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-2_147.jpg",
    product_name: "Premium Boxset Thanh Gươm Diệt Quỷ - Kimetsu No Yaiba (Hộp 23 Tập) - Tặng Kèm Quà Tặng + Shikishi",
    original_price: 926000,
    final_price: 880000,
    product_id: "732521",
    discount_percent: 4,
    type_id: "bundle",
    soon_release: 1,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "new_arrival",
    episode: null,
    frame_images: []
  },
  {
    id: "712294",
    product_url: "alchemised-paperback",
    image_label: "Alchemised - Paperback",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9798217091256.jpg",
    product_name: "Alchemised - Paperback",
    original_price: 696000,
    final_price: 696000,
    product_id: "712294",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 1,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "706039",
    product_url: "the-secret-of-secrets-a-novel",
    image_label: "The Secret Of Secrets - A Novel",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9780385546898.jpg",
    product_name: "The Secret Of Secrets - A Novel",
    original_price: 783000,
    final_price: 704000,
    product_id: "706039",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: []
  },
  {
    id: "739339",
    product_url: "combo-manga-itto-song-gio-cau-truong-tap-1-26-bo-26-tap-tai-ban-2025",
    image_label: "Combo Manga - Itto - Sóng Gió Cầu Trường: Tập 1 - 26 (Bộ 26 Tập) (Tái Bản 2025)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/9/9933934e7ab6465d8e672a1b4f5365b0.jpg",
    product_name: "Combo Manga - Itto - Sóng Gió Cầu Trường: Tập 1 - 26 (Bộ 26 Tập) (Tái Bản 2025)",
    original_price: 650000,
    final_price: 617500,
    product_id: "739339",
    discount_percent: 5,
    type_id: "bundle",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "new_arrival",
    episode: null,
    frame_images: []
  },
  {
    id: "575210",
    product_url: "ngu-van-12-tap-2-chan-troi-chuan",
    image_label: "Ngữ Văn 12 - Tập 2 (Chân Trời) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393388.jpg",
    product_name: "Ngữ Văn 12 - Tập 2 (Chân Trời) (Chuẩn)",
    original_price: 19000,
    final_price: 19000,
    product_id: "575210",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 2",
    frame_images: []
  },
  {
    id: "575194",
    product_url: "toan-12-tap-1-chan-troi-chuan",
    image_label: "Toán 12 - Tập 1 (Chân Trời) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393340.jpg",
    product_name: "Toán 12 - Tập 1 (Chân Trời) (Chuẩn)",
    original_price: 14000,
    final_price: 14000,
    product_id: "575194",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "435387",
    product_url: "toan-11-1-ct-n3",
    image_label: "Toán 11 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040351951.jpg",
    product_name: "Toán 11 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    original_price: 21000,
    final_price: 21000,
    product_id: "435387",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "639555",
    product_url: "bup-sen-xanh-bia-cung-tang-kem-obi-postcard-hanh-trinh-cuu-nuoc-doc-quyen",
    image_label: "Búp Sen Xanh - Bìa Cứng - Tặng Kèm Obi + Postcard Hành Trình Cứu Nước - Độc Quyền Fahasa",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-7.jpg",
    product_name: "Búp Sen Xanh - Bìa Cứng - Tặng Kèm Obi + Postcard Hành Trình Cứu Nước - Độc Quyền Fahasa",
    original_price: 110000,
    final_price: 110000,
    product_id: "639555",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: 10,
      rating_summary: 100
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "556492",
    product_url: "tieng-anh-12-global-success-sach-hoc-sinh-y4",
    image_label: "Global Success - Tiếng Anh 12 - Sách Học Sinh (2024)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393708.jpg",
    product_name: "Global Success - Tiếng Anh 12 - Sách Học Sinh (2024)",
    original_price: 67200,
    final_price: 67200,
    product_id: "556492",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "426354",
    product_url: "tieng-viet-1-1-chan-troi-sang-tao-2023",
    image_label: "Tiếng Việt 1 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040288158_1.jpg",
    product_name: "Tiếng Việt 1 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    original_price: 27000,
    final_price: 27000,
    product_id: "426354",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "637079",
    product_url: "gau-bong-yeu-nuoc-chu-bo-doi-25-cm-zoozoo-25250-mau-xanh-la",
    image_label: "Gấu Bông A80 Chiến Sĩ Yêu Nước 25 cm - ZooZoo 25250 - Màu Xanh Lá",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/2/0/2000214296235_3.jpg",
    product_name: "Gấu Bông A80 Chiến Sĩ Yêu Nước 25 cm - ZooZoo 25250 - Màu Xanh Lá",
    original_price: 270000,
    final_price: 243000,
    product_id: "637079",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "170554",
    product_url: "cuon-bao-tap-nylon-tp-10to-cuon",
    image_label: "Cuộn - Bao Tập Nylon TP 205 x 150 mm (10 Tờ/Cuộn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/1/9/1901011410897_6.jpg",
    product_name: "Cuộn - Bao Tập Nylon TP 205 x 150 mm (10 Tờ/Cuộn)",
    original_price: 14000,
    final_price: 12500,
    product_id: "170554",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: 6,
      rating_summary: 97
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "426320",
    product_url: "vbt-toan-1-1-chan-troi-sang-tao-2023",
    image_label: "Vở Bài Tập Toán 1 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040287540_1.jpg",
    product_name: "Vở Bài Tập Toán 1 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    original_price: 16000,
    final_price: 16000,
    product_id: "426320",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "433671",
    product_url: "global-success-tieng-anh-11-student-book-2023",
    image_label: "Global Success - Tiếng Anh 11 - Student Book (2023)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040351319_1.jpg",
    product_name: "Global Success - Tiếng Anh 11 - Student Book (2023)",
    original_price: 58000,
    final_price: 58000,
    product_id: "433671",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "426331",
    product_url: "vbt-toan-2-1-chan-troi-sang-tao-2023",
    image_label: "Vở Bài Tập Toán 2 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040287649_1.jpg",
    product_name: "Vở Bài Tập Toán 2 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    original_price: 20000,
    final_price: 20000,
    product_id: "426331",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "426105",
    product_url: "sach-giao-khoa-bo-lop-2-chan-troi-sang-tao-sach-bai-hoc-bo-10-cuon-2023",
    image_label: "Sách Giáo Khoa Bộ Lớp 2 - Chân Trời Sáng Tạo - Sách Bài Học (Bộ 10 Cuốn) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/3/3300000026947.jpg",
    product_name: "Sách Giáo Khoa Bộ Lớp 2 - Chân Trời Sáng Tạo - Sách Bài Học (Bộ 10 Cuốn) (Chuẩn)",
    original_price: 147800,
    final_price: 147800,
    product_id: "426105",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "401217",
    product_url: "bo-toan-tieng-viet-lop-1-bo-2-hop",
    image_label: "Bộ 2 Hộp Thực Hành Toán Và Tiếng Việt Lớp 1",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000069892.jpg",
    product_name: "Bộ 2 Hộp Thực Hành Toán Và Tiếng Việt Lớp 1",
    original_price: 240000,
    final_price: 228000,
    product_id: "401217",
    discount_percent: 5,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "426333",
    product_url: "vbt-tieng-viet-2-1-chan-troi-sang-tao-2023",
    image_label: "Vở Bài Tập Tiếng Việt 2 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040287663_1.jpg",
    product_name: "Vở Bài Tập Tiếng Việt 2 - Tập 1 (Chân Trời Sáng Tạo) (Chuẩn)",
    original_price: 17000,
    final_price: 17000,
    product_id: "426333",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: "Tập 1",
    frame_images: []
  },
  {
    id: "292248",
    product_url: "bao-sach-tp-kho-lon-10-to-cuon",
    image_label: "Bao Sách TP 265 x 190 mm - Khổ Lớn (10 Tờ/Cuộn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/1/9/1901011620920_1.jpg",
    product_name: "Bao Sách TP 265 x 190 mm - Khổ Lớn (10 Tờ/Cuộn)",
    original_price: 20000,
    final_price: 18000,
    product_id: "292248",
    discount_percent: 10,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "575312",
    product_url: "sach-giao-khoa-bo-lop-9-chan-troi-sang-tao-sach-bai-hoc-bo-11-cuon-chuan",
    image_label: "Sách Giáo Khoa Bộ Lớp 9 - Chân Trời Sáng Tạo - Sách Bài Học (Bộ 11 Cuốn) (Chuẩn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/s/g/sgk9-ct-bh.jpg",
    product_name: "Sách Giáo Khoa Bộ Lớp 9 - Chân Trời Sáng Tạo - Sách Bài Học (Bộ 11 Cuốn) (Chuẩn)",
    original_price: 182800,
    final_price: 182800,
    product_id: "575312",
    discount_percent: 0,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: []
  },
  {
    id: "170555",
    product_url: "cuon-bao-sach-nylon-tp-10-to-cuon",
    image_label: "Cuộn Bao Sách Nylon TP 242 x 175 mm (10 Tờ/Cuộn)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/1/9/1901011410903_4.jpg",
    product_name: "Cuộn Bao Sách Nylon TP 242 x 175 mm (10 Tờ/Cuộn)",
    original_price: 16000,
    final_price: 14000,
    product_id: "170555",
    discount_percent: 12,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: null,
    rating: {
      reviews_count: 4,
      rating_summary: 100
    },
    label: "trending",
    episode: null,
    frame_images: []
  }
]
export const getData_TAB2_XHMS = [
  {
    "id": "559174",
    "product_url": "stop-overthinking-song-tu-do-khong-au-lo-7-buoc-loai-bo-suy-nghi-tieu-cuc-va-bat-dau-suy-nghi-tich-cuc",
    "image_label": "Stop Overthinking - Sống Tự Do, Không Âu Lo - 7 Bước Loại Bỏ Suy Nghĩ Tiêu Cực Và Bắt Đầu Suy Nghĩ Tích Cực",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390027.jpg",
    "product_name": "Stop Overthinking - Sống Tự Do, Không Âu Lo - 7 Bước Loại Bỏ Suy Nghĩ Tiêu Cực Và Bắt Đầu Suy Nghĩ Tích Cực",
    "original_price": 95000,
    "final_price": 61750,
    "product_id": "559174",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "3086",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "568825",
    "product_url": "dopamine-detox-thanh-loc-tam-tri-de-tap-trung-vao-nhung-dieu-quan-trong-nhat",
    "image_label": "Dopamine Detox - Thanh Lọc Tâm Trí Để Tập Trung Vào Những Điều Quan Trọng Nhất",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_-s_ch-hi_u-su_t_dopamine-01.jpg",
    "product_name": "Dopamine Detox - Thanh Lọc Tâm Trí Để Tập Trung Vào Những Điều Quan Trọng Nhất",
    "original_price": 59000,
    "final_price": 38350,
    "product_id": "568825",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "339",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "559176",
    "product_url": "phuong-phap-hoc-tap-feynman-5-buoc-giup-ban-hoc-nhanh-nho-lau-tien-bo-vuot-bac",
    "image_label": "Phương Pháp Học Tập Feynman - 5 Bước Giúp Bạn Học Nhanh, Nhớ Lâu, Tiến Bộ Vượt Bậc",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390041.jpg",
    "product_name": "Phương Pháp Học Tập Feynman - 5 Bước Giúp Bạn Học Nhanh, Nhớ Lâu, Tiến Bộ Vượt Bậc",
    "original_price": 136000,
    "final_price": 88400,
    "product_id": "559176",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "930",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "378032",
    "product_url": "thay-doi-cau-hoi-thay-doi-cuoc-doi-tai-ban-378032",
    "image_label": "Thay Đổi Câu Hỏi Thay Đổi Cuộc Đời (Tái Bản)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_1498.jpg",
    "product_name": "Thay Đổi Câu Hỏi Thay Đổi Cuộc Đời (Tái Bản)",
    "original_price": 85000,
    "final_price": 55250,
    "product_id": "378032",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "605",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "398986",
    "product_url": "phuong-phap-giao-duc-con-cua-nguoi-do-thai-giup-tre-tu-tin-buoc-vao-cuoc-song",
    "image_label": "Phương Pháp Giáo Dục Con Của Người Do Thái - Giúp Trẻ Tự Tin Bước Vào Cuộc Sống",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067605211.jpg",
    "product_name": "Phương Pháp Giáo Dục Con Của Người Do Thái - Giúp Trẻ Tự Tin Bước Vào Cuộc Sống",
    "original_price": 85000,
    "final_price": 55250,
    "product_id": "398986",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "792",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "435821",
    "product_url": "loi-thu-toi-cua-mot-sat-thu-kinh-te-bia-cung-tai-ban-2023",
    "image_label": "Lời Thú Tội Của Một Sát Thủ Kinh Tế - Bìa Cứng (Tái Bản 2023)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210307910.jpg",
    "product_name": "Lời Thú Tội Của Một Sát Thủ Kinh Tế - Bìa Cứng (Tái Bản 2023)",
    "original_price": 245000,
    "final_price": 159250,
    "product_id": "435821",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "308",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "590065",
    "product_url": "chien-thang-ban-than-la-chien-thang-hien-hach-nhat",
    "image_label": "Chiến Thắng Bản Thân Là Chiến Thắng Hiển Hách Nhất",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390096.jpg",
    "product_name": "Chiến Thắng Bản Thân Là Chiến Thắng Hiển Hách Nhất",
    "original_price": 95000,
    "final_price": 61750,
    "product_id": "590065",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "43",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "580621",
    "product_url": "fire-force-tap-33-tang-kem-bookmark-giay-hinh-nhan-vat",
    "image_label": "Fire Force - Tập 33 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/n/x/nxbtre_full_23132024_041333.jpg",
    "product_name": "Fire Force - Tập 33 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "original_price": 43000,
    "final_price": 25800,
    "product_id": "580621",
    "discount_percent": 40,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "140",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 33",
    "frame_images": []
  },
  {
    "id": "495086",
    "product_url": "fire-force-tap-23-tang-kem-bookmark-giay-hinh-nhan-vat",
    "image_label": "Fire Force - Tập 23 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/n/x/nxbtre_full_20452024_044554_1.jpg",
    "product_name": "Fire Force - Tập 23 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "original_price": 43000,
    "final_price": 25800,
    "product_id": "495086",
    "discount_percent": 40,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "80",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 23",
    "frame_images": []
  },
  {
    "id": "468375",
    "product_url": "fire-force-tap-22-tang-kem-bookmark-giay-hinh-nhan-vat",
    "image_label": "Fire Force - Tập 22 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/n/x/nxbtre_full_17462024_114615.jpg",
    "product_name": "Fire Force - Tập 22 - Tặng Kèm Bookmark Giấy Hình Nhân Vật",
    "original_price": 43000,
    "final_price": 25800,
    "product_id": "468375",
    "discount_percent": 40,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "72",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 22",
    "frame_images": []
  },
  {
    "id": "401784",
    "product_url": "hieu-sach-cuoi-cung-o-london-tieu-thuyet-ve-chien-tranh-the-gioi-thu-hai",
    "image_label": "Hiệu Sách Cuối Cùng Ở London - Tiểu Thuyết Về Chiến Tranh Thế Giới Thứ Hai",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210302168_1.jpg",
    "product_name": "Hiệu Sách Cuối Cùng Ở London - Tiểu Thuyết Về Chiến Tranh Thế Giới Thứ Hai",
    "original_price": 180000,
    "final_price": 117000,
    "product_id": "401784",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "223",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "689766",
    "product_url": "nhung-mo-hinh-tu-duy-vi-dai-nhung-nguyen-tac-tu-duy-cot-loi",
    "image_label": "Những Mô Hình Tư Duy Vĩ Đại - Những Nguyên Tắc Tư Duy Cốt Lõi",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390393.jpg",
    "product_name": "Những Mô Hình Tư Duy Vĩ Đại - Những Nguyên Tắc Tư Duy Cốt Lõi",
    "original_price": 150000,
    "final_price": 97500,
    "product_id": "689766",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "33",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]
export const getData_TAB3_XHMS = [
  {
    "id": "259238",
    "product_url": "never-split-the-difference-negotiating-as-if-your-life-depended-on-it-259238",
    "image_label": "Never Split the Difference: Negotiating as If Your Life Depended on It",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_6799.jpg",
    "product_name": "Never Split the Difference: Negotiating as If Your Life Depended on It",
    "original_price": 225000,
    "final_price": 202500,
    "product_id": "259238",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "175",
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "365418",
    "product_url": "tv-365418",
    "image_label": "TVアニメ『鬼滅の刃』 公式キャラクターズブック 弐ノ巻 TEREBI ANIME  KIMETSU NO YAIBA  KOUSHIKI KI",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_235063.jpg",
    "product_name": "TVアニメ『鬼滅の刃』 公式キャラクターズブック 弐ノ巻 TEREBI ANIME  KIMETSU NO YAIBA  KOUSHIKI KI",
    "original_price": 167000,
    "final_price": 150000,
    "product_id": "365418",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "201439",
    "product_url": "the-fountainhead",
    "image_label": "The Fountainhead",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9780451191151.jpg",
    "product_name": "The Fountainhead",
    "original_price": 247000,
    "final_price": 222000,
    "product_id": "201439",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "22",
    "rating": {
      "reviews_count": "6",
      "rating_summary": 87
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "153325",
    "product_url": "a-man-called-ove",
    "image_label": "A Man Called Ove",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781476738024_1.jpg",
    "product_name": "A Man Called Ove",
    "original_price": 405000,
    "final_price": 364500,
    "product_id": "153325",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "147",
    "rating": {
      "reviews_count": "17",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "437712",
    "product_url": "better-than-the-movies",
    "image_label": "Better Than The Movies",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781534467637.jpg",
    "product_name": "Better Than The Movies",
    "original_price": 293000,
    "final_price": 263700,
    "product_id": "437712",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "111",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "26808",
    "product_url": "the-48-laws-of-power",
    "image_label": "The 48 Laws of Power",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_22698.jpg",
    "product_name": "The 48 Laws of Power",
    "original_price": 575000,
    "final_price": 517500,
    "product_id": "26808",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "110",
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "567814",
    "product_url": "boruto-two-blue-vortex-1",
    "image_label": "Boruto - Two Blue Vortex - 1",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9784088838243.jpg",
    "product_name": "Boruto - Two Blue Vortex - 1",
    "original_price": 151000,
    "final_price": 135900,
    "product_id": "567814",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "14",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 1",
    "frame_images": []
  },
  {
    "id": "32787",
    "product_url": "thinking-fast-and-slow-86091",
    "image_label": "Thinking, Fast and Slow",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_23665.jpg",
    "product_name": "Thinking, Fast and Slow",
    "original_price": 396000,
    "final_price": 356400,
    "product_id": "32787",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "254",
    "rating": {
      "reviews_count": "4",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "641365",
    "product_url": "diary-of-a-wimpy-kid-18-no-brainer-641365",
    "image_label": "Diary Of A Wimpy Kid 18 - No Brainer",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9780241583159.jpg",
    "product_name": "Diary Of A Wimpy Kid 18 - No Brainer",
    "original_price": 189000,
    "final_price": 170000,
    "product_id": "641365",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "27",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 18",
    "frame_images": []
  },
  {
    "id": "168320",
    "product_url": "the-alchemist-25th-anniversary-a-fable-about-following-your-dream",
    "image_label": "The Alchemist 25th Anniversary: A Fable About Following Your Dream",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_129754.jpg",
    "product_name": "The Alchemist 25th Anniversary: A Fable About Following Your Dream",
    "original_price": 225000,
    "final_price": 202000,
    "product_id": "168320",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "177",
    "rating": {
      "reviews_count": "9",
      "rating_summary": 98
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "324484",
    "product_url": "tv-324484",
    "image_label": "TVアニメ『鬼滅の刃』 公式キャラクターズブック 壱ノ巻 (ジャンプコミックス セレクション) TV ANIME  KIMETSU NO YAIBA  KOUSHIKI KI",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_208983.jpg",
    "product_name": "TVアニメ『鬼滅の刃』 公式キャラクターズブック 壱ノ巻 (ジャンプコミックス セレクション) TV ANIME  KIMETSU NO YAIBA  KOUSHIKI KI",
    "original_price": 169000,
    "final_price": 152000,
    "product_id": "324484",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "590147",
    "product_url": "ruri-dragon-2",
    "image_label": "ルリドラゴン - Ruri Dragon 2",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9784088841649.jpg",
    "product_name": "ルリドラゴン - Ruri Dragon 2",
    "original_price": 163000,
    "final_price": 146000,
    "product_id": "590147",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "19",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 2",
    "frame_images": []
  }
]

//9
// limit 24
// sort_by num_orders
// category_id 6565
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
// api xoay lay items ngau nhien cua danh muc khi reload
// 9
export const getData_TAB1STK = [
  {
    "id": "556492",
    "product_id": "556492",
    "product_name": "Global Success - Tiếng Anh 12 - Sách Học Sinh (2024)",
    "product_url": "tieng-anh-12-global-success-sach-hoc-sinh-y4",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393708.jpg",
    "image_label": "Global Success - Tiếng Anh 12 - Sách Học Sinh (2024)",
    "frame_images": [],
    "original_price": 67200,
    "final_price": 67200,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 3266,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "556491",
    "product_id": "556491",
    "product_name": "Global Success - Tiếng Anh 9 - Sách Học Sinh (2024)",
    "product_url": "tieng-anh-9-global-success-sach-hoc-sinh-y4",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393661.jpg",
    "image_label": "Global Success - Tiếng Anh 9 - Sách Học Sinh (2024)",
    "frame_images": [],
    "original_price": 62000,
    "final_price": 62000,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 1480,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "556488",
    "product_id": "556488",
    "product_name": "Global Success - Tiếng Anh 12 - Sách Bài Tập (2024)",
    "product_url": "tieng-anh-12-global-success-sach-bai-tap-y",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393494.jpg",
    "image_label": "Global Success - Tiếng Anh 12 - Sách Bài Tập (2024)",
    "frame_images": [],
    "original_price": 70000,
    "final_price": 70000,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 1258,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "357427",
    "product_id": "357427",
    "product_name": "Bảng Tóm Tắt Toán Tiểu Học",
    "product_url": "bang-tom-tat-toan-tieu-hoc-357427",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_230593.jpg",
    "image_label": "Bảng Tóm Tắt Toán Tiểu Học",
    "frame_images": [],
    "original_price": 7000,
    "final_price": 7000,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 1639,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "410762",
    "product_id": "410762",
    "product_name": "Cẩm Nang Sử Dụng Bảng Tuần Hoàn Các Nguyên Tố Hóa Học (Tái Bản 2022)",
    "product_url": "tb2022-cam-nang-su-dung-bang-tuan-hoan-cac-nguyen-to-hoa-hoc",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043670622.jpg",
    "image_label": "Cẩm Nang Sử Dụng Bảng Tuần Hoàn Các Nguyên Tố Hóa Học (Tái Bản 2022)",
    "frame_images": [],
    "original_price": 10000,
    "final_price": 7500,
    "discount_percent": 25,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 592,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "418763",
    "product_id": "418763",
    "product_name": "Bảng Tuần Hoàn Các Nguyên Tố Hóa Học Theo Chương Trình Giáo Dục Phổ Thông Mới",
    "product_url": "bang-tuan-hoan-cac-nguyen-to-hoa-hoc-theo-ctgdpt-moi",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936036316346.jpg",
    "image_label": "Bảng Tuần Hoàn Các Nguyên Tố Hóa Học Theo Chương Trình Giáo Dục Phổ Thông Mới",
    "frame_images": [],
    "original_price": 10000,
    "final_price": 8500,
    "discount_percent": 15,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 1400,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  },
  {
    "id": "556489",
    "product_id": "556489",
    "product_name": "Global Success - Tiếng Anh 5 - Sách Học Sinh - Tập Một (2024)",
    "product_url": "tieng-anh-5-global-success-sach-hoc-sinh-tap-mot-y4",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393616.jpg",
    "image_label": "Global Success - Tiếng Anh 5 - Sách Học Sinh - Tập Một (2024)",
    "frame_images": [],
    "original_price": 32100,
    "final_price": 32100,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 859,
    "rating": {
      "reviews_count": 1,
      "rating_summary": 100
    }
  },
  {
    "id": "571987",
    "product_id": "571987",
    "product_name": "Atlat Địa Lí Việt Nam (Theo Chương Trình Giáo Dục Phổ Thông 2018)",
    "product_url": "atlat-dia-li-viet-nam-theo-chuong-trinh-giao-duc-pho-thong-2018",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040419286.jpg",
    "image_label": "Atlat Địa Lí Việt Nam (Theo Chương Trình Giáo Dục Phổ Thông 2018)",
    "frame_images": [],
    "original_price": 34000,
    "final_price": 34000,
    "discount_percent": 0,
    "type_id": "simple",
    "stock_available": "in_stock",
    "soon_release": 0,
    "sold_qty": 1005,
    "rating": {
      "reviews_count": 0,
      "rating_summary": null
    }
  }
]
export const getData_TAB2_STK = [
  {
    "id": "444271",
    "product_url": "mindset-for-ielts-level-1-sb-updated-digital-pack",
    "image_label": "Mindset For IELTS Level 1 Student's Book With Updated Digital Pack",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009470377_1.jpg",
    "product_name": "Mindset For IELTS Level 1 Student's Book With Updated Digital Pack",
    "original_price": 461000,
    "final_price": 437000,
    "product_id": "444271",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "872",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "trending",
    "episode": "Level 1",
    "frame_images": []
  },
  {
    "id": "176426",
    "product_url": "english-grammar-in-use-book-w-ans",
    "image_label": "English Grammar in Use Book w Ans",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781108430425.jpg",
    "product_name": "English Grammar in Use Book w Ans",
    "original_price": 198000,
    "final_price": 188000,
    "product_id": "176426",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1457",
    "rating": {
      "reviews_count": "34",
      "rating_summary": 96
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "591385",
    "product_url": "life-a1-a2-student-s-book-with-code-spark-2nd-edition",
    "image_label": "Life A1-A2 - Student's Book With Code Spark (2nd Edition)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_39171_2.jpg",
    "product_name": "Life A1-A2 - Student's Book With Code Spark (2nd Edition)",
    "original_price": 260000,
    "final_price": 247000,
    "product_id": "591385",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2791",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "268909",
    "product_url": "a2-key-for-schools-trainer-1-for-the-revised-2020-exam-six-practice-test-with-answers-and-teacher-s-notes-with-downloadable-audio",
    "image_label": "A2 Key for Schools Trainer 1 for the Revised 2020 Exam Six Practice test With Answers and Teacher's Notes With Downloadable Audio",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_15599.jpg",
    "product_name": "A2 Key for Schools Trainer 1 for the Revised 2020 Exam Six Practice test With Answers and Teacher's Notes With Downloadable Audio",
    "original_price": 200000,
    "final_price": 190000,
    "product_id": "268909",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "168",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 1",
    "frame_images": []
  },
  {
    "id": "446232",
    "product_url": "mindset-for-ielts-level-3-sb-updated-digital-pack",
    "image_label": "Mindset For IELTS Level 3 Student's Book With Updated Digital Pack",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009472340.jpg",
    "product_name": "Mindset For IELTS Level 3 Student's Book With Updated Digital Pack",
    "original_price": 461000,
    "final_price": 437000,
    "product_id": "446232",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "307",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Level 3",
    "frame_images": []
  },
  {
    "id": "389074",
    "product_url": "achievers-grade-6-workbook",
    "image_label": "Achievers Grade 6 - Workbook",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043371413.jpg",
    "product_name": "Achievers Grade 6 - Workbook",
    "original_price": 112000,
    "final_price": 106000,
    "product_id": "389074",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "114",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "389076",
    "product_url": "achievers-grade-6-student-s-book-with-clil-book",
    "image_label": "Achievers Grade 6 - Student's Book + CLIL Book",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996043371379.jpg",
    "product_name": "Achievers Grade 6 - Student's Book + CLIL Book",
    "original_price": 251000,
    "final_price": 238000,
    "product_id": "389076",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "157",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "561982",
    "product_url": "achievers-grade-9-student-s-book-with-clil-book",
    "image_label": "Achievers Grade 9 - Student's Book + CLIL Book",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996044890626.jpg",
    "product_name": "Achievers Grade 9 - Student's Book + CLIL Book",
    "original_price": 251000,
    "final_price": 238000,
    "product_id": "561982",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "124",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "668655",
    "product_url": "english-grammar-in-use-with-answer-and-interactive-e-book",
    "image_label": "English Grammar In Use With Answer And Interactive E-book",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009826464.jpg",
    "product_name": "English Grammar In Use With Answer And Interactive E-book",
    "original_price": 375000,
    "final_price": 356000,
    "product_id": "668655",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "138",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "446231",
    "product_url": "mindset-for-ielts-level-2-sb-updated-digital-pack",
    "image_label": "Mindset For IELTS Level 2 Student's Book With Updated Digital Pack",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009470360.jpg",
    "product_name": "Mindset For IELTS Level 2 Student's Book With Updated Digital Pack",
    "original_price": 461000,
    "final_price": 437000,
    "product_id": "446231",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "433",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Level 2",
    "frame_images": []
  },
  {
    "id": "561981",
    "product_url": "achievers-grade-9-workbook",
    "image_label": "Achievers Grade 9 - Workbook",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044890630.jpg",
    "product_name": "Achievers Grade 9 - Workbook",
    "original_price": 112000,
    "final_price": 106000,
    "product_id": "561981",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "103",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "176437",
    "product_url": "advanced-grammar-in-use-book-with-answers-reprint-edition-a-self-study-reference-and-practice-book-for-advanced-learners-of-english",
    "image_label": "Advanced Grammar in Use Book with Answers Fahasa Reprint Edition: A Self-Study Reference and Practice Book for Advanced Learners of English",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_193865.jpg",
    "product_name": "Advanced Grammar in Use Book with Answers Fahasa Reprint Edition: A Self-Study Reference and Practice Book for Advanced Learners of English",
    "original_price": 178000,
    "final_price": 169000,
    "product_id": "176437",
    "discount_percent": 5,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "449",
    "rating": {
      "reviews_count": "9",
      "rating_summary": 91
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]
export const getData_TAB3_STK = [
  {
    "id": "695946",
    "product_url": "sk-ms109m-hop-dung-cu-hinh-hoc-stakids-hop-thiec-tang-kem-but-gel-xoa-duoc",
    "image_label": "Bộ Dụng Cụ Học Tập 9 Món - Stakids SK-MS109M",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935318309489.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập 9 Món - Stakids SK-MS109M",
    "original_price": 43000,
    "final_price": 38500,
    "product_id": "695946",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  
  {
    "id": "678037",
    "product_url": "bo-dung-cu-hoc-tap-3-mon-ultraman-plus-600-v027",
    "image_label": "Bộ Dụng Cụ Học Tập 3 Món Ultraman - Plus 600-V027",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936007451922.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập 3 Món Ultraman - Plus 600-V027",
    "original_price": 59000,
    "final_price": 53000,
    "product_id": "678037",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "6",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "640564",
    "product_url": "msta-bo-dung-cu-hinh-hoc-7-mon-1x12",
    "image_label": "Bộ Dụng Cụ Hình Học 7 Món - Masterart",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/8/8851907323561.jpg",
    "product_name": "Bộ Dụng Cụ Hình Học 7 Món - Masterart",
    "original_price": 50000,
    "final_price": 45000,
    "product_id": "640564",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "7",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "638853",
    "product_url": "qua-tang-dchs-be-gai",
    "image_label": "Combo Quà Tặng Dụng Cụ Học Sinh Bé Gái",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-1604202502.jpg",
    "product_name": "Combo Quà Tặng Dụng Cụ Học Sinh Bé Gái",
    "original_price": 226500,
    "final_price": 219030,
    "product_id": "638853",
    "discount_percent": 3,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "620480",
    "product_url": "bo-thuc-hanh-cong-nghe-lop-5-vepic",
    "image_label": "Bộ Thực Hành Công Nghệ Lớp 5 - Vepic",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8938539576067.jpg",
    "product_name": "Bộ Thực Hành Công Nghệ Lớp 5 - Vepic",
    "original_price": 112000,
    "final_price": 100500,
    "product_id": "620480",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "162",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "597991",
    "product_url": "doms-bo-thuoc-toan-hoc-accumate-8157",
    "image_label": "Bộ Thước Toàn Học Accumate - Doms 8157",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8906073781575.jpg",
    "product_name": "Bộ Thước Toàn Học Accumate - Doms 8157",
    "original_price": 77000,
    "final_price": 69000,
    "product_id": "597991",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "6",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "580483",
    "product_url": "bo-dung-cu-thuoc-va-compas-to-eras-e215-mau-xanh-duong",
    "image_label": "Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh Dương",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936138642152-mau2.jpg",
    "product_name": "Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh Dương",
    "original_price": 51000,
    "final_price": 45500,
    "product_id": "580483",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "9",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "580482",
    "product_url": "bo-dung-cu-thuoc-va-compas-to-eras-e215-mau-xanh-la",
    "image_label": "Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh Lá",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936138642152-mau1.jpg",
    "product_name": "Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh Lá",
    "original_price": 51000,
    "final_price": 45500,
    "product_id": "580482",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "6",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "578613",
    "product_url": "keyroad-bo-dung-cu-hoc-tap-kr971849",
    "image_label": "Bộ Dụng Cụ Học Tập - Keyroad KR971849",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/6/9/6941288711599.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập - Keyroad KR971849",
    "original_price": 49500,
    "final_price": 44500,
    "product_id": "578613",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "578612",
    "product_url": "keyroad-bo-dung-cu-hoc-tap-kr971848",
    "image_label": "Bộ Dụng Cụ Học Tập - Keyroad KR971848",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/6/9/6941288711582.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập - Keyroad KR971848",
    "original_price": 46000,
    "final_price": 41000,
    "product_id": "578612",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "577826",
    "product_url": "bo-dung-cu-hoc-tap-4-mon-harry-potter-gryffindor-maped-cb98188000-mau-do",
    "image_label": "Bộ Dụng Cụ Học Tập 4 Món Harry Potter Gryffindor - Maped CB98188000 - Màu Đỏ",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/1/3154149818808.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập 4 Món Harry Potter Gryffindor - Maped CB98188000 - Màu Đỏ",
    "original_price": 68000,
    "final_price": 61000,
    "product_id": "577826",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "out_of_stock",
    "sold_qty": "13",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "577660",
    "product_url": "maped-bo-dung-cu-hoc-tap-harry-potter",
    "image_label": "Bộ Dụng Cụ Học Tập 4 Món Harry Potter - Maped CB98187900 - Màu Xanh Dương",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/1/3154149818792.jpg",
    "product_name": "Bộ Dụng Cụ Học Tập 4 Món Harry Potter - Maped CB98187900 - Màu Xanh Dương",
    "original_price": 68000,
    "final_price": 61000,
    "product_id": "577660",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "10",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]

//13
// limit 24
// block_type
// attribute_value 1
// list 638518,689734,357083,644540,465056,586844,411812,398123,631955,275885,639995,639997,364861,459846,357080,589668,465129,427245,282732,511988,384559,405658,415410,608755,644544,608755,554270,456717,356621,708719
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
// 13
export const getData_TAB1THNB = [
  {
    id: "638518",
    product_url: "hoi-ky-nguyen-thi-binh-gia-dinh-ban-be-dat-nuoc",
    image_label: "Hồi Ký Nguyễn Thị Bình - Gia Đình, Bạn Bè Và Đất Nước",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-gia-_nh_-b_n-b_-v_-_t-n_c_1.jpg",
    product_name: "Hồi Ký Nguyễn Thị Bình - Gia Đình, Bạn Bè Và Đất Nước",
    original_price: 159000,
    final_price: 151050,
    product_id: "638518",
    discount_percent: 5,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 2473,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "trending",
    episode: null,
    frame_images: [
      {
        key: "570563",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "689734",
    product_url: "hoi-uc-giac-mo-suy-ngam",
    image_label: "Hồi Ức, Giấc Mơ, Suy Ngẫm",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-h_i-_c_-gi_c-m_-suy-ng_m.jpg",
    product_name: "Hồi Ức, Giấc Mơ, Suy Ngẫm",
    original_price: 345000,
    final_price: 293000,
    product_id: "689734",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 218,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570568",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "357083",
    product_url: "nhung-ke-xuat-chung-tai-ban-2021",
    image_label: "Những Kẻ Xuất Chúng (Tái Bản 2021)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_230370.jpg",
    product_name: "Những Kẻ Xuất Chúng (Tái Bản 2021)",
    original_price: 159000,
    final_price: 111300,
    product_id: "357083",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 309,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570896",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "644540",
    product_url: "13-bai-giang-cua-giao-tien-ve-quan-tri-va-lanh-dao",
    image_label: "13 Bài Giảng Của Giáo Tiến Về Quản Trị Và Lãnh Đạo",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935251422481.jpg",
    product_name: "13 Bài Giảng Của Giáo Tiến Về Quản Trị Và Lãnh Đạo",
    original_price: 286000,
    final_price: 200200,
    product_id: "644540",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 287,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: "best_seller",
    episode: null,
    frame_images: [
      {
        key: "570564",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "465056",
    product_url: "chinh-sach-tien-te-the-ky-21",
    image_label: "Chính Sách Tiền Tệ Thế Kỷ 21",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a---chinh-sach-tien-te-the-ky-21---outline-cs5-01.jpg",
    product_name: "Chính Sách Tiền Tệ Thế Kỷ 21",
    original_price: 325000,
    final_price: 227500,
    product_id: "465056",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 232,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570773",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "586844",
    product_url: "nexus-luoc-su-cua-nhung-mang-luoi-thong-tin-tu-thoi-dai-do-da-den-tri-tue-nhan-tao",
    image_label: "Nexus - Lược Sử Của Những Mạng Lưới Thông Tin Từ Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/n/e/nexus-b_a-m_m_1.jpg",
    product_name: "Nexus - Lược Sử Của Những Mạng Lưới Thông Tin Từ Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo",
    original_price: 325000,
    final_price: 227500,
    product_id: "586844",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 2294,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570573",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "411812",
    product_url: "sung-vi-trung-va-thep-tai-ban-411812",
    image_label: "Súng, Vi Trùng Và Thép (Tái Bản)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935270703837.jpg",
    product_name: "Súng, Vi Trùng Và Thép (Tái Bản)",
    original_price: 339000,
    final_price: 237300,
    product_id: "411812",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 227,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570619",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "398123",
    product_url: "sapiens-luoc-su-loai-nguoi",
    image_label: "Sapiens Lược Sử Loài Người",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935270703554.jpg",
    product_name: "Sapiens Lược Sử Loài Người",
    original_price: 299000,
    final_price: 254000,
    product_id: "398123",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 634,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570607",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "631955",
    product_url: "tu-song-ben-hai-den-dinh-doc-lap",
    image_label: "Từ Sông Bến Hải Đến Dinh Độc Lập",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/t/u/tu-song-ben-hai-den-dinh-doc-lap-01-_1_.jpg",
    product_name: "Từ Sông Bến Hải Đến Dinh Độc Lập",
    original_price: 219000,
    final_price: 153300,
    product_id: "631955",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 243,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570569",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "275885",
    product_url: "thien-nga-den-tai-ban-2020",
    image_label: "Thiên Nga Đen (Tái Bản 2020)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_27686.jpg",
    product_name: "Thiên Nga Đen (Tái Bản 2020)",
    original_price: 299000,
    final_price: 209300,
    product_id: "275885",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 174,
    rating: {
      reviews_count: 8,
      rating_summary: 98
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570889",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "639995",
    product_url: "cuoc-chien-kim-loai-hiem-mat-toi-cua-chuyen-doi-so-va-nang-luong-sach",
    image_label: "Cuộc Chiến Kim Loại Hiếm - Mặt Tối Của Chuyển Đổi Số Và Năng Lượng Sạch",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/c/u/cuoc-chien-kiem-loai-hiem---outline-01.jpg",
    product_name: "Cuộc Chiến Kim Loại Hiếm - Mặt Tối Của Chuyển Đổi Số Và Năng Lượng Sạch",
    original_price: 248000,
    final_price: 173600,
    product_id: "639995",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 116,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570591",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "639997",
    product_url: "so-tay-giao-vien-efl",
    image_label: "Sổ Tay Giáo Viên EFL",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-s_-tay-gi_o-vi_n-outline-23.04.jpg",
    product_name: "Sổ Tay Giáo Viên EFL",
    original_price: 189000,
    final_price: 132300,
    product_id: "639997",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 73,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570570",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "364861",
    product_url: "lam-ra-lam-choi-ra-choi-tai-ban-2021",
    image_label: "Làm Ra Làm, Chơi Ra Chơi (Tái Bản 2021)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_234642.jpg",
    product_name: "Làm Ra Làm, Chơi Ra Chơi (Tái Bản 2021)",
    original_price: 159000,
    final_price: 111300,
    product_id: "364861",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 921,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570592",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "459846",
    product_url: "top-1500-cum-tu-tieng-anh-thong-dung-theo-chu-de",
    image_label: "Daily Expression - Top 1500+ Cụm Từ Tiếng Anh Thông Dụng Theo Chủ Đề",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935309503810.jpg",
    product_name: "Daily Expression - Top 1500+ Cụm Từ Tiếng Anh Thông Dụng Theo Chủ Đề",
    original_price: 159000,
    final_price: 111300,
    product_id: "459846",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 292,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570779",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "357080",
    product_url: "tu-duy-nhanh-va-cham-tai-ban-2021",
    image_label: "Tư Duy Nhanh Và Chậm (Tái Bản 2021)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_230367.jpg",
    product_name: "Tư Duy Nhanh Và Chậm (Tái Bản 2021)",
    original_price: 269000,
    final_price: 228500,
    product_id: "357080",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 699,
    rating: {
      reviews_count: 1,
      rating_summary: 100
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570575",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "589668",
    product_url: "ve-dep-cua-canh-sac-tam-thuong-hay-vi-sao-chung-ta-can-thay-doi-cach-thuong-thuc-thien-nhien",
    image_label: "Vẻ Đẹp Của Cảnh Sắc Tầm Thường - Hay Vì Sao Chúng Ta Cần Thay Đổi Cách Thưởng Thức Thiên Nhiên?",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/v/_/v_-_p-c_a-c_nh-s_c-t_m-th_ng.jpg",
    product_name: "Vẻ Đẹp Của Cảnh Sắc Tầm Thường - Hay Vì Sao Chúng Ta Cần Thay Đổi Cách Thưởng Thức Thiên Nhiên?",
    original_price: 235000,
    final_price: 176250,
    product_id: "589668",
    discount_percent: 25,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 607,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570936",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "465129",
    product_url: "nhung-don-tam-ly-trong-thuyet-phuc-tai-ban-2023",
    image_label: "Những Đòn Tâm Lý Trong Thuyết Phục (Tái Bản 2023)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-nhung-don-tam-ly-trong-thuyet-phuc.jpg",
    product_name: "Những Đòn Tâm Lý Trong Thuyết Phục (Tái Bản 2023)",
    original_price: 229000,
    final_price: 160300,
    product_id: "465129",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 186,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570615",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "427245",
    product_url: "kinh-thanh-cuu-uoc",
    image_label: "Kinh Thánh - Cựu Ước",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935270704063.jpg",
    product_name: "Kinh Thánh - Cựu Ước",
    original_price: 1399000,
    final_price: 1189000,
    product_id: "427245",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 16,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570721",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "282732",
    product_url: "khi-hoi-tho-hoa-thinh-khong-tai-ban-2020",
    image_label: "Khi Hơi Thở Hóa Thinh Không (Tái Bản 2020)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_220964.jpg",
    product_name: "Khi Hơi Thở Hóa Thinh Không (Tái Bản 2020)",
    original_price: 109000,
    final_price: 92500,
    product_id: "282732",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 402,
    rating: {
      reviews_count: 25,
      rating_summary: 98
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570579",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "511988",
    product_url: "sapiens-luoc-su-loai-nguoi-an-ban-bo-tui",
    image_label: "Sapiens - Lược Sử Loài Người - Ấn Bản Bỏ Túi",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-sapiens.jpg",
    product_name: "Sapiens - Lược Sử Loài Người - Ấn Bản Bỏ Túi",
    original_price: 159000,
    final_price: 111300,
    product_id: "511988",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 783,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570566",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "384559",
    product_url: "phi-ly-tri-tai-ban",
    image_label: "Phi Lý Trí (Tái Bản)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_5350.jpg",
    product_name: "Phi Lý Trí (Tái Bản)",
    original_price: 169000,
    final_price: 118300,
    product_id: "384559",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 166,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570751",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "405658",
    product_url: "tri-tue-do-thai-tai-ban-2022",
    image_label: "Trí Tuệ Do Thái (Tái Bản 2022)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935251419184.jpg",
    product_name: "Trí Tuệ Do Thái (Tái Bản 2022)",
    original_price: 189000,
    final_price: 132300,
    product_id: "405658",
    discount_percent: 30,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 343,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570622",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "415410",
    product_url: "hackers-ielts-reading-tai-ban",
    image_label: "Hackers Ielts Reading (Tái Bản)",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935309503179.jpg",
    product_name: "Hackers Ielts Reading (Tái Bản)",
    original_price: 289000,
    final_price: 245500,
    product_id: "415410",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 87,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "570858",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    id: "608755",
    product_url: "31-ngay-ban-hang-thuc-chien-hay-ban-hang-nhu-mot-master-dung-ban-hang-nhu-amateur",
    image_label: "31 Ngày Bán Hàng Thực Chiến - Hãy Bán Hàng Như Một Master, Đừng Bán Hàng Như Amateur",
    image_src: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043868982.jpg",
    product_name: "31 Ngày Bán Hàng Thực Chiến - Hãy Bán Hàng Như Một Master, Đừng Bán Hàng Như Amateur",
    original_price: 365000,
    final_price: 310000,
    product_id: "608755",
    discount_percent: 15,
    type_id: "simple",
    soon_release: 0,
    stock_available: "in_stock",
    sold_qty: 45,
    rating: {
      reviews_count: null,
      rating_summary: null
    },
    label: null,
    episode: null,
    frame_images: [
      {
        key: "573490",
        value: "Frame Alphabooks T10",
        url: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  }
];
export const getData_TAB2_THNB = [
  {
    "id": "469382",
    "product_url": "38-buc-thu-rockefeller-viet-cho-con-trai",
    "image_label": "38 Bức Thư Rockefeller Viết Cho Con Trai",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/8/38-buc-thu-rockefeller-viet-cho.jpg",
    "product_name": "38 Bức Thư Rockefeller Viết Cho Con Trai",
    "original_price": 138000,
    "final_price": 69000,
    "product_id": "469382",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2856",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": [
      {
        "key": "577404",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "399360",
    "product_url": "tu-duy-nguoc",
    "image_label": "Tư Duy Ngược",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043440287.jpg",
    "product_name": "Tư Duy Ngược",
    "original_price": 139000,
    "final_price": 69500,
    "product_id": "399360",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "3487",
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": "trending",
    "episode": null,
    "frame_images": [
      {
        "key": "577258",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "439259",
    "product_url": "tu-duy-mo",
    "image_label": "Tư Duy Mở",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044742250.jpg",
    "product_name": "Tư Duy Mở",
    "original_price": 138000,
    "final_price": 69000,
    "product_id": "439259",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2551",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": [
      {
        "key": "577375",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "696263",
    "product_url": "tam-long-voi-dat-nuoc",
    "image_label": "Tấm Lòng Với Đất Nước",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/l/tlvdn.jpg",
    "product_name": "Tấm Lòng Với Đất Nước",
    "original_price": 292000,
    "final_price": 248000,
    "product_id": "696263",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "72",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577061",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "639661",
    "product_url": "boxset-minh-triet-phuong-dong-co-hoc-ky-thu-hop-5-cuon",
    "image_label": "Boxset Minh Triết Phương Đông - Cổ Học Kỳ Thư (Hộp 5 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936228203768-5.jpg",
    "product_name": "Boxset Minh Triết Phương Đông - Cổ Học Kỳ Thư (Hộp 5 Cuốn)",
    "original_price": 690000,
    "final_price": 436500,
    "product_id": "639661",
    "discount_percent": 36,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "37",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577159",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "562657",
    "product_url": "thep-da-toi-the-day-562657",
    "image_label": "Thép Đã Tôi Thế Đấy",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786049952012.jpg",
    "product_name": "Thép Đã Tôi Thế Đấy",
    "original_price": 168000,
    "final_price": 126000,
    "product_id": "562657",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "167",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577667",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "404720",
    "product_url": "len-nhat-chuyen-doi-404720",
    "image_label": "Lén Nhặt Chuyện Đời",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043651591_1.jpg",
    "product_name": "Lén Nhặt Chuyện Đời",
    "original_price": 85000,
    "final_price": 44200,
    "product_id": "404720",
    "discount_percent": 48,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1900",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577304",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "410521",
    "product_url": "bien-moi-thu-thanh-tien-make-money",
    "image_label": "Biến Mọi Thứ Thành Tiền - Make Money",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043654370.jpg",
    "product_name": "Biến Mọi Thứ Thành Tiền - Make Money",
    "original_price": 168000,
    "final_price": 84000,
    "product_id": "410521",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "538",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 1",
    "frame_images": [
      {
        "key": "577307",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "641542",
    "product_url": "thuyet-am-muu",
    "image_label": "Thuyết Âm Mưu",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/_/3_14_2.jpg",
    "product_name": "Thuyết Âm Mưu",
    "original_price": 118000,
    "final_price": 76700,
    "product_id": "641542",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "87",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577681",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "641541",
    "product_url": "thuyet-duong-muu",
    "image_label": "Thuyết Dương Mưu",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/-/3-1_3.jpg",
    "product_name": "Thuyết Dương Mưu",
    "original_price": 118000,
    "final_price": 76700,
    "product_id": "641541",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "91",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577680",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "439245",
    "product_url": "bien-moi-thu-thanh-tien-tap-2",
    "image_label": "Biến Mọi Thứ Thành Tiền - Quyển 2 - Ứng Dụng Tư Duy Tạo Ra Tiền Giúp Bạn Thành Công Giàu Có Và Hạnh Phúc",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043450293.jpg",
    "product_name": "Biến Mọi Thứ Thành Tiền - Quyển 2 - Ứng Dụng Tư Duy Tạo Ra Tiền Giúp Bạn Thành Công Giàu Có Và Hạnh Phúc",
    "original_price": 168000,
    "final_price": 84000,
    "product_id": "439245",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "417",
    "rating": {
      "reviews_count": "2",
      "rating_summary": 100
    },
    "label": null,
    "episode": "Tập 2",
    "frame_images": [
      {
        "key": "577263",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "438859",
    "product_url": "chien-thang-con-quy-trong-ban-438859",
    "image_label": "Chiến Thắng Con Quỷ Trong Bạn",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/h/chien-thang-con-quy-trong-ban-sbooks.jpg",
    "product_name": "Chiến Thắng Con Quỷ Trong Bạn",
    "original_price": 138000,
    "final_price": 71760,
    "product_id": "438859",
    "discount_percent": 48,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "289",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577338",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "639382",
    "product_url": "tam-ly-hoc-thanh-cong-639382",
    "image_label": "Tâm Lý Học Thành Công",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/3/z3091429569609_6abee7aae2f3115057d78235760b7ef2_1.jpg",
    "product_name": "Tâm Lý Học Thành Công",
    "original_price": 199000,
    "final_price": 139300,
    "product_id": "639382",
    "discount_percent": 30,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "85",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574382",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "644403",
    "product_url": "combo-sach-thuyet-duong-muu-thuyet-am-muu-bo-2-cuon",
    "image_label": "Combo Sách Thuyết Dương Mưu + Thuyết Âm Mưu (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/a/1/a1db3361719e48958b4498ce4195f778.jpg",
    "product_name": "Combo Sách Thuyết Dương Mưu + Thuyết Âm Mưu (Bộ 2 Cuốn)",
    "original_price": 236000,
    "final_price": 131924,
    "product_id": "644403",
    "discount_percent": 44,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "74",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577691",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "552828",
    "product_url": "combo-sach-tu-duy-nguoc-tu-duy-mo-bo-2-cuon",
    "image_label": "Combo Sách Tư Duy Ngược + Tư Duy Mở (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043440287-9786044742250.jpg",
    "product_name": "Combo Sách Tư Duy Ngược + Tư Duy Mở (Bộ 2 Cuốn)",
    "original_price": 277000,
    "final_price": 138500,
    "product_id": "552828",
    "discount_percent": 50,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2140",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": [
      {
        "key": "577686",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "552824",
    "product_url": "combo-sach-bien-moi-thu-thanh-tien-make-money-quyen-1-quyen-2-bo-2-cuon",
    "image_label": "Combo Sách Biến Mọi Thứ Thành Tiền - Make Money - Quyển 1 + Quyển 2 (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043654370-9786043450293.jpg",
    "product_name": "Combo Sách Biến Mọi Thứ Thành Tiền - Make Money - Quyển 1 + Quyển 2 (Bộ 2 Cuốn)",
    "original_price": 336000,
    "final_price": 168000,
    "product_id": "552824",
    "discount_percent": 50,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "305",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577688",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "607727",
    "product_url": "bo-sach-muu-luoc-gia-tinh-tuyen-bo-3-tap",
    "image_label": "Bộ Sách Mưu Lược Gia - Tinh Tuyển (Bộ 3 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936228202266.jpg",
    "product_name": "Bộ Sách Mưu Lược Gia - Tinh Tuyển (Bộ 3 Tập)",
    "original_price": 504000,
    "final_price": 378000,
    "product_id": "607727",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "13",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577109",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "469384",
    "product_url": "thao-tung-tam-ly-dam-dong",
    "image_label": "Thao Túng Tâm Lý Đám Đông",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044777962.jpg",
    "product_name": "Thao Túng Tâm Lý Đám Đông",
    "original_price": 118000,
    "final_price": 61360,
    "product_id": "469384",
    "discount_percent": 48,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "299",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577408",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "583959",
    "product_url": "bo-sach-su-ky-tu-ma-thien-bo-3-tap",
    "image_label": "Bộ Sách Sử Ký Tư Mã Thiên (Bộ 3 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936228201849.jpg",
    "product_name": "Bộ Sách Sử Ký Tư Mã Thiên (Bộ 3 Tập)",
    "original_price": 504000,
    "final_price": 378000,
    "product_id": "583959",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "12",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577089",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "469352",
    "product_url": "dam-dao-voi-lao-tu-469352",
    "image_label": "Đàm Đạo Với Lão Tử",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043496383.jpg",
    "product_name": "Đàm Đạo Với Lão Tử",
    "original_price": 138000,
    "final_price": 69000,
    "product_id": "469352",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "52",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577272",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "469378",
    "product_url": "lieu-pham-tu-huan-sbooks",
    "image_label": "Liễu Phàm Tứ Huấn",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044773919.jpg",
    "product_name": "Liễu Phàm Tứ Huấn",
    "original_price": 118000,
    "final_price": 88500,
    "product_id": "469378",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "132",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577395",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "469353",
    "product_url": "dam-dao-voi-phat-da",
    "image_label": "Đàm Đạo Với Phật Đà",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043496390.jpg",
    "product_name": "Đàm Đạo Với Phật Đà",
    "original_price": 138000,
    "final_price": 71760,
    "product_id": "469353",
    "discount_percent": 48,
    "type_id": "simple",
    "soon_release": 1,
    "stock_available": "in_stock",
    "sold_qty": "53",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577273",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "533431",
    "product_url": "phuong-phap-ghi-nho-dinh-cao",
    "image_label": "Phương Pháp Ghi Nhớ Đỉnh Cao",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786047796021.jpg",
    "product_name": "Phương Pháp Ghi Nhớ Đỉnh Cao",
    "original_price": 370000,
    "final_price": 185000,
    "product_id": "533431",
    "discount_percent": 50,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "29",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577482",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "442845",
    "product_url": "ai-roi-cung-se-binh-yen-tai-ban-2023",
    "image_label": "Ai Rồi Cũng Sẽ Bình Yên (Tái Bản 2023)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043491654_1.jpg",
    "product_name": "Ai Rồi Cũng Sẽ Bình Yên (Tái Bản 2023)",
    "original_price": 99000,
    "final_price": 51480,
    "product_id": "442845",
    "discount_percent": 48,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "217",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577354",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  }
]
export const getData_TAB3_THNB = [
  {
    "id": "704991",
    "product_url": "combo-sach-destination-grammar-and-vocabulary-with-answer-key-b1-b2-c1-and-c2-bo-3-cuon-704991",
    "image_label": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/e/8eedbab56b6c4c109283c0aea656121d.jpg",
    "product_name": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Bộ 3 Cuốn)",
    "original_price": 601000,
    "final_price": 492000,
    "product_id": "704991",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 21,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581089",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "704992",
    "product_url": "combo-sach-destination-grammar-and-vocabulary-with-answer-key-b1-b2-c1-and-c2-khong-dap-an-bo-3-cuon",
    "image_label": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Không Đáp Án) (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/7/1/710f4ae9abe84e8088a3b5694a951c2a.jpg",
    "product_name": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Không Đáp Án) (Bộ 3 Cuốn)",
    "original_price": 545000,
    "final_price": 418200,
    "product_id": "704992",
    "discount_percent": 23,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 4,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581090",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "690817",
    "product_url": "destination-b1-grammar-and-vocabulary-with-answer-key-tai-ban-2025",
    "image_label": "Destination B1 - Grammar And Vocabulary With Answer Key (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-destination-b1-co-dap.jpg",
    "product_name": "Destination B1 - Grammar And Vocabulary With Answer Key (Tái Bản 2025)",
    "original_price": 198000,
    "final_price": 162000,
    "product_id": "690817",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 101,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578829",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "695976",
    "product_url": "destination-b2-grammar-and-vocabulary-with-answer-key-tai-ban-2025",
    "image_label": "Destination B2 - Grammar And Vocabulary with Answer Key (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246937136_2.jpg",
    "product_name": "Destination B2 - Grammar And Vocabulary with Answer Key (Tái Bản 2025)",
    "original_price": 198000,
    "final_price": 162000,
    "product_id": "695976",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 81,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578842",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "608764",
    "product_url": "destination-c1-c2-grammar-vocabulary-with-answer-key-tai-ban-2024",
    "image_label": "Destination C1&C2 - Grammar & Vocabulary With Answer Key (Tái Bản 2024)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246945025.jpg",
    "product_name": "Destination C1&C2 - Grammar & Vocabulary With Answer Key (Tái Bản 2024)",
    "original_price": 205000,
    "final_price": 168000,
    "product_id": "608764",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 471,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578828",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "696047",
    "product_url": "destination-b2-grammar-and-vocabulary-with-answer-key-khong-dap-an-tai-ban-2025",
    "image_label": "Destination B2 - Grammar And Vocabulary With Answer Key (Không Đáp Án) (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-destination-b2-dap-an-tren-app-khong-co-dap-an_2.jpg",
    "product_name": "Destination B2 - Grammar And Vocabulary With Answer Key (Không Đáp Án) (Tái Bản 2025)",
    "original_price": 178000,
    "final_price": 133500,
    "product_id": "696047",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 28,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579342",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "592988",
    "product_url": "250-bai-toan-chon-loc-lop-5",
    "image_label": "250+ Bài Toán Chọn Lọc Lớp 5",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-250-bai-toan-chon-loc-lop-5-scaled.jpg",
    "product_name": "250+ Bài Toán Chọn Lọc Lớp 5",
    "original_price": 195000,
    "final_price": 159500,
    "product_id": "592988",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 216,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578846",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "696046",
    "product_url": "destination-b1-grammar-and-vocabulary-with-answer-key-khong-dap-an-tai-ban-2025",
    "image_label": "Destination B1 - Grammar And Vocabulary With Answer Key (Không Đáp Án) (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-destination-b1-grammar-vocabulary-phien-ban-khong-co-dap-an-scaled_4.jpg",
    "product_name": "Destination B1 - Grammar And Vocabulary With Answer Key (Không Đáp Án) (Tái Bản 2025)",
    "original_price": 178000,
    "final_price": 133500,
    "product_id": "696046",
    "discount_percent": 25,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 38,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578858",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "681301",
    "product_url": "bac-thay-coaching-bi-quyet-nang-tam-hieu-suat-ca-nhan-va-doi-nhom",
    "image_label": "Bậc Thầy Coaching - Bí Quyết Nâng Tầm Hiệu Suất Cá Nhân Và Đội Nhóm",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246945308_1.jpg",
    "product_name": "Bậc Thầy Coaching - Bí Quyết Nâng Tầm Hiệu Suất Cá Nhân Và Đội Nhóm",
    "original_price": 285000,
    "final_price": 233500,
    "product_id": "681301",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 11,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579298",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "689763",
    "product_url": "giao-trinh-han-ngu-1-tap-1-quyen-thuong-phien-ban-moi-tai-ban-2025",
    "image_label": "Giáo Trình Hán Ngữ 1 - Tập 1 - Quyển Thượng (Phiên Bản Mới) (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246946992.jpg",
    "product_name": "Giáo Trình Hán Ngữ 1 - Tập 1 - Quyển Thượng (Phiên Bản Mới) (Tái Bản 2025)",
    "original_price": 129000,
    "final_price": 105500,
    "product_id": "689763",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 27,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578857",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "642476",
    "product_url": "destination-c1-c2-grammar-and-vocabulary-with-answer-key-khong-dap-an",
    "image_label": "Destination C1&C2 - Grammar And Vocabulary With Answer Key (Không Đáp Án)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-destination-c1c2-dap-an-tren-app-khong-co-dap-an.jpg",
    "product_name": "Destination C1&C2 - Grammar And Vocabulary With Answer Key (Không Đáp Án)",
    "original_price": 189000,
    "final_price": 151200,
    "product_id": "642476",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 32,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578845",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "606097",
    "product_url": "35-de-thi-thu-ky-thi-tot-nghiep-thpt-mon-tieng-anh",
    "image_label": "35 Đề Thi Thử Kỳ Thi Tốt Nghiệp THPT - Môn Tiếng Anh",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246945582.jpg",
    "product_name": "35 Đề Thi Thử Kỳ Thi Tốt Nghiệp THPT - Môn Tiếng Anh",
    "original_price": 160000,
    "final_price": 131000,
    "product_id": "606097",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 172,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579309",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "228283",
    "product_url": "mindmap-english-grammar-ngu-phap-tieng-anh-bang-so-do-tu-duy",
    "image_label": "Mindmap English Grammar - Ngữ Pháp Tiếng Anh Bằng Sơ Đồ Tư Duy",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246917176.jpg",
    "product_name": "Mindmap English Grammar - Ngữ Pháp Tiếng Anh Bằng Sơ Đồ Tư Duy",
    "original_price": 190000,
    "final_price": 155500,
    "product_id": "228283",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 191,
    "rating": {
      "reviews_count": "4",
      "rating_summary": 85
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578913",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "681305",
    "product_url": "oxford-learner-s-pocket-dictionary-fourth-edition",
    "image_label": "Oxford Learner's Pocket Dictionary - Fourth Edition",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246946404.jpg",
    "product_name": "Oxford Learner's Pocket Dictionary - Fourth Edition",
    "original_price": 110000,
    "final_price": 88000,
    "product_id": "681305",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 15,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579323",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "642468",
    "product_url": "chatgpt-tu-a-den-z-trong-mot-ngay",
    "image_label": "ChatGPT Từ A Đến Z Trong Một Ngày",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-cuon-chat-gpt-tu-a-den-z-trong-mot-ngay.jpg",
    "product_name": "ChatGPT Từ A Đến Z Trong Một Ngày",
    "original_price": 252000,
    "final_price": 206500,
    "product_id": "642468",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 22,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578930",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "638845",
    "product_url": "stem-hoa-hoc-cuon-so-tay-ma-thuat",
    "image_label": "STEM Hóa Học - Cuốn Sổ Tay Ma Thuật",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-truoc-cuon-stem-hoa-hoc-cuon-so-tay-ma-thuat-700x988.jpg",
    "product_name": "STEM Hóa Học - Cuốn Sổ Tay Ma Thuật",
    "original_price": 98000,
    "final_price": 80000,
    "product_id": "638845",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 50,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578903",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "706910",
    "product_url": "250-bai-toan-chon-loc-6",
    "image_label": "250+ Bài Toán Chọn Lọc Lớp 6",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246946985.jpg",
    "product_name": "250+ Bài Toán Chọn Lọc Lớp 6",
    "original_price": 195000,
    "final_price": 159500,
    "product_id": "706910",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579331",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "349496",
    "product_url": "mind-map-english-vocabulary-tu-vung-tieng-anh-qua-so-do-tu-duy",
    "image_label": "Mind Map English Vocabulary - Từ Vựng Tiếng Anh Qua Sơ Đồ Tư Duy",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_223755.jpg",
    "product_name": "Mind Map English Vocabulary - Từ Vựng Tiếng Anh Qua Sơ Đồ Tư Duy",
    "original_price": 198000,
    "final_price": 162000,
    "product_id": "349496",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 235,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578860",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "635015",
    "product_url": "bai-tap-bo-tro-nang-cao-toan-lop-5-tap-1",
    "image_label": "Bài Tập Bổ Trợ Nâng Cao Toán Lớp 5 - Tập 1",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246945346.jpg",
    "product_name": "Bài Tập Bổ Trợ Nâng Cao Toán Lớp 5 - Tập 1",
    "original_price": 120000,
    "final_price": 98000,
    "product_id": "635015",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 25,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 1",
    "frame_images": [
      {
        "key": "579299",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "708836",
    "product_url": "destination-c1-c2-grammar-vocabulary-with-answer-key-tai-ban-2025",
    "image_label": "Destination C1&C2 - Grammar & Vocabulary With Answer Key (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246945025_2.jpg",
    "product_name": "Destination C1&C2 - Grammar & Vocabulary With Answer Key (Tái Bản 2025)",
    "original_price": 219000,
    "final_price": 179500,
    "product_id": "708836",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578865",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "182109",
    "product_url": "tu-hoc-2000-tu-vung-tieng-anh-theo-chu-de-182109",
    "image_label": "Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề (Tái Bản)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/2/4/24df17f9bab58ba053c6c08c3af2f470.jpg",
    "product_name": "Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề (Tái Bản)",
    "original_price": 65000,
    "final_price": 52000,
    "product_id": "182109",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 655,
    "rating": {
      "reviews_count": "10",
      "rating_summary": 88
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "578833",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "442822",
    "product_url": "mindmap-tu-vung-tieng-trung-theo-giao-trinh-han-ngu",
    "image_label": "Mindmap Từ Vựng Tiếng Trung Theo Giáo Trình Hán Ngữ",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246936450.jpg",
    "product_name": "Mindmap Từ Vựng Tiếng Trung Theo Giáo Trình Hán Ngữ",
    "original_price": 179000,
    "final_price": 146500,
    "product_id": "442822",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 34,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579127",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "696079",
    "product_url": "giao-trinh-han-ngu-so-2-tap-1-quyen-ha-phien-ban-moi-tai-ban-2025",
    "image_label": "Giáo Trình Hán Ngữ Số 2 - Tập 1 - Quyển Hạ - Phiên Bản Mới (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246936863_2.jpg",
    "product_name": "Giáo Trình Hán Ngữ Số 2 - Tập 1 - Quyển Hạ - Phiên Bản Mới (Tái Bản 2025)",
    "original_price": 139000,
    "final_price": 113500,
    "product_id": "696079",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "579332",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "427370",
    "product_url": "tieng-han-tong-hop-danh-cho-nguoi-viet-nam-so-cap-1-ban-mau-tai-ban-2023",
    "image_label": "Tiếng Hàn Tổng Hợp Dành Cho Người Việt Nam - Sơ Cấp 1 - Bản Màu (Tái Bản 2023)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246937907.jpg",
    "product_name": "Tiếng Hàn Tổng Hợp Dành Cho Người Việt Nam - Sơ Cấp 1 - Bản Màu (Tái Bản 2023)",
    "original_price": 268000,
    "final_price": 219500,
    "product_id": "427370",
    "discount_percent": 18,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 58,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 1",
    "frame_images": [
      {
        "key": "578876",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  }

]

//14
// limit 24
// block_type
// attribute_value 1
// list 678350,582442,582440,582441,582443
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
// 14
export const getData_TAB1YAMAHA = [
  {
    "id": "582442",
    "product_url": "hoc-cu-giao-duc-sao-doc-recorder-soprano-yamaha-yrs-24b",
    "image_label": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BP - Màu Hồng",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/9/4957812018418.jpg",
    "product_name": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BP - Màu Hồng",
    "original_price": 150000,
    "final_price": 150000,
    "product_id": "582442",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 212,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577015",
        "value": "Frame YAMAHA T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Yamaha.png"
      }
    ]
  },
  {
    "id": "582440",
    "product_url": "hoc-cu-giao-duc-sao-doc-recorder-soprano-rainbow-yamaha-yrs-20bg-mau-xanh-la",
    "image_label": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BB - Màu Xanh Dương",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/9/4957812018388.jpg",
    "product_name": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BB - Màu Xanh Dương",
    "original_price": 250000,
    "final_price": 250000,
    "product_id": "582440",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 8,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577013",
        "value": "Frame YAMAHA T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Yamaha.png"
      }
    ]
  },
  {
    "id": "582441",
    "product_url": "hoc-cu-giao-duc-sao-doc-recorder-soprano-rainbow-yamaha-yrs-20bp-mau-hong",
    "image_label": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BG - Màu Xanh Lá",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/9/4957812018395.jpg",
    "product_name": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano Rainbow - Yamaha YRS-20BG - Màu Xanh Lá",
    "original_price": 250000,
    "final_price": 250000,
    "product_id": "582441",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 20,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577014",
        "value": "Frame YAMAHA T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Yamaha.png"
      }
    ]
  },
  {
    "id": "582443",
    "product_url": "hoc-cu-giao-duc-sao-doc-recorder-soprano-rainbow-yamaha-yrs-20bb-mau-xanh-duong",
    "image_label": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano - Yamaha YRS-24B",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/9/4957812018371.jpg",
    "product_name": "Nhạc Cụ Giáo Dục - Sáo Dọc Recorder Soprano - Yamaha YRS-24B",
    "original_price": 250000,
    "final_price": 250000,
    "product_id": "582443",
    "discount_percent": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 2,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577012",
        "value": "Frame YAMAHA T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Yamaha.png"
      }
    ]
  }
]
export const getData_TAB2_YAMAHA = [
  {
    "id": "439228",
    "product_url": "muoi-phut-moi-ngay-thi-tham-voi-con-nhung-cau-chuyen-thai-giao-hay-nhat-the-gioi",
    "image_label": "Mười Phút Mỗi Ngày Thì Thầm Với Con - Những Câu Chuyện Thai Giáo Hay Nhất Thế Giới",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210307859.jpg",
    "product_name": "Mười Phút Mỗi Ngày Thì Thầm Với Con - Những Câu Chuyện Thai Giáo Hay Nhất Thế Giới",
    "original_price": 145000,
    "final_price": 123000,
    "product_id": "439228",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 808,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "435821",
    "product_url": "loi-thu-toi-cua-mot-sat-thu-kinh-te-bia-cung-tai-ban-2023",
    "image_label": "Lời Thú Tội Của Một Sát Thủ Kinh Tế - Bìa Cứng (Tái Bản 2023)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210307910.jpg",
    "product_name": "Lời Thú Tội Của Một Sát Thủ Kinh Tế - Bìa Cứng (Tái Bản 2023)",
    "original_price": 245000,
    "final_price": 159250,
    "product_id": "435821",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 308,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "378032",
    "product_url": "thay-doi-cau-hoi-thay-doi-cuoc-doi-tai-ban-378032",
    "image_label": "Thay Đổi Câu Hỏi Thay Đổi Cuộc Đời (Tái Bản)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_1498.jpg",
    "product_name": "Thay Đổi Câu Hỏi Thay Đổi Cuộc Đời (Tái Bản)",
    "original_price": 85000,
    "final_price": 55250,
    "product_id": "378032",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 605,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401784",
    "product_url": "hieu-sach-cuoi-cung-o-london-tieu-thuyet-ve-chien-tranh-the-gioi-thu-hai",
    "image_label": "Hiệu Sách Cuối Cùng Ở London - Tiểu Thuyết Về Chiến Tranh Thế Giới Thứ Hai",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210302168_1.jpg",
    "product_name": "Hiệu Sách Cuối Cùng Ở London - Tiểu Thuyết Về Chiến Tranh Thế Giới Thứ Hai",
    "original_price": 180000,
    "final_price": 117000,
    "product_id": "401784",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 223,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "404566",
    "product_url": "bo-sach-ke-chuyen-cuoc-doi-cac-thien-tai-bo-12-cuon",
    "image_label": "Bộ Sách Kể Chuyện Cuộc Đời Các Thiên Tài (Bộ 12 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935210305497.jpg",
    "product_name": "Bộ Sách Kể Chuyện Cuộc Đời Các Thiên Tài (Bộ 12 Cuốn)",
    "original_price": 729000,
    "final_price": 619500,
    "product_id": "404566",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 53,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "412147",
    "product_url": "de-che-atlantis-va-nhung-vuong-quoc-bien-mat",
    "image_label": "Đế Chế Atlantis Và Những Vương Quốc Biến Mất",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-1_-de-che-atlantis-01000.jpg",
    "product_name": "Đế Chế Atlantis Và Những Vương Quốc Biến Mất",
    "original_price": 165000,
    "final_price": 132000,
    "product_id": "412147",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 149,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "383209",
    "product_url": "50-bai-hoc-thu-vi-ve-phep-lich-su-danh-cho-cac-ban-nho",
    "image_label": "50 Bài Học Thú Vị Về Phép Lịch Sự Dành Cho Các Bạn Nhỏ",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_4975.jpg",
    "product_name": "50 Bài Học Thú Vị Về Phép Lịch Sự Dành Cho Các Bạn Nhỏ",
    "original_price": 90000,
    "final_price": 72000,
    "product_id": "383209",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 67,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "590052",
    "product_url": "me-viet-day-con-buoc-cung-toan-cau-bia-cung",
    "image_label": "Mẹ Việt Dạy Con Bước Cùng Toàn Cầu - Bìa Cứng",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a_1_25.jpg",
    "product_name": "Mẹ Việt Dạy Con Bước Cùng Toàn Cầu - Bìa Cứng",
    "original_price": 350000,
    "final_price": 297500,
    "product_id": "590052",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 68,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "390310",
    "product_url": "abraham-lincoln-cac-tac-pham-va-suy-ngam-390310",
    "image_label": "Abraham Lincoln - Các Tác Phẩm Và Suy Ngẫm",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/a/5/a5ee771e0d78c2269b69.jpg",
    "product_name": "Abraham Lincoln - Các Tác Phẩm Và Suy Ngẫm",
    "original_price": 345000,
    "final_price": 293000,
    "product_id": "390310",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 24,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401531",
    "product_url": "mot-thu-vien-o-paris",
    "image_label": "Một Thư Viện Ở Paris",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-1_mot-thu-vien-o-paris-01-0.jpg",
    "product_name": "Một Thư Viện Ở Paris",
    "original_price": 235000,
    "final_price": 152750,
    "product_id": "401531",
    "discount_percent": 35,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 63,
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "412692",
    "product_url": "100-nha-khoa-hoc-vi-dai-thay-doi-the-gioi",
    "image_label": "100 Nhà Khoa Học Vĩ Đại Thay Đổi Thế Giới",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-1_100-nha-khoa-hoc-vi-dai.jpg",
    "product_name": "100 Nhà Khoa Học Vĩ Đại Thay Đổi Thế Giới",
    "original_price": 205000,
    "final_price": 174000,
    "product_id": "412692",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 44,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "412961",
    "product_url": "emma-412961",
    "image_label": "EMMA",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-1_emma.jpg",
    "product_name": "EMMA",
    "original_price": 199000,
    "final_price": 159000,
    "product_id": "412961",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 70,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]

//15 &&&
// limit 240
// list 611646,591827,591828,591830,591831,591832,596833,601377,415488,402595,417961,396894,396933,396902,278163,396916,396942,396927,396943,396924,396919,412995,412994,396904,396926,396940,396949,396932,396890,396920,411563,411545,411054,396921,396939,396937,396936,396907,396945,396928,396915,396897,396887,396892,396934,396944,396891,396938,396903,396917,396925,406326,396908,411538,411052,396918,396893,396906,404026,406324,411051,396901,412991,406325,396948,396946,396898,404025,396899,396905,396941,396931,413742
// backup_cat_id 0
// backup_sort_by num_orders
// show_buy_now false
// 15
export const getData_TAB1COMBO_TRENDING = [
  {
    "id": "611646",
    "product_url": "combo-sach-song-than-cong-nghe-the-coming-wave-lich-su-tien-hoa-cua-du-lieu-bo-2-cuon",
    "image_label": "Combo Sách Sóng Thần Công Nghệ - The Coming Wave + Lịch Sử Tiến Hóa Của Dữ Liệu (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/6/c67bd6acfab343249653a268eba1af5b.jpg",
    "product_name": "Combo Sách Sóng Thần Công Nghệ - The Coming Wave + Lịch Sử Tiến Hóa Của Dữ Liệu (Bộ 2 Cuốn)",
    "original_price": 564000,
    "final_price": 441980,
    "product_id": "611646",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "591827",
    "product_url": "combo-sach-kinh-doanh-fnb-bo-6-cuon",
    "image_label": "Combo Sách Kinh Doanh FNB (Bộ 6 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-1810202402.jpg",
    "product_name": "Combo Sách Kinh Doanh FNB (Bộ 6 Cuốn)",
    "original_price": 1044000,
    "final_price": 855442,
    "product_id": "591827",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574931",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "591828",
    "product_url": "combo-sach-digital-x-trai-nghiem-so-trong-chien-luoc-sales-va-marketing-smart-x-chien-luoc-tang-truong-doanh-thu-thong-minh-bo-2-cuon",
    "image_label": "Combo Sách Digital X - Trải Nghiệm Số Trong Chiến Lược Sales Và Marketing + Smart X - Chiến Lược Tăng Trưởng Doanh Thu Thông Minh (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251420616-8935251421835.jpg",
    "product_name": "Combo Sách Digital X - Trải Nghiệm Số Trong Chiến Lược Sales Và Marketing + Smart X - Chiến Lược Tăng Trưởng Doanh Thu Thông Minh (Bộ 2 Cuốn)",
    "original_price": 468000,
    "final_price": 389550,
    "product_id": "591828",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575123",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "591830",
    "product_url": "combo-sach-bo-cong-cu-doi-moi-doanh-nghiep-quan-tri-chien-luoc-thuc-chien-bo-2-cuon",
    "image_label": "Combo Sách Bộ Công Cụ Đổi Mới Doanh Nghiệp + Quản Trị Chiến Lược Thực Chiến (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251405408-9786044814728.jpg",
    "product_name": "Combo Sách Bộ Công Cụ Đổi Mới Doanh Nghiệp + Quản Trị Chiến Lược Thực Chiến (Bộ 2 Cuốn)",
    "original_price": 589000,
    "final_price": 425810,
    "product_id": "591830",
    "discount_percent": 27,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 1,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574984",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "591831",
    "product_url": "combo-sach-lanh-dao-cua-john-c-maxwell-bo-3-cuon",
    "image_label": "Combo Sách Lãnh Đạo Của John C.Maxwell (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-1810202400.jpg",
    "product_name": "Combo Sách Lãnh Đạo Của John C.Maxwell (Bộ 3 Cuốn)",
    "original_price": 487000,
    "final_price": 405230,
    "product_id": "591831",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574929",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "591832",
    "product_url": "combo-sach-the-strategist-chien-luoc-gia-good-strategy-bad-strategy-chien-luoc-tot-va-chien-luoc-toi-bo-2-cuon",
    "image_label": "Combo Sách The Strategist - Chiến Lược Gia + Good Strategy Bad Strategy - Chiến Lược Tốt Và Chiến Lược Tồi (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251421477-8935251421491.jpg",
    "product_name": "Combo Sách The Strategist - Chiến Lược Gia + Good Strategy Bad Strategy - Chiến Lược Tốt Và Chiến Lược Tồi (Bộ 2 Cuốn)",
    "original_price": 378000,
    "final_price": 306936,
    "product_id": "591832",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 15,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575125",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "596833",
    "product_url": "combo-sach-nghe-thuat-tu-duy-chien-luoc-chinh-sach-tien-te-the-ky-21-bo-2-cuon",
    "image_label": "Combo Sách Nghệ Thuật Tư Duy Chiến Lược + Chính Sách Tiền Tệ Thế Kỷ 21 (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/2/f/2f406c9c4f21422881a3ec191be8bcea.jpg",
    "product_name": "Combo Sách Nghệ Thuật Tư Duy Chiến Lược + Chính Sách Tiền Tệ Thế Kỷ 21 (Bộ 2 Cuốn)",
    "original_price": 564000,
    "final_price": 386904,
    "product_id": "596833",
    "discount_percent": 31,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575138",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "601377",
    "product_url": "bo-sach-quan-tri-doanh-nghiep-ky-niem-20-nam-onward-bo-5-cuon",
    "image_label": "Bộ Sách Quản Trị Doanh Nghiệp - Kỷ Niệm 20 Năm Onward (Bộ 5 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/2/0/20241209_9qohvdu2z0.jpg",
    "product_name": "Bộ Sách Quản Trị Doanh Nghiệp - Kỷ Niệm 20 Năm Onward (Bộ 5 Cuốn)",
    "original_price": 875000,
    "final_price": 743500,
    "product_id": "601377",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "570605",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "402595",
    "product_url": "combo-sach-tao-lap-mo-hinh-kinh-doanh-ca-nhan-tao-lap-mo-hinh-kinh-doanh-mo-hinh-kinh-doanh-nhom-thiet-ke-giai-phap-gia-tri-bo-4-cuon-402595",
    "image_label": "Combo Sách Tạo Lập Mô Hình Kinh Doanh Cá Nhân + Tạo Lập Mô Hình Kinh Doanh + Mô Hình Kinh Doanh Nhóm + Thiết Kế Giải Pháp Giá Trị (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-20072022.jpg",
    "product_name": "Combo Sách Tạo Lập Mô Hình Kinh Doanh Cá Nhân + Tạo Lập Mô Hình Kinh Doanh + Mô Hình Kinh Doanh Nhóm + Thiết Kế Giải Pháp Giá Trị (Bộ 4 Cuốn)",
    "original_price": 1236000,
    "final_price": 1029000,
    "product_id": "402595",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 20,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574934",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "417961",
    "product_url": "combo-sach-tai-chinh-ca-nhan-danh-cho-nguoi-viet-nam-dau-tu-chung-khoan-choi-tro-may-rui-hay-tich-luy-tai-chinh-tang-kem-code-giam-50-khoa-hoc-online-bo-2-cuon",
    "image_label": "Combo Sách Tài Chính Cá Nhân Dành Cho Người Việt Nam + Đầu Tư Chứng Khoán: Chơi Trò May Rủi Hay Tích Lũy Tài Chính - Tặng Kèm Code Giảm 50% Khóa Học Online (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043900583-9786043750843.jpg",
    "product_name": "Combo Sách Tài Chính Cá Nhân Dành Cho Người Việt Nam + Đầu Tư Chứng Khoán: Chơi Trò May Rủi Hay Tích Lũy Tài Chính - Tặng Kèm Code Giảm 50% Khóa Học Online (Bộ 2 Cuốn)",
    "original_price": 500000,
    "final_price": 425000,
    "product_id": "417961",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 1,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396894",
    "product_url": "combo-sach-suc-manh-tiem-thuc-bi-mat-tu-duy-trieu-phu-nguoi-giau-co-nhat-thanh-babylon-bo-3-cuon",
    "image_label": "Combo Sách Sức Mạnh Tiềm Thức + Bí Mật Tư Duy Triệu Phú + Người Giàu Có Nhất Thành Babylon (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-12052022_3.jpg",
    "product_name": "Combo Sách Sức Mạnh Tiềm Thức + Bí Mật Tư Duy Triệu Phú + Người Giàu Có Nhất Thành Babylon (Bộ 3 Cuốn)",
    "original_price": 334000,
    "final_price": 277340,
    "product_id": "396894",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 113,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396933",
    "product_url": "combo-sach-suc-manh-tiem-thuc-bi-mat-tu-duy-trieu-phu-bo-2-cuon",
    "image_label": "Combo Sách Sức Mạnh Tiềm Thức + Bí Mật Tư Duy Triệu Phú (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086854617-8935086854624.jpg",
    "product_name": "Combo Sách Sức Mạnh Tiềm Thức + Bí Mật Tư Duy Triệu Phú (Bộ 2 Cuốn)",
    "original_price": 236000,
    "final_price": 196000,
    "product_id": "396933",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 61,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "278163",
    "product_url": "combo-how-business-works-hieu-het-ve-kinh-doanh-how-things-work-cach-moi-vat-van-hanh-bo-2-cuon",
    "image_label": "Combo How Business Works - Hiểu Hết Về Kinh Doanh + How Things Work - Cách Mọi Vật Vận Hành (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935235225053-8935235221291.jpg",
    "product_name": "Combo How Business Works - Hiểu Hết Về Kinh Doanh + How Things Work - Cách Mọi Vật Vận Hành (Bộ 2 Cuốn)",
    "original_price": 635000,
    "final_price": 528710,
    "product_id": "278163",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 5,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396942",
    "product_url": "combo-sach-thau-hieu-tiep-thi-tu-a-den-z-tiep-thi-5-0-bo-2-cuon",
    "image_label": "Combo Sách Thấu Hiểu Tiếp Thị Từ A Đến Z + Tiếp Thị 5.0 (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8934974165613-8934974174875.jpg",
    "product_name": "Combo Sách Thấu Hiểu Tiếp Thị Từ A Đến Z + Tiếp Thị 5.0 (Bộ 2 Cuốn)",
    "original_price": 235000,
    "final_price": 195510,
    "product_id": "396942",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396927",
    "product_url": "combo-sach-phan-tich-chung-khoan-24-bai-hoc-song-con-de-dau-tu-thanh-cong-tren-thi-truong-chung-khoan-bo-2-cuon",
    "image_label": "Combo Sách Phân Tích Chứng Khoán + 24 Bài Học Sống Còn Để Đầu Tư Thành Công Trên Thị Trường Chứng Khoán (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8936066708227-8935251417432.jpg",
    "product_name": "Combo Sách Phân Tích Chứng Khoán + 24 Bài Học Sống Còn Để Đầu Tư Thành Công Trên Thị Trường Chứng Khoán (Bộ 2 Cuốn)",
    "original_price": 618000,
    "final_price": 514500,
    "product_id": "396927",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 8,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575145",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "396943",
    "product_url": "combo-sach-the-gioi-phang-tu-tot-den-vi-dai-bo-2-cuon",
    "image_label": "Combo Sách Thế Giới Phẳng + Từ Tốt Đến Vĩ Đại (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8934974158462-8934974171485.jpg",
    "product_name": "Combo Sách Thế Giới Phẳng + Từ Tốt Đến Vĩ Đại (Bộ 2 Cuốn)",
    "original_price": 440000,
    "final_price": 366520,
    "product_id": "396943",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 11,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396924",
    "product_url": "combo-sach-nghe-thuat-ban-hang-bac-cao-nghe-thuat-ban-hang-cua-nguoi-do-thai-nguoi-ban-hang-vi-dai-nhat-the-gioi-bo-3-cuon",
    "image_label": "Combo Sách Nghệ Thuật Bán Hàng Bậc Cao + Nghệ Thuật Bán Hàng Của Người Do Thái + Người Bán Hàng Vĩ Đại Nhất Thế Giới (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-120520223.jpg",
    "product_name": "Combo Sách Nghệ Thuật Bán Hàng Bậc Cao + Nghệ Thuật Bán Hàng Của Người Do Thái + Người Bán Hàng Vĩ Đại Nhất Thế Giới (Bộ 3 Cuốn)",
    "original_price": 434000,
    "final_price": 360640,
    "product_id": "396924",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 12,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "411545",
    "product_url": "combo-sach-bi-mat-tu-duy-trieu-phu-cai-bat-tay-trieu-do-bo-2-cuon",
    "image_label": "Combo Sách Bí Mật Tư Duy Triệu Phú + Cái Bắt Tay Triệu Đô (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086854624-8935086855867.jpg",
    "product_name": "Combo Sách Bí Mật Tư Duy Triệu Phú + Cái Bắt Tay Triệu Đô (Bộ 2 Cuốn)",
    "original_price": 236000,
    "final_price": 200000,
    "product_id": "411545",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396921",
    "product_url": "combo-sach-marketing-can-ban-thau-hieu-tiep-thi-tu-a-den-z-bo-2-cuon",
    "image_label": "Combo Sách Marketing Căn Bản + Thấu Hiểu Tiếp Thị Từ A Đến Z (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251418156-8934974165613.jpg",
    "product_name": "Combo Sách Marketing Căn Bản + Thấu Hiểu Tiếp Thị Từ A Đến Z (Bộ 2 Cuốn)",
    "original_price": 344000,
    "final_price": 286160,
    "product_id": "396921",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 5,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575122",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "396887",
    "product_url": "combo-sach-noi-tieng-cua-donald-trump-toi-da-lam-giau-nhu-the-nghe-thuat-dam-phan-bo-2-cuon",
    "image_label": "Combo Sách Nổi Tiếng Của Donald Trump: Tôi Đã Làm Giàu Như Thế + Nghệ Thuật Đàm Phán (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251407761-8934974165705_2.jpg",
    "product_name": "Combo Sách Nổi Tiếng Của Donald Trump: Tôi Đã Làm Giàu Như Thế + Nghệ Thuật Đàm Phán (Bộ 2 Cuốn)",
    "original_price": 268000,
    "final_price": 184142,
    "product_id": "396887",
    "discount_percent": 31,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 17,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575022",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "396892",
    "product_url": "combo-sach-22-quy-luat-bat-bien-trong-marketing-bi-mat-tu-duy-trieu-phu-bo-2-cuon",
    "image_label": "Combo Sách 22 Quy Luật Bất Biến Trong Marketing + Bí Mật Tư Duy Triệu Phú (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086853931-8935086854624_2.jpg",
    "product_name": "Combo Sách 22 Quy Luật Bất Biến Trong Marketing + Bí Mật Tư Duy Triệu Phú (Bộ 2 Cuốn)",
    "original_price": 186000,
    "final_price": 154350,
    "product_id": "396892",
    "discount_percent": 17,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 5,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396944",
    "product_url": "combo-sach-tren-dinh-pho-wall-buoc-di-ngau-nhien-tren-pho-wall-bo-2-cuon",
    "image_label": "Combo Sách Trên Đỉnh Phố Wall + Bước Đi Ngẫu Nhiên Trên Phố Wall (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251416923-8935251416589.jpg",
    "product_name": "Combo Sách Trên Đỉnh Phố Wall + Bước Đi Ngẫu Nhiên Trên Phố Wall (Bộ 2 Cuốn)",
    "original_price": 468000,
    "final_price": 389550,
    "product_id": "396944",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 11,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575110",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "396908",
    "product_url": "combo-sach-giai-ma-doanh-nhan-tu-duy-cua-nguoi-giau-goc-a-bo-2-cuon",
    "image_label": "Combo Sách Giải Mã Doanh Nhân + Tư Duy Của Người Giàu Gốc Á (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935210289254-8935210289261_2.jpg",
    "product_name": "Combo Sách Giải Mã Doanh Nhân + Tư Duy Của Người Giàu Gốc Á (Bộ 2 Cuốn)",
    "original_price": 300000,
    "final_price": 191100,
    "product_id": "396908",
    "discount_percent": 36,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 0,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "411538",
    "product_url": "combo-sach-vi-giam-doc-mot-phut-nguoi-ban-hang-mot-phut-ai-lay-mieng-pho-mat-cua-toi-bo-3-cuon",
    "image_label": "Combo Sách Vị Giám Đốc Một Phút + Người Bán Hàng Một Phút + Ai Lấy Miếng Pho Mát Của Tôi? (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-1810202201.jpg",
    "product_name": "Combo Sách Vị Giám Đốc Một Phút + Người Bán Hàng Một Phút + Ai Lấy Miếng Pho Mát Của Tôi? (Bộ 3 Cuốn)",
    "original_price": 190000,
    "final_price": 160500,
    "product_id": "411538",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 16,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "396893",
    "product_url": "combo-sach-24-bai-hoc-song-con-de-dau-tu-thanh-cong-tren-thi-truong-chung-khoan-giau-tu-chung-khoan-bo-2-cuon",
    "image_label": "Combo Sách 24 Bài Học Sống Còn Để Đầu Tư Thành Công Trên Thị Trường Chứng Khoán + Giàu Từ Chứng Khoán (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251417432-8935251417142_2.jpg",
    "product_name": "Combo Sách 24 Bài Học Sống Còn Để Đầu Tư Thành Công Trên Thị Trường Chứng Khoán + Giàu Từ Chứng Khoán (Bộ 2 Cuốn)",
    "original_price": 258000,
    "final_price": 214620,
    "product_id": "396893",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575117",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "396901",
    "product_url": "combo-sach-bat-dong-san-can-ban-dau-tu-bat-dong-san-bo-2-cuon",
    "image_label": "Combo Sách Bất Động Sản Căn Bản + Đầu Tư Bất Động Sản (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935251410778-8935251417302_2.jpg",
    "product_name": "Combo Sách Bất Động Sản Căn Bản + Đầu Tư Bất Động Sản (Bộ 2 Cuốn)",
    "original_price": 368000,
    "final_price": 312500,
    "product_id": "396901",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 8,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "575084",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  }
];
export const getData_TAB2_COMBO_TRENDING = [
  {
    "id": "409891",
    "product_url": "combo-sach-mindmap-english-grammar-mindmap-english-vocabulary-bo-2-cuon",
    "image_label": "Combo Sách Mindmap English Grammar + Mindmap English Vocabulary (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935246927434-8935246917176.jpg",
    "product_name": "Combo Sách Mindmap English Grammar + Mindmap English Vocabulary (Bộ 2 Cuốn)",
    "original_price": 388000,
    "final_price": 311150,
    "product_id": "409891",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 49,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581150",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "424464",
    "product_url": "combo-sach-chinh-phuc-toan-dien-ngu-phap-tieng-anh-bang-infographic-tap-1-tap-2-bo-2-cuon",
    "image_label": "Combo Sách Chinh Phục Toàn Diện Ngữ Pháp Tiếng Anh Bằng Infographic - Tập 1 + Tập 2 (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935246935996-8935246936009.jpg",
    "product_name": "Combo Sách Chinh Phục Toàn Diện Ngữ Pháp Tiếng Anh Bằng Infographic - Tập 1 + Tập 2 (Bộ 2 Cuốn)",
    "original_price": 396000,
    "final_price": 317520,
    "product_id": "424464",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 9,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581152",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "398514",
    "product_url": "combo-sach-tu-hoc-ngu-phap-tieng-anh-bang-mindmap-bo-2-cuon",
    "image_label": "Combo Sách Tự Học Ngữ Pháp Tiếng Anh Bằng Mindmap (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8936110988575-8936110988582.jpg",
    "product_name": "Combo Sách Tự Học Ngữ Pháp Tiếng Anh Bằng Mindmap (Bộ 2 Cuốn)",
    "original_price": 290000,
    "final_price": 241080,
    "product_id": "398514",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 9,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424467",
    "product_url": "combo-sach-tu-hoc-viet-tieng-nhat-can-ban-hiragana-katakana-bo-2-cuon",
    "image_label": "Combo Sách Tự Học Viết Tiếng Nhật Căn Bản - Hiragana + Katakana (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086856482-8935086855843.jpg",
    "product_name": "Combo Sách Tự Học Viết Tiếng Nhật Căn Bản - Hiragana + Katakana (Bộ 2 Cuốn)",
    "original_price": 96000,
    "final_price": 79380,
    "product_id": "424467",
    "discount_percent": 17,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 46,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424210",
    "product_url": "combo-sach-giao-trinh-chuan-hsk-4-tap-1-sach-bai-hoc-va-bai-tap-bo-2-cuon",
    "image_label": "Combo Sách Giáo Trình Chuẩn HSK 4 Tập 1 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043127287-9786045897430.jpg",
    "product_name": "Combo Sách Giáo Trình Chuẩn HSK 4 Tập 1 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "original_price": 376000,
    "final_price": 312620,
    "product_id": "424210",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 1429,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": "Tập 1",
    "frame_images": []
  },
  {
    "id": "409885",
    "product_url": "combo-sach-destination-b1-ngu-phap-va-tu-vung-tieng-anh-bo-2-cuon",
    "image_label": "Combo Sách Destination B1 - Ngữ Pháp Và Từ Vựng Tiếng Anh (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935236427227-8935236427234.jpg",
    "product_name": "Combo Sách Destination B1 - Ngữ Pháp Và Từ Vựng Tiếng Anh (Bộ 2 Cuốn)",
    "original_price": 268000,
    "final_price": 222950,
    "product_id": "409885",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 23,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424216",
    "product_url": "combo-sach-giao-trinh-chuan-hsk-5-tap-2-sach-bai-hoc-va-bai-tap-bo-2-cuon",
    "image_label": "Combo Sách Giáo Trình Chuẩn HSK 5 Tập 2 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786045882191-9786043129908.jpg",
    "product_name": "Combo Sách Giáo Trình Chuẩn HSK 5 Tập 2 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "original_price": 466000,
    "final_price": 387590,
    "product_id": "424216",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 198,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 2",
    "frame_images": []
  },
  {
    "id": "424214",
    "product_url": "combo-sach-giao-trinh-chuan-hsk-4-tap-2-sach-bai-hoc-va-bai-tap-bo-2-cuon",
    "image_label": "Combo Sách Giáo Trình Chuẩn HSK 4 Tập 2 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043357158-9786045897454.jpg",
    "product_name": "Combo Sách Giáo Trình Chuẩn HSK 4 Tập 2 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)",
    "original_price": 396000,
    "final_price": 329280,
    "product_id": "424214",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 707,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 2",
    "frame_images": []
  },
  {
    "id": "424209",
    "product_url": "combo-sach-taking-the-toeic-skills-and-strategies-tap-1-va-tap-2-bo-2-cuon",
    "image_label": "Combo Sách Taking The Toeic Skills And Strategies - Tập 1 Và Tập 2 (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086853474-8935086846568.jpg",
    "product_name": "Combo Sách Taking The Toeic Skills And Strategies - Tập 1 Và Tập 2 (Bộ 2 Cuốn)",
    "original_price": 496000,
    "final_price": 412580,
    "product_id": "424209",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "409890",
    "product_url": "combo-sach-english-grammar-in-use-136-de-muc-ngu-phap-tieng-anh-mind-map-english-vocabulary-tu-vung-tieng-anh-qua-so-do-tu-duy-bo-2-cuon",
    "image_label": "Combo Sách English Grammar In Use - 136 Đề Mục Ngữ Pháp Tiếng Anh + Mind Map English Vocabulary - Từ Vựng Tiếng Anh Qua Sơ Đồ Tư Duy (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935236425728-8935246927434.jpg",
    "product_name": "Combo Sách English Grammar In Use - 136 Đề Mục Ngữ Pháp Tiếng Anh + Mind Map English Vocabulary - Từ Vựng Tiếng Anh Qua Sơ Đồ Tư Duy (Bộ 2 Cuốn)",
    "original_price": 363000,
    "final_price": 295960,
    "product_id": "409890",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 8,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424208",
    "product_url": "combo-sach-very-easy-toeic-1-introduction-very-easy-toeic-2-build-up-bo-2-cuon",
    "image_label": "Combo Sách Very Easy Toeic 1 - Introduction + Very Easy Toeic 2 - Build Up (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086849880-8935086849897.jpg",
    "product_name": "Combo Sách Very Easy Toeic 1 - Introduction + Very Easy Toeic 2 - Build Up (Bộ 2 Cuốn)",
    "original_price": 446000,
    "final_price": 370930,
    "product_id": "424208",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "601264",
    "product_url": "combo-sach-giao-trinh-han-ngu-tap-3-quyen-thuong-quyen-ha-bo-2-cuon",
    "image_label": "Combo Sách Giáo Trình Hán Ngữ - Tập 3 - Quyển Thượng + Quyển Hạ (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/2/b2f0b0f3d048455eb6875434a3a7ac10.jpg",
    "product_name": "Combo Sách Giáo Trình Hán Ngữ - Tập 3 - Quyển Thượng + Quyển Hạ (Bộ 2 Cuốn)",
    "original_price": 256000,
    "final_price": 209000,
    "product_id": "601264",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "12",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 3",
    "frame_images": [
      {
        "key": "581157",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "704991",
    "product_url": "combo-sach-destination-grammar-and-vocabulary-with-answer-key-b1-b2-c1-and-c2-bo-3-cuon-704991",
    "image_label": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/e/8eedbab56b6c4c109283c0aea656121d.jpg",
    "product_name": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Bộ 3 Cuốn)",
    "original_price": 601000,
    "final_price": 492000,
    "product_id": "704991",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "21",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581089",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "704992",
    "product_url": "combo-sach-destination-grammar-and-vocabulary-with-answer-key-b1-b2-c1-and-c2-khong-dap-an-bo-3-cuon",
    "image_label": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Không Đáp Án) (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/7/1/710f4ae9abe84e8088a3b5694a951c2a.jpg",
    "product_name": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 + C1 And C2 (Không Đáp Án) (Bộ 3 Cuốn)",
    "original_price": 545000,
    "final_price": 418200,
    "product_id": "704992",
    "discount_percent": 23,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "4",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581090",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "704994",
    "product_url": "combo-sach-destination-grammar-and-vocabulary-with-answer-key-b1-b2-khong-dap-an-bo-2-cuon",
    "image_label": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 (Không Đáp Án) (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/a/1/a1b7c3d022f04e9c9c35f91eb678b2a1.jpg",
    "product_name": "Combo Sách Destination - Grammar And Vocabulary with Answer Key - B1 + B2 (Không Đáp Án) (Bộ 2 Cuốn)",
    "original_price": 356000,
    "final_price": 267000,
    "product_id": "704994",
    "discount_percent": 25,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "7",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581159",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "398510",
    "product_url": "combo-sach-tu-trau-doi-tieng-anh-thanh-thao-nhu-nguoi-ban-xu-30-chu-de-tu-vung-tieng-anh-25-chuyen-de-ngu-phap-tieng-anh-trong-tam-bo-4-cuon",
    "image_label": "Combo Sách Tự Trau Dồi Tiếng Anh Thành Thạo Như Người Bản Xứ: 30 Chủ Đề Từ Vựng Tiếng Anh + 25 Chuyên Đề Ngữ Pháp Tiếng Anh Trọng Tâm (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-0106202217.jpg",
    "product_name": "Combo Sách Tự Trau Dồi Tiếng Anh Thành Thạo Như Người Bản Xứ: 30 Chủ Đề Từ Vựng Tiếng Anh + 25 Chuyên Đề Ngữ Pháp Tiếng Anh Trọng Tâm (Bộ 4 Cuốn)",
    "original_price": 610000,
    "final_price": 366000,
    "product_id": "398510",
    "discount_percent": 39,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "12",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424466",
    "product_url": "combo-sach-hackers-ielts-tron-bo-writing-listening-reading-speaking-bo-4-cuon",
    "image_label": "Combo Sách Hackers Ielts Trọn Bộ - Writing + Listening + Reading + Speaking (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2403202300.jpg",
    "product_name": "Combo Sách Hackers Ielts Trọn Bộ - Writing + Listening + Reading + Speaking (Bộ 4 Cuốn)",
    "original_price": 996000,
    "final_price": 829080,
    "product_id": "424466",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "27",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "574936",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "409892",
    "product_url": "combo-sach-mindmap-english-grammar-ngu-phap-tieng-anh-bang-so-do-tu-duy-tu-hoc-2000-tu-vung-tieng-anh-theo-chu-de-bo-2-cuon",
    "image_label": "Combo Sách Mindmap English Grammar - Ngữ Pháp Tiếng Anh Bằng Sơ Đồ Tư Duy + Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935246917176-8935246915486.jpg",
    "product_name": "Combo Sách Mindmap English Grammar - Ngữ Pháp Tiếng Anh Bằng Sơ Đồ Tư Duy + Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề (Bộ 2 Cuốn)",
    "original_price": 255000,
    "final_price": 203350,
    "product_id": "409892",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "28",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "581131",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  }
]
export const getData_TAB3_COMBO_TRENDING = [
  {
    "id": "651805",
    "product_url": "combo-sach-manifesting-bo-3-cuon-tang-kem-so-tay-manifesting",
    "image_label": "Combo Sách Manifesting (Bộ 3 Cuốn) - Tặng Kèm Sổ Tay Manifesting",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/6/z6687564986538_0efd815790ec7f6fbceb1cde76e7f54c.jpg",
    "product_name": "Combo Sách Manifesting (Bộ 3 Cuốn) - Tặng Kèm Sổ Tay Manifesting",
    "original_price": 354000,
    "final_price": 223020,
    "product_id": "651805",
    "discount_percent": 37,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577683",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "678243",
    "product_url": "combo-sach-nghe-thuat-manifest-tien-bac-dinh-cao-tinh-yeu-toan-dien-bo-4-cuon",
    "image_label": "Combo Sách Nghệ Thuật Manifest - Tiền Bạc + Đỉnh Cao + Tình Yêu + Toàn Diện (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2306202502.jpg",
    "product_name": "Combo Sách Nghệ Thuật Manifest - Tiền Bạc + Đỉnh Cao + Tình Yêu + Toàn Diện (Bộ 4 Cuốn)",
    "original_price": 426000,
    "final_price": 333200,
    "product_id": "678243",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "11",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678246",
    "product_url": "combo-sach-diem-tinh-va-nong-gian-nong-gian-la-ban-nang-tinh-lang-la-ban-linh-bo-2-cuon",
    "image_label": "Combo Sách Điềm Tĩnh Và Nóng Giận + Nóng Giận Là Bản Năng - Tĩnh Lặng Là Bản Lĩnh (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325024245-8935325026614.jpg",
    "product_name": "Combo Sách Điềm Tĩnh Và Nóng Giận + Nóng Giận Là Bản Năng - Tĩnh Lặng Là Bản Lĩnh (Bộ 2 Cuốn)",
    "original_price": 218000,
    "final_price": 175910,
    "product_id": "678246",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678251",
    "product_url": "combo-sach-goc-khuat-tam-ly-bo-4-cuon",
    "image_label": "Combo Sách Góc Khuất Tâm Lý (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2306202503.jpg",
    "product_name": "Combo Sách Góc Khuất Tâm Lý (Bộ 4 Cuốn)",
    "original_price": 592000,
    "final_price": 463540,
    "product_id": "678251",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "552828",
    "product_url": "combo-sach-tu-duy-nguoc-tu-duy-mo-bo-2-cuon",
    "image_label": "Combo Sách Tư Duy Ngược + Tư Duy Mở (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786043440287-9786044742250.jpg",
    "product_name": "Combo Sách Tư Duy Ngược + Tư Duy Mở (Bộ 2 Cuốn)",
    "original_price": 277000,
    "final_price": 138500,
    "product_id": "552828",
    "discount_percent": 50,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2140",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "best_seller",
    "episode": null,
    "frame_images": [
      {
        "key": "577686",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "644403",
    "product_url": "combo-sach-thuyet-duong-muu-thuyet-am-muu-bo-2-cuon",
    "image_label": "Combo Sách Thuyết Dương Mưu + Thuyết Âm Mưu (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/a/1/a1db3361719e48958b4498ce4195f778.jpg",
    "product_name": "Combo Sách Thuyết Dương Mưu + Thuyết Âm Mưu (Bộ 2 Cuốn)",
    "original_price": 236000,
    "final_price": 131924,
    "product_id": "644403",
    "discount_percent": 44,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "74",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": [
      {
        "key": "577691",
        "value": "Frame SBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_Sbooks.png"
      }
    ]
  },
  {
    "id": "679720",
    "product_url": "combo-sach-thien-tai-ben-trai-ke-dien-ben-phai-tam-ly-hoc-toi-pham-vuon-hoa-mat-duoc-ky-su-hai-muoi-dang-hinh-toi-ac-bo-4-cuon",
    "image_label": "Combo Sách Thiên Tài Bên Trái, Kẻ Điên Bên Phải + Tâm Lý Học Tội Phạm + Vườn Hoa Mạt Dược Ký Sự + Hai Mươi Dáng Hình Tội Ác (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/e/be11d23c8e4245d6bde7119aa7ec4244.jpg",
    "product_name": "Combo Sách Thiên Tài Bên Trái, Kẻ Điên Bên Phải + Tâm Lý Học Tội Phạm + Vườn Hoa Mạt Dược Ký Sự + Hai Mươi Dáng Hình Tội Ác (Bộ 4 Cuốn)",
    "original_price": 592000,
    "final_price": 463540,
    "product_id": "679720",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "430932",
    "product_url": "combo-sach-muon-kiep-nhan-sinh-many-times-many-lives-tap-3-thay-doi-cuoc-song-voi-nhan-so-hoc-bo-2-cuon",
    "image_label": "Combo Sách Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 3 + Thay Đổi Cuộc Sống Với Nhân Số Học (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/4/z4389778466065_0006fadde6a95896a7aa25ee9da92eb1.jpg",
    "product_name": "Combo Sách Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 3 + Thay Đổi Cuộc Sống Với Nhân Số Học (Bộ 2 Cuốn)",
    "original_price": 387000,
    "final_price": 364560,
    "product_id": "430932",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 2,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 3",
    "frame_images": []
  },
  {
    "id": "430933",
    "product_url": "combo-sach-muon-kiep-nhan-sinh-many-times-many-lives-tap-3-khong-diet-khong-sinh-dung-so-hai-bo-2-cuon",
    "image_label": "Combo Sách Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 3 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/4/z4389778470937_2bf23e326e5ca521f95725baa0fd063d.jpg",
    "product_name": "Combo Sách Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 3 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "original_price": 387000,
    "final_price": 256760,
    "product_id": "430933",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": "Tập 3",
    "frame_images": []
  },
  {
    "id": "428878",
    "product_url": "combo-sach-nguoi-chua-lanh-suc-manh-lay-dong-trai-tim-tim-minh-trong-thanh-pho-noi-tam-bo-2-cuon",
    "image_label": "Combo Sách Người Chữa Lành - Sức Mạnh Lay Động Trái Tim + Tìm Mình Trong Thành Phố Nội Tâm (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935280913998-8935325012174.jpg",
    "product_name": "Combo Sách Người Chữa Lành - Sức Mạnh Lay Động Trái Tim + Tìm Mình Trong Thành Phố Nội Tâm (Bộ 2 Cuốn)",
    "original_price": 378000,
    "final_price": 307720,
    "product_id": "428878",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "428879",
    "product_url": "combo-sach-tam-biet-toi-cua-nhieu-nam-ve-truoc-cang-hieu-chuyen-cang-dau-long-bo-2-cuon",
    "image_label": "Combo Sách Tạm Biệt Tôi Của Nhiều Năm Về Trước + Càng Hiểu Chuyện Càng Đau Lòng (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325003875-9786043927351.jpg",
    "product_name": "Combo Sách Tạm Biệt Tôi Của Nhiều Năm Về Trước + Càng Hiểu Chuyện Càng Đau Lòng (Bộ 2 Cuốn)",
    "original_price": 187000,
    "final_price": 150920,
    "product_id": "428879",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "368721",
    "product_url": "combo-muon-kiep-nhan-sinh-many-times-many-lives-tap-1-tap-2-bo-2-tap",
    "image_label": "Combo Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1 & Tập 2 (Bộ 2 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/1/c/1c09664f5d55a90bf044.jpg",
    "product_name": "Combo Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1 & Tập 2 (Bộ 2 Tập)",
    "original_price": 436000,
    "final_price": 341040,
    "product_id": "368721",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 20,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401147",
    "product_url": "combo-sach-dac-nhan-tam-kheo-an-noi-se-co-duoc-thien-ha-bo-2-cuon-tai-ban",
    "image_label": "Combo Sách Đắc Nhân Tâm + Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Bộ 2 Cuốn) - Tái Bản",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086849675-8936067605693_1.jpg",
    "product_name": "Combo Sách Đắc Nhân Tâm + Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Bộ 2 Cuốn) - Tái Bản",
    "original_price": 194000,
    "final_price": 156310,
    "product_id": "401147",
    "discount_percent": 27,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 133,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "423827",
    "product_url": "bo-sach-hieu-ve-trai-tim-va-khong-diet-khong-sinh-dung-so-hai-tai-ban-2023",
    "image_label": "Bộ Sách Hiểu Về Trái Tim Và Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2023)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935278607311-8935086857366.jpg",
    "product_name": "Bộ Sách Hiểu Về Trái Tim Và Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2023)",
    "original_price": 268000,
    "final_price": 230000,
    "product_id": "423827",
    "discount_percent": 14,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 100,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "409883",
    "product_url": "combo-sach-ca-phe-cung-tony-tren-duong-bang-bo-2-cuon",
    "image_label": "Combo Sách Cà Phê Cùng Tony + Trên Đường Băng (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8934974180548-8934974179979.jpg",
    "product_name": "Combo Sách Cà Phê Cùng Tony + Trên Đường Băng (Bộ 2 Cuốn)",
    "original_price": 210000,
    "final_price": 174440,
    "product_id": "409883",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 168,
    "rating": {
      "reviews_count": "1",
      "rating_summary": 100
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "409893",
    "product_url": "combo-sach-hanh-tinh-cua-mot-ke-nghi-nhieu-khong-phai-soi-nhung-cung-dung-la-cuu-bo-2-cuon",
    "image_label": "Combo Sách Hành Tinh Của Một Kẻ Nghĩ Nhiều + Không Phải Sói Nhưng Cũng Đừng Là Cừu (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325005312-8935325006685.jpg",
    "product_name": "Combo Sách Hành Tinh Của Một Kẻ Nghĩ Nhiều + Không Phải Sói Nhưng Cũng Đừng Là Cừu (Bộ 2 Cuốn)",
    "original_price": 214000,
    "final_price": 173460,
    "product_id": "409893",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 17,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "408238",
    "product_url": "combo-sach-khong-phai-soi-nhung-cung-dung-la-cuu-thien-tai-ben-trai-ke-dien-ben-phai-bo-2-cuon",
    "image_label": "Combo Sách Không Phải Sói Nhưng Cũng Đừng Là Cừu + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8936186546815-8935325006685.jpg",
    "product_name": "Combo Sách Không Phải Sói Nhưng Cũng Đừng Là Cừu + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "original_price": 307000,
    "final_price": 246470,
    "product_id": "408238",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "40",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "414164",
    "product_url": "combo-sach-tam-ly-hoc-phac-hoa-chan-dung-ke-pham-toi-thien-tai-ben-trai-ke-dien-ben-phai-bo-2-cuon",
    "image_label": "Combo Sách Tâm Lý Học Phạm Tội - Phác Họa Chân Dung Kẻ Phạm Tội + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936186546815-8935325001819.jpg",
    "product_name": "Combo Sách Tâm Lý Học Phạm Tội - Phác Họa Chân Dung Kẻ Phạm Tội + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "original_price": 324000,
    "final_price": 259000,
    "product_id": "414164",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "28",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424103",
    "product_url": "combo-sach-muon-kiep-nhan-sinh-tap-1-khong-diet-khong-sinh-dung-so-hai-bo-2-cuon",
    "image_label": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086851760-8935278607311.jpg",
    "product_name": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "original_price": 278000,
    "final_price": 217560,
    "product_id": "424103",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "122",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "408239",
    "product_url": "combo-sach-khong-phai-soi-nhung-cung-dung-la-cuu-thao-tung-tam-ly-bo-2-cuon",
    "image_label": "Combo Sách Không Phải Sói Nhưng Cũng Đừng Là Cừu + Thao Túng Tâm Lý (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325006685-8936066692298.jpg",
    "product_name": "Combo Sách Không Phải Sói Nhưng Cũng Đừng Là Cừu + Thao Túng Tâm Lý (Bộ 2 Cuốn)",
    "original_price": 297000,
    "final_price": 238630,
    "product_id": "408239",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "19",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "398460",
    "product_url": "combo-sach-thay-doi-cuoc-song-voi-nhan-so-hoc-power-vs-force-truong-nang-luong-va-nhung-nhan-to-quyet-dinh-hanh-vi-cua-con-nguoi-bo-2-cuon",
    "image_label": "Combo Sách Thay Đổi Cuộc Sống Với Nhân Số Học + Power Vs Force - Trường Năng Lượng Và Những Nhân Tố Quyết Định Hành Vi Của Con Người (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/3/z3906853945802_267182672a6.jpg",
    "product_name": "Combo Sách Thay Đổi Cuộc Sống Với Nhân Số Học + Power Vs Force - Trường Năng Lượng Và Những Nhân Tố Quyết Định Hành Vi Của Con Người (Bộ 2 Cuốn)",
    "original_price": 427000,
    "final_price": 343000,
    "product_id": "398460",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "417512",
    "product_url": "combo-sach-doc-vi-bat-ky-ai-kheo-an-noi-se-co-duoc-thien-ha-bo-2-cuon-tai-ban",
    "image_label": "Combo Sách Đọc Vị Bất Kỳ Ai + Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Bộ 2 Cuốn) - Tái Bản",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935280904262-8936067605693_1.jpg",
    "product_name": "Combo Sách Đọc Vị Bất Kỳ Ai + Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Bộ 2 Cuốn) - Tái Bản",
    "original_price": 209000,
    "final_price": 166500,
    "product_id": "417512",
    "discount_percent": 23,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "46",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "410372",
    "product_url": "combo-sach-dac-nhan-tam-nha-gia-kim-bo-2-cuon-410372",
    "image_label": "Combo Sách Đắc Nhân Tâm + Nhà Giả Kim (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086854754-8935235226272.jpg",
    "product_name": "Combo Sách Đắc Nhân Tâm + Nhà Giả Kim (Bộ 2 Cuốn)",
    "original_price": 147000,
    "final_price": 135500,
    "product_id": "410372",
    "discount_percent": 17,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "121",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "413753",
    "product_url": "combo-sach-cang-binh-tinh-cang-hanh-phuc-hanh-tinh-cua-mot-ke-nghi-nhieu-bo-2-cuon",
    "image_label": "Combo Sách Càng Bình Tĩnh Càng Hạnh Phúc + Hành Tinh Của Một Kẻ Nghĩ Nhiều (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325007972-8935325005312.jpg",
    "product_name": "Combo Sách Càng Bình Tĩnh Càng Hạnh Phúc + Hành Tinh Của Một Kẻ Nghĩ Nhiều (Bộ 2 Cuốn)",
    "original_price": 225000,
    "final_price": 179500,
    "product_id": "413753",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "398461",
    "product_url": "combo-sach-dac-nhan-tam-nha-gia-kim-bo-2-cuon",
    "image_label": "Combo Sách Đắc Nhân Tâm + Nhà Giả Kim (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086855546-8935235226272.jpg",
    "product_name": "Combo Sách Đắc Nhân Tâm + Nhà Giả Kim (Bộ 2 Cuốn)",
    "original_price": 147000,
    "final_price": 118580,
    "product_id": "398461",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "130",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "411047",
    "product_url": "combo-sach-thao-tung-tam-ly-thao-tung-cam-xuc-soi-doi-lot-cuu-bo-2-cuon",
    "image_label": "Combo Sách Thao Túng Tâm Lý: Thao Túng Cảm Xúc + Sói Đội Lốt Cừu (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8936066692298-9786043460544.jpg",
    "product_name": "Combo Sách Thao Túng Tâm Lý: Thao Túng Cảm Xúc + Sói Đội Lốt Cừu (Bộ 2 Cuốn)",
    "original_price": 279000,
    "final_price": 228500,
    "product_id": "411047",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "9",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "416176",
    "product_url": "combo-sach-tam-ly-ke-pham-toi-8-vu-an-hoan-hao-tam-ly-hoc-toi-pham-bo-2-cuon",
    "image_label": "Combo Sách Tâm Lý Kẻ Phạm Tội: 8 Vụ Án Hoàn Hảo + Tâm Lý Học Tội Phạm (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325001819-8935325004940.jpg",
    "product_name": "Combo Sách Tâm Lý Kẻ Phạm Tội: 8 Vụ Án Hoàn Hảo + Tâm Lý Học Tội Phạm (Bộ 2 Cuốn)",
    "original_price": 290000,
    "final_price": 232000,
    "product_id": "416176",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "20",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "415489",
    "product_url": "combo-sach-thuat-thao-tung-thien-tai-ben-trai-ke-dien-ben-phai-bo-2-cuon",
    "image_label": "Combo Sách Thuật Thao Túng + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325009006-8936186546815.jpg",
    "product_name": "Combo Sách Thuật Thao Túng + Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Bộ 2 Cuốn)",
    "original_price": 318000,
    "final_price": 254000,
    "product_id": "415489",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "10",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "398465",
    "product_url": "combo-sach-dac-nhan-tam-quang-ganh-lo-di-va-vui-song-nha-gia-kim-bo-3-cuon",
    "image_label": "Combo Sách Đắc Nhân Tâm + Quẳng Gánh Lo Đi Và Vui Sống + Nhà Giả Kim (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-010620225.jpg",
    "product_name": "Combo Sách Đắc Nhân Tâm + Quẳng Gánh Lo Đi Và Vui Sống + Nhà Giả Kim (Bộ 3 Cuốn)",
    "original_price": 233000,
    "final_price": 185710,
    "product_id": "398465",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "13",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]
export const getData_TAB4_COMBO_TRENDING = [
  {
    "id": "679847",
    "product_url": "bo-sach-sherlock-holmes-toan-tap-tap-1-tap-2-tap-3-bo-3-tap",
    "image_label": "Bộ Sách Sherlock Holmes Toàn Tập - Tập 1 + Tập 2 + Tập 3 (Bộ 3 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/c/8c6a5d4b7cd34978856a85de6b73a03f.jpg",
    "product_name": "Bộ Sách Sherlock Holmes Toàn Tập - Tập 1 + Tập 2 + Tập 3 (Bộ 3 Tập)",
    "original_price": 605000,
    "final_price": 484000,
    "product_id": "679847",
    "discount_percent": 20,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678241",
    "product_url": "combo-sach-cat-cho-toi-nhung-ngay-xanh-nang-ha-co-mot-mua-he-chua-tung-lang-quen-bo-2-cuon",
    "image_label": "Combo Sách Cất Cho Tôi Những Ngày Xanh Nắng Hạ + Có Một Mùa Hè Chưa Từng Lãng Quên (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325016660-8935325024399.jpg",
    "product_name": "Combo Sách Cất Cho Tôi Những Ngày Xanh Nắng Hạ + Có Một Mùa Hè Chưa Từng Lãng Quên (Bộ 2 Cuốn)",
    "original_price": 229000,
    "final_price": 179340,
    "product_id": "678241",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678242",
    "product_url": "combo-sach-dieu-dep-nhat-co-khi-la-buong-tay-ngay-ay-buong-tay-hoa-ra-la-chuyen-tot-bo-2-cuon",
    "image_label": "Combo Sách Điều Đẹp Nhất Có Khi Là Buông Tay + Ngày Ấy Buông Tay Hóa Ra Là Chuyện Tốt (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325006159-8935325026027.jpg",
    "product_name": "Combo Sách Điều Đẹp Nhất Có Khi Là Buông Tay + Ngày Ấy Buông Tay Hóa Ra Là Chuyện Tốt (Bộ 2 Cuốn)",
    "original_price": 177000,
    "final_price": 147000,
    "product_id": "678242",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 2,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678245",
    "product_url": "combo-sach-di-vong-the-gioi-van-quanh-mot-nguoi-tron-len-mai-nha-de-khoc-tiem-tap-hoa-tuoi-tho-dang-lon-mot-doi-dai-rong-hay-thuong-lay-minh-bo-4-cuon",
    "image_label": "Combo Sách Đi Vòng Thế Giới Vẫn Quanh Một Người + Trốn Lên Mái Nhà Để Khóc + Tiệm Tạp Hóa Tuổi Thơ Đang Lớn + Một Đời Dài Rộng Hãy Thương Lấy Mình (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2306202501.jpg",
    "product_name": "Combo Sách Đi Vòng Thế Giới Vẫn Quanh Một Người + Trốn Lên Mái Nhà Để Khóc + Tiệm Tạp Hóa Tuổi Thơ Đang Lớn + Một Đời Dài Rộng Hãy Thương Lấy Mình (Bộ 4 Cuốn)",
    "original_price": 416000,
    "final_price": 335160,
    "product_id": "678245",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 5,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "678250",
    "product_url": "combo-sach-nguoi-ech-ke-giet-nguoi-hang-loat-khuc-ca-chuoc-toi-bo-2-cuon",
    "image_label": "Combo Sách Người Ếch - Kẻ Giết Người Hàng Loạt + Khúc Ca Chuộc Tội (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325023309-8935325024771.jpg",
    "product_name": "Combo Sách Người Ếch - Kẻ Giết Người Hàng Loạt + Khúc Ca Chuộc Tội (Bộ 2 Cuốn)",
    "original_price": 316000,
    "final_price": 247450,
    "product_id": "678250",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "429927",
    "product_url": "combo-sach-khaled-hosseini-nguoi-dua-dieu-ngan-mat-troi-ruc-ro-va-roi-nui-vong-bo-3-cuon",
    "image_label": "Combo Sách Khaled Hosseini - Người Đua Diều + Ngàn Mặt Trời Rực Rỡ + Và Rồi Núi Vọng (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2305202301.jpg",
    "product_name": "Combo Sách Khaled Hosseini - Người Đua Diều + Ngàn Mặt Trời Rực Rỡ + Và Rồi Núi Vọng (Bộ 3 Cuốn)",
    "original_price": 407000,
    "final_price": 338590,
    "product_id": "429927",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 9,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424702",
    "product_url": "combo-sach-nha-gia-kim-cay-cam-ngot-cua-toi-bo-2-cuon",
    "image_label": "Combo Sách Nhà Giả Kim + Cây Cam Ngọt Của Tôi (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935235228351-8935235226272.jpg",
    "product_name": "Combo Sách Nhà Giả Kim + Cây Cam Ngọt Của Tôi (Bộ 2 Cuốn)",
    "original_price": 187000,
    "final_price": 155330,
    "product_id": "424702",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 167,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "429929",
    "product_url": "combo-sach-nguoi-dua-dieu-ngan-mat-troi-ruc-ro-bo-2-cuon",
    "image_label": "Combo Sách Người Đua Diều + Ngàn Mặt Trời Rực Rỡ (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935235237773-8935235220324.jpg",
    "product_name": "Combo Sách Người Đua Diều + Ngàn Mặt Trời Rực Rỡ (Bộ 2 Cuốn)",
    "original_price": 259000,
    "final_price": 215600,
    "product_id": "429929",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "73",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "429912",
    "product_url": "combo-sach-chua-kip-lon-da-phai-truong-thanh-anh-khong-ban-chi-la-khong-nho-em-bo-2-cuon",
    "image_label": "Combo Sách Chưa Kịp Lớn Đã Phải Trưởng Thành + Anh Không Bận, Chỉ Là Không Nhớ Em (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-9786048862862-9786043925593.jpg",
    "product_name": "Combo Sách Chưa Kịp Lớn Đã Phải Trưởng Thành + Anh Không Bận, Chỉ Là Không Nhớ Em (Bộ 2 Cuốn)",
    "original_price": 168000,
    "final_price": 131320,
    "product_id": "429912",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "7",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "398490",
    "product_url": "combo-sach-nha-gia-kim-hanh-trinh-ve-phuong-dong-bo-2-cuon",
    "image_label": "Combo Sách Nhà Giả Kim + Hành Trình Về Phương Đông (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935235226272-8935086854495.jpg",
    "product_name": "Combo Sách Nhà Giả Kim + Hành Trình Về Phương Đông (Bộ 2 Cuốn)",
    "original_price": 197000,
    "final_price": 157780,
    "product_id": "398490",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "74",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401149",
    "product_url": "combo-sach-to-binh-yen-ve-hanh-phuc-minh-chi-la-nguoi-binh-thuong-bo-2-cuon-tai-ban",
    "image_label": "Combo Sách Tô Bình Yên Vẽ Hạnh Phúc + Mình Chỉ Là Người Bình Thường (Bộ 2 Cuốn) - Tái Bản",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325000775-8935325000560_1.jpg",
    "product_name": "Combo Sách Tô Bình Yên Vẽ Hạnh Phúc + Mình Chỉ Là Người Bình Thường (Bộ 2 Cuốn) - Tái Bản",
    "original_price": 216000,
    "final_price": 187670,
    "product_id": "401149",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "16",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401349",
    "product_url": "combo-sach-tranh-to-mau-sieu-pham-minh-chi-la-nguoi-binh-thuong-to-binh-yen-ve-hanh-phuc-tieu-vu-tru-to-mau-the-gioi-12-chom-sao-bo-3-cuon",
    "image_label": "Combo Sách Tranh Tô Màu Siêu Phẩm: Mình Chỉ Là Người Bình Thường + Tô Bình Yên Vẽ Hạnh Phúc + Tiểu Vũ Trụ Tô Màu Thế Giới 12 Chòm Sao (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-280620223.jpg",
    "product_name": "Combo Sách Tranh Tô Màu Siêu Phẩm: Mình Chỉ Là Người Bình Thường + Tô Bình Yên Vẽ Hạnh Phúc + Tiểu Vũ Trụ Tô Màu Thế Giới 12 Chòm Sao (Bộ 3 Cuốn)",
    "original_price": 335000,
    "final_price": 278320,
    "product_id": "401349",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "5",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "408212",
    "product_url": "combo-sach-ben-xe-that-tich-khong-mua-bo-2-cuon",
    "image_label": "Combo Sách Bến Xe + Thất Tịch Không Mưa (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935212348904-8935212349208.jpg",
    "product_name": "Combo Sách Bến Xe + Thất Tịch Không Mưa (Bộ 2 Cuốn)",
    "original_price": 162000,
    "final_price": 120756,
    "product_id": "408212",
    "discount_percent": 25,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "43",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "418057",
    "product_url": "combo-sach-luoc-su-thoi-gian-va-vu-tru-trong-vo-hat-de-bo-2-cuon",
    "image_label": "Combo Sách Lược Sử Thời Gian Và Vũ Trụ Trong Vỏ Hạt Dẻ (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8934974179238-8934974179597.jpg",
    "product_name": "Combo Sách Lược Sử Thời Gian Và Vũ Trụ Trong Vỏ Hạt Dẻ (Bộ 2 Cuốn)",
    "original_price": 223000,
    "final_price": 189000,
    "product_id": "418057",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "45",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "416178",
    "product_url": "combo-sach-to-binh-yen-ve-hanh-phuc-yeu-nhung-ngay-nang-chang-bo-2-cuon",
    "image_label": "Combo Sách Tô Bình Yên Vẽ Hạnh Phúc + Yêu Những Ngày Nắng Chẳng (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325006920-8935325006289.jpg",
    "product_name": "Combo Sách Tô Bình Yên Vẽ Hạnh Phúc + Yêu Những Ngày Nắng Chẳng (Bộ 2 Cuốn)",
    "original_price": 220000,
    "final_price": 186500,
    "product_id": "416178",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "8",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "401345",
    "product_url": "combo-sach-tu-dien-tieng-em-cung-la-tieng-em-ma-la-lam-bo-2-cuon",
    "image_label": "Combo Sách Từ Điển Tiếng Em + Cũng Là Tiếng Em Mà Lạ Lắm (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325000980-8935325005503.jpg",
    "product_name": "Combo Sách Từ Điển Tiếng Em + Cũng Là Tiếng Em Mà Lạ Lắm (Bộ 2 Cuốn)",
    "original_price": 138000,
    "final_price": 114660,
    "product_id": "401345",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "3",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "424106",
    "product_url": "combo-sach-tang-hoa-cho-bach-do-tap-1-va-2-bo-2-tap",
    "image_label": "Combo Sách Tặng Hoa Cho Bách Đồ - Tập 1 Và 2 (Bộ 2 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325009945-8935325010491.jpg",
    "product_name": "Combo Sách Tặng Hoa Cho Bách Đồ - Tập 1 Và 2 (Bộ 2 Tập)",
    "original_price": 300000,
    "final_price": 249900,
    "product_id": "424106",
    "discount_percent": 16,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "416177",
    "product_url": "combo-sach-dear-darling-cang-binh-tinh-cang-hanh-phuc-bo-2-cuon",
    "image_label": "Combo Sách Dear, Darling + Càng Bình Tĩnh Càng Hạnh Phúc (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935325004896-8935325007972.jpg",
    "product_name": "Combo Sách Dear, Darling + Càng Bình Tĩnh Càng Hạnh Phúc (Bộ 2 Cuốn)",
    "original_price": 227000,
    "final_price": 185500,
    "product_id": "416177",
    "discount_percent": 18,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "2",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "408218",
    "product_url": "combo-sach-nguoi-hat-de-cau-lac-bo-an-mang-ngay-thu-nam-bo-2-cuon",
    "image_label": "Combo Sách Người Hạt Dẻ + Câu Lạc Bộ Án Mạng Ngày Thứ Năm (Bộ 2 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935212357869-8936066692618.jpg",
    "product_name": "Combo Sách Người Hạt Dẻ + Câu Lạc Bộ Án Mạng Ngày Thứ Năm (Bộ 2 Cuốn)",
    "original_price": 388000,
    "final_price": 303800,
    "product_id": "408218",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": "1",
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]
export const getData_TAB5_COMBO_TRENDING = [
  {
    "id": "722597",
    "product_url": "bo-sach-huyen-tich-dan-gian-huyen-su-viet-dan-gian-ky-truyen-bo-2-cuon-ban-dac-biet-tang-kem-2-bookmark-2-sticker",
    "image_label": "Bộ Sách Huyền Tích Dân Gian - Huyền Sử Việt + Dân Gian Kỳ Truyện (Bộ 2 Cuốn) - Bản Đặc Biệt - Tặng Kèm 2 Bookmark + 2 Sticker",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/_/b_n-_c-bi_t-huyen-tich.jpg",
    "product_name": "Bộ Sách Huyền Tích Dân Gian - Huyền Sử Việt + Dân Gian Kỳ Truyện (Bộ 2 Cuốn) - Bản Đặc Biệt - Tặng Kèm 2 Bookmark + 2 Sticker",
    "original_price": 400000,
    "final_price": 360000,
    "product_id": "722597",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 4,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719262",
    "product_url": "bo-sach-pixi-biet-tuot-khung-long-va-rong-cua-pixi-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Khủng Long Và Rồng Của Pixi (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326171917.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Khủng Long Và Rồng Của Pixi (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719262",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 1,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719263",
    "product_url": "bo-sach-pixi-biet-tuot-pixi-yeu-thien-nhien-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Pixi Yêu Thiên Nhiên (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326171993.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Pixi Yêu Thiên Nhiên (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719263",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 1,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719264",
    "product_url": "bo-sach-pixi-biet-tuot-nhung-cau-chuyen-co-tich-yeu-thich-cua-pixi-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Những Câu Chuyện Cổ Tích Yêu Thích Của Pixi (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326172181.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Những Câu Chuyện Cổ Tích Yêu Thích Của Pixi (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719264",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719265",
    "product_url": "bo-sach-pixi-biet-tuot-tim-hieu-ve-nghe-nghiep-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Tìm Hiểu Về Nghề Nghiệp (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326175267.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Tìm Hiểu Về Nghề Nghiệp (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719265",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719266",
    "product_url": "bo-sach-pixi-biet-tuot-bong-da-va-nhung-nguoi-ban-nho-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Bóng Đá Và Những Người Bạn Nhỏ (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326175342.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Bóng Đá Và Những Người Bạn Nhỏ (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719266",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719267",
    "product_url": "bo-sach-pixi-biet-tuot-kham-pha-the-gioi-cung-pixi-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Khám Phá Thế Giới Cùng Pixi (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326175427.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Khám Phá Thế Giới Cùng Pixi (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719267",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "719268",
    "product_url": "bo-sach-pixi-biet-tuot-the-gioi-xe-dieu-ky-bo-8-cuon",
    "image_label": "Bộ Sách Pixi Biết Tuốt - Thế Giới Xe Diệu Kỳ (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/9/9996326175502.jpg",
    "product_name": "Bộ Sách Pixi Biết Tuốt - Thế Giới Xe Diệu Kỳ (Bộ 8 Cuốn)",
    "original_price": 95000,
    "final_price": 80500,
    "product_id": "719268",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": null,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "752584",
    "product_url": "boxset-the-gioi-cua-tho-peter-hop-23-cuon",
    "image_label": "Boxset Thế Giới Của Thỏ Peter (Hộp 23 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/b/o/boxset-tho-peter_mock-up-1_1.jpg",
    "product_name": "Boxset Thế Giới Của Thỏ Peter (Hộp 23 Cuốn)",
    "original_price": 1206000,
    "final_price": 966000,
    "product_id": "752584",
    "discount_percent": 19,
    "type_id": "bundle",
    "soon_release": 1,
    "stock_available": "in_stock",
    "sold_qty": 20,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": "new_arrival",
    "episode": null,
    "frame_images": []
  },
  {
    "id": "278727",
    "product_url": "combo-tuoi-tho-du-doi-tap-1-va-2-tai-ban-2019-bo-2-tap",
    "image_label": "Combo Tuổi Thơ Dữ Dội - Tập 1 Và 2 (Tái Bản 2019) (Bộ 2 Tập)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935244827972-8935244827989.jpg",
    "product_name": "Combo Tuổi Thơ Dữ Dội - Tập 1 Và 2 (Tái Bản 2019) (Bộ 2 Tập)",
    "original_price": 160000,
    "final_price": 125440,
    "product_id": "278727",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3052,
    "rating": {
      "reviews_count": "16",
      "rating_summary": 99
    },
    "label": "trending",
    "episode": "Tập 1+2",
    "frame_images": []
  },
  {
    "id": "638393",
    "product_url": "bo-sach-hat-giong-tam-hon-danh-cho-thieu-nhi-bo-5-cuon-tai-ban-2025",
    "image_label": "Bộ Sách Hạt Giống Tâm Hồn Dành Cho Thiếu Nhi (Bộ 5 Cuốn) (Tái Bản 2025)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935086855683_1.jpg",
    "product_name": "Bộ Sách Hạt Giống Tâm Hồn Dành Cho Thiếu Nhi (Bộ 5 Cuốn) (Tái Bản 2025)",
    "original_price": 280000,
    "final_price": 238000,
    "product_id": "638393",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 47,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "385960",
    "product_url": "bo-chuyen-bon-mua-mien-dau-dai",
    "image_label": "Bộ Chuyện Bốn Mùa Miền Dâu Dại",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936072917255.jpg",
    "product_name": "Bộ Chuyện Bốn Mùa Miền Dâu Dại",
    "original_price": 420000,
    "final_price": 378000,
    "product_id": "385960",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 255,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "391725",
    "product_url": "bo-nhung-tia-nang-dau-tien-bo-10-cuon-tai-ban-2022",
    "image_label": "Bộ Những Tia Nắng Đầu Tiên (Bộ 10 Cuốn) (Tái Bản 2022)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/z/3/z3276903113530_6d7705a82f3cc09c14dfd4d707c5f5ea.jpg",
    "product_name": "Bộ Những Tia Nắng Đầu Tiên (Bộ 10 Cuốn) (Tái Bản 2022)",
    "original_price": 90000,
    "final_price": 81000,
    "product_id": "391725",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "out_of_stock",
    "sold_qty": 40,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "442507",
    "product_url": "combo-sach-10-van-cau-hoi-vi-sao-bo-16-cuon",
    "image_label": "Combo Sách 10 Vạn Câu Hỏi Vì Sao (Bộ 16 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-0509202300.png",
    "product_name": "Combo Sách 10 Vạn Câu Hỏi Vì Sao (Bộ 16 Cuốn)",
    "original_price": 880000,
    "final_price": 698250,
    "product_id": "442507",
    "discount_percent": 20,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 16,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "447175",
    "product_url": "combo-sach-wolfoo-eq-vi-sao-to-khong-nen-bo-4-cuon",
    "image_label": "Combo Sách Wolfoo EQ - Vì Sao Tớ Không Nên (Bộ 4 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/a/9a29d1ce-3fbd-4620-bbb5-b27e46c2e721.png",
    "product_name": "Combo Sách Wolfoo EQ - Vì Sao Tớ Không Nên (Bộ 4 Cuốn)",
    "original_price": 196000,
    "final_price": 162680,
    "product_id": "447175",
    "discount_percent": 17,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 4,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "562119",
    "product_url": "bo-sach-tham-tu-sherlock-nhi-bo-5-cuon",
    "image_label": "Bộ Sách Thám Tử Sherlock Nhí (Bộ 5 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/f/3f6ed4aa-f752-438f-ac47-f2489b57d295.jpg",
    "product_name": "Bộ Sách Thám Tử Sherlock Nhí (Bộ 5 Cuốn)",
    "original_price": 190000,
    "final_price": 171000,
    "product_id": "562119",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 20,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "578734",
    "product_url": "bo-sach-day-con-quan-ly-tai-chinh-bo-10-cuon",
    "image_label": "Bộ Sách Dạy Con Quản Lý Tài Chính (Bộ 10 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935230009955.jpg",
    "product_name": "Bộ Sách Dạy Con Quản Lý Tài Chính (Bộ 10 Cuốn)",
    "original_price": 110000,
    "final_price": 93500,
    "product_id": "578734",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 36,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "613299",
    "product_url": "bo-sach-song-tu-te-bo-10-cuon",
    "image_label": "Bộ Sách Sống Tử Tế (Bộ 10 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/3/3300000051895.jpg",
    "product_name": "Bộ Sách Sống Tử Tế (Bộ 10 Cuốn)",
    "original_price": 390000,
    "final_price": 331500,
    "product_id": "613299",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 47,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "229330",
    "product_url": "bach-khoa-toan-thu-cho-be-ren-luyen-ki-nang-song-an-toan",
    "image_label": "Bách Khoa Toàn Thư Cho Bé - Rèn Luyện Kĩ Năng Sống An Toàn",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180164_1_43_1_57_1_4_1_2_1_210_1_29_1_98_1_25_1_21_1_5_1_3_1_18_1_18_1_45_1_26_1_32_1_14_1_1136.jpg",
    "product_name": "Bách Khoa Toàn Thư Cho Bé - Rèn Luyện Kĩ Năng Sống An Toàn",
    "original_price": 70000,
    "final_price": 59500,
    "product_id": "229330",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 4,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "282596",
    "product_url": "combo-nhung-chiec-xe-hiep-si-bo-8-cuon-282596",
    "image_label": "Combo Những Chiếc Xe Hiệp Sĩ (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_34276.jpg",
    "product_name": "Combo Những Chiếc Xe Hiệp Sĩ (Bộ 8 Cuốn)",
    "original_price": 144000,
    "final_price": 125440,
    "product_id": "282596",
    "discount_percent": 12,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 30,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "300607",
    "product_url": "bo-4-quyen-tuyen-tap-truyen-hay-danh-cho-thieu-nhi",
    "image_label": "Bộ Sách Tuyển Tập Truyện Hay Dành Cho Thiếu Nhi 4 (Tái Bản 2020) - Bộ 4 Cuốn",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_47990.jpg",
    "product_name": "Bộ Sách Tuyển Tập Truyện Hay Dành Cho Thiếu Nhi 4 (Tái Bản 2020) - Bộ 4 Cuốn",
    "original_price": 192000,
    "final_price": 163000,
    "product_id": "300607",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 21,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "356252",
    "product_url": "combo-sach-giao-duc-gioi-tinh-nhi-dong-bo-3-cuon",
    "image_label": "Combo Sách Giáo Dục Giới Tính Nhi Đồng (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/g/d/gdgtnd.jpg",
    "product_name": "Combo Sách Giáo Dục Giới Tính Nhi Đồng (Bộ 3 Cuốn)",
    "original_price": 156000,
    "final_price": 132000,
    "product_id": "356252",
    "discount_percent": 15,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 19,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "372210",
    "product_url": "bo-sach-be-hoc-noi-loi-hay-bo-6-cuon",
    "image_label": "Bộ Sách Bé Học Nói Lời Hay (Bộ 6 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_240049.jpg",
    "product_name": "Bộ Sách Bé Học Nói Lời Hay (Bộ 6 Cuốn)",
    "original_price": 111000,
    "final_price": 94000,
    "product_id": "372210",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 4,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "388340",
    "product_url": "bo-sach-tuong-tac-tho-con-tuong-tac-sang-tao",
    "image_label": "Bộ Sách Tương Tác - Thỏ Con Tương Tác, Sáng Tạo",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/h/th_-con-t_ng-t_c_-s_ng-t_o---b_-s_ch-t_ng-t_c.jpg",
    "product_name": "Bộ Sách Tương Tác - Thỏ Con Tương Tác, Sáng Tạo",
    "original_price": 237000,
    "final_price": 213000,
    "product_id": "388340",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 26,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "388745",
    "product_url": "nhung-chuyen-ke-cua-thornton-bo-3-cuon",
    "image_label": "Những Chuyện Kể Của Thornton (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936072917217.jpg",
    "product_name": "Những Chuyện Kể Của Thornton (Bộ 3 Cuốn)",
    "original_price": 397000,
    "final_price": 357000,
    "product_id": "388745",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 19,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "394224",
    "product_url": "bo-tu-sach-sang-tao-boc-dan-thong-minh-bo-6-cuon",
    "image_label": "Bộ Tủ Sách Sáng Tạo - Bóc Dán Thông Minh (Bộ 6 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212358651.jpg",
    "product_name": "Bộ Tủ Sách Sáng Tạo - Bóc Dán Thông Minh (Bộ 6 Cuốn)",
    "original_price": 288000,
    "final_price": 244500,
    "product_id": "394224",
    "discount_percent": 15,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "out_of_stock",
    "sold_qty": 9,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "450946",
    "product_url": "combo-sach-ky-nang-bo-tui-di-mau-giao-that-vui-bo-8-cuon",
    "image_label": "Combo Sách Kỹ Năng Bỏ Túi - Đi Mẫu Giáo Thật Vui (Bộ 8 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2410202301.jpg",
    "product_name": "Combo Sách Kỹ Năng Bỏ Túi - Đi Mẫu Giáo Thật Vui (Bộ 8 Cuốn)",
    "original_price": 312000,
    "final_price": 258720,
    "product_id": "450946",
    "discount_percent": 17,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 3,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "450949",
    "product_url": "combo-sach-nhat-ky-chu-be-nhut-nhat-tap-1-18-bo-18-cuon",
    "image_label": "Combo Sách Nhật Ký Chú Bé Nhút Nhát : Tập 1 - 18 (Bộ 18 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-2410202304.png",
    "product_name": "Combo Sách Nhật Ký Chú Bé Nhút Nhát : Tập 1 - 18 (Bộ 18 Cuốn)",
    "original_price": 990000,
    "final_price": 776160,
    "product_id": "450949",
    "discount_percent": 21,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 9,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  },
  {
    "id": "468720",
    "product_url": "bo-sach-hoc-yeu-ban-than-ton-trong-khac-biet-bo-3-cuon",
    "image_label": "Bộ Sách Học Yêu Bản Thân - Tôn Trọng Khác Biệt (Bộ 3 Cuốn)",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974200338.jpg",
    "product_name": "Bộ Sách Học Yêu Bản Thân - Tôn Trọng Khác Biệt (Bộ 3 Cuốn)",
    "original_price": 105000,
    "final_price": 94500,
    "product_id": "468720",
    "discount_percent": 10,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "rating": {
      "reviews_count": null,
      "rating_summary": null
    },
    "label": null,
    "episode": null,
    "frame_images": []
  }
]

// co api goi rieng
// 17
export const personalization = [
  {
    "id": "423840",
    "product_id": "423840",
    "product_name": "Giáo Trình Hán Ngữ Boya Sơ Cấp Tập 2 (Tái Bản 2023)",
    "product_url": "giao-trinh-han-ngu-boya-2-so-cap-tb-2023",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246937815_1.jpg",
    "image_label": "Giáo Trình Hán Ngữ Boya Sơ Cấp Tập 2 (Tái Bản 2023)",
    "original_price": 169000,
    "final_price": 138500,
    "discount_percent": 18,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935246937815",
    "entity_id": 423840,
    "category_mid_id": 20,
    "display_final_price": 138500,
    "display_price": 169000,
    "product_name": "Giáo Trình Hán Ngữ Boya Sơ Cấp Tập 2 (Tái Bản 2023)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935246937815_1.jpg",
    "name_a_title": "Giáo Trình Hán Ngữ Boya Sơ Cấp Tập 2 (Tái Bản 2023)",
    "name_a_label": "Giáo Trình Hán Ngữ Boya Sơ Cấp Tập 2 (Tái Bản 2023)",
    "episode": "Tập 2",
    "seriesId": 18602,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 33,
    "label": null,
    "frame_images": [
      {
        "key": "579152",
        "value": "Frame MCBOOKS T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_McBoos.png"
      }
    ]
  },
  {
    "id": "412870",
    "product_id": "412870",
    "product_name": "1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng",
    "product_url": "1111-nhat-ky-sau-van-dam-tren-yen-xe-ca-tang",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974183037.jpg",
    "image_label": "1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng",
    "original_price": 325000,
    "final_price": 276000,
    "discount_percent": 15,
    "rating": {
      "reviews_count": 100,
      "rating_summary": 100
    },
    "sku": "8934974183037",
    "entity_id": 412870,
    "category_mid_id": 9,
    "display_final_price": 276000,
    "display_price": 325000,
    "product_name": "1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974183037.jpg",
    "name_a_title": "1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng",
    "name_a_label": "1111 - Nhật Ký Sáu Vạn Dặm Trên Yên Xe Cà Tàng",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 1,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 29,
    "label": null,
    "frame_images": []
  },
  {
    "id": "431474",
    "product_id": "431474",
    "product_name": "Chưa Kịp Lớn Đã Phải Trưởng Thành - Quyển 2 - Phiên Bản Mùa Hè",
    "product_url": "chua-kip-lon-da-phai-truong-thanh-quyen-2-phien-ban-mua-he",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043315516.jpg",
    "image_label": "Chưa Kịp Lớn Đã Phải Trưởng Thành - Quyển 2 - Phiên Bản Mùa Hè",
    "original_price": 79000,
    "final_price": 63000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "9786043315516",
    "entity_id": 431474,
    "category_mid_id": 9,
    "display_final_price": 63000,
    "display_price": 79000,
    "product_name": "Chưa Kịp Lớn Đã Phải Trưởng Thành - Quyển 2 - Phiên Bản Mùa Hè",
    "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043315516.jpg",
    "name_a_title": "Chưa Kịp Lớn Đã Phải Trưởng Thành - Quyển 2 - Phiên Bản Mùa Hè",
    "name_a_label": "Chưa Kịp Lớn Đã Phải Trưởng Thành - Quyển 2 - Phiên Bản Mùa Hè",
    "episode": "Tập 2",
    "seriesId": 62432,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 47,
    "label": null,
    "frame_images": []
  },
  {
    "id": "431241",
    "product_id": "431241",
    "product_name": "Collins - Writing For Ielts (Tái Bản 2023)",
    "product_url": "writing-for-ielts-collins-tb-2023",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043778526.jpg",
    "image_label": "Collins - Writing For Ielts (Tái Bản 2023)",
    "original_price": 144000,
    "final_price": 129500,
    "discount_percent": 10,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "9786043778526",
    "entity_id": 431241,
    "category_mid_id": 20,
    "display_final_price": 129500,
    "display_price": 144000,
    "product_name": "Collins - Writing For Ielts (Tái Bản 2023)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043778526.jpg",
    "name_a_title": "Collins - Writing For Ielts (Tái Bản 2023)",
    "name_a_label": "Collins - Writing For Ielts (Tái Bản 2023)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 54,
    "label": null,
    "frame_images": []
  },
  {
    "id": "231803",
    "product_id": "231803",
    "product_name": "Giấy Photo  A4 80gsm - Paper One (500 Tờ)",
    "product_url": "giay-photo-a4-80gsm-paper-one-500-to",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8993242596993_1.jpg",
    "image_label": "Giấy Photo  A4 80gsm - Paper One (500 Tờ)",
    "original_price": 106000,
    "final_price": 100500,
    "discount_percent": 5,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8993242596993",
    "entity_id": 231803,
    "category_mid_id": 96,
    "display_final_price": 100500,
    "display_price": 106000,
    "product_name": "Giấy Photo  A4 80gsm - Paper One (500 Tờ)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8993242596993_1.jpg",
    "name_a_title": "Giấy Photo  A4 80gsm - Paper One (500 Tờ)",
    "name_a_label": "Giấy Photo  A4 80gsm - Paper One (500 Tờ)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 32,
    "label": null,
    "frame_images": [
      {
        "key": "568420",
        "value": "Photo - bìa nút",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/CTGiayPhoto_Frame1_1080x1080.png"
      }
    ]
  },
  {
  "id": 412927,
  "product_id": 412927,
  "entity_id": 412927,
  "sku": "8935095632763",
  "product_name": "Ngôi Nhà Kỳ Quái",
  "product_name": "Ngôi Nhà Kỳ Quái",
  "product_url": "ngoi-nha-ky-quai",
  "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632763.jpg",
  "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632763.jpg",
  "image_label": "Ngôi Nhà Kỳ Quái",
  "name_a_title": "Ngôi Nhà Kỳ Quái",
  "name_a_label": "Ngôi Nhà Kỳ Quái",
  "category_mid_id": 9,
  "original_price": 138000,
  "price": 138000,
  "final_price": 110000,
  "display_price": 138000,
  "display_final_price": 110000,
  "discount_percent": 20,
  "discount": 20,
  "rating": {
    "rating_summary": 0,
    "reviews_count": 0
  },
  "rating_summary": 0,
  "rating_count": 0,
  "rating_summary_object": {
    "rating_summary": 0,
    "reviews_count": 0
  },
  "episode": null,
  "seriesId": 0,
  "subscribes": 0,
  "type_id": "simple",
  "soon_release": 0,
  "stock_available": "in_stock",
  "sold_qty": 92,
  "label": null,
  "frame_images": []
},
  {
    "id": "412927",
    "product_id": "412927",
    "product_name": "Ngôi Nhà Kỳ Quái",
    "product_url": "ngoi-nha-ky-quai",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632763.jpg",
    "image_label": "Ngôi Nhà Kỳ Quái",
    "original_price": 138000,
    "final_price": 110000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935095632763",
    "entity_id": 412927,
    "category_mid_id": 9,
    "display_final_price": 110000,
    "display_price": 138000,
    "product_name": "Ngôi Nhà Kỳ Quái",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632763.jpg",
    "name_a_title": "Ngôi Nhà Kỳ Quái",
    "name_a_label": "Ngôi Nhà Kỳ Quái",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 92,
    "label": null,
    "frame_images": []
  },
  {
    "id": "585978",
    "product_id": "585978",
    "product_name": "Bình Nước Học Sinh 500 ml - N.CAA-535 - Màu Hồng",
    "product_url": "binh-nuoc-hoc-sinh-500-ml-n-caa-535-mau-hong",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/8/8809637431353-mau2.jpg",
    "image_label": "Bình Nước Học Sinh 500 ml - N.CAA-535 - Màu Hồng",
    "original_price": 106000,
    "final_price": 95000,
    "discount_percent": 10,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8809637431353-mau2",
    "entity_id": 585978,
    "category_mid_id": 6514,
    "display_final_price": 95000,
    "display_price": 106000,
    "product_name": "Bình Nước Học Sinh 500 ml - N.CAA-535 - Màu Hồng",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/8/8809637431353-mau2.jpg",
    "name_a_title": "Bình Nước Học Sinh 500 ml - N.CAA-535 - Màu Hồng",
    "name_a_label": "Bình Nước Học Sinh 500 ml - N.CAA-535 - Màu Hồng",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 9,
    "label": null,
    "frame_images": []
  },
  {
    "id": "234040",
    "product_id": "234040",
    "product_name": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
    "product_url": "hinh-anh-cua-ban-dang-gia-trieu-do-tai-ban-2019",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_181017.jpg",
    "image_label": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
    "original_price": 120000,
    "final_price": 78000,
    "discount_percent": 35,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935210229908",
    "entity_id": 234040,
    "category_mid_id": 12,
    "display_final_price": 78000,
    "display_price": 120000,
    "product_name": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_181017.jpg",
    "name_a_title": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
    "name_a_label": "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 95,
    "label": null,
    "frame_images": []
  },
  {
    "id": "276600",
    "product_id": "276600",
    "product_name": "Bút Sáp Màu Xoay - 24 Màu DK 3301-24 (Túi Nhựa PVC)",
    "product_url": "but-sap-mau-xoay-24-mau-dk-3301-24-tui-nhua-pvc",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_28587.jpg",
    "image_label": "Bút Sáp Màu Xoay - 24 Màu DK 3301-24 (Túi Nhựa PVC)",
    "original_price": 100000,
    "final_price": 64000,
    "discount_percent": 36,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8936178580360",
    "entity_id": 276600,
    "category_mid_id": 6221,
    "display_final_price": 64000,
    "display_price": 100000,
    "product_name": "Bút Sáp Màu Xoay - 24 Màu DK 3301-24 (Túi Nhựa PVC)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_28587.jpg",
    "name_a_title": "Bút Sáp Màu Xoay - 24 Màu DK 3301-24 (Túi Nhựa PVC)",
    "name_a_label": "Bút Sáp Màu Xoay - 24 Màu DK 3301-24 (Túi Nhựa PVC)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "label": null,
    "frame_images": []
  },
  {
    "id": "400736",
    "product_id": "400736",
    "product_name": "Cambridge English Qualifications - B1 Preliminary For Schools - 8 Practice Tests",
    "product_url": "b1-preliminary-for-schools-8-practice-tests-quet-ma-mp3-de-nghe-file",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043350258.jpg",
    "image_label": "Cambridge English Qualifications - B1 Preliminary For Schools - 8 Practice Tests",
    "original_price": 328000,
    "final_price": 295000,
    "discount_percent": 10,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "9786043350258",
    "entity_id": 400736,
    "category_mid_id": 20,
    "display_final_price": 295000,
    "display_price": 328000,
    "product_name": "Cambridge English Qualifications - B1 Preliminary For Schools - 8 Practice Tests",
    "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043350258.jpg",
    "name_a_title": "Cambridge English Qualifications - B1 Preliminary For Schools - 8 Practice Tests",
    "name_a_label": "Cambridge English Qualifications - B1 Preliminary For Schools - 8 Practice Tests",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 26,
    "label": null,
    "frame_images": []
  },
  {
    "id": "226309",
    "product_id": "226309",
    "product_name": "Đỉnh Gió Hú (Bìa Mềm)",
    "product_url": "dinh-gio-hu-bia-mem",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/2/42bb0951bd84257992fc9b9c0bb4b02e.jpg",
    "image_label": "Đỉnh Gió Hú (Bìa Mềm)",
    "original_price": 100000,
    "final_price": 80000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 100,
      "rating_summary": 100
    },
    "sku": "8936071675583",
    "entity_id": 226309,
    "category_mid_id": 9,
    "display_final_price": 80000,
    "display_price": 100000,
    "product_name": "Đỉnh Gió Hú (Bìa Mềm)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/4/2/42bb0951bd84257992fc9b9c0bb4b02e.jpg",
    "name_a_title": "Đỉnh Gió Hú (Bìa Mềm)",
    "name_a_label": "Đỉnh Gió Hú (Bìa Mềm)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 8,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 17,
    "label": null,
    "frame_images": []
  },
  {
    "id": "380856",
    "product_id": "380856",
    "product_name": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
    "product_url": "toi-da-kiem-1-trieu-do-dau-tien-tren-internet-nhu-the-nao-va-ban-cung-co-the-lam-nhu-the-tai-ban-2021",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_3718.jpg",
    "image_label": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
    "original_price": 199000,
    "final_price": 169000,
    "discount_percent": 15,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935251417647",
    "entity_id": 380856,
    "category_mid_id": 11,
    "display_final_price": 169000,
    "display_price": 199000,
    "product_name": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_3718.jpg",
    "name_a_title": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
    "name_a_label": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 7,
    "label": null,
    "frame_images": [
      {
        "key": "571210",
        "value": "Frame Alphabooks T10",
        "url": "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png"
      }
    ]
  },
  {
    "id": "291605",
    "product_id": "291605",
    "product_name": "Diary Of A Wimpy Kid 13: The Meltdown Paperback",
    "product_url": "diary-of-a-wimpy-kid-13-the-meltdown-paperback",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_41962.jpg",
    "image_label": "Diary Of A Wimpy Kid 13: The Meltdown Paperback",
    "original_price": 179000,
    "final_price": 165000,
    "discount_percent": 7,
    "rating": {
      "reviews_count": 100,
      "rating_summary": 100
    },
    "sku": "9780241389317",
    "entity_id": 291605,
    "category_mid_id": 4216,
    "display_final_price": 165000,
    "display_price": 179000,
    "product_name": "Diary Of A Wimpy Kid 13: The Meltdown Paperback",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_41962.jpg",
    "name_a_title": "Diary Of A Wimpy Kid 13: The Meltdown Paperback",
    "name_a_label": "Diary Of A Wimpy Kid 13: The Meltdown Paperback",
    "episode": "Tập 13",
    "seriesId": 42882,
    "subscribes": 0,
    "rating_count": 1,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 11,
    "label": null,
    "frame_images": []
  },
  {
    "id": "368821",
    "product_id": "368821",
    "product_name": "Kể Chuyện Cuộc Đời Các Thiên Tài: Marie Curie - Nhà Nữ Khoa Học Kiệt Xuất",
    "product_url": "marie-curie-nha-nu-khoa-hoc-kiet-xuat",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_237524.jpg",
    "image_label": "Kể Chuyện Cuộc Đời Các Thiên Tài: Marie Curie - Nhà Nữ Khoa Học Kiệt Xuất",
    "original_price": 75000,
    "final_price": 60000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935210274779",
    "entity_id": 368821,
    "category_mid_id": 6174,
    "display_final_price": 60000,
    "display_price": 75000,
    "product_name": "Kể Chuyện Cuộc Đời Các Thiên Tài: Marie Curie - Nhà Nữ Khoa Học Kiệt Xuất",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_237524.jpg",
    "name_a_title": "Kể Chuyện Cuộc Đời Các Thiên Tài: Marie Curie - Nhà Nữ Khoa Học Kiệt Xuất",
    "name_a_label": "Kể Chuyện Cuộc Đời Các Thiên Tài: Marie Curie - Nhà Nữ Khoa Học Kiệt Xuất",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 59,
    "label": null,
    "frame_images": []
  },
  {
    "id": "283328",
    "product_id": "283328",
    "product_name": "Chăm Trái Tim Con Ấm",
    "product_url": "cham-trai-tim-con-am",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_35072.jpg",
    "image_label": "Chăm Trái Tim Con Ấm",
    "original_price": 120000,
    "final_price": 96000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935278601005",
    "entity_id": 283328,
    "category_mid_id": 6009,
    "display_final_price": 96000,
    "display_price": 120000,
    "product_name": "Chăm Trái Tim Con Ấm",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_35072.jpg",
    "name_a_title": "Chăm Trái Tim Con Ấm",
    "name_a_label": "Chăm Trái Tim Con Ấm",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 47,
    "label": null,
    "frame_images": []
  },
  {
    "id": "769148",
    "product_id": "769148",
    "product_name": "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    "product_url": "so-da-bia-mem-coffee-lovers-a6-dong-ke-cham-120-trang-100gsm-the-sun-macchiato",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934986016248.jpg",
    "image_label": "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    "original_price": 46000,
    "final_price": 41400,
    "discount_percent": 10,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8934986016248",
    "entity_id": 769148,
    "category_mid_id": 96,
    "display_final_price": 41400,
    "display_price": 46000,
    "product_name": "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8934986016248.jpg",
    "name_a_title": "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    "name_a_label": "Sổ Da Bìa Mềm Coffee Lovers A6 - Dòng Kẻ Chấm - 120 Trang 100gsm - The Sun - Macchiato",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 0,
    "label": "new_arrival",
    "frame_images": []
  },
  {
    "id": "413268",
    "product_id": "413268",
    "product_name": "Chữa Lành Những Sang Chấn Tuổi Thơ",
    "product_url": "chua-lanh-nhung-sang-chan-tuoi-tho",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935278607137.jpg",
    "image_label": "Chữa Lành Những Sang Chấn Tuổi Thơ",
    "original_price": 220000,
    "final_price": 176000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935278607137",
    "entity_id": 413268,
    "category_mid_id": 12,
    "display_final_price": 176000,
    "display_price": 220000,
    "product_name": "Chữa Lành Những Sang Chấn Tuổi Thơ",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935278607137.jpg",
    "name_a_title": "Chữa Lành Những Sang Chấn Tuổi Thơ",
    "name_a_label": "Chữa Lành Những Sang Chấn Tuổi Thơ",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 207,
    "label": null,
    "frame_images": []
  },
  {
    "id": "643317",
    "product_id": "643317",
    "product_name": "Đồ Chơi Mô Hình Sưu Tầm Minecraft 1.65 Inch - Nano Metalfigs Blind Bag - Jada Toys (Bao Bìa Giao Ngẫu Nhiên) (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
    "product_url": "do-choi-mo-hinh-suu-tam-minecraft-1-65-inch-nano-metalfigs-blind-bag-jada-toys-bao-bia-giao-ngau-nhien-mau-san-pham-ben-trong-la-ngau-nhien",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000314671.jpg",
    "image_label": "Đồ Chơi Mô Hình Sưu Tầm Minecraft 1.65 Inch - Nano Metalfigs Blind Bag - Jada Toys (Bao Bìa Giao Ngẫu Nhiên) (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
    "original_price": 59000,
    "final_price": 59000,
    "discount_percent": 0,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "3900000314671",
    "entity_id": 643317,
    "category_mid_id": 6000,
    "display_final_price": 59000,
    "display_price": 59000,
    "product_name": "Đồ Chơi Mô Hình Sưu Tầm Minecraft 1.65 Inch - Nano Metalfigs Blind Bag - Jada Toys (Bao Bìa Giao Ngẫu Nhiên) (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000314671.jpg",
    "name_a_title": "Đồ Chơi Mô Hình Sưu Tầm Minecraft 1.65 Inch - Nano Metalfigs Blind Bag - Jada Toys (Bao Bìa Giao Ngẫu Nhiên) (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
    "name_a_label": "Đồ Chơi Mô Hình Sưu Tầm Minecraft 1.65 Inch - Nano Metalfigs Blind Bag - Jada Toys (Bao Bìa Giao Ngẫu Nhiên) (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 43,
    "label": null,
    "frame_images": []
  },
  {
    "id": "678341",
    "product_id": "678341",
    "product_name": "Ba Lô Chống Gù Nature Quest Schoolbag Pro S2 - Rush Hour - Tiger Family TGNQ-109A",
    "product_url": "ba-lo-chong-gu-nature-quest-schoolbag-pro-s2-rush-hour-tiger-family-tgnq-109a",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/4/8/4895232527137-_1_.jpg",
    "image_label": "Ba Lô Chống Gù Nature Quest Schoolbag Pro S2 - Rush Hour - Tiger Family TGNQ-109A",
    "original_price": 1450000,
    "final_price": 1232500,
    "discount_percent": 15,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "4895232527137",
    "entity_id": 678341,
    "category_mid_id": 94,
    "display_final_price": 1232500,
    "display_price": 1450000,
    "product_name": "Ba Lô Chống Gù Nature Quest Schoolbag Pro S2 - Rush Hour - Tiger Family TGNQ-109A",
    "image": "https://cdn1.fahasa.com/media/catalog/product/4/8/4895232527137-_1_.jpg",
    "name_a_title": "Ba Lô Chống Gù Nature Quest Schoolbag Pro S2 - Rush Hour - Tiger Family TGNQ-109A",
    "name_a_label": "Ba Lô Chống Gù Nature Quest Schoolbag Pro S2 - Rush Hour - Tiger Family TGNQ-109A",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 10,
    "label": null,
    "frame_images": []
  },
  {
    "id": "423326",
    "product_id": "423326",
    "product_name": "Truyện Trạng Quỳnh - Trạng Lợn (Tái Bản)",
    "product_url": "truyen-trang-quynh-trang-lon-tai-ban",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236429825.jpg",
    "image_label": "Truyện Trạng Quỳnh - Trạng Lợn (Tái Bản)",
    "original_price": 35000,
    "final_price": 28000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935236429825",
    "entity_id": 423326,
    "category_mid_id": 9,
    "display_final_price": 28000,
    "display_price": 35000,
    "product_name": "Truyện Trạng Quỳnh - Trạng Lợn (Tái Bản)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236429825.jpg",
    "name_a_title": "Truyện Trạng Quỳnh - Trạng Lợn (Tái Bản)",
    "name_a_label": "Truyện Trạng Quỳnh - Trạng Lợn (Tái Bản)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 45,
    "label": null,
    "frame_images": []
  },
  {
    "id": "337750",
    "product_id": "337750",
    "product_name": "Lãnh Đạo Và Văn Hóa Doanh Nghiệp",
    "product_url": "lanh-dao-va-van-hoa-doanh-nghiep",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_217895.jpg",
    "image_label": "Lãnh Đạo Và Văn Hóa Doanh Nghiệp",
    "original_price": 180000,
    "final_price": 144000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8935278600893",
    "entity_id": 337750,
    "category_mid_id": 11,
    "display_final_price": 144000,
    "display_price": 180000,
    "product_name": "Lãnh Đạo Và Văn Hóa Doanh Nghiệp",
    "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_217895.jpg",
    "name_a_title": "Lãnh Đạo Và Văn Hóa Doanh Nghiệp",
    "name_a_label": "Lãnh Đạo Và Văn Hóa Doanh Nghiệp",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 49,
    "label": null,
    "frame_images": []
  },
  {
    "id": "171337",
    "product_id": "171337",
    "product_name": "Sao Chiếu Mệnh",
    "product_url": "sao-chieu-menh-171337",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095623815_1.jpg",
    "image_label": "Sao Chiếu Mệnh",
    "original_price": 135000,
    "final_price": 108000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 90,
      "rating_summary": 90
    },
    "sku": "8935095623815",
    "entity_id": 171337,
    "category_mid_id": 9,
    "display_final_price": 108000,
    "display_price": 135000,
    "product_name": "Sao Chiếu Mệnh",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095623815_1.jpg",
    "name_a_title": "Sao Chiếu Mệnh",
    "name_a_label": "Sao Chiếu Mệnh",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 15781,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 14,
    "label": null,
    "frame_images": []
  },
  {
    "id": "704573",
    "product_id": "704573",
    "product_name": "Gậy Phát Sáng A80 Lightstick Cờ Việt Nam",
    "product_url": "gay-phat-sang-lightstick-co-viet-nam",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000323451_1.jpg",
    "image_label": "Gậy Phát Sáng A80 Lightstick Cờ Việt Nam",
    "original_price": 380000,
    "final_price": 304000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "3900000323451",
    "entity_id": 704573,
    "category_mid_id": 6183,
    "display_final_price": 304000,
    "display_price": 380000,
    "product_name": "Gậy Phát Sáng A80 Lightstick Cờ Việt Nam",
    "image": "https://cdn1.fahasa.com/media/catalog/product/3/9/3900000323451_1.jpg",
    "name_a_title": "Gậy Phát Sáng A80 Lightstick Cờ Việt Nam",
    "name_a_label": "Gậy Phát Sáng A80 Lightstick Cờ Việt Nam",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 6,
    "label": null,
    "frame_images": []
  },
  {
    "id": "390559",
    "product_id": "390559",
    "product_name": "Thao Túng Tâm Lý - Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn",
    "product_url": "thao-tung-tam-ly-nhan-dien-thuc-tinh-va-chua-lanh-nhung-ton-thuong-tiem-an",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936066692298.jpg",
    "image_label": "Thao Túng Tâm Lý - Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn",
    "original_price": 169000,
    "final_price": 135000,
    "discount_percent": 20,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "8936066692298",
    "entity_id": 390559,
    "category_mid_id": 12,
    "display_final_price": 135000,
    "display_price": 169000,
    "product_name": "Thao Túng Tâm Lý - Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn",
    "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936066692298.jpg",
    "name_a_title": "Thao Túng Tâm Lý - Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn",
    "name_a_label": "Thao Túng Tâm Lý - Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "simple",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 227,
    "label": null,
    "frame_images": []
  },
  {
    "id": "424103",
    "product_id": "424103",
    "product_name": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "product_url": "combo-sach-muon-kiep-nhan-sinh-tap-1-khong-diet-khong-sinh-dung-so-hai-bo-2-cuon",
    "image_src": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086851760-8935278607311.jpg",
    "image_label": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "original_price": 278000,
    "final_price": 217560,
    "discount_percent": 21,
    "rating": {
      "reviews_count": 0,
      "rating_summary": 0
    },
    "sku": "combo-8935086851760-8935278607311",
    "entity_id": 424103,
    "category_mid_id": 6011,
    "display_final_price": 217560,
    "display_price": 278000,
    "product_name": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "image": "https://cdn1.fahasa.com/media/catalog/product/c/o/combo-8935086851760-8935278607311.jpg",
    "name_a_title": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "name_a_label": "Combo Sách Muôn Kiếp Nhân Sinh Tập 1 + Không Diệt Không Sinh Đừng Sợ Hãi (Bộ 2 Cuốn)",
    "episode": null,
    "seriesId": 0,
    "subscribes": 0,
    "rating_count": 0,
    "type_id": "bundle",
    "soon_release": 0,
    "stock_available": "in_stock",
    "sold_qty": 122,
    "label": null,
    "frame_images": []
  }
]



export const getData_TAB1RANK_VH = [
    {
      id: 643343,
      product_name: "Mưa Đỏ",
      author: "Chu Lai",
      publisher: "Quân Đội Nhân Dân",
      price: 205000,
      discount_price: 184500,
      discount_percent: 10,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/m/u/muado.jpg",
      points: 5841,
      rank: 1,
      category_id: '9',
      product_url: "/mua-do-643343?fhs_campaign=bxh",
      trend: 'up',
      voted: 5841, // Bổ sung tham số voted
      description: "<p><strong>Mưa Đỏ</strong></p><p>Những miền cảm xúc đan xen giữa nụ cười - nước mắt, nỗi đau - niềm vui, sự sống - cái chết, những thăng hoa - mất mát, sự hy sinh của những người cha, người chồng, người con, những người lính, những đồng chí, đồng đội đã không tiếc máu xương trong cuộc chiến đấu 81 ngày đêm bảo vệ thành Cổ Quảng Trị, bảo vệ Tổ quốc với những gian khổ, thiểu thốn lẫn những mất mát đau thương. Đó là một tiểu đội có 7 người lính với 7 tính cách, số phận, suy nghĩ và xuất thân khác nhau. Có người lãng tử, có người bộc trực, có anh lính nhút nhát, có anh lính gan dạ nhưng hơn tất cả họ là một gia đình, luôn có nhau dù đang giữa ranh giới mong manh sự sống và cái chết...</p>"
    },
    {
      id: 594981,
      product_name: "Hồ Điệp Và Kình Ngư",
      author: "Tuế Kiến",
      publisher: "Văn Học",
      price: 155000,
      discount_price: 111600,
      discount_percent: 28,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-2d_ho-diep-va-kinh-ngu_17307.jpg",
      points: 1082,
      rank: 2,
      category_id: '9',
      product_url: "/ho-diep-va-kinh-ngu?fhs_campaign=bxh",
      trend: 'up',
      voted: 1082, // Bổ sung tham số voted
      description: "<h2 dir='ltr'><span>HỒ ĐIỆP VÀ KÌNH NGƯ - BI KỊCH HAY HUYỀN THOẠI CỦA TÌNH YÊU?</span></h2><p dir='ltr'><span>Một câu chuyện cuốn hút ngay từ những trang đầu tiên - Khi tình yêu trở thành sợi dây mong manh giữa sinh tử, phản bội và hy vọng. Khi một nàng hồ điệp nhỏ bé chạm trán với kình ngư mạnh mẽ, liệu đó là định mệnh hay chỉ là một giấc mộng chóng tàn?</span></p><h2 dir='ltr'><span>VỀ TÁC GIẢ</span><span>: </span><span>Tuế Kiến</span></h2><ul><li dir='ltr'><p dir='ltr'><span>Tuế Kiến là một tác giả được yêu thích trong dòng văn học lãng mạn Trung Quốc.</span></p></li><li dir='ltr'><p dir='ltr'><span>Cô nổi tiếng với những tác phẩm có nội dung sâu sắc, kịch tính, giàu...</span></p></li></ul>"
    },
    {
      id: 285358,
      product_name: "Nhà Giả Kim (Tái Bản 2020)",
      author: "Paulo Coelho",
      publisher: "NXB Hội Nhà Văn",
      price: 79000,
      discount_price: 67000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg",
      points: 867,
      rank: 3,
      category_id: '9',
      product_url: "/nha-gia-kim-tai-ban-2020?fhs_campaign=bxh",
      trend: 'up',
      voted: 867, // Bổ sung tham số voted
      description: "<h2 dir='ltr'><span>NHÀ GIẢ KIM - HÀNH TRÌNH ĐI TÌM KHO BÁU HAY CUỘC HÀNH TRÌNH TÌM KIẾM CHÍNH MÌNH</span></h2><p dir='ltr'><span>'Nhà Giả Kim' không đơn thuần là một cuốn tiểu thuyết, mà là bản đồ dẫn lối đến giấc mơ, khao khát và định mệnh của mỗi con người. Câu chuyện về chàng trai chăn cừu Santiago không chỉ mang đến những cuộc phiêu lưu hấp dẫn, mà còn mở ra nhiều tầng triết lý sâu sắc về cuộc sống.</span></p><h2 dir='ltr'><span>VỀ TÁC GIẢ</span><span>:</span><span>Paulo Coelho</span></h2><ul><li dir='ltr'><p dir='ltr'><span>Là nhà văn người Brazil, bậc thầy kể chuyện với lối viết đậm chất triết lý.</span></p></li><li dir='ltr'><p dir='ltr'><span>Ông là tác giả của nhiều tác phẩm truyền cảm hứng, trong đó 'Nhà Giả Kim' là tác phẩm nổi tiếng nhất...</span></p></li></ul>"
    },
    {
      id: 283976,
      product_name: "Bến Xe (Tái Bản 2020)",
      author: "Thương Thái Vi",
      publisher: "Văn Học",
      price: 76000,
      discount_price: 54720,
      discount_percent: 28,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212349208.jpg",
      points: 851,
      rank: 4,
      category_id: '9',
      product_url: "/ben-xe-tai-ban-2020?fhs_campaign=bxh",
      trend: 'up',
      voted: 851, // Bổ sung tham số voted
      description: "<p>Bến Xe (Tái Bản 2020)</p><p>Bến Xe</p><p>Thứ tôi có thể cho em trong cuộc đời này</p><p>chỉ là danh dự trong sạch</p><p>và một tương lai tươi đẹp mà thôi.</p><p>Thế nhưng, nếu chúng ta có kiếp sau,</p><p>nếu kiếp sau tôi có đôi mắt sáng,</p><p>tôi sẽ ở bến xe này… đợi em.</p>..."
    },
    {
      id: 517713,
      product_name: "Nếu Biết Trăm Năm Là Hữu Hạn - Ấn Bản Kỉ Niệm 10 Năm Xuất Bản (Tái Bản 2024)",
      author: "Phạm Lữ Ân",
      publisher: "Thế Giới",
      price: 159000,
      discount_price: 143000,
      discount_percent: 10,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8932000134749_1.jpg",
      points: 776,
      rank: 5,
      category_id: '9',
      product_url: "/neu-biet-tram-nam-la-huu-han-an-ban-ki-niem-10-nam-xuat-ban-tai-ban-2024?fhs_campaign=bxh",
      trend: 'up',
      voted: 776, // Bổ sung tham số voted
      description: "<h2><span>NẾU BIẾT TRĂM NĂM LÀ HỮU HẠN - LÁ THƯ GỬI NHỮNG NGƯỜI TRẺ ĐANG LẠC LỐI</span></h2><p><span>Bạn đã bao giờ tự hỏi: Nếu biết trước cuộc đời là hữu hạn, bạn sẽ sống khác đi chứ?</span></p><p><span>Chúng ta luôn nghĩ mình có nhiều thời gian, nhưng thực tế, </span><span>mọi khoảnh khắc đều đang trôi qua mãi mãi</span><span>.</span></p><h2 dir='ltr'><span>VỀ TÁC GIẢ</span><span>: PHẠM LỮ ÂN</span></h2><ul><li dir='ltr'><p dir='ltr'><span>Là bút danh của đôi vợ chồng nhà báo chuyên viết cho giới trẻ, là Đặng Nguyễn Đông Vy và Nguyễn Hoàng Mai, hai nhà văn nổi bật trong dòng sách truyền cảm hứng.</span></p></li><li dir='ltr'><p dir='ltr'><span>Những tác phẩm của họ không chỉ là lời kể, mà là những triết lý sống sâu sắc, giúp độ...</span></p></li></ul>"
    }
];
// mock/rankData.ts
export const getData_TAB2RANK_KT = [
    {
      id: 651889,
      product_name: "Ứng Dụng AI Vào Doanh Nghiệp - Những Bài Giảng Của Giáo Tiến Về Nhân Tố Thay Đổi Cuộc Chơi Trong Kỉ Nguyên Mới",
      author: "Hoàng Nam Tiến",
      publisher: "Dân Trí",
      price: 286000,
      discount_price: 216000,
      discount_percent: 24,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/_/n/_ng-d_ng-ai-v_o-doanh-nghi_p_9.jpg",
      points: 759,
      rank: 1,
      category_id: '11',
      product_url: "/ung-dung-ai-vao-doanh-nghiep-nhung-bai-giang-cua-giao-tien-ve-nhan-to-thay-doi-cuoc-choi-trong-ki-nguyen-moi?fhs_campaign=bxh",
      trend: 'up',
      voted: 759, // Bổ sung tham số voted
      description: "<p><strong>Ứng Dụng AI Vào Doanh Nghiệp - Những Bài Giảng Của Giáo Tiến Về Nhân Tố Thay Đổi Cuộc Chơi Trong Kỉ Nguyên Mới</strong></p><p><strong>THÔNG TIN TÁC GIẢ</strong></p><p><strong>Hoàng Nam Tiến </strong></p><p>Là con trai của một chiến tướng (tướng Hoàng Đan), tư duy chiến lược sắc bén và năng lực lãnh đạo thừa hưởng từ cha được thể hiện rõ rệt trong lĩnh vực quản trị doanh nghiệp mà ông làm việc trong hơn 30 năm nay.</p><p>Với hơn 30 năm kinh nghiệm thực chiến, ông vừa là nhà lãnh đạo vừa là diễn giả truyền cảm hứng hàng đầu về quản trị doanh nghiệp và công nghệ. Cuốn sách 'Ứng dụng AI vào doanh nghiệp' là những bài giảng đắt giá và cập nhật nhất của Giáo Tiến về cách doanh nghiệp có thể tận dụng AI để tạo ra lợi thế cạnh tranh trong kỷ nguyên mới.</p>"
    },
    {
      id: 410521,
      product_name: "Biến Mọi Thứ Thành Tiền - Make Money",
      author: "Nguyễn Anh Dũng",
      publisher: "Thế Giới",
      price: 168000,
      discount_price: 84000,
      discount_percent: 50,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043654370.jpg",
      points: 554,
      rank: 2,
      category_id: '11',
      product_url: "/bien-moi-thu-thanh-tien-make-money?fhs_campaign=bxh",
      trend: 'up',
      voted: 554, // Bổ sung tham số voted
      description: "<p>Bí quyết giúp bạn thoát nghèo để đạt được thành công và giàu có thực sự 'Biến mọi thứ thành tiền' là cuốn sách xoay quanh chủ đề tài chính cá nhân. Đây là vấn đề đang được nhiều người, trong đó có các bạn trẻ đặc biệt quan tâm. Cuốn sách định hướng người đọc về cách kiếm tiền, tư duy làm giàu, cách áp dụng những phương pháp làm giàu vào cuộc sống và phát triển bản thân. Bí quyết giúp bạn thoát nghèo để đạt được thành công và giàu có thực sự ở đây không phải là công thức cho tất cả mọi người.</p><p>Cuốn sách chỉ ra cho bạn phương thức, công cụ phù hợp đạt được cơ hội chiến thắng trong cuộc chơi tài chính. Tác giả Nguyễn Anh Dũng chia sẻ những kinh nghiệm thực tế và bài học quý giá từ chính hành trình làm giàu của mình.</p>"
    },
    {
      id: 369493,
      product_name: "Bí Mật Tư Duy Triệu Phú (Tái Bản 2021)",
      author: "T Harv Eker",
      publisher: "NXB Tổng Hợp TPHCM",
      price: 108000,
      discount_price: 91500,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_188995_1_1.jpg",
      points: 545,
      rank: 3,
      category_id: '11',
      product_url: "/bi-mat-tu-duy-trieu-phu-tai-ban-2021?fhs_campaign=bxh",
      trend: 'up',
      voted: 545, // Bổ sung tham số voted
      description: "<p>Trong cuốn sách này <strong>T. Harv Eker</strong> sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất.</p><p>Cuốn sách dành cho những ai còn loay hoay muốn tìm đường đến sự giàu có và thành công. 'Bí mật tư duy triệu phú' mang đến nhiều tư duy mới cho người đọc về cách suy nghĩ của người giàu, từ đó giúp bạn thay đổi tư duy tài chính và xây dựng nền tảng vững chắc cho sự giàu có bền vững.</p>"
    },
    {
      id: 644540,
      product_name: "13 Bài Giảng Của Giáo Tiến Về Quản Trị Và Lãnh Đạo",
      author: "Hoàng Nam Tiến",
      publisher: "Thế Giới",
      price: 286000,
      discount_price: 200200,
      discount_percent: 30,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935251422481.jpg",
      points: 537,
      rank: 4,
      category_id: '11',
      product_url: "/13-bai-giang-cua-giao-tien-ve-quan-tri-va-lanh-dao?fhs_campaign=bxh",
      trend: 'up',
      voted: 537, // Bổ sung tham số voted
      description: "<p><strong>13 Bài Giảng Của Giáo Tiến Về Quản Trị Và Lãnh Đạo</strong></p><p>Trước kia, chúng ta thường thắc mắc vì sao một người có thể thăng tiến nhanh, có thể có nhiều tiền bạc, tài sản… Đã có một thời, ở nước ta có những cá nhân dựa vào quan hệ, dựa vào 'đánh quả' để nhanh chóng thành đạt. Hiện nay, câu chuyện đã khác. Chỉ có lao động và thực học mới là nền tảng của thành công bền vững lâu dài. Không cần biết bạn là ai, từ đâu đến, nhưng nếu bạn bước đi trên con đường trở thành lãnh đạo của tổ chức và chính mình, mọi thứ đều bắt đầu từ việc học. Việc học bắt đầu từ những điều nhỏ nhất. Tất cả chúng ta đều sở hữu những tố chất tiềm ẩn của nhà lãnh đạo.</p><p>Cuốn sách này tập hợp 13 bài giảng tâm huyết của Giáo Tiến Hoàng Nam Tiến về nghệ thuật lãnh đạo và quản trị doanh nghiệp trong thời đại mới.</p>"
    },
    {
      id: 439245,
      product_name: "Biến Mọi Thứ Thành Tiền - Quyển 2 - Ứng Dụng Tư Duy Tạo Ra Tiền Giúp Bạn Thành Công Giàu Có Và Hạnh Phúc",
      author: "Nguyễn Anh Dũng",
      publisher: "Thế Giới",
      price: 168000,
      discount_price: 84000,
      discount_percent: 50,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043450293.jpg",
      points: 537,
      rank: 5,
      category_id: '11',
      product_url: "/bien-moi-thu-thanh-tien-tap-2?fhs_campaign=bxh",
      trend: 'up',
      voted: 537, // Bổ sung tham số voted
      description: "<p style='text-align:justify'><strong>Biến Mọi Thứ Thành Tiền - Quyển 2 - Ứng Dụng Tư Duy Tạo Ra Tiền Giúp Bạn Thành Công Giàu Có Và Hạnh Phúc</strong></p><p style='text-align:justify'>Cuốn sách <em><strong>BIẾN MỌI THỨ THÀNH TIỀN - QUYỂN 2 - Ứng dụng tư duy Tạo ra Tiền giúp bạn Thành Công Giàu Có và Hạnh Phúc</strong></em> thực sự là một trong những cuốn sách thuộc bộ BIẾN MỌI THỨ THÀNH TIỀN của tác giả Nguyễn Anh Dũng - Nhà sáng lập Sbooks. Trong cuốn sách này chứa đựng sự sâu sắc nhưng cũng rất mới mẻ và lôi cuốn bởi nó được tạo nên bởi hệ thống giá trị tư duy độc đáo và khác biệt. Cuốn sách không đơn thuần là một cuốn sách chỉ cách kiếm tiền, mà còn là một cuốn cẩm nang về tư duy, chiến lược và phương pháp ứng dụng thực tế giúp bạn đạt được thành công toàn diện trong cuộc sống.</p><p style='text-align:justify'>Tác giả chia sẻ những bài học thực tế về cách xây dựng tư duy làm giàu, quản lý tài chính cá nhân và tạo ra các nguồn thu nhập bền vững.</p>"
    }
];

// mock/rankData.ts
export const getData_TAB3RANK_TL_KNS =  [
    {
      id: 622541,
      product_name: "Yêu Những Điều Không Hoàn Hảo - Bìa Cứng - Tặng Kèm Bookmark + Postcard - Độc Quyền Fahasa",
      author: "Hae Min",
      publisher: "Thế Giới",
      price: 239000,
      discount_price: 203000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-12_4.jpg",
      points: 1650,
      rank: 1,
      category_id: '12',
      product_url: "/yeu-nhung-dieu-khong-hoan-hao-bia-cung-tang-kem-bookmark-postcard-doc-quyen?fhs_campaign=bxh",
      trend: 'up',
      voted: 1650, // Bổ sung tham số voted
      description: "<p><strong>Yêu Những Điều Không Hoàn Hảo</strong></p><p>'Ngẫm lại cuộc sống của chính mình, ta sẽ nhận thấy rất nhiều điều không hoàn hảo. Trước hết, chỉ nhìn vào bản thân mình thôi ta đã cảm nhận được nhiều thiếu sót rồi: lời nói và hành động mâu thuẫn với nhau, vụng về trong những mối quan hệ xã hội, chuyện học hành, công việc không suôn sẻ như ý muốn. Chưa kể đôi khi ta còn khiến người khác tổn thương, thậm chí còn làm những việc khiến bản thân cảm thấy tội lỗi và hối hận. Và khi nhìn vào những người thân trong gia đình, bạn bè, đồng nghiệp, ta cũng nhận thấy những điều không-hoàn-hảo tương tự như vậy.</p><p>Nhưng dù cuộc sống có nhiều điều không hoàn hảo, chúng ta vẫn có thể học cách yêu thương và chấp nhận chính mình, chấp nhận người khác với tất cả những khiếm khuyết. Cuốn sách này sẽ dẫn dắt bạn đến với sự bình yên trong tâm hồn và học cách trân trọng những điều không hoàn hảo trong cuộc sống.</p>"
    },
    {
      id: 622543,
      product_name: "Khi Mọi Điều Không Như Ý - Bìa Cứng - Tặng Kèm Bookmark + Postcard - Độc Quyền Fahasa",
      author: "Hae Min",
      publisher: "Thế Giới",
      price: 179000,
      discount_price: 152000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-11_23.jpg",
      points: 1650,
      rank: 2,
      category_id: '12',
      product_url: "/khi-moi-dieu-khong-nhu-y-bia-cung-tang-kem-bookmark-postcard-doc-quyen?fhs_campaign=bxh",
      trend: 'up',
      voted: 1650, // Bổ sung tham số voted
      description: "<p><strong>Khi Mọi Điều Không Như Ý</strong></p><p>Bạn đã bao giờ cảm thấy như cuộc sống liên tục thử thách bạn, khiến bạn phải không ngừng vật lộn để vượt qua những khó khăn và thất bại bất ngờ?</p><p>Từ nỗi mất mát, đau khổ và cô đơn của những trải nghiệm không như ý - trong cuốn sách ấm áp này - Đại đức Hae Min ân cần dẫn dắt chúng ta tới nhận thức rằng những khoảnh khắc ấy thực sự có thể là cơ hội hiếm có để khám phá bản thân, đóng vai trò là bước đệm cho những điều lớn lao hơn trong cuộc sống.</p><p>Khi cuộc sống trở nên bận rộn và khó khăn, hãy tặng cho bản thân món quà đặc biệt là dừng lại. Dừng lại một lát, nhắm mắt lại và lắng nghe tiếng nói bên trong bạn. Cuốn sách này sẽ giúp bạn tìm thấy sự bình yên và sức mạnh ngay cả trong những thời điểm khó khăn nhất.</p>"
    },
    {
      id: 559174,
      product_name: "Stop Overthinking - Sống Tự Do, Không Âu Lo - 7 Bước Loại Bỏ Suy Nghĩ Tiêu Cực Và Bắt Đầu Suy Nghĩ Tích Cực",
      author: "Chase Hill, Scott Sharp",
      publisher: "Dân Trí",
      price: 95000,
      discount_price: 61750,
      discount_percent: 35,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390027.jpg",
      points: 1131,
      rank: 3,
      category_id: '12',
      product_url: "/stop-overthinking-song-tu-do-khong-au-lo-7-buoc-loai-bo-suy-nghi-tieu-cuc-va-bat-dau-suy-nghi-tich-cuc?fhs_campaign=bxh",
      trend: 'up',
      voted: 1131, // Bổ sung tham số voted
      description: "<p><strong>Stop Overthinking - Sống Tự Do, Không Âu Lo - 7 Bước Loại Bỏ Suy Nghĩ Tiêu Cực Và Bắt Đầu Suy Nghĩ Tích Cực</strong></p><p><em><strong>Bạn có đang bị:</strong></em></p><p>- Lo lắng và suy nghĩ quá nhiều về mọi việc?</p><p>- Khó ngủ vì đầu óc luôn bận rộn với những suy nghĩ tiêu cực?</p><p>- Luôn tự nghi ngờ bản thân và khả năng của mình?</p><p>- Cảm thấy mệt mỏi và căng thẳng vì những suy nghĩ tiêu cực?</p><p>Nếu bạn đang gặp phải những vấn đề này, thì cuốn sách 'Stop Overthinking - Sống Tự Do, Không Âu Lo: 7 Bước Loại Bỏ Suy Nghĩ Tiêu Cực và Bắt Đầu Suy Nghĩ Tích Cực' chính là giải pháp dành cho bạn. Cuốn sách cung cấp một hệ thống 7 bước thực tế giúp bạn thoát khỏi vòng xoáy suy nghĩ tiêu cực, xây dựng tư duy tích cực và tận hưởng cuộc sống tự do, không còn âu lo.</p>"
    },
    {
      id: 485940,
      product_name: "Con Đường Chẳng Mấy Ai Đi",
      author: "M. Scott Peck",
      publisher: "Dân Trí",
      price: 165000,
      discount_price: 112200,
      discount_percent: 32,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044009674.jpg",
      points: 999,
      rank: 4,
      category_id: '12',
      product_url: "/con-duong-chang-may-ai-di?fhs_campaign=bxh",
      trend: 'up',
      voted: 999, // Bổ sung tham số voted
      description: "<p><strong>Con Đường Chẳng Mấy Ai Đi</strong></p><p>Có lẽ không quyển sách nào trong thế kỷ này có tác động sâu sắc đến đời sống trí tuệ và tinh thần của chúng ta hơn Con Đường Chẳng Mấy Ai Đi. Với doanh số trên 10 triệu bản in trên toàn thế giới và được dịch sang hơn 25 ngôn ngữ, đây là một hiện tượng trong ngành xuất bản, với hơn mười năm nằm trong danh sách Best-sellers của New York Times.</p><p>Với cách hành văn kinh điển và thông điệp đầy thấu hiểu, quyển sách Con Đường Chẳng Mấy Ai Đi giúp chúng ta khám phá bản chất của các mối quan hệ và của một tinh thần trưởng thành. Quyển sách giúp chúng ta học cách phân biệt sự lệ thuộc với tình yêu đích thực, hiểu được ý nghĩa của sự cam kết và trách nhiệm trong các mối quan hệ, và khám phá sức mạnh của sự tha thứ.</p>"
    },
    {
      id: 420579,
      product_name: "30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu",
      author: "Lý Thượng Long",
      publisher: "Dân Trí",
      price: 135000,
      discount_price: 108000,
      discount_percent: 20,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935278605546.jpg",
      points: 917,
      rank: 5,
      category_id: '12',
      product_url: "/30-tuoi-moi-thu-chi-moi-bat-dau?fhs_campaign=bxh",
      trend: 'up',
      voted: 917, // Bổ sung tham số voted
      description: "<p><strong>30 TUỔI - MỌI THỨ CHỈ MỚI BẮT ĐẦU</strong></p><p><em>'Bởi vì, ba mươi tuổi mọi thứ chỉ mới bắt đầu. Đừng sợ đau khổ. Tất cả những khổ đau phải trải qua ở tuổi đôi mươi đều là món quà của cuộc sống.'</em></p><p><strong>Những khởi đầu ở tuổi 30</strong></p><p>Ba mươi tuổi, một phần ba quãng thời gian cuộc đời đã hết, cũng là mở đầu cho quãng đường mới mở ra. Cuốn sách này tặng bạn chìa khóa đi vào thế giới trưởng thành và tiến bộ, chính là sự kiên trì làm người khác phải cảm động, làm mọi khó khăn phải lui bước!</p><p>Viết một cuốn tự truyện khi sắp ba mươi, chẳng phải vì quá nhiều thành tựu, nên muốn khoe khoang một chút, mà là muốn ghi lại những trăn trở, suy tư và bài học quý giá trên hành trình trưởng thành. Cuốn sách này là lời động viên chân thành cho những ai đang ở ngưỡng cửa 30, rằng mọi thứ thực sự chỉ mới bắt đầu.</p>"
    }
  ];

export const getData_TAB4RANK_TN = [
    {
      id: 639555,
      product_name: "Búp Sen Xanh - Bìa Cứng - Tặng Kèm Obi + Postcard Hành Trình Cứu Nước - Độc Quyền Fahasa",
      author: "Sơn Tùng",
      publisher: "Kim Đồng",
      price: 110000,
      discount_price: 110000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-7.jpg",
      points: 5157,
      rank: 1,
      category_id: '14',
      product_url: "/bup-sen-xanh-bia-cung-tang-kem-obi-postcard-hanh-trinh-cuu-nuoc-doc-quyen?fhs_campaign=bxh",
      trend: 'up',
      voted: 5157, // Bổ sung tham số voted
      description: "<p><strong>Búp Sen Xanh</strong></p><p>'Búp Sen Xanh' là cuốn tiểu thuyết nổi tiếng nhất của nhà văn Sơn Tùng - người đã dành trọn cuộc đời mình để viết về Bác Hồ và các vị anh hùng, những nhà cách mạng lỗi lạc của dân tộc. Tác phẩm 'Búp Sen Xanh' kể về thời thơ ấu và một phần tuổi trẻ của cậu bé Nguyễn Sinh Cung ở làng quê Nghệ An, rồi kinh đô Huế - nơi đã nuôi dưỡng ý chí, tâm hồn và nhân cách của một nhà hoạt động cách mạng vĩ đại.</p><p>Kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh (19.5.1890 - 19.5.2025), Nhà xuất bản Kim Đồng và FAHASA trân trọng giới thiệu ấn bản đặc biệt <strong>Búp Sen Xanh</strong> - thể hiện lòng thành kính và tri ân sâu sắc đến vị lãnh tụ kính yêu của dân tộc. Ấn bản đặc biệt này được thiết kế bìa cứng sang trọng, kèm theo obi và postcard hành trình cứu nước độc quyền.</p>"
    },
    {
      id: 287910,
      product_name: "Búp Sen Xanh (Tái Bản 2020)",
      author: "Sơn Tùng",
      publisher: "NXB Kim Đồng",
      price: 72000,
      discount_price: 64500,
      discount_percent: 10,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935244826487.jpg",
      points: 2402,
      rank: 2,
      category_id: '14',
      product_url: "/bup-sen-xanh-tai-ban-2020?fhs_campaign=bxh",
      trend: 'up',
      voted: 2402, // Bổ sung tham số voted
      description: "<h2 dir='ltr'><span>BÚP SEN XANH - TUỔI THƠ CỦA MỘT LÃNH TỤ, HÀNH TRÌNH CỦA MỘT DÂN TỘC</span></h2><p dir='ltr'><span>Hành trình của một cậu bé xứ Nghệ mang trong mình khát vọng lớn lao.</span></p><p dir='ltr'><span>Lấy cảm hứng từ tuổi thơ của Chủ tịch Hồ Chí Minh, 'Búp Sen Xanh' tái hiện một cách sinh động những năm tháng đầu đời của Người - từ mái nhà đơn sơ nơi làng Sen, những bài học sâu sắc từ cha mẹ, đến những trăn trở trước vận mệnh đất nước. Mỗi trang sách là một mảnh ghép về hành trình hình thành tư tưởng, hun đúc ý chí, để rồi từ đó, một con người vĩ đại đã ra đi tìm đường cứu nước.</span></p><h2 dir='ltr'><span>VỀ TÁC GIẢ</span><span>: Sơn Tùng - Người viết trọn đời về Bác Hồ</span></h2><p dir='ltr'><span>Nhà văn Sơn Tùng (1928-2021) là tác giả của nhiều tác phẩm nổi tiếng viết về Chủ tịch Hồ Chí Minh và các nhà cách mạng Việt Nam. Ông đã dành cả cuộc đời để nghiên cứu, sưu tầm tư liệu và viết về Bác Hồ với tất cả lòng kính yêu và ngưỡng mộ.</span></p>"
    },
    {
      id: 679595,
      product_name: "Xứ Sở Miên Man - Bản Siêu Đặc Biệt - Tặng Kèm 1 Bookmark + 1 Postcard Hình Tác Giả + 1 Móc Khóa Nhựa Nhân Vật + 4 Thẻ Bài Tarot + 1 Thẻ Bài Tarot Limited Ngẫu Nhiên + 1 Đai Sách - Độc Quyền Fahasa",
      author: "Jun Phạm",
      publisher: "Phụ Nữ Việt Nam",
      price: 365000,
      discount_price: 365000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/u/n/untitled-1_3_26.jpg",
      points: 1659,
      rank: 3,
      category_id: '14',
      product_url: "/xu-so-mien-man-ban-sieu-dac-biet-tang-kem-1-bookmark-1-postcard-hinh-tac-gia-1-moc-khoa-nhua-nhan-vat-4-the-bai-tarot-1-the-bai-tarot-limited-ngau-nhien-1-dai-sach-doc-quyen?fhs_campaign=bxh",
      trend: 'up',
      voted: 1659, // Bổ sung tham số voted
      description: "<p><strong>Xứ Sở Miên Man</strong></p><p>Cuộc sống của người lớn như ngồi trong một chiếc tàu lửa, mặc nhiên đi về phía trước mà đôi khi bản thân không biết đang tìm kiếm điều gì. Giữa hàng vạn những chuyện mệt mỏi trong cuộc sống, đôi lúc bạn không còn đủ sức để mở lòng mình và sẻ chia với mọi người xung quanh. Và khi ấy, ai cũng mong một lần được bé lại, thả mình nhẹ trôi bên tiếng ru của mẹ và kỷ niệm chơi đùa cùng đám bạn mỗi chiều.</p><p>Mang trong mình câu hỏi 'Ai rồi cũng phải lớn lên, nhưng mấy ai có thể trẻ lại như thuở ban đầu?', Jun Phạm đưa bạn đọc đến với 'Xứ sở miên man' để tìm kiếm câu trả lời cho con đường trở về với niềm vui trong dáng vẻ của một đứa nhỏ được yêu thương. Đây là bản siêu đặc biệt độc quyền Fahasa với nhiều quà tặng hấp dẫn dành cho các độc giả nhí.</p>"
    },
    {
      id: 242971,
      product_name: "Tuổi Thơ Dữ Dội - Tập 1 (Tái Bản 2019)",
      author: "Phùng Quán",
      publisher: "NXB Kim Đồng",
      price: 80000,
      discount_price: 64000,
      discount_percent: 20,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_187162.jpg",
      points: 1098,
      rank: 4,
      category_id: '14',
      product_url: "/tuoi-tho-du-doi-tap-1-tai-ban-2019?fhs_campaign=bxh",
      trend: 'up',
      voted: 1098, // Bổ sung tham số voted
      description: "<p>'Tuổi Thơ Dữ Dội' là một câu chuyện hay, cảm động viết về tuổi thơ. Sách dày 404 trang mà người đọc không bao giờ muốn ngừng lại, bị lôi cuốn vì những nhân vật ngây thơ có, khôn ranh có, anh hùng có, vì những sự việc khi thì ly kỳ, khi thì hài hước, khi thì gây xúc động đến ứa nước mắt...</p><p>'Tuổi Thơ Dữ Dội' không phải chỉ là một câu chuyện cổ tích, mà là một câu chuyện có thật ở trần gian, ở đó, những con người tuổi nhỏ đã tham gia vào cuộc kháng chiến chống xâm lược bảo vệ Tổ quốc với một chuỗi những chiến công đầy ắp li kì và hấp dẫn. Đọc Tuổi Thơ Dữ Dội chính là đọc lại một phần lịch sử tuổi thơ Việt, thấm đẫm xúc động, cảm phục và tự hào về thế hệ thiếu niên anh hùng của đất nước.</p><p>Tập 1 kể về những nhân vật chính như Mừng, Quỳnh sơn ca, Lượm, Bồng da rắn... và những chiến công đầu tiên của họ trong tổ chức Thiếu niên trinh sát.</p>"
    },
    {
      id: 242972,
      product_name: "Tuổi Thơ Dữ Dội - Tập 2 (Tái Bản 2019)",
      author: "Phùng Quán",
      publisher: "NXB Kim Đồng",
      price: 80000,
      discount_price: 64000,
      discount_percent: 20,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_187163.jpg",
      points: 1065,
      rank: 5,
      category_id: '14',
      product_url: "/tuoi-tho-du-doi-tap-2-tai-ban-2019?fhs_campaign=bxh",
      trend: 'up',
      voted: 1065, // Bổ sung tham số voted
      description: "<p>'Tuổi Thơ Dữ Dội' là một câu chuyện hay, cảm động viết về tuổi thơ. Sách dày 404 trang mà người đọc không bao giờ muốn ngừng lại, bị lôi cuốn vì những nhân vật ngây thơ có, khôn ranh có, anh hùng có, vì những sự việc khi thì ly kỳ, khi thì hài hước, khi thì gây xúc động đến ứa nước mắt...</p><p>'Tuổi Thơ Dữ Dội' không phải chỉ là một câu chuyện cổ tích, mà là một câu chuyện có thật ở trần gian, ở đó, những con người tuổi nhỏ đã tham gia vào cuộc kháng chiến chống xâm lược bảo vệ Tổ quốc với một chuỗi những chiến công đầy ắp li kì và hấp dẫn. Đọc Tuổi Thơ Dữ Dội chính là đọc lại một phần lịch sử tuổi thơ Việt, thấm đẫm xúc động, cảm phục và tự hào về thế hệ thiếu niên anh hùng của đất nước.</p><p>Tập 2 tiếp tục hành trình của các chiến sĩ nhỏ tuổi với những thử thách cam go hơn, những hy sinh lớn lao hơn, nhưng cũng đầy ắp tình đồng đội và lòng yêu nước.</p>"
    }
  ];

// mock/rankData.ts
export const getData_TAB5RANK_SHNN = [
    {
      id: 428202,
      product_name: "Giáo Trình Chuẩn HSK 1 (Tái Bản 2023)",
      author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
      publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
      price: 158000,
      discount_price: 134000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043775662.jpg",
      points: 2286,
      rank: 1,
      category_id: '20',
      product_url: "/giao-trinh-chuan-hsk-1-tai-ban-2023?fhs_campaign=bxh",
      trend: 'up',
      voted: 2286, // Bổ sung tham số voted
      description: "<h2>Giáo Trình Chuẩn HSK 1 (Tái Bản 2023): Khởi Đầu Vững Chắc Cho Hành Trình Tiếng Trung</h2><p>Được biên soạn bởi đội ngũ tác giả uy tín gồm <strong>Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình</strong>, cuốn <strong>Giáo Trình Chuẩn HSK 1 (Tái Bản 2023)</strong> là tài liệu học tập không thể thiếu cho những ai mới bắt đầu học tiếng Trung. Cuốn sách được thiết kế khoa học, bám sát cấu trúc đề thi HSK thực tế, giúp người học vừa nắm vững kiến thức nền tảng vừa tự tin chinh phục kỳ thi HSK 1.</p><p><strong>Đặc điểm nổi bật:</strong></p><p><strong>- Bám sát khung chuẩn HSK:</strong> Nội dung sách được xây dựng theo đúng tiêu chuẩn của kỳ thi HSK 1, bao gồm từ vựng, ngữ pháp và các kỹ năng nghe, nói, đọc, viết cơ bản.</p><p><strong>- Phương pháp học hiện đại:</strong> Kết hợp giữa lý thuyết và thực hành, giúp người học tiếp thu kiến thức một cách tự nhiên và hiệu quả.</p><p><strong>- Tài liệu cập nhật:</strong> Bản tái bản 2023 được cập nhật những thay đổi mới nhất trong đề thi HSK, đảm bảo tính chính xác và phù hợp với xu hướng hiện tại.</p>"
    },
    {
      id: 433970,
      product_name: "Giáo Trình Chuẩn HSK 1 - Sách Bài Tập (Tái Bản 2023)",
      author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
      publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
      price: 158000,
      discount_price: 134000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786045893104_1_1.jpg",
      points: 2171,
      rank: 2,
      category_id: '20',
      product_url: "/giao-trinh-chuan-hsk-1-sach-bai-tap-tai-ban-2023-433970?fhs_campaign=bxh",
      trend: 'up',
      voted: 2171, // Bổ sung tham số voted
      description: "<h2>Sách Bài Tập Giáo Trình Chuẩn HSK 1 (Tái Bản 2023): Củng Cố Kiến Thức, Nâng Cao Kỹ Năng</h2><p>Là một phần không thể thiếu của bộ <strong>Giáo trình chuẩn HSK</strong>, cuốn <strong>Sách Bài Tập Giáo Trình Chuẩn HSK 1 (Tái Bản 2023)</strong> được biên soạn nhằm hỗ trợ tối đa người học trong quá trình ôn luyện và củng cố kiến thức tiếng Trung Quốc. Cuốn sách này là công cụ hoàn hảo để bạn thực hành những gì đã học từ sách giáo trình chính, đảm bảo sự tiến bộ vững chắc ngay từ những bước đầu tiên.</p><p><strong>Đặc điểm nổi bật:</strong></p><p><strong>- Bổ trợ toàn diện cho Giáo trình chuẩn HSK 1:</strong> Sách bài tập được thiết kế song song với nội dung của Giáo trình chuẩn HSK 1, giúp người học củng cố và mở rộng kiến thức đã học.</p><p><strong>- Đa dạng bài tập thực hành:</strong> Bao gồm nhiều dạng bài tập khác nhau từ cơ bản đến nâng cao, phù hợp với nhiều trình độ người học.</p><p><strong>- Phát triển toàn diện 4 kỹ năng:</strong> Các bài tập được thiết kế để rèn luyện đồng đều cả 4 kỹ năng nghe, nói, đọc, viết.</p>"
    },
    {
      id: 426074,
      product_name: "Giáo Trình Chuẩn HSK 2 - Bài Học",
      author: "Khương Lệ Bình",
      publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
      price: 198000,
      discount_price: 168000,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/2/0/2023_04_14_14_10_59_1-390x510.jpg",
      points: 1551,
      rank: 3,
      category_id: '20',
      product_url: "/giao-trinh-chuan-hsk-2-bai-hoc?fhs_campaign=bxh",
      trend: 'up',
      voted: 1551, // Bổ sung tham số voted
      description: "<h2>Giáo Trình Chuẩn HSK 2 - Bài Học: Nâng Tầm Tiếng Trung Của Bạn</h2><p>Nếu bạn đã hoàn thành Giáo trình chuẩn HSK 1 và sẵn sàng tiến xa hơn trên hành trình chinh phục tiếng Trung, <strong>Giáo Trình Chuẩn HSK 2 - Bài Học</strong> chính là cuốn sách lý tưởng dành cho bạn. Được biên soạn bởi đội ngũ tác giả uy tín, đứng đầu là <strong>Khương Lệ Bình</strong>, cuốn sách này không chỉ là một tài liệu học tiếng Trung thông thường mà còn là cầu nối vững chắc giúp bạn đạt được chứng chỉ HSK 2 một cách tự tin.</p><h3>Thiết Kế Toàn Diện: Kết Hợp Giảng Dạy và Luyện Thi</h3><p>Giáo Trình Chuẩn HSK 2 được xây dựng dựa trên nguyên tắc <strong>kết hợp chặt chẽ giữa giảng dạy và luyện thi</strong>. Mỗi bài học đều được thiết kế khoa học, bám sát cấu trúc đề thi HSK 2 thực tế, giúp người học vừa nắm vững kiến thức ngôn ngữ vừa làm quen với hình thức thi.</p><p><strong>- Mở rộng vốn từ vựng:</strong> Bổ sung thêm nhiều từ vựng mới và cụm từ thông dụng trong giao tiếp hàng ngày.</p><p><strong>- Nâng cao ngữ pháp:</strong> Giới thiệu các cấu trúc ngữ pháp phức tạp hơn, giúp người học diễn đạt ý tưởng một cách chính xác và tự nhiên.</p>"
    },
    {
      id: 475755,
      product_name: "Combo Sách Giáo Trình Chuẩn HSK 1 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn) (Tái Bản 2023)",
      author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
      publisher: "Tổng Hợp Thành Phố Hồ Chí Minh",
      price: 356000,
      discount_price: 295960,
      discount_percent: 16,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/5/1/51b92528-97f4-4150-a761-c6cff5a60d98.jpg",
      points: 1544,
      rank: 4,
      category_id: '20',
      product_url: "/combo-sach-giao-trinh-chuan-hsk-1-sach-bai-tap-giao-trinh-chuan-hsk-1-bo-2-cuon-tai-ban-2023?fhs_campaign=bxh",
      trend: 'up',
      voted: 1544, // Bổ sung tham số voted
      description: "<p><strong>Combo Sách Giáo Trình Chuẩn HSK 1 - Sách Bài Học Và Bài Tập (Bộ 2 Cuốn)</strong></p><p><strong>1. Giáo Trình Chuẩn HSK 1 - Sách Bài Tập</strong></p><p>Được chia thành 6 cấp độ với tổng cộng 18 cuốn,<strong>Giáo trình chuẩn HSK</strong>có những đặc điểm nổi bật sau:</p><p><strong>Kết hợp thi cử và giảng dạy:</strong>Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK.</p><p><strong>Bố cục chặt chẽ và khoa học:</strong>Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.</p><p><strong>Đề tài quen thuộc, nhiều tình huống thực tế:</strong> Bài học được thiết kế không quá dài và đề cập đến nhiều tình huống thực tế, giúp người học dễ dàng ứng dụng vào cuộc sống hàng ngày.</p><p>Combo này bao gồm cả sách bài học và sách bài tập, tạo thành bộ đôi hoàn hảo cho việc học tập và ôn luyện HSK 1.</p>"
    },
    {
      id: 346700,
      product_name: "Giáo Trình Chuẩn HSK 2 - Sách Bài Tập (Tái Bản 2021)",
      author: "Khương Lệ Bình",
      publisher: "NXB Tổng Hợp TPHCM",
      price: 188000,
      discount_price: 159500,
      discount_percent: 15,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_223258.jpg",
      points: 1353,
      rank: 5,
      category_id: '20',
      product_url: "/giao-trinh-chuan-hsk-2-sach-bai-tap-346700?fhs_campaign=bxh",
      trend: 'up',
      voted: 1353, // Bổ sung tham số voted
      description: "<p>Được chia thành 6 cấp độ với tổng cộng 18 cuốn, <strong>Giáo trình chuẩn HSK</strong> có những đặc điểm nổi bật sau:</p><p><strong>Kết hợp thi cử và giảng dạy:</strong> Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK.</p><p><strong>Bố cục chặt chẽ và khoa học:</strong> Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.</p><p>Đề tài quen thuộc, nhiều tình huống thực tế: Bài học được thiết kế không quá dài và đề cập đến nhiều tình huống thực tế, giúp người học dễ dàng ứng dụng kiến thức vào giao tiếp hàng ngày.</p><p><strong>Giáo Trình Chuẩn HSK 2 - Sách Bài Tập</strong> cung cấp hệ thống bài tập phong phú và đa dạng, giúp người học củng cố kiến thức từ vựng, ngữ pháp đã học trong sách bài học, đồng thời rèn luyện kỹ năng nghe, nói, đọc, viết một cách toàn diện.</p>"
    }
  ];
// mock/rankData.ts
export const getData_TAB6RANK_FOREIGN = [
    {
      id: 444271,
      product_name: "Mindset For IELTS Level 1 Student's Book With Updated Digital Pack",
      author: "Cambridge University Press",
      publisher: "Cambridge University Press",
      price: 461000,
      discount_price: 437000,
      discount_percent: 5,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9781009470377_1.jpg",
      points: 1254,
      rank: 1,
      category_id: '3165',
      product_url: "/mindset-for-ielts-level-1-sb-updated-digital-pack?fhs_campaign=bxh",
      trend: 'up',
      voted: 1254, // Bổ sung tham số voted
      description: "<p><span>MINDSET from Cambridge gets you inside the IELTS test with a unique blend of print and online content. </span></p><p><span>Topic-based units organised by skill make it easy to find what you want. Designed for students aiming for Band 5.5 in the Academic Module, this Student's Book Level 1 includes learning strategies, skills practice and exam practice to help you achieve your goal.</span></p><p>The online workbook includes focussed study to improve your IELTS skills and there are unit tests and practice tests to help develop your language and IELTS skills. This comprehensive package provides everything you need to succeed in your IELTS preparation journey.</p><p><strong>Key Features:</strong></p><p>- Updated digital pack with interactive exercises</p><p>- Focus on all four language skills: listening, reading, writing, and speaking</p><p>- Authentic test practice with detailed answer explanations</p><p>- Learning strategies tailored for IELTS success</p>"
    },
    {
      id: 176426,
      product_name: "English Grammar in Use Book w Ans",
      author: "Raymond Murphy",
      publisher: "Cambridge University",
      price: 198000,
      discount_price: 188000,
      discount_percent: 5,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9781108430425.jpg",
      points: 660,
      rank: 2,
      category_id: '3165',
      product_url: "/english-grammar-in-use-book-w-ans?fhs_campaign=bxh",
      trend: 'up',
      voted: 660, // Bổ sung tham số voted
      description: "<p><span>The world's best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world's best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This 'with answers' version is ideal for self-study.</span></p><p><strong>Key Features:</strong></p><p>- 145 units covering all essential grammar points</p><p>- Additional exercises for extra practice</p><p>- Study guide to help find difficult grammar points</p><p>- Comprehensive answer key for self-checking</p><p>- Suitable for intermediate to upper-intermediate learners (B1-B2)</p><p>Perfect for classroom use or self-study, this book has helped millions of learners improve their English grammar skills worldwide.</p>"
    },
    {
      id: 268909,
      product_name: "A2 Key for Schools Trainer 1 for the Revised 2020 Exam Six Practice test With Answers and Teacher's Notes With Downloadable Audio",
      author: "Cambridge University Press",
      publisher: "Cambridge University Press",
      price: 200000,
      discount_price: 190000,
      discount_percent: 5,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_15599.jpg",
      points: 627,
      rank: 3,
      category_id: '3165',
      product_url: "/a2-key-for-schools-trainer-1-for-the-revised-2020-exam-six-practice-test-with-answers-and-teacher-s-notes-with-downloadable-audio?fhs_campaign=bxh",
      trend: 'up',
      voted: 627, // Bổ sung tham số voted
      description: "<p><strong>A2 Key for Schools Trainer 1 for the Revised 2020 Exam Six Practice test With Answers and Teacher's Notes With Downloadable Audio</strong></p><p>Bao gồm 6 bài thi mẫu đầy đủ bốn kỹ năng kèm theo hướng dẫn dễ hiểu và các mẹo làm bài thi nhằm đảm bảo thành công trong kỳ thi.</p><p>- 2 bài thi mẫu đầu tiên kèm theo các hướng dẫn như: 42 mẹo làm bài, 24 lời khuyên, 12 điểm ghi nhớ, các hoạt động đào tạo và luyện thi, định hướng làm bài và các câu hỏi thường gặp, để làm bài thi hiệu quả</p><p>- Xây dựng sự tự tin trong mỗi phần thi bằng cách làm từng bước theo hướng dẫn và các chiến lược trong các bài tập Thực hành và Luyện tập</p><p>- Downloadable audio files for authentic listening practice</p><p>- Detailed teacher's notes with additional teaching ideas and activities</p><p>- Complete answer key and audio scripts for comprehensive self-study</p><p>This trainer is specifically designed for school-aged learners preparing for the revised 2020 A2 Key for Schools exam.</p>"
    },
    {
      id: 275948,
      product_name: "Oxford Advanced Learner's Dictionary: Paperback - 10th Edition (With 1 Year's Access To Both Premium Online And App)",
      author: "Diana Lea, Jennifer Bradbery",
      publisher: "Oxford University Press",
      price: 660000,
      discount_price: 627000,
      discount_percent: 5,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9780194798488-dd.jpg",
      points: 611,
      rank: 4,
      category_id: '3165',
      product_url: "/oxford-advanced-learner-s-dictionary-paperback-10th-edition-with-1-year-s-access-to-both-premium-online-and-app?fhs_campaign=bxh",
      trend: 'up',
      voted: 611, // Bổ sung tham số voted
      description: "<p style='text-align:justify'><strong>Oxford Advanced Learner's Dictionary: Paperback - 10th Edition</strong></p><p style='text-align:justify'>The Oxford Advanced Learner's Dictionary is the world's bestselling advanced level dictionary for learners of English.</p><p style='text-align:justify'>Now in its 10th edition, the Oxford Advanced Learner's Dictionary, or OALD, is your complete guide to learning English vocabulary with definitions that learners can understand, example sentences showing language in use, and the new Oxford 3000™ and Oxford 5000™ word lists providing core vocabulary that every student needs to learn.</p><p style='text-align:justify'>OALD is more than a dictionary. Take your English skills to the next level with extra resources and practice including the online iSpeaker and iWriter, or practise words anytime, anywhere with the Oxford Advanced Learner's Dictionary app.</p><p style='text-align:justify'><strong>New in the 10th Edition:</strong></p><p style='text-align:justify'>- Over 1,000 new words and meanings</p><p style='text-align:justify'>- Oxford 3000 and Oxford 5000 word lists</p><p style='text-align:justify'>- 1-year access to premium online and app content</p><p style='text-align:justify'>- Enhanced iSpeaker and iWriter tools</p>"
    },
    {
      id: 179814,
      product_name: "Oxford Picture Dictionary Third Edition: English - Vietnamese Edition",
      author: "Oxford",
      publisher: "OUP Oxford",
      price: 411000,
      discount_price: 390450,
      discount_percent: 5,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_193948.jpg",
      points: 603,
      rank: 5,
      category_id: '3165',
      product_url: "/oxford-picture-dictionary-third-edition-english-vietnamese-edition?fhs_campaign=bxh",
      trend: 'up',
      voted: 603, // Bổ sung tham số voted
      description: "<p><span>Illustrations present over 4,000 English words and phrases within meaningful, real-life contexts 11 new and expanded topics including Job Search, Career Planning, and Digital Literacy prepare students to meet the requirements of their daily lives Updated activities prepare students for work, academic study, and citizenship Oxford 3000™ vocabulary ensures students learn the most useful and important words</span></p><p><strong>Key Features of the Third Edition:</strong></p><p>- Vibrant illustrations and clear photos make vocabulary easy to understand and remember</p><p>- Bilingual English-Vietnamese edition perfect for Vietnamese learners</p><p>- Updated content reflects modern life and workplace needs</p><p>- New topics include digital literacy, career planning, and job search skills</p><p>- Comprehensive vocabulary building with contextual learning</p><p>- Suitable for learners of all ages and levels</p><p>This dictionary is an essential tool for anyone learning English, providing visual context that makes vocabulary acquisition faster and more effective.</p>"
    }
  ];

// mock/rankData.ts
export const getData_TAB7RANK_KHAC = [
    {
      id: 690515,
      product_name: "Bác Hồ Viết Tuyên Ngôn Độc Lập - Ấn Bản Kỉ Niệm 80 Năm Quốc Khánh - Tặng Kèm Postcard - Độc Quyền Fahasa",
      author: "Kiều Mai Sơn",
      publisher: "Kim Đồng",
      price: 75000,
      discount_price: 75000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/z/6/z6879296494675_70a537fe23016622b5f036060d3cad64.jpg",
      points: 15305,
      rank: 1,
      category_id: 'rest',
      product_url: "/bac-ho-viet-tuyen-ngon-doc-lap-an-ban-ki-niem-80-nam-quoc-khanh-tang-kem-postcard-doc-quyen?fhs_campaign=bxh",
      trend: 'up',
      voted: 15305, // Bổ sung tham số voted
      description: "<p><strong>Bác Hồ Viết Tuyên Ngôn Độc Lập</strong></p><p><em>'... Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.'</em> - Tuyên ngôn Độc lập -</p><p>Nhân dịp kỉ niệm 80 năm Cách mạng Tháng Tám thành công và Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, Nhà xuất bản Kim Đồng phối hợp cùng Fahasa phát hành ấn bản đặc biệt cuốn sách 'Bác Hồ viết Tuyên ngôn Độc lập' của tác giả Kiều Mai Sơn.</p><p>Cuốn sách tái hiện sống động không khí lịch sử của những ngày tháng Tám năm 1945, khi Chủ tịch Hồ Chí Minh viết bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa. Tác phẩm không chỉ là tài liệu lịch sử quý giá mà còn là nguồn cảm hứng về tinh thần yêu nước và ý chí độc lập dân tộc.</p><p><strong>Đặc điểm nổi bật:</strong></p><p>- Ấn bản kỉ niệm 80 năm Quốc khánh đặc biệt</p><p>- Tặng kèm postcard độc quyền Fahasa</p><p>- Tài liệu lịch sử quý giá về sự kiện trọng đại của dân tộc</p>"
    },
    {
      id: 575195,
      product_name: "Toán 12 - Tập 2 (Chân Trời) (Chuẩn)",
      author: "Nhiều Tác Giả",
      publisher: "Giáo Dục Việt Nam",
      price: 14000,
      discount_price: 14000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393357.jpg",
      points: 5643,
      rank: 2,
      category_id: 'rest',
      product_url: "/toan-12-tap-2-chan-troi-chuan?fhs_campaign=bxh",
      trend: 'up',
      voted: 5643, // Bổ sung tham số voted
      description: "<p><strong>Toán 12 - Tập 2 (Chân Trời) (Chuẩn)</strong></p><p>Sách biên soạn theo chương trình giáo dục phổ thông mới. Các kiến thức trong sách được chủ yếu xuất phát từ những tình huống của cuộc sống quanh ta và trở lại giúp ta giải quyết những vấn đề của cuộc sống. Vì thế, khi học Toán theo cuốn sách này, các em sẽ cảm nhận được rằng, Toán học thật là gần gũi.</p><p>Cung cấp cho các em những kiến thức chuyên sâu, bổ ích, lí thú và thiết thực, giúp các em hình thành kĩ năng thực hành, khả năng logic, kĩ năng vận dụng kiến thức toán học vào giải quyết vấn đề thực tế.</p><p><strong>Nội dung chính:</strong></p><p>- Phần Đại số và Giải tích nâng cao</p><p>- Hình học không gian và hình học giải tích</p><p>- Bài tập vận dụng và nâng cao</p><p>- Ôn tập chuẩn bị cho kỳ thi THPT Quốc gia</p><p>Sách phù hợp với chương trình giáo dục phổ thông mới, giúp học sinh lớp 12 nắm vững kiến thức và kỹ năng cần thiết.</p>"
    },
    {
      id: 575164,
      product_name: "Vật Lí 12 (Kết Nối) (Chuẩn)",
      author: "Nhiều Tác Giả",
      publisher: "Giáo Dục Việt Nam",
      price: 17000,
      discount_price: 17000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040392565.jpg",
      points: 4983,
      rank: 3,
      category_id: 'rest',
      product_url: "/vat-li-12-ket-noi-chuan?fhs_campaign=bxh",
      trend: 'up',
      voted: 4983, // Bổ sung tham số voted
      description: "<p><strong>Vật Lí 12 (Kết Nối) (Chuẩn)</strong></p><p>Sách biên soạn theo chương trình giáo dục phổ thông mới. Nội dung trong sách giúp các em hiểu rõ các định nghĩa, định luật và các định lý cơ bản trong vật lí, cung cấp cho các em những kiến thức chuyên sâu, bổ ích, lí thú và thiết thực, giúp các em hình thành kĩ năng thực hành, kĩ năng vận dụng kiến thức đã học ở phần nội dung cơ bản vào giải quyết vấn đề thực tế.</p><p><strong>Nội dung chính:</strong></p><p>- Dao động cơ và sóng cơ</p><p>- Dòng điện xoay chiều</p><p>- Sóng ánh sáng và lượng tử ánh sáng</p><p>- Hạt nhân nguyên tử và vi mô</p><p>- Thí nghiệm thực hành và bài tập vận dụng</p><p>Sách được biên soạn theo phương pháp kết nối, giúp học sinh thấy được mối liên hệ giữa các kiến thức vật lí với thực tiễn cuộc sống và các môn học khác.</p>"
    },
    {
      id: 437131,
      product_name: "Toán 11 - Tập 2 (Chân Trời Sáng Tạo) (Chuẩn)",
      author: "Nhiều Tác Giả",
      publisher: "Giáo Dục Việt Nam",
      price: 16000,
      discount_price: 16000,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040351968.jpg",
      points: 4884,
      rank: 4,
      category_id: 'rest',
      product_url: "/toan-11-tap-2-chan-troi-sang-tao-2023?fhs_campaign=bxh",
      trend: 'up',
      voted: 4884, // Bổ sung tham số voted
      description: "<p style='text-align:justify'><strong>Toán 11 - Tập 2 (Chân Trời Sáng Tạo)</strong></p><p style='text-align:justify'>Để chuẩn bị cho năm học mới 2023 - 2024, thì Nhà xuất bản Giáo dục Việt Nam đã chính thức công bố <strong>Bộ SGK Lớp 11 - Chân trời sáng tạo</strong> tới các giáo viên, học sinh, bậc phụ huynh và các trường học hiện nay. Toàn bộ nội dung trong bộ sách này, sẽ được cập nhật nội dung hoàn toàn mới nhất dành cho học sinh cũng như thầy cô giáo.</p><p style='text-align:justify'><em>Bộ sách Chân trời sáng tạo</em> hàm ẩn ý nghĩa về sự rộng mở của một thế giới tri thức, sự vô hạn của kiến thức khoa học và công nghệ, sự bao la của thế giới nghệ thuật và hướng đến những giá trị tinh thần tốt đẹp của nhân loại.</p><p style='text-align:justify'><strong>Nội dung tập 2 bao gồm:</strong></p><p style='text-align:justify'>- Tổ hợp và xác suất</p><p style='text-align:justify'>- Dãy số, cấp số cộng và cấp số nhân</p><p style='text-align:justify'>- Giới hạn và đạo hàm</p><p style='text-align:justify'>- Phép dời hình và đồng dạng trong mặt phẳng</p><p style='text-align:justify'>Sách được thiết kế hiện đại, hình ảnh minh họa sinh động, giúp học sinh tiếp thu kiến thức một cách dễ dàng và hứng thú.</p>"
    },
    {
      id: 556492,
      product_name: "Global Success - Tiếng Anh 12 - Sách Học Sinh (2024)",
      author: "Hoàng Văn Vân, Vũ Hải Hà, Chu Quang Bình, Hoàng Thị Hồng Hải, Nguyễn Thị Kim Phượng",
      publisher: "Giáo Dục Việt Nam",
      price: 70000,
      discount_price: 67200,
      discount_percent: 0,
      image_url: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786040393708.jpg",
      points: 4679,
      rank: 5,
      category_id: 'rest',
      product_url: "/tieng-anh-12-global-success-sach-hoc-sinh-y4?fhs_campaign=bxh",
      trend: 'up',
      voted: 4679, // Bổ sung tham số voted
      description: "<p><strong>Global Success - Tiếng Anh 12 - Sách Học Sinh</strong></p><p><strong>Global Success - Tiếng Anh 12 - Sách Học Sinh</strong> được Nhà xuất bản Giáo dục Việt Nam tổ chức biên soạn theo 'Chương trình giáo dục phổ thông: Chương trình môn Tiếng Anh' (từ lớp 3 đến lớp 12) ban hành theo Thông tư 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ Giáo dục và Đào tạo, nối tiếp bộ sách tiếng Anh bậc tiểu học (Tiếng Anh 3, Tiếng Anh 4, Tiếng Anh 5), bộ sách tiếng Anh trung học cơ sở (Tiếng Anh 6, Tiếng Anh 7, Tiếng Anh 8, Tiếng Anh 9, Tiếng Anh 10) và Tiếng Anh 11.</p><p><strong>Global Success - Tiếng Anh 12 - Sách Học Sinh</strong> được biên soạn theo đường hướng giao tiếp, giúp học sinh phát triển năng lực giao tiếp bằng tiếng Anh thông qua bốn kỹ năng nghe, nói, đọc, viết, trong đó ưu tiên phát triển hai kỹ năng nghe và nói.</p><p><strong>Đặc điểm nổi bật:</strong></p><p>- Nội dung cập nhật, phù hợp với chương trình mới</p><p>- Phương pháp tiếp cận hiện đại, lấy người học làm trung tâm</p><p>- Chú trọng phát triển năng lực giao tiếp</p><p>- Tích hợp các chủ đề văn hóa, xã hội có tính toàn cầu</p><p>Sách được thiết kế đẹp mắt, hình ảnh minh họa sinh động, tạo hứng thú học tập cho học sinh.</p>"
    }
  ];


export const introProducts = {
    "category_name": "Giới Thiệu",
    "products": [
        {
            "id": "270945",
            "product_id": "270945",
            "product_name": "Mai - Nương Lệ - Cốt",
            "product_url": "mai-nuong-le-cot",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/m/a/mai-nuong-le-cot-01.jpg",
            "image_label": "Mai - Nương Lệ - Cốt",
            "original_price": 79000,
            "final_price": 67000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 87,
                "rating_summary": 87
            },
            "sku": "8935235224674",
            "entity_id": 270945,
            "category_mid_id": 9,
            "display_final_price": 67000,
            "display_price": 79000,
            "product_name": "Mai - Nương Lệ - Cốt",
            "image": "https://cdn1.fahasa.com/media/catalog/product/m/a/mai-nuong-le-cot-01.jpg",
            "name_a_title": "Mai - Nương Lệ - Cốt",
            "name_a_label": "Mai - Nương Lệ - Cốt",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 3,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "287295",
            "product_id": "287295",
            "product_name": "Thầy Lang",
            "product_url": "thay-lang-287295",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_38347.jpg",
            "image_label": "Thầy Lang",
            "original_price": 107000,
            "final_price": 85500,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "9786049863943",
            "entity_id": 287295,
            "category_mid_id": 9,
            "display_final_price": 85500,
            "display_price": 107000,
            "product_name": "Thầy Lang",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_38347.jpg",
            "name_a_title": "Thầy Lang",
            "name_a_label": "Thầy Lang",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "394835",
            "product_id": "394835",
            "product_name": "Làm Đĩ (Tái Bản 2022)",
            "product_url": "lam-di-tai-ban-2022-394835",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604641.jpg",
            "image_label": "Làm Đĩ (Tái Bản 2022)",
            "original_price": 57000,
            "final_price": 45500,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936067604641",
            "entity_id": 394835,
            "category_mid_id": 9,
            "display_final_price": 45500,
            "display_price": 57000,
            "product_name": "Làm Đĩ (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604641.jpg",
            "name_a_title": "Làm Đĩ (Tái Bản 2022)",
            "name_a_label": "Làm Đĩ (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "156785",
            "product_id": "156785",
            "product_name": "Ký Ức Nửa Đêm (Tái Bản 2016)",
            "product_url": "ky-uc-nua-dem-tai-ban-2016",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095622368_3.jpg",
            "image_label": "Ký Ức Nửa Đêm (Tái Bản 2016)",
            "original_price": 120000,
            "final_price": 96000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 96,
                "rating_summary": 96
            },
            "sku": "8935095622368",
            "entity_id": 156785,
            "category_mid_id": 9,
            "display_final_price": 96000,
            "display_price": 120000,
            "product_name": "Ký Ức Nửa Đêm (Tái Bản 2016)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095622368_3.jpg",
            "name_a_title": "Ký Ức Nửa Đêm (Tái Bản 2016)",
            "name_a_label": "Ký Ức Nửa Đêm (Tái Bản 2016)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 5,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "399894",
            "product_id": "399894",
            "product_name": "Gánh Hàng Hoa (Tái Bản 2022)",
            "product_url": "ganh-hang-hoa-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043495980.jpg",
            "image_label": "Gánh Hàng Hoa (Tái Bản 2022)",
            "original_price": 56000,
            "final_price": 44500,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "9786043495980",
            "entity_id": 399894,
            "category_mid_id": 9,
            "display_final_price": 44500,
            "display_price": 56000,
            "product_name": "Gánh Hàng Hoa (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043495980.jpg",
            "name_a_title": "Gánh Hàng Hoa (Tái Bản 2022)",
            "name_a_label": "Gánh Hàng Hoa (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "397044",
            "product_id": "397044",
            "product_name": "Đấu Trường U Ám",
            "product_url": "dau-truong-u-am-397044",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936203361360.jpg",
            "image_label": "Đấu Trường U Ám",
            "original_price": 150000,
            "final_price": 120000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936203361360",
            "entity_id": 397044,
            "category_mid_id": 9,
            "display_final_price": 120000,
            "display_price": 150000,
            "product_name": "Đấu Trường U Ám",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936203361360.jpg",
            "name_a_title": "Đấu Trường U Ám",
            "name_a_label": "Đấu Trường U Ám",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "268044",
            "product_id": "268044",
            "product_name": "Trà Hoa Nữ (Tái Bản 2019)",
            "product_url": "tra-hoa-nu-tai-ban-2019-268044",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_14863.jpg",
            "image_label": "Trà Hoa Nữ (Tái Bản 2019)",
            "original_price": 80000,
            "final_price": 68000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935235224384",
            "entity_id": 268044,
            "category_mid_id": 9,
            "display_final_price": 68000,
            "display_price": 80000,
            "product_name": "Trà Hoa Nữ (Tái Bản 2019)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_14863.jpg",
            "name_a_title": "Trà Hoa Nữ (Tái Bản 2019)",
            "name_a_label": "Trà Hoa Nữ (Tái Bản 2019)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 5,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "399893",
            "product_id": "399893",
            "product_name": "Đời Mưa Gió (Tái Bản 2022)",
            "product_url": "doi-mua-gio-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043495973.jpg",
            "image_label": "Đời Mưa Gió (Tái Bản 2022)",
            "original_price": 52000,
            "final_price": 41500,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "9786043495973",
            "entity_id": 399893,
            "category_mid_id": 9,
            "display_final_price": 41500,
            "display_price": 52000,
            "product_name": "Đời Mưa Gió (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043495973.jpg",
            "name_a_title": "Đời Mưa Gió (Tái Bản 2022)",
            "name_a_label": "Đời Mưa Gió (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "384401",
            "product_id": "384401",
            "product_name": "Bỉ Vỏ",
            "product_url": "bi-vo-384401",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_5298.jpg",
            "image_label": "Bỉ Vỏ",
            "original_price": 320000,
            "final_price": 272000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936203360875",
            "entity_id": 384401,
            "category_mid_id": 9,
            "display_final_price": 272000,
            "display_price": 320000,
            "product_name": "Bỉ Vỏ",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_5298.jpg",
            "name_a_title": "Bỉ Vỏ",
            "name_a_label": "Bỉ Vỏ",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "363313",
            "product_id": "363313",
            "product_name": "Thẩm Thanh Truyện Và Xuân Hương Truyện",
            "product_url": "tham-thanh-truyen-va-xuan-huong-truyen",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/h/tham-thanh-truyen-va-xuan-huong-truyen_b_a.jpg",
            "image_label": "Thẩm Thanh Truyện Và Xuân Hương Truyện",
            "original_price": 82000,
            "final_price": 69500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935235229136",
            "entity_id": 363313,
            "category_mid_id": 9,
            "display_final_price": 69500,
            "display_price": 82000,
            "product_name": "Thẩm Thanh Truyện Và Xuân Hương Truyện",
            "image": "https://cdn1.fahasa.com/media/catalog/product/t/h/tham-thanh-truyen-va-xuan-huong-truyen_b_a.jpg",
            "name_a_title": "Thẩm Thanh Truyện Và Xuân Hương Truyện",
            "name_a_label": "Thẩm Thanh Truyện Và Xuân Hương Truyện",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "395132",
            "product_id": "395132",
            "product_name": "Tắt Đèn (Tái Bản 2022)",
            "product_url": "tat-den-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067605068.jpg",
            "image_label": "Tắt Đèn (Tái Bản 2022)",
            "original_price": 50000,
            "final_price": 40000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936067605068",
            "entity_id": 395132,
            "category_mid_id": 9,
            "display_final_price": 40000,
            "display_price": 50000,
            "product_name": "Tắt Đèn (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067605068.jpg",
            "name_a_title": "Tắt Đèn (Tái Bản 2022)",
            "name_a_label": "Tắt Đèn (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "227885",
            "product_id": "227885",
            "product_name": "Xác Phàm",
            "product_url": "xac-pham-227885",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/1/4/14.bia_xac_pham.jpg",
            "image_label": "Xác Phàm",
            "original_price": 99000,
            "final_price": 49500,
            "discount_percent": 50,
            "rating": {
                "reviews_count": 87,
                "rating_summary": 87
            },
            "sku": "8936158590204",
            "entity_id": 227885,
            "category_mid_id": 9,
            "display_final_price": 49500,
            "display_price": 99000,
            "product_name": "Xác Phàm",
            "image": "https://cdn1.fahasa.com/media/catalog/product/1/4/14.bia_xac_pham.jpg",
            "name_a_title": "Xác Phàm",
            "name_a_label": "Xác Phàm",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 5,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "394260",
            "product_id": "394260",
            "product_name": "Giông Tố (Tái Bản 2022)",
            "product_url": "giong-to-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604818.jpg",
            "image_label": "Giông Tố (Tái Bản 2022)",
            "original_price": 86000,
            "final_price": 68500,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936067604818",
            "entity_id": 394260,
            "category_mid_id": 9,
            "display_final_price": 68500,
            "display_price": 86000,
            "product_name": "Giông Tố (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604818.jpg",
            "name_a_title": "Giông Tố (Tái Bản 2022)",
            "name_a_label": "Giông Tố (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "388646",
            "product_id": "388646",
            "product_name": "Đợi Khi Tôi Có Tội (Bộ 3 Tập)",
            "product_url": "doi-khi-toi-co-toi-bo-3-tap",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/0/900x900_80b653e41e2243b984bde3e0aca7025c.jpg",
            "image_label": "Đợi Khi Tôi Có Tội (Bộ 3 Tập)",
            "original_price": 498000,
            "final_price": 398000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935212358781",
            "entity_id": 388646,
            "category_mid_id": 9,
            "display_final_price": 398000,
            "display_price": 498000,
            "product_name": "Đợi Khi Tôi Có Tội (Bộ 3 Tập)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/9/0/900x900_80b653e41e2243b984bde3e0aca7025c.jpg",
            "name_a_title": "Đợi Khi Tôi Có Tội (Bộ 3 Tập)",
            "name_a_label": "Đợi Khi Tôi Có Tội (Bộ 3 Tập)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "234767",
            "product_id": "234767",
            "product_name": "Ngàn Mặt Trời Rực Rỡ (Tái Bản 2019)",
            "product_url": "ngan-mat-troi-ruc-ro-tai-ban-2019",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235220324_11.jpg",
            "image_label": "Ngàn Mặt Trời Rực Rỡ (Tái Bản 2019)",
            "original_price": 130000,
            "final_price": 110500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 98,
                "rating_summary": 98
            },
            "sku": "8935235220324",
            "entity_id": 234767,
            "category_mid_id": 9,
            "display_final_price": 110500,
            "display_price": 130000,
            "product_name": "Ngàn Mặt Trời Rực Rỡ (Tái Bản 2019)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235220324_11.jpg",
            "name_a_title": "Ngàn Mặt Trời Rực Rỡ (Tái Bản 2019)",
            "name_a_label": "Ngàn Mặt Trời Rực Rỡ (Tái Bản 2019)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 51,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "152576",
            "product_id": "152576",
            "product_name": "Cô Ấy Không Ở Đó",
            "product_url": "co-ay-khong-o-do",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095622078_2.jpg",
            "image_label": "Cô Ấy Không Ở Đó",
            "original_price": 130000,
            "final_price": 104000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 78,
                "rating_summary": 78
            },
            "sku": "8935095622078",
            "entity_id": 152576,
            "category_mid_id": 9,
            "display_final_price": 104000,
            "display_price": 130000,
            "product_name": "Cô Ấy Không Ở Đó",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095622078_2.jpg",
            "name_a_title": "Cô Ấy Không Ở Đó",
            "name_a_label": "Cô Ấy Không Ở Đó",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 8652,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "288993",
            "product_id": "288993",
            "product_name": "Tắt Đèn (Tái Bản 2020)",
            "product_url": "tat-den-tai-ban-2020",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_39597.jpg",
            "image_label": "Tắt Đèn (Tái Bản 2020)",
            "original_price": 50000,
            "final_price": 40000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 93,
                "rating_summary": 93
            },
            "sku": "8935095630011",
            "entity_id": 288993,
            "category_mid_id": 9,
            "display_final_price": 40000,
            "display_price": 50000,
            "product_name": "Tắt Đèn (Tái Bản 2020)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_39597.jpg",
            "name_a_title": "Tắt Đèn (Tái Bản 2020)",
            "name_a_label": "Tắt Đèn (Tái Bản 2020)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 3,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "388924",
            "product_id": "388924",
            "product_name": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Mềm)",
            "product_url": "nam-cao-song-mon-tai-ban-bia-mem",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/s/o/songmon-_1_.jpg",
            "image_label": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Mềm)",
            "original_price": 79000,
            "final_price": 63000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935236424998",
            "entity_id": 388924,
            "category_mid_id": 9,
            "display_final_price": 63000,
            "display_price": 79000,
            "product_name": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Mềm)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/s/o/songmon-_1_.jpg",
            "name_a_title": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Mềm)",
            "name_a_label": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Mềm)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "388926",
            "product_id": "388926",
            "product_name": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Cứng)",
            "product_url": "nam-cao-song-mon-tai-ban-bia-cung",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/s/o/songmon.jpg",
            "image_label": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Cứng)",
            "original_price": 98000,
            "final_price": 78000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935236424981",
            "entity_id": 388926,
            "category_mid_id": 9,
            "display_final_price": 78000,
            "display_price": 98000,
            "product_name": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Cứng)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/s/o/songmon.jpg",
            "name_a_title": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Cứng)",
            "name_a_label": "Nam Cao - Sống Mòn (Tái Bản) (Bìa Cứng)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "212880",
            "product_id": "212880",
            "product_name": "Vũ Trọng Phụng - Lục Xì (Khổ Nhỏ)",
            "product_url": "vu-trong-phung-luc-xi-so-tay-vhvnhd",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_34834.jpg",
            "image_label": "Vũ Trọng Phụng - Lục Xì (Khổ Nhỏ)",
            "original_price": 38000,
            "final_price": 32000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 93,
                "rating_summary": 93
            },
            "sku": "9786049548567",
            "entity_id": 212880,
            "category_mid_id": 9,
            "display_final_price": 32000,
            "display_price": 38000,
            "product_name": "Vũ Trọng Phụng - Lục Xì (Khổ Nhỏ)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_34834.jpg",
            "name_a_title": "Vũ Trọng Phụng - Lục Xì (Khổ Nhỏ)",
            "name_a_label": "Vũ Trọng Phụng - Lục Xì (Khổ Nhỏ)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 3,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "225573",
            "product_id": "225573",
            "product_name": "Hồ In Bóng Núi",
            "product_url": "ho-in-bong-nui",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_179470.jpg",
            "image_label": "Hồ In Bóng Núi",
            "original_price": 129000,
            "final_price": 103000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 93,
                "rating_summary": 93
            },
            "sku": "9786049638992",
            "entity_id": 225573,
            "category_mid_id": 9,
            "display_final_price": 103000,
            "display_price": 129000,
            "product_name": "Hồ In Bóng Núi",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_179470.jpg",
            "name_a_title": "Hồ In Bóng Núi",
            "name_a_label": "Hồ In Bóng Núi",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 12,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "399350",
            "product_id": "399350",
            "product_name": "Đài Các Tiểu Thư",
            "product_url": "dai-cac-tieu-thu",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043236972.jpg",
            "image_label": "Đài Các Tiểu Thư",
            "original_price": 98000,
            "final_price": 73500,
            "discount_percent": 25,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "9786043236972",
            "entity_id": 399350,
            "category_mid_id": 9,
            "display_final_price": 73500,
            "display_price": 98000,
            "product_name": "Đài Các Tiểu Thư",
            "image": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043236972.jpg",
            "name_a_title": "Đài Các Tiểu Thư",
            "name_a_label": "Đài Các Tiểu Thư",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "347016",
            "product_id": "347016",
            "product_name": "Tàn Ngày Để Lại",
            "product_url": "tan-ngay-de-lai",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_222112.jpg",
            "image_label": "Tàn Ngày Để Lại",
            "original_price": 169000,
            "final_price": 143500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935235228511",
            "entity_id": 347016,
            "category_mid_id": 9,
            "display_final_price": 143500,
            "display_price": 169000,
            "product_name": "Tàn Ngày Để Lại",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_222112.jpg",
            "name_a_title": "Tàn Ngày Để Lại",
            "name_a_label": "Tàn Ngày Để Lại",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "262735",
            "product_id": "262735",
            "product_name": "Phục Sinh",
            "product_url": "phuc-sinh-262735",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_10034.jpg",
            "image_label": "Phục Sinh",
            "original_price": 185000,
            "final_price": 148000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "9786049637926",
            "entity_id": 262735,
            "category_mid_id": 9,
            "display_final_price": 148000,
            "display_price": 185000,
            "product_name": "Phục Sinh",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_10034.jpg",
            "name_a_title": "Phục Sinh",
            "name_a_label": "Phục Sinh",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "273257",
            "product_id": "273257",
            "product_name": "Hạnh Phúc Trong Năm Lời Nói Dối",
            "product_url": "hanh-phuc-trong-nam-loi-noi-doi",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_19553.jpg",
            "image_label": "Hạnh Phúc Trong Năm Lời Nói Dối",
            "original_price": 89000,
            "final_price": 69000,
            "discount_percent": 22,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "9786049877766",
            "entity_id": 273257,
            "category_mid_id": 9,
            "display_final_price": 69000,
            "display_price": 89000,
            "product_name": "Hạnh Phúc Trong Năm Lời Nói Dối",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_19553.jpg",
            "name_a_title": "Hạnh Phúc Trong Năm Lời Nói Dối",
            "name_a_label": "Hạnh Phúc Trong Năm Lời Nói Dối",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "231373",
            "product_id": "231373",
            "product_name": "Con Trai Người Thợ Gốm",
            "product_url": "con-trai-nguoi-tho-gom",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180164_1_43_1_57_1_4_1_2_1_210_1_29_1_98_1_25_1_21_1_5_1_3_1_18_1_18_1_45_1_26_1_32_1_14_1_2582.jpg",
            "image_label": "Con Trai Người Thợ Gốm",
            "original_price": 108000,
            "final_price": 86000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935095626823",
            "entity_id": 231373,
            "category_mid_id": 9,
            "display_final_price": 86000,
            "display_price": 108000,
            "product_name": "Con Trai Người Thợ Gốm",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180164_1_43_1_57_1_4_1_2_1_210_1_29_1_98_1_25_1_21_1_5_1_3_1_18_1_18_1_45_1_26_1_32_1_14_1_2582.jpg",
            "name_a_title": "Con Trai Người Thợ Gốm",
            "name_a_label": "Con Trai Người Thợ Gốm",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 52,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "103944",
            "product_id": "103944",
            "product_name": "Nữ Thượng Cấp Hung Tợn Của Tôi",
            "product_url": "nu-thuong-cap-hung-ton-cua-toi",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935077029659.jpg",
            "image_label": "Nữ Thượng Cấp Hung Tợn Của Tôi",
            "original_price": 90000,
            "final_price": 76500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935077029659",
            "entity_id": 103944,
            "category_mid_id": 9,
            "display_final_price": 76500,
            "display_price": 90000,
            "product_name": "Nữ Thượng Cấp Hung Tợn Của Tôi",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935077029659.jpg",
            "name_a_title": "Nữ Thượng Cấp Hung Tợn Của Tôi",
            "name_a_label": "Nữ Thượng Cấp Hung Tợn Của Tôi",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "233760",
            "product_id": "233760",
            "product_name": "Những Người Thích Đùa (Tái Bản 2019)",
            "product_url": "nhung-nguoi-thich-dua-tai-ban-2019",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180817.jpg",
            "image_label": "Những Người Thích Đùa (Tái Bản 2019)",
            "original_price": 75000,
            "final_price": 63500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 84,
                "rating_summary": 84
            },
            "sku": "8935235220591",
            "entity_id": 233760,
            "category_mid_id": 9,
            "display_final_price": 63500,
            "display_price": 75000,
            "product_name": "Những Người Thích Đùa (Tái Bản 2019)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180817.jpg",
            "name_a_title": "Những Người Thích Đùa (Tái Bản 2019)",
            "name_a_label": "Những Người Thích Đùa (Tái Bản 2019)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 5,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "398801",
            "product_id": "398801",
            "product_name": "Nước Non Vạn Dặm - Tập 1: Nợ Nước Non",
            "product_url": "nuoc-non-van-dam-no-nuoc-non-t1",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936049977183.jpg",
            "image_label": "Nước Non Vạn Dặm - Tập 1: Nợ Nước Non",
            "original_price": 168000,
            "final_price": 134000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936049977183",
            "entity_id": 398801,
            "category_mid_id": 9,
            "display_final_price": 134000,
            "display_price": 168000,
            "product_name": "Nước Non Vạn Dặm - Tập 1: Nợ Nước Non",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936049977183.jpg",
            "name_a_title": "Nước Non Vạn Dặm - Tập 1: Nợ Nước Non",
            "name_a_label": "Nước Non Vạn Dặm - Tập 1: Nợ Nước Non",
            "episode": "Tập 1",
            "seriesId": 999321,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "221229",
            "product_id": "221229",
            "product_name": "Con Đường Dữ Dội",
            "product_url": "con-duong-du-doi",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_176922.jpg",
            "image_label": "Con Đường Dữ Dội",
            "original_price": 145000,
            "final_price": 116000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 82,
                "rating_summary": 82
            },
            "sku": "8935095626090",
            "entity_id": 221229,
            "category_mid_id": 9,
            "display_final_price": 116000,
            "display_price": 145000,
            "product_name": "Con Đường Dữ Dội",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_176922.jpg",
            "name_a_title": "Con Đường Dữ Dội",
            "name_a_label": "Con Đường Dữ Dội",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1364,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "173798",
            "product_id": "173798",
            "product_name": "Vỡ Đê",
            "product_url": "vo-de-ml-16",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_37038.jpg",
            "image_label": "Vỡ Đê",
            "original_price": 70000,
            "final_price": 56000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935088549443",
            "entity_id": 173798,
            "category_mid_id": 9,
            "display_final_price": 56000,
            "display_price": 70000,
            "product_name": "Vỡ Đê",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_37038.jpg",
            "name_a_title": "Vỡ Đê",
            "name_a_label": "Vỡ Đê",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "277783",
            "product_id": "277783",
            "product_name": "Đi Tìm Sylvie Lee",
            "product_url": "di-tim-sylvie-lee",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_30218.jpg",
            "image_label": "Đi Tìm Sylvie Lee",
            "original_price": 159000,
            "final_price": 127000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8936066687867",
            "entity_id": 277783,
            "category_mid_id": 9,
            "display_final_price": 127000,
            "display_price": 159000,
            "product_name": "Đi Tìm Sylvie Lee",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_30218.jpg",
            "name_a_title": "Đi Tìm Sylvie Lee",
            "name_a_label": "Đi Tìm Sylvie Lee",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "344573",
            "product_id": "344573",
            "product_name": "Hừng Đông",
            "product_url": "hung-dong-344573",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/h/u/hung-dong.jpg",
            "image_label": "Hừng Đông",
            "original_price": 220000,
            "final_price": 176000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8936049957246",
            "entity_id": 344573,
            "category_mid_id": 9,
            "display_final_price": 176000,
            "display_price": 220000,
            "product_name": "Hừng Đông",
            "image": "https://cdn1.fahasa.com/media/catalog/product/h/u/hung-dong.jpg",
            "name_a_title": "Hừng Đông",
            "name_a_label": "Hừng Đông",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "262733",
            "product_id": "262733",
            "product_name": "Đỏ Và Đen",
            "product_url": "do-va-den-262733",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_10032.jpg",
            "image_label": "Đỏ Và Đen",
            "original_price": 185000,
            "final_price": 148000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "9786049631771",
            "entity_id": 262733,
            "category_mid_id": 9,
            "display_final_price": 148000,
            "display_price": 185000,
            "product_name": "Đỏ Và Đen",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_10032.jpg",
            "name_a_title": "Đỏ Và Đen",
            "name_a_label": "Đỏ Và Đen",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "465066",
            "product_id": "465066",
            "product_name": "Bước Đường Cùng (Tái Bản 2024)",
            "product_url": "buoc-duong-cung-tai-ban-2024",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212366526.jpg",
            "image_label": "Bước Đường Cùng (Tái Bản 2024)",
            "original_price": 68000,
            "final_price": 54000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935212366526",
            "entity_id": 465066,
            "category_mid_id": 9,
            "display_final_price": 54000,
            "display_price": 68000,
            "product_name": "Bước Đường Cùng (Tái Bản 2024)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212366526.jpg",
            "name_a_title": "Bước Đường Cùng (Tái Bản 2024)",
            "name_a_label": "Bước Đường Cùng (Tái Bản 2024)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": []
        },
        {
            "id": "182552",
            "product_id": "182552",
            "product_name": "Hành Trình Của Ruth - Hậu Cuốn Theo Chiều Gió",
            "product_url": "hanh-trinh-cua-ruth-hau-cuon-theo-chieu-gio",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_141586.jpg",
            "image_label": "Hành Trình Của Ruth - Hậu Cuốn Theo Chiều Gió",
            "original_price": 130000,
            "final_price": 104000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935095623679",
            "entity_id": 182552,
            "category_mid_id": 9,
            "display_final_price": 104000,
            "display_price": 130000,
            "product_name": "Hành Trình Của Ruth - Hậu Cuốn Theo Chiều Gió",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_141586.jpg",
            "name_a_title": "Hành Trình Của Ruth - Hậu Cuốn Theo Chiều Gió",
            "name_a_label": "Hành Trình Của Ruth - Hậu Cuốn Theo Chiều Gió",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "397024",
            "product_id": "397024",
            "product_name": "Một Đời Tự Tại",
            "product_url": "mot-doi-tu-tai",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632398.jpg",
            "image_label": "Một Đời Tự Tại",
            "original_price": 138000,
            "final_price": 110000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935095632398",
            "entity_id": 397024,
            "category_mid_id": 9,
            "display_final_price": 110000,
            "display_price": 138000,
            "product_name": "Một Đời Tự Tại",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632398.jpg",
            "name_a_title": "Một Đời Tự Tại",
            "name_a_label": "Một Đời Tự Tại",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "274841",
            "product_id": "274841",
            "product_name": "Khát Vọng Sống (Bìa Mềm)",
            "product_url": "khat-vong-song-bia-mem",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_26263.jpg",
            "image_label": "Khát Vọng Sống (Bìa Mềm)",
            "original_price": 195000,
            "final_price": 156000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 96,
                "rating_summary": 96
            },
            "sku": "8936071677167",
            "entity_id": 274841,
            "category_mid_id": 9,
            "display_final_price": 156000,
            "display_price": 195000,
            "product_name": "Khát Vọng Sống (Bìa Mềm)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_26263.jpg",
            "name_a_title": "Khát Vọng Sống (Bìa Mềm)",
            "name_a_label": "Khát Vọng Sống (Bìa Mềm)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 5,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "309989",
            "product_id": "309989",
            "product_name": "Thợ Xăm Ở Auschwitz",
            "product_url": "tho-xam-o-auschwitz",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_196458.jpg",
            "image_label": "Thợ Xăm Ở Auschwitz",
            "original_price": 148000,
            "final_price": 125500,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935235227576",
            "entity_id": 309989,
            "category_mid_id": 9,
            "display_final_price": 125500,
            "display_price": 148000,
            "product_name": "Thợ Xăm Ở Auschwitz",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_196458.jpg",
            "name_a_title": "Thợ Xăm Ở Auschwitz",
            "name_a_label": "Thợ Xăm Ở Auschwitz",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 1,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "257521",
            "product_id": "257521",
            "product_name": "Hai Mươi Năm Sau (Tái Bản 2019)",
            "product_url": "hai-muoi-nam-sau-tai-ban-2019",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_5225.jpg",
            "image_label": "Hai Mươi Năm Sau (Tái Bản 2019)",
            "original_price": 270000,
            "final_price": 216000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 100,
                "rating_summary": 100
            },
            "sku": "8935095628513",
            "entity_id": 257521,
            "category_mid_id": 9,
            "display_final_price": 216000,
            "display_price": 270000,
            "product_name": "Hai Mươi Năm Sau (Tái Bản 2019)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_5225.jpg",
            "name_a_title": "Hai Mươi Năm Sau (Tái Bản 2019)",
            "name_a_label": "Hai Mươi Năm Sau (Tái Bản 2019)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 2,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "220956",
            "product_id": "220956",
            "product_name": "Tào Tháo - Thánh Nhân Đê Tiện - Tập 3 (Tái Bản 2018)",
            "product_url": "tao-thao-thanh-nhan-de-tien-tap-3-tai-ban-2018",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/t/a/tao_thao_3.jpg",
            "image_label": "Tào Tháo - Thánh Nhân Đê Tiện - Tập 3 (Tái Bản 2018)",
            "original_price": 199000,
            "final_price": 119400,
            "discount_percent": 40,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935251409963",
            "entity_id": 220956,
            "category_mid_id": 9,
            "display_final_price": 119400,
            "display_price": 199000,
            "product_name": "Tào Tháo - Thánh Nhân Đê Tiện - Tập 3 (Tái Bản 2018)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/t/a/tao_thao_3.jpg",
            "name_a_title": "Tào Tháo - Thánh Nhân Đê Tiện - Tập 3 (Tái Bản 2018)",
            "name_a_label": "Tào Tháo - Thánh Nhân Đê Tiện - Tập 3 (Tái Bản 2018)",
            "episode": "Tập 3",
            "seriesId": 42823,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "368069",
            "product_id": "368069",
            "product_name": "Siddhartha (Tái Bản 2021)",
            "product_url": "siddhartha-tai-ban-2021",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_236984.jpg",
            "image_label": "Siddhartha (Tái Bản 2021)",
            "original_price": 72000,
            "final_price": 61000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935235230859",
            "entity_id": 368069,
            "category_mid_id": 9,
            "display_final_price": 61000,
            "display_price": 72000,
            "product_name": "Siddhartha (Tái Bản 2021)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_236984.jpg",
            "name_a_title": "Siddhartha (Tái Bản 2021)",
            "name_a_label": "Siddhartha (Tái Bản 2021)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "394252",
            "product_id": "394252",
            "product_name": "Số Đỏ (Tái Bản 2022)",
            "product_url": "so-do-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604627.jpg",
            "image_label": "Số Đỏ (Tái Bản 2022)",
            "original_price": 63000,
            "final_price": 50000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936067604627",
            "entity_id": 394252,
            "category_mid_id": 9,
            "display_final_price": 50000,
            "display_price": 63000,
            "product_name": "Số Đỏ (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604627.jpg",
            "name_a_title": "Số Đỏ (Tái Bản 2022)",
            "name_a_label": "Số Đỏ (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "399864",
            "product_id": "399864",
            "product_name": "Đường Gia Tiểu Miêu",
            "product_url": "duong-gia-tieu-mieu",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212359184.jpg",
            "image_label": "Đường Gia Tiểu Miêu",
            "original_price": 179000,
            "final_price": 143000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935212359184",
            "entity_id": 399864,
            "category_mid_id": 9,
            "display_final_price": 143000,
            "display_price": 179000,
            "product_name": "Đường Gia Tiểu Miêu",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212359184.jpg",
            "name_a_title": "Đường Gia Tiểu Miêu",
            "name_a_label": "Đường Gia Tiểu Miêu",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "395130",
            "product_id": "395130",
            "product_name": "Lều Chõng (Tái Bản 2022)",
            "product_url": "leu-chong-tai-ban-2022",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604955.jpg",
            "image_label": "Lều Chõng (Tái Bản 2022)",
            "original_price": 90000,
            "final_price": 72000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8936067604955",
            "entity_id": 395130,
            "category_mid_id": 9,
            "display_final_price": 72000,
            "display_price": 90000,
            "product_name": "Lều Chõng (Tái Bản 2022)",
            "image": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936067604955.jpg",
            "name_a_title": "Lều Chõng (Tái Bản 2022)",
            "name_a_label": "Lều Chõng (Tái Bản 2022)",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "371158",
            "product_id": "371158",
            "product_name": "Chiến Quốc Tung Hoành - Thế Cục Quỷ Cốc Tử - Tập 12",
            "product_url": "chien-quoc-tung-hoanh-the-cuc-quy-coc-tu-tap-12",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_239219.jpg",
            "image_label": "Chiến Quốc Tung Hoành - Thế Cục Quỷ Cốc Tử - Tập 12",
            "original_price": 195000,
            "final_price": 156000,
            "discount_percent": 20,
            "rating": {
                "reviews_count": 0,
                "rating_summary": 0
            },
            "sku": "8935095631605",
            "entity_id": 371158,
            "category_mid_id": 9,
            "display_final_price": 156000,
            "display_price": 195000,
            "product_name": "Chiến Quốc Tung Hoành - Thế Cục Quỷ Cốc Tử - Tập 12",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_239219.jpg",
            "name_a_title": "Chiến Quốc Tung Hoành - Thế Cục Quỷ Cốc Tử - Tập 12",
            "name_a_label": "Chiến Quốc Tung Hoành - Thế Cục Quỷ Cốc Tử - Tập 12",
            "episode": "Tập 12",
            "seriesId": 22054,
            "subscribes": 0,
            "rating_count": 0,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        },
        {
            "id": "220001",
            "product_id": "220001",
            "product_name": "Tâm Cảnh",
            "product_url": "tam-canh",
            "image_src": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_176547.jpg",
            "image_label": "Tâm Cảnh",
            "original_price": 79000,
            "final_price": 67000,
            "discount_percent": 15,
            "rating": {
                "reviews_count": 97,
                "rating_summary": 97
            },
            "sku": "8935235216754",
            "entity_id": 220001,
            "category_mid_id": 9,
            "display_final_price": 67000,
            "display_price": 79000,
            "product_name": "Tâm Cảnh",
            "image": "https://cdn1.fahasa.com/media/catalog/product/i/m/image_176547.jpg",
            "name_a_title": "Tâm Cảnh",
            "name_a_label": "Tâm Cảnh",
            "episode": null,
            "seriesId": 0,
            "subscribes": 0,
            "rating_count": 6,
            "type_id": "simple",
            "soon_release": 0,
            "stock_available": "in_stock",
            "sold_qty": 0,
            "label": null,
            "frame_images": null
        }
    ]
};

// API FAHASA HOME 
 // load lần đầu 
    // slider flashsale>>> https://www.fahasa.com/node_api/flashsale/slider
    // mockData_eventMoon>>> https://www.fahasa.com/tabslider/index/getdata/?limit=20&list=708904%2C708903%2C582660%2C582656%2C582662%2C582657%2C582666%2C582663%2C582659%2C582661%2C582664%2C441122%2C441133%2C441121%2C441138%2C441120%2C441123%2C441139%2C441124%2C441142%2C441125%2C441127%2C441130%2C441128%2C441129&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // xu huong mua sam tab1>>> https://www.fahasa.com/tabslider/index/getdata/?limit=36&list=704881%2C705611%2C705212%2C668655%2C705071%2C769148%2C732521%2C712294%2C706039%2C739339%2C575215%2C575210%2C575194%2C575195%2C435387%2C639555%2C556492%2C575205%2C574588%2C426354%2C637079%2C170554%2C426320%2C433671%2C426331%2C426105%2C401217%2C426333%2C426584%2C292248%2C575312%2C170555&bar_gridSlider=true&show_buy_now=false
    // mockData_event2/9>>> https://www.fahasa.com/tabslider/index/getdata/?limit=20&list=637079%2C689891%2C689892%2C689893%2C689894%2C689895%2C678984%2C690515%2C444199%2C690500%2C585126%2C639555%2C400520%2C696124%2C696263%2C643343%2C278727&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // getData_TAB1STK>>> https://www.fahasa.com/tabslider/index/getdata/?limit=24&sort_by=num_orders&category_id=6565&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // dataProgressBar>>> https://www.fahasa.com/node_api/gridproduct/dataProgressBar

//         LAZY lOAD SCROLLBAR-Y
    // getData_TAB1THNB>>> https://www.fahasa.com/tabslider/index/getdata/?limit=24&block_type=&attribute_value=1&list=638518%2C689734%2C357083%2C644540%2C465056%2C586844%2C411812%2C398123%2C631955%2C275885%2C639995%2C639997%2C364861%2C459846%2C357080%2C589668%2C465129%2C427245%2C282732%2C511988%2C384559%2C405658%2C415410%2C608755%2C644544%2C608755%2C554270%2C456717%2C356621%2C708719&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // getData_TAB1YAMAHA>>> https://www.fahasa.com/tabslider/index/getdata/?limit=24&block_type=&attribute_value=1&list=678350%2C582442%2C582440%2C582441%2C582443&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // getData_TAB1COMBO_TRENDING>>> https://www.fahasa.com/tabslider/index/getdata/?limit=240&list=611646%2C591827%2C591828%2C591830%2C591831%2C591832%2C596833%2C601377%2C415488%2C402595%2C417961%2C396894%2C396933%2C396902%2C278163%2C396916%2C396942%2C396927%2C396943%2C396924%2C396919%2C412995%2C412994%2C396904%2C396926%2C396940%2C396949%2C396932%2C396890%2C396920%2C411563%2C411545%2C411054%2C396921%2C396939%2C396937%2C396936%2C396907%2C396945%2C396928%2C396915%2C396897%2C396887%2C396892%2C396934%2C396944%2C396891%2C396938%2C396903%2C396917%2C396925%2C406326%2C396908%2C411538%2C411052%2C396918%2C396893%2C396906%2C404026%2C406324%2C411051%2C396901%2C412991%2C406325%2C396948%2C396946%2C396898%2C404025%2C396899%2C396905%2C396941%2C396931%2C413742&backup_cat_id=0&backup_sort_by=num_orders&show_buy_now=false
    // personalization>>> https://www.fahasa.com/related_api/api/personalization

















