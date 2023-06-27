/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: '#F3F4F6',
        secondary: '#E5E7EB',
        dark: '#1f1f1f',
        danger: '#DC2626',
        success: '#10B981',
        warning: '#F59E0B',
        info: '#3B82F6'
      })
    }
  },
  plugins: []
}
