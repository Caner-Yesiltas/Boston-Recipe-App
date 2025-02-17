<div align="center">
  <h1>
    # Boston Recipe App 🧑‍🍳
  </h1>
</div>

<div align="center">
  <h2>
    👉 <a href="[https://recipe-app-boston.vercel.app/](https://boston-recipe-app-v2.vercel.app/)">Live Demo</a> 👈
  </h2>
</div>

<div align="center">
  <img src="./assets/Boston-Recipe-App.gif" alt="TaskFlow Manager Demo" width="800"/>
</div>

## 📌 About The Project

Recipe App is a modern web application built with React that allows users to search and discover recipes. With a beautiful user interface and authentication system, users can explore various meal types and view detailed recipe information.

### ✨ Key Features

- 🔍 Search recipes with keywords
- 🍳 Filter by meal types (Breakfast, Lunch, Dinner, Snack, Teatime)
- 🔒 User authentication system
- 💾 Session storage for user management
- 🎨 Styled-components for dynamic styling
- 🌈 Responsive design with hamburger menu
- 🎯 Protected routes for authenticated users
- 🚀 Lazy loading for optimized performance
- 📱 Efficient component rendering with lazy loading

### 🛠️ Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/)
- [Edamam API](https://www.edamam.com/)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/caneryesiltas/recipe-app.git

# Navigate to project directory
cd recipe-app

# Install dependencies
yarn install

# Create .env file and add your Edamam API credentials
REACT_APP_APP_ID=your_app_id
REACT_APP_APP_KEY=your_app_key

# Start the development server
yarn start
```

## 💻 Project Structure

```
src/
├── components/
│   ├── cards/          # Recipe card components with lazy loading
│   ├── globalStyles/   # Global styling and theme
│   ├── header/         # Search and filter components
│   └── navbar/         # Navigation component
├── pages/              # Lazy loaded pages
│   ├── about/         
│   ├── detail/         
│   ├── home/           
│   ├── login/          
│   └── register/       
├── router/
│   ├── AppRouter.jsx   # Route configurations
│   └── PrivateRouter.jsx # Protected route logic
└── App.js              # Main application component
```

## 🔍 Core Functionality

- **Recipe Search**: Users can search recipes using keywords
- **Meal Type Filtering**: Filter recipes by different meal types
- **Authentication**: Login/Register system with session storage
- **Protected Routes**: Secure routes for authenticated users only
- **Responsive Design**: Mobile-friendly interface with hamburger menu
- **Recipe Details**: Detailed view for each recipe with ingredients
- **Performance Optimization**: 
  - Lazy loading implementation for pages and card components
  - Improved initial loading time
  - Better resource management
  - Optimized component rendering

## 🎯 Component Details

### Navbar Component
- Responsive navigation with hamburger menu
- Dynamic styling based on theme
- Authentication-aware navigation links

### Cards Component
- Grid layout for recipe display with lazy loading
- Hover effects and shadows
- Image fallback handling
- Optimized rendering for better performance

### Login Component
- Styled form with blur effect
- Session storage integration
- Protected route redirection

## 📱 Responsive Design

- Hamburger menu for mobile devices
- Fluid layouts with styled-components
- Breakpoint-based styling
- Flexible grid system for recipe cards

## 🤝 Contributing

Contributions make the open source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

Caner Yesiltas - caneryesiltas1@gmail.com

Project Link: [https://boston-recipe-app-v2.vercel.app/](https://boston-recipe-app-v2.vercel.app/)  

---

<div align="center">
  Made with ❤️ by Caner Yesiltas
</div>
