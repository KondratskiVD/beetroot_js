function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${count}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()