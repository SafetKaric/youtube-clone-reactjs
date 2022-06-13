module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        darkMode: 'class',
        screens: {
            'sm': '512px',
            'md': '657px',
            'xl': '807px',
            '2xl': '888px',
            '3xl': '1143px',
            '4xl': '1330px',
            '5xl': '1968px',
            '6xl': '2302px',
        },
        backgroundImage: {
            bg1: "url('./assets/images/bg1.png')",
            bg2: "url('./assets/images/bg2.png')",
            bg3: "url('./assets/images/bg3.png')",
            bg4: "url('./assets/images/bg4.png')",
        },
        extend: {
            colors: {
                'yt-dark': '#202020',
                'yt-text-color': '#5e5e5e',
                'yt-gray': '#313131',
                'yt-white': '#4b4b4b',
                'yt-main-bg': '#181818',
                'yt-border-shadow': '#474747',
                'yt-btn-bg': '#373737',
                'yt-border-blue': '#3ea6ff',
                'fields-hover-bg': '#4d4d4d',
                'video-info': '#9a9a9a',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
