function toggleReadMore() {
  var moreInfo = document.getElementById("more-info");
  var readMoreBtn = document.getElementById("read-more-btn");

  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    readMoreBtn.innerText = "Read Less";
  } else {
    moreInfo.style.display = "none";
    readMoreBtn.innerText = "Read More";
  }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

  switch (searchInput) {
    case 'candi prambanan':
      window.location.href = 'candiprambanan.html';
      break;
    case 'tugu jogja':
        window.location.href = 'tugujogja.html';
        break;
    case 'heha sky view':
      window.location.href = 'hehaskyview.html';
      break;
    case 'jalan malioboro':
      window.location.href = 'jalanmalioboro.html';
      break;
    case 'pantai parangtritis':
      window.location.href = 'pantaiparangtritis.html';
      break;
    case 'gunung merapi':
      window.location.href = 'gunungmerapi.html';
      break;
    default:
      alert('Halaman yang Anda cari tidak ditemukan.');
      break;
  }
});


