console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', event => {
  // 👇️ DOMStringMap {site: 'bobbyhadz.com'}
  console.log(event.target.dataset);

  // 👇️ "bobbyhadz.com"
  console.log(event.target.getAttribute('data-site'));
});
