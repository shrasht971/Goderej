module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
      'sm': '425px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // Extra extra large screens
      '3xl':'2560px',
      // Custom breakpoints
      'custom-sm': '320px', // Custom small breakpoint
      'custom-md': '960px', // Custom medium breakpoint
      'custom-lg': '1440px', // Custom large breakpoint
      // Add more custom breakpoints as needed
    },},
  },
  plugins: [],
}
