```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other config options ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // This might be your problem line
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: [],
}
```