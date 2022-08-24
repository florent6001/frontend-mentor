const levels = ['newbie', 'junior'];

function filter(level_to_display) {
    levels.map((level) => {
        let level_div = document.getElementById(level)
        level_div.classList.add('hidden')
        let active_filter = document.getElementById(level + '-filter')
        active_filter.classList.remove('bg-blue-500', 'text-white')
    })

    let level_to_display_div = document.getElementById(level_to_display);
    level_to_display_div.classList.remove('hidden')

    let active_filter = document.getElementById(level_to_display + '-filter')
    active_filter.classList.add('bg-blue-500', 'text-white')
}