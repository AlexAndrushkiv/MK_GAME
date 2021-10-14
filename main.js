// ## Task #0

// Создай два объекта с именем разных игроков, где будут поля 

// - name - это строка;
// - hp - это число;
// - img - это строка;
// - weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
// - attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);

const player1 = {
   name: 'Scorpion',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: [
      'нож',
      'топор'
   ],
   attack: function(params) {
      console.log(`Боец - ${player1.name} -> ${'Fight...'}`);
   }
}
player1.attack();


const player2 = {
   name: 'Kitana',
   hp: 80,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: [
      'нож',
      'топор'
   ],
   attack: function(params) {
      console.log(`Боец - ${player2.name} -> ${'Fight...'}`);
   }
}
player2.attack();

// ## Task #1
// ## Task #2
// ## Task #3


// debugger;

   function createPlayer( player, obj ) {
   
   const $player1 = document.createElement('div');
   $player1.classList.add(player);

   const $progressbar = document.createElement('div');
   $progressbar.classList.add('progressbar');

   const $life = document.createElement('div');
   $life.classList.add('life');
   $life.style.width = obj.hp + '%';

   const $name = document.createElement('div');
   $name.classList.add('name');
   $name.innerText = obj.name;
   
   const $character = document.createElement('div');
   $character.classList.add('character');

   const $img = document.createElement('img');
   $img.src = obj.img;


   const $arenas = document.querySelector('.arenas');
   $arenas.appendChild($player1);

   $player1.appendChild($progressbar);
   $player1.appendChild($character);


   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $character.appendChild($img);

}

createPlayer( 'player1', player1 ); 
createPlayer( 'player2', player2 );