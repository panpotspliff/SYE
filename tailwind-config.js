tailwind.config = {
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#d6a350',
                    light: '#e5be7e',
                    dark: '#b58332',
                },
                darkbg: '#090a0c',
                lightbg: '#f5f5f5',
                cardbg: '#121418',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'ping-small': 'ping-small 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            keyframes: {
                'ping-small': {
                    '75%, 100%': { transform: 'scale(1.25)', opacity: '0' },
                }
            }
        }
    }
};