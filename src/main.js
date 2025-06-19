import getUrlSchema from './validate'

const state = {
  formData: '',
}

const form = document.querySelector('form')
const input = document.querySelector('input')
const sudbtn = document.querySelector('button')
const entrdUrls = []

form.addEventListener('input', (e) => {
  state.formData = e.target.value
})

sudbtn.addEventListener('click', async (e) => {
  e.preventDefault()
  const value = state.formData
  const schema = getUrlSchema(entrdUrls)

  try {
    await schema.validate(value)
    entrdUrls.push(value)
    input.classList.remove('is-invalid')
    input.value = ''
    input.focus()
    console.log('succes')
  }
  catch (err) {
    input.classList.add('is-invalid')
    console.log(err.message)
  }
})
