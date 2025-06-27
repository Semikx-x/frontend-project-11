import onChange from 'on-change'
export default (state, input, p, i18nextInstance) => {
  // eslint-disable-next-line no-unused-vars
  const wathedObject = onChange(state, function (path, value, previousValue) {
    if (state.error == null) {
      input.classList.remove('is-invalid')
      input.value = ''
      input.focus()
    }
    else {
      input.classList.add('is-invalid')
      p.textContent = i18nextInstance.t(state.error)
    }
  })
  return wathedObject
}
