# 🏏 BPL Dream XI Player Selection

A React-based web application where users can build their Dream XI team by selecting players within a limited budget.

## 🚀 Live Demo

Add your deployed website link here:

jazzy-thing479671.surge.sh

---

## 📌 Features

- View all available players
- Select players for your Dream XI squad
- Track available balance in real-time
- Remove selected players
- Dynamic player count display
- Toggle between Available Players and Selected Players
- Toast notifications for user actions
- Responsive user interface

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React Toastify

---

## 🎯 How It Works

1. Users start with a fixed balance.
2. Available players are loaded from `players.json`.
3. Users can select players based on their budget.
4. Selected players are added to the team.
5. The player's price is deducted from the balance.
6. Users can remove players, and the balance is refunded.
7. Maximum selected players count is displayed dynamically.

---

## 📊 State Management

The application uses React Hooks:

- `useState()` for:
  - Available Balance
  - Selected Players
  - Toggle State

- `Suspense` for:
  - Handling player data loading

---

## 📸 Screenshots

Add screenshots of your project here.

### Home Page

![Home Page](https://i.ibb.co.com/cPNTWvy/homepage.png)

### Selected Players

![Selected Players](https://i.ibb.co.com/vxJHn9ks/Taskin-Ahmed.jpg)

---

## 🌟 Future Improvements

- Player search functionality
- Filter by player role
- Sorting by price
- Team validation rules
- Local Storage support
- Backend integration

---

## 👨‍💻 Author

**Sohag Karmokar**

- GitHub: https://github.com/silent-43

---

## 📄 License

This project is created for learning purposes and is free to use.