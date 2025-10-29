# C-Fahasa Clone Frontend

## Giới thiệu dự án

**C-Fahasa Clone Frontend** dự án mô phỏng giao diện và trải nghiệm người dùng của nền tảng thương mại điện tử **Fahasa**.  
Dự án được phát triển với mục tiêu:
- Hỗ trợ quá trình học tập, demo hoặc phát triển sản phẩm thực tế.
---

## Yêu cầu môi trường

| Công cụ | Phiên bản khuyến nghị |
|----------|----------------------|
| **Node.js** | >= v22.12.0 |
| **npm** | >= 10.9.0 |
| **Vite** | >= 7.0.0 |
| **TypeScript** | >= 5.8.0 |

---

## Công nghệ sử dụng

### Core Framework & Tools
- **React 19.1.1**
- **TypeScript 5.8.3**
- **Vite 7.1.2** – build tool
- **ESLint + TypeScript ESLint** – linting và chuẩn hóa code
- **PostCSS / Autoprefixer** – xử lý CSS tự động

### UI & Styling
- **TailwindCSS 4.1.11**
- **Normalize.css** – reset CSS mặc định giữa các trình duyệt
- **LightGallery** – thư viện hiển thị ảnh dạng gallery
- **Swiper 12.0.2** – thư viện slider/carousel

### State Management & Routing
- **Redux Toolkit 2.9.0**
- **React Redux 9.2.0**
- **React Router DOM 7.8.0**

### Utilities & Helpers
- **Axios 1.11.0**
- **Debounce 2.2.0** – hạn chế số lần gọi hàm
- **UUID 13.0.0**

---

## Hướng dẫn cài đặt & chạy dự án

### Clone source code
```bash
# Clone repository
git clone https://github.com/vominhdat68/ecommerce-book-fe.git
cd ecommerce-book-fe

# Cài đặt dependencies
npm install

# Chạy môi trường phát triển
npm run dev

