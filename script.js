document.getElementById('recommendationForm').addEventListener('submit', function(event) {
  // Хуудас шууд дахин ачаалагдахаас сэргийлнэ
  event.preventDefault();

  // Форм дээрх утгуудыг авна
  const recText = document.getElementById('recText').value;
  const recName = document.getElementById('recName').value;

  // Шаардлага 7: Жагсаалтад шинээр карт үүсгэж нэмэх (1 оноо)
  const recommendationsList = document.getElementById('recommendations-list');
  
  const newCard = document.createElement('div');
  newCard.className = 'rec-card';
  newCard.innerHTML = `
    <p>"${recText}"</p>
    <h4>- ${recName}</h4>
  `;
  
  // Жагсаалтын төгсгөлд шинэ картыг залгах
  recommendationsList.appendChild(newCard);

  // Шаардлага 9: Илгээх үед амжилттай болсныг мэдэгдэх Pop-up гаргах (2 оноо)
  alert('Баярлалаа! Таны зөвлөмж амжилттай бүртгэгдлээ.');

  // Формын талбаруудыг цэвэрлэх
  document.getElementById('recommendationForm').reset();
});