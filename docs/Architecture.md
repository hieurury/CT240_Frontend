# Kiến trúc dự án

Dự án gồm hai thành phần chính: Backend (Spring Boot) tại thư mục gốc và Frontend (React + Vite) tại thư mục `client/`.

## 1. Cấu trúc tổng thể

```text
plantcare/
├── client/          # Ứng dụng Frontend (React, Vite, TypeScript)
├── src/             # Mã nguồn Backend (Spring Boot, Java)
├── docs/            # Tài liệu dự án
└── pom.xml          # Quản lý build và dependency Maven của Backend
```

## 2. Cấu trúc Frontend (`client/src`)

```text
client/src/
├── assets/          # Tài nguyên tĩnh (hình ảnh, gif, vector)
├── lang/            # Cấu hình và dữ liệu đa ngôn ngữ
├── pages/           # Các trang giao diện của ứng dụng (Home, Welcome, ...)
├── router/          # Cấu hình định tuyến (React Router)
├── services/        # Tầng gọi API giao tiếp với Backend
├── store/           # Quản lý state toàn cục
├── types/           # Định nghĩa các kiểu dữ liệu (TypeScript types/interfaces)
├── ui/
│   ├── components/  # Các thành phần giao diện tái sử dụng
│   └── layouts/     # Các khung giao diện chung (Layout)
└── utils/           # Các hàm tiện ích hỗ trợ
```

## 3. Cấu trúc Backend (`src`)

```text
src/
├── main/
│   ├── java/com/plantcare/server/  # Logic nghiệp vụ Backend (Controller, Service, Repository, Model)
│   └── resources/                  # Cấu hình hệ thống (application.properties) và tài nguyên phụ trợ
└── test/                           # Mã kiểm thử (Unit test và Integration test)
```