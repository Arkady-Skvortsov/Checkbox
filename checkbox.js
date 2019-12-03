let block = document.querySelector('.btn-block');
    	let btn = document.querySelector('.btn');
    	let txt = 'Hello there';
        let t_main = document.querySelector('.text-main');
        let p = document.querySelector('#t');

        p.textContent = txt;
                 
    	btn.addEventListener('click', function() {
           block.classList.toggle('c');
           btn.classList.toggle('move');

           document.body.classList.toggle('bg');
           
           t_main.classList.toggle('s');
       	});