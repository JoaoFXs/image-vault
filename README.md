# ImageVault - Storing, Organizing and Intelligently Searching Images
![Java](https://img.shields.io/badge/Java-17-blue.svg)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.4.3-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6.svg?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg?logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg?logo=postgresql)
![JWT](https://img.shields.io/badge/JWT-Secured-orange?logo=jsonwebtokens)
![License](https://img.shields.io/github/license/JoaoFXs/LICENSE)
![Version](https://img.shields.io/badge/Version-0.0.1--SNAPSHOT-informational)

## Table of Contents


- [About the project](#-about-the-project)
- [Technologies used](#-technologies-used)
- [How to run the project](#%EF%B8%8F-how-to-run-the-project)
  - [1. Development Mode (Recommended for Devs)](#-1-development-mode-recommended-for-devs)
  - [2. Production Mode via Docker Compose](#-2-production-mode-via-docker-compose)
- [Frontend Screens](#%EF%B8%8F-frontend-screens)
  - [1. Login and Registration Screen](#1-login-and-registration-screen)
  - [2. Gallery Screen](#2-gallery-screen)
  - [3. Image Registration Screen](#3-image-registration-screen)
- [Maintainers](#-maintainers)
- [Contributing](#-contributing)
  - [Contributors](#contributors)
- [License](#license)

## 📌 About the project

ImageVault is an application for storing, organizing and intelligently searching images, with support for filters by extension and integration with user authentication. Ideal for managing visual libraries safely and conveniently.

### 🚀 Technologies used 
#### 🔧 Backend:
- Java 17
- Spring Boot 3.4.3
- Spring Security + JWT
- PostgreSQL / H2 (dev)
- JPA / Hibernate

💻 Frontend:
- Next.js 15.2.3
- React 19
- TypeScript
- Tailwind CSS
- React Toastify
- Formik + Yup
### The goals for this repository are:

This project focuses on practical development and in-depth study of the following topics and technologies:

- 🧠 Consolidate knowledge in **Java 17** and **Spring Boot**, especially in the security and persistence modules.
- 🛡️ Implement **JWT-based authentication**, ensuring a secure API.
- 🖼️ Work with **image file storage and manipulation**.
- 🌐 Create a robust **RESTful API** with Spring Data JPA and PostgreSQL.
- 💻 Develop a **modern interface** with **React + Next.js**, using the power of SSR and protected routes.
- 🎨 Practice **styling with Tailwind CSS** for responsive and productive UI.
- 📦 Learn how to handle **forms with validation** using Formik + Yup. - 🔄 Integrate frontend and backend completely, simulating a real project from end to end.



## ⚙️ How to run the project

You can run the project in two ways:

---

### 🛠️ 1. Development Mode (Recommended for Devs)

Ideal for those who want to explore the code, debug and contribute to the project.

#### ▶️ Backend (Spring Boot)

```bash
# Clone the repository
git clone https://github.com/JoaoFXs/imagevault.git
cd imagevaultapi

# Install the dependencies (if necessary)
./mvnw clean install

# Run the backend
./mvnw spring-boot:run
If you want to run this project 
```
#### 💻 Frontend (Next.js)
```bash
# Open a new tab in the terminal and go to the frontend folder
cd ../imagevault

# Install the dependencies
npm install

# Run the development server
npm run dev
```
Access:

-  Backend Images: http://localhost:3000/v1/images
-  Backend Users: http://localhost:3000/v1/users
-  Frontend:  http://localhost:3000
-  PostGreSql: http://localhost:15432
### 🐳 2. Production Mode via Docker Compose
Ideal for those who just want to run the entire application with a single command.

#### ▶️ Requirements:
- Docker
- Docker Compose

```bash
# Clone the repository
git clone https://github.com/JoaoFXs/imagevault.git
cd imagevault

# Upload everything with Docker Compose
docker-compose up --build
```
Access:

-  http://localhost:3000

## 🖼️ Frontend Screens
The application has three main screens on the frontend that are essential for user navigation and interactions:

### 1. Login and Registration Screen
The login screen allows authenticated users to access their accounts, and also offers the option of registering for new users.

Login: The user enters their email and password to access the system.

Registration: If the user does not yet have an account, they can register directly on this screen.

Here's how it works:

### 2. Gallery Screen
On the gallery screen, users can search, filter, and view images that are stored in the system. It is possible to search for images by extension type or other relevant filters.

Here's how it works:

### 3. Image Registration Screen
Here, users can register new images in the system, providing details such as the image, title, description, and other related data. The registration form also allows for the selection of files in a simple and practical way.

Here's how it works:



# Maintainers

[@JoaoFXs](https://github.com/JoaoFXs).

## Contributing

- Feel free to dive in! [Open an issue](https://github.com/JoaoFXs/climasync/issues) or submit PRs.
- Climasync follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

[![Contributors](https://contributors-img.web.app/image?repo=JoaoFXs/climasync)](https://github.com/JoaoFXs/climasync/graphs/contributors)



## License

[MIT](LICENSE) © JoaoFXs