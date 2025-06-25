import { Modal } from 'bootstrap'

export default (btn, receivePost) => {
  const modalEl = document.getElementById('modal')
  const modal = new Modal(modalEl)

  const h5 = modalEl.querySelector('h5')
  const modalBody = modalEl.querySelector('.modal-body')
  const a = modalEl.querySelector('a')

  btn.addEventListener('click', () => {
    h5.textContent = receivePost.title
    modalBody.textContent = receivePost.description
    a.href = receivePost.link

    modal.show()
  })
}
