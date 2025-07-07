import getUrlSchema from './validate'
import i18next from 'i18next'
import ru from './locales/ru'
import runJob from './job.js'
import loader from './loader.js'
import watcher from './src/wiews/watcher.js'

export default async () => {
  const i18nextInstance = i18next.createInstance()
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const sudbtn = document.querySelector('#dobavlenie')
  const label = document.querySelector('label')
  const p = document.querySelector('p')
  const entrdUrls = []

  await i18nextInstance.init({
    lng: 'ru',
    resources: { ru },
  })

  const state = {
    formData: '',
    actualLinks: new Set(),
    error: null,
  }

  const wathedObject = watcher(state, input, p, i18nextInstance)

  sudbtn.textContent = i18nextInstance.t('button')
  label.textContent = i18nextInstance.t('holder')
  form.addEventListener('input', (e) => {
    state.formData = e.target.value
  })

  sudbtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const value = state.formData
    const validationResult = await validate(value, entrdUrls)
    if (validationResult != undefined) {
      wathedObject.error = validationResult
      return
    }
    input.value = ''
    loader(value, i18nextInstance, state, wathedObject, p)
  })

  runJob(entrdUrls, state, i18nextInstance, wathedObject, p)
}

async function validate(value, entrdUrls) {
  const schema = getUrlSchema(entrdUrls)
  try {
    await schema.validate(value)
    entrdUrls.push(value)
    return undefined
  }
  catch (error) {
    return error.message
  }
}
