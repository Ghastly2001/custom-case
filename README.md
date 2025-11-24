# CaseCobra – Custom Phone Case E-Commerce Platform

CaseCobra is a fully custom e-commerce platform that enables users to design, preview, and purchase personalized phone cases. Built from the ground up using Next.js 14, it includes a complete design configurator, a secure authentication and checkout flow, an admin dashboard, and a modern, production-ready UI.

The platform allows customers to upload images, resize and position them on realistic phone mockups, and preview exactly how the final case will look before purchasing. CaseCobra is engineered to be performant, scalable, and easy to extend for real-world commerce use cases.

---

## Overview

CaseCobra provides an end-to-end experience for both customers and administrators. Users can authenticate, upload custom artwork, manipulate the design on a 3D-style mockup, and purchase cases. The admin panel allows store operators to manage orders, track customer activity, and handle product fulfillment.

Built on modern web standards with a focus on performance, DX, and long-term maintainability, this project demonstrates how to build a sophisticated custom product configurator using Next.js, TypeScript, and a strong UI foundation.

---

## Features

### Custom Case Configurator
- Upload any image directly in the browser.
- Real-time preview on an accurate phone mockup.
- Zoom, pan, rotate, and reposition uploaded artwork.
- Precise bounding box control using drag-and-resize interactions.
- High-resolution export of the final configuration.

### E-Commerce Workflow
- Add-to-cart, checkout, and order creation.
- Secure payment workflow (can be integrated with your payment provider of choice).
- Customer confirmation page and automatic transactional emails.
- Complete order lifecycle management through the admin dashboard.

### Authentication
- Secure user authentication integrated through identity management.
- Session handling for account data and previous orders.
- Admin-only access for protected dashboard pages.

### Admin Dashboard
- Private dashboard for viewing and managing customer orders.
- Order status controls for fulfillment workflows.
- Overview of customers, transactions, and recent activity.

### File Upload and Media Handling
- High-quality file uploads with built-in validation.
- Drag-and-drop upload interface with immediate previews.
- Server-side image processing pipeline for generating optimized assets.

### UI/UX
- Fully responsive design.
- Modern, minimal interface inspired by high-end product customization flows.
- Polished components built using shadcn-ui and motion-based elements.
- Seamless transitions, animations, and feedback states.

### Architecture and Reliability
- Server Actions for secure data operations.
- Strong schema validation for API safety.
- Persistent storage using a relational database.
- Optimized image processing using Sharp.
- TypeScript end-to-end for accuracy, safety, and maintainability.

---

## Tech Stack

- Framework: Next.js 14  
- Language: TypeScript  
- Database: Prisma ORM  
- Authentication: Kinde  
- Storage & File Uploads: UploadThing  
- UI Layer: Tailwind CSS, shadcn-ui, Radix primitives  
- Image Processing: Sharp  
- State & Validation: Zod  
- Animation: Framer Motion  
- Drag & Resize Interaction: React-rnd  
- File Upload Interaction: React Dropzone  
