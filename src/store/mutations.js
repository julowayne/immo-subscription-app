export const token = (state, token) => {
    state.user.token = token
}

export const data = (state, data) => {
    state.user.data = data
}
export const news = (state, news) => {
    state.news = news
}

export const messages = (state, errors) => {
    state.messages.error = errors
}
