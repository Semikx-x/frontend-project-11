import zapros from './zapros.js'
import renderlist from './renderlist.js'
import renderPosts from './render_posts.js'
import parser from './parser.js'

export default async (value, i18nextInstance, state, wathedObject, p) => {
  try {
    wathedObject.error = null
    const response = await zapros(value, i18nextInstance)
    const doc = parser(response.data.contents, i18nextInstance)
    p.classList.replace('text-danger', 'text-success')
    p.textContent = i18nextInstance.t('success')

    renderlist(doc)
    renderPosts(doc.posts, state.actualLinks, i18nextInstance)
    doc.posts.forEach(post => state.actualLinks.add(post.link))
  }
  catch (err) {
    if (err.code === 'ECONNABORTED') {
      wathedObject.error = 'networkErr'
    }
    else {
      wathedObject.error = err.message
    }
  }
}
