import './styles.css';

function dropDown(parentDiv, menuValue, dropDownObject) {
  /* a parent div with a button and a list as childs */
  let dropDownDiv = createDropDown(menuValue, dropDownObject);
  parentDiv.appendChild(dropDownDiv);
}

function createDropDown(btnValue, dropDownObject) {
  const dropDownDiv = document.createElement('div');
  dropDownDiv.classList.add('dropDown');

  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = btnValue;

  let listDiv = document.createElement('ul');

  btn.addEventListener('click', () => {
    listDiv.classList.toggle('toggle');
  });

  dropDownDiv.appendChild(btn);
  for (let i in dropDownObject) {
    let anchor = document.createElement('a');
    anchor.textContent = i;
    anchor.setAttribute('href', dropDownObject[i]);
    listDiv.appendChild(anchor);
  }
  dropDownDiv.appendChild(listDiv);

  return dropDownDiv;
}

export default dropDown;
