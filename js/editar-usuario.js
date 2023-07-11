import { db } from "./firebase.js";
import { doc, writeBatch } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


const batch = writeBatch(db);
const userId = localStorage.getItem('userId');
const edit = document.getElementById('edit')


edit.addEventListener('click', async () => {
    const nome = document.getElementById('nome').value
    console.log('userId: ', userId)

    const sfRef = doc(db, "Users", `${userId}`);
    batch.update(sfRef, { "usuario": nome });

    await batch.commit();

    alert('Usuario editado com sucesso')

    window.location.href = "../html/perfil-do-usuário.html";
})

