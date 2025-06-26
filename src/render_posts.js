import modal from './modal.js'

export default (receivePosts, actualLinks, i18n) => {
  const ul = document.querySelector('#postUl')
  for (const receivePost of receivePosts) {
    if (actualLinks.has(receivePost.link)) {
      continue
    }
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0')
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-outline-primary', 'btn-sm')
    btn.id = receivePost.id
    btn.textContent = i18n.t('view')
    btn.dataset.toggle = 'modal'
    btn.dataset.target = '#modal'
    const a = document.createElement('a')
    a.id = receivePost.id
    a.classList.add('fw-bold')
    a.href = receivePost.link
    a.textContent = receivePost.title
    modal(btn, receivePost)
    ul.prepend(li)
    li.prepend(a)
    li.append(btn)
  }
}
