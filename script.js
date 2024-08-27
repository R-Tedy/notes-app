const createBtn = document.querySelector('.createBtn');
const notesContainer = document.querySelector('.notes-container');
const notes = document.querySelectorAll('.notes');






function restoreData(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
restoreData();

function updateData(){
  localStorage.setItem("notes2",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=> {
  const note = document.createElement('p');
  const del = document.createElement('img');
  del.src = "./images/delete.png";
  note.className = "notes";
  note.setAttribute("contenteditable","true");
  notesContainer.appendChild(note).appendChild(del);
})

notesContainer.addEventListener("click",(e)=>{
  if (e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateData();
  } else if (e.target.tagName === "P"){
    updateData()
  }
})

document.addEventListener("keydown", e=>{
  if (e.key === "Enter"){
    alert("Data saved.")
    updateData()
  }
})