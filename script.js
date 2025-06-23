window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio)  return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('playing');
});
window.addEventListener('click', function(e) {
  // Проверяем, кликнули ли по элементу с классом 'key'
  const key = e.target.closest('.key');  // поиск ближайшего родителя с классом 'key'
  if (!key) return; // если кликнули вне кнопок — ничего не делаем

  // Получаем data-key кнопки
  const keyCode = key.getAttribute('data-key');

  // Ищем аудио с этим data-key
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);

     /* key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');
});*/
});