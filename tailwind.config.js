module.exports = {
    important: true,
    content: [
      './src/ui/components/**/*.{js,ts,jsx,tsx}',
      './src/application/***/*.view.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        width: {
          420: '420px',
        },
        colors: {
          bookstore: {
            grey: 'var(--color-grey)',
            'grey-light': 'var(--color-grey-light)',
            'grey-light-0': 'var(--color-grey-light-0)',
            'grey-light-1': 'var(--color-grey-light-1)',
            'grey-light-50': 'var(--color-grey-light-50)',
            blue: 'var(--color-blue)',
            orange: 'var(--color-orange)',
            linkage: 'var(--color-linkage)',
            ancient: 'var(--color-ancient)',
            cream: 'var(--color-cream)',
            black: 'var(--color-black)',
            white: 'var(--color-white)',
            red: 'var(--color-red)',
            greeen: 'var(--color-green)',
          },
        },
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
      },
    },
    plugins: [],
  };
  