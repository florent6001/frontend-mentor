module.exports = {
    content: ["./*.{html,js}"],
    safeList: [
        'bg-neutral-500',
        'hover:text-white'
    ],
    theme: {
        extend: {
            colors: {
                "orange": "#FC7613",
                "white": "#FFFFFF",
                "light-grey": "#676D77",
                "medium-grey": "#262F38",
                "dark-blue": "#19202A",
            },
        },
    },
    plugins: [],
}