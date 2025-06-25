import modal from './modal.js'

export default (receivePosts, actualLinks) => {
  const ul = document.querySelector('#postUl')
  for (const receivePost of receivePosts) {
    if (actualLinks.has(receivePost.link)) {
      continue
    }
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0')
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-outline-primary', 'btn-sm')
    modal(btn, receivePost)
    btn.id = receivePost.id
    btn.textContent = 'Просмотр'
    btn.dataset.toggle = 'modal'
    btn.dataset.target = '#modal'
    const a = document.createElement('a')
    a.id = receivePost.id
    a.classList.add('fw-bold')
    a.href = receivePost.link
    a.textContent = receivePost.title
    ul.prepend(li)
    li.prepend(a)
    li.append(btn)
  }
}
