export default (callback) => {
    setTimeout(() => {
        callback()
        setTimeout(() => {
            callback()
        },300)
    }, 100);
}