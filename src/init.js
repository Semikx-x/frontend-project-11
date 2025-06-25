import getUrlSchema from './validate'
import i18next from 'i18next'
import ru from './locales/ru'
import onChange from 'on-change'
import axios from 'axios'
import parser from './parser.js'
import renderlist from './renderlist.js'
import renderPosts from './render_posts.js'
import runJob from './job.js'

export default async () => {
  const i18nextInstance = i18next.createInstance()
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const sudbtn = document.querySelector('#dobavlenie')
  const label = document.querySelector('label')
  const p = document.querySelector('P')
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

  const wathedObject = onChange(state, function (path, value, previousValue) {
    if (state.error == null) {
      input.classList.remove('is-invalid')
      input.value = ''
      input.focus()
      p.textContent = ''
    }
    else {
      input.classList.add('is-invalid')
      p.textContent = i18nextInstance.t(state.error)
    }
  })

  sudbtn.textContent = i18nextInstance.t('button')
  label.textContent = i18nextInstance.t('holder')
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
      wathedObject.error = null
      const response = await axios.get('https://allorigins.hexlet.app/get?url=' + value)
      const doc = parser(response.data.contents)

      renderlist(doc)
      renderPosts(doc.posts, state.actualLinks)
      doc.posts.forEach(post => state.actualLinks.add(post.link))
    }
    catch (err) {
      wathedObject.error = err.message
    }
  })

  runJob(entrdUrls, state)
}
