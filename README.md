# My Reels  

**Share with Strangers. Watch, Create, and Explore.**  

A modern video-sharing platform built with **Next.js**, **MongoDB**, and **ImageKit** for seamless media uploads and authentication.  

---

## Features  

✅ **Video Upload & Sharing** – Share reels with a global audience.  
✅ **User Authentication** – Secure login using **NextAuth.js**.  
✅ **Fast Media Delivery** – Optimized video streaming via **ImageKit**.  
✅ **Modern UI** – Responsive and sleek design using **Tailwind CSS**.  
✅ **Real-time Updates** – Instant feed refresh without page reloads.  

---

## Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/my-reels-app.git
cd my-reels-app
```

### 2️⃣ Set Up Environment Variables  

Create a `.env.local` file and add your credentials securely:  

```env
MONGODB_URI=<your_mongodb_uri>
NEXTAUTH_SECRET=<your_nextauth_secret>

NEXT_PUBLIC_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
NEXT_PUBLIC_URL_ENDPOINT=<your_imagekit_url>
```

### 3️⃣ Install Dependencies  
```bash
npm install
```

### 4️⃣ Run the Development Server  
```bash
npm run dev
```

Visit **http://localhost:3000** to see your app in action! 🚀  

---

## 📦 Deployment  

### Deploying on **Vercel**  
1. Install the Vercel CLI:  
   ```bash
   npm install -g vercel
   ```  
2. Deploy the app:  
   ```bash
   vercel
   ```  

### Deploying on **Netlify**  
1. Link the repository to Netlify.  
2. Set the build command to `next build`.  
3. Set the environment variables in **Netlify Dashboard**.  

---

## Screenshots  

_Add screenshots of your app UI here._  

---

## Contribution  

Want to contribute? Follow these steps:  

1. **Fork the repository**  
2. **Create a new branch** (`git checkout -b feature/branch`)  
3. **Make your changes** and commit (`git commit -m "Added new feature"`)  
4. **Push to the branch** (`git push origin feature/branch`)  
5. **Open a Pull Request**  

---

## ⚠️ Troubleshooting  

- **App not starting?**  
  - Ensure your `.env.local` file is properly configured.  
  - Run `npm run dev` inside the project directory.  

- **MongoDB connection issues?**  
  - Check if your **MongoDB URI** is correct.  
  - Ensure **IP Whitelist** is set up in MongoDB Atlas.  

- **Image upload errors?**  
  - Confirm your **ImageKit API keys** are correct.  

---

## License  

This project is **MIT Licensed**. Feel free to modify and contribute.  

---

🚀 **Happy Coding!**  