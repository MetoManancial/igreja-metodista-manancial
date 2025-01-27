// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyApqYhct5M5eEPaaGlWnSiTL2vpwbEsuL4",
    authDomain: "manancial-2d259.firebaseapp.com",
    projectId: "manancial-2d259",
    storageBucket: "manancial-2d259.firebasestorage.app",
    messagingSenderId: "1092996835342",
    appId: "1:1092996835342:web:24d8a95facec2963e0b45f"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Exportar instâncias do Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// Função para verificar autenticação
function checkAuth() {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject('Usuário não autenticado');
            }
        });
    });
}

// Função para login
async function loginWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Função para logout
async function logout() {
    try {
        await auth.signOut();
        window.location.href = '/restrito';
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        throw error;
    }
}

// Exportar funções
window.firebaseAuth = {
    checkAuth,
    loginWithEmail,
    logout,
    auth,
    db
};
