window.addEventListener('load', function(){
    let btn = document.querySelectorAll('.btn-city');
    let map = document.querySelectorAll('.block-three-inner');

        btn[1].onclick = function(){
            if(btn[1]){
                map[1].classList.add('newyork-on');
                map[0].classList.add('london-on')
                map[2].classList.remove('paris-on')
            }
        }
        btn[0].onclick = function(){
            if(btn[0]){
                map[1].classList.remove('newyork-on');
                map[0].classList.remove('london-on')
                map[2].classList.remove('paris-on')
            }
        }
        btn[2].onclick = function(){
            if(btn[2]){
                map[2].classList.add('paris-on')
                map[1].classList.remove('newyork-on');
                map[0].classList.add('london-on')
            }
        }
    
});