document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.createElement('button')
  button.textContent = 'Delete All'
  button.classList.add('button')
  form.appendChild(button)
  button.addEventListener('click', deleteList)

})

const handleFormSubmit = function(event) {

event.preventDefault();
const newBook = document.createElement('li');
const wrapper = document.createElement('p')
wrapper.textContent = `
Book:
${this.title.value}
${this.author.value}
${this.category.value}
`
const listItem = document.querySelector('#reading-list')
newBook.appendChild(wrapper)
listItem.appendChild(newBook)

document.querySelector('new-item-form').reset();

}
const deleteList = () => {
  document.querySelector("reading-list").innerHTML = null;
}

