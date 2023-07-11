import { db } from "./firebase.js";
import { writeBatch, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const deleteUser = document.getElementById('deleteUser');

async function getUser() {
    const docRef = doc(db, "Users", localStorage.getItem('userId'));
    const docSnap = await getDoc(docRef);

    if (docSnap) {
        localStorage.setItem('usuario', docSnap._document.data.value.mapValue.fields.usuario.stringValue)

        usuario.innerHTML = `<h1>${docSnap._document.data.value.mapValue.fields.usuario.stringValue}</h1><button onClick="redirectEdit()" class="btn btn-warning">Editar</button>`;
        email.innerHTML = docSnap._document.data.value.mapValue.fields.email.stringValue;
    } else {
        usuario.innerHTML = 'NÃ£o Encontrado';
        localStorage.setItem('usuario', '')
    }
}

deleteUser.addEventListener('click', async () => {
    const batch = writeBatch(db);

    const sfRef = doc(db, "Users", `${localStorage.getItem('userId')}`);
    batch.delete(sfRef);

    await batch.commit();

    alert('Usuario deletado com sucesso')

    window.location.href = "../html/login.html";
})


getUser();