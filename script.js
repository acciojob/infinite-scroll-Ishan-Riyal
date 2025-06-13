const infiList = document.getElementById('infi-list');

let itemCount = 0;

function addItems(n) {
  let html = '';
	
  for (let i = 0; i < n; i++) {
    html += `<li>Item ${++itemCount}</li>`;
  }

  infiList.innerHTML += html;
}

addItems(10);

// Add scroll event listener
infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addItems(2);
  }
});
