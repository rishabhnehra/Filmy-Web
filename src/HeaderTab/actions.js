export const POPULAR_TAB = "POPULAR_TAB"
export const NOW_PLAYING_TAB = "NOW_PLAYING_TAB"
export const UPCOMING_TAB = "UPCOMING_TAB"

export const popularTab = (activeIndex) => ({
    type: POPULAR_TAB,
    activeIndex
})

export const nowPlayingTab = (activeIndex) => ({
    type: NOW_PLAYING_TAB,
    activeIndex
})

export const upcomingTab = (activeIndex) => ({
    type: UPCOMING_TAB,
    activeIndex
})