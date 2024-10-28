const postForm = document.getElementById('postForm');
const postInput = document.getElementById('postInput');
const posts = document.getElementById('posts');

const username = prompt("Kullanıcı adınızı girin:"); // Kullanıcı adı al

postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    const postText = postInput.value; // Giriş alanındaki metni al
    const postElement = document.createElement('div'); // Yeni bir div oluştur
    postElement.textContent = `${username}: ${postText}`; // Kullanıcı adıyla birlikte metni ayarla
    posts.appendChild(postElement); // Yeni mesajı ekrana ekle
    postInput.value = ''; // Giriş alanını temizle
});