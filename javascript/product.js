window.addEventListener('load', function(){












    let imgBild = document.querySelector('.bild-wrapper img');
    let zoomAct = document.querySelector('.block-bild-zoom');
    let x = 0;
    let y = 0;
    imgBild.addEventListener('mouseenter', function(e){
        e.preventDefault();
        let imgSrc = imgBild.src;
        zoomAct.classList.add('block-bild-zoom-active');
        zoomAct.style.background = `url('${imgSrc}')${-x} ${-y}`;
        if(event.type == 'mouseenter'){
            zoomMove();
        }
    });
    function zoomMove(){
        imgBild.addEventListener('mousemove', function(e){
            e.preventDefault();
            x = 190 - e.clientX;
            y = 190 - e.clientY;
            zoomAct.style.backgroundPosition = x + 'px' + ' ' + y + 'px';
            
        });
    };
    imgBild.addEventListener('mouseout', function(e){
        zoomAct.classList.remove('block-bild-zoom-active');
    });

    ////////////
    //star tabs efect
    ///////////
    let data = document.querySelectorAll('[data-btn]');
    let tabs = document.querySelectorAll('[data-tab]');

    for(let i = 0; i < data.length; i++){
        
        data[i].addEventListener('click', function(e){
            e.preventDefault();
            let resDat = this.getAttribute('data-btn');

            for(let j = 0; j < tabs.length; j++){
                let resTab = tabs[j].getAttribute('data-tab');
                

                if(resDat == resTab){
                    tabs[j].classList.add('show');
                }
                else{
                    tabs[j].classList.remove('show');
                }
            }
        });
    };
    ////////////
    //end tabs efect
    ///////////
    let btnAdd = document.querySelectorAll('.btn-add');
    let ul = document.querySelector('.actual-item');

    let products = JSON.parse(localStorage.getItem('myCart'));
    ul.innerHTML = products;

    btnAdd[0].addEventListener('click', addInCart);
    btnAdd[1].addEventListener('click', addInLookBook);
    
    function addInCart(){
        let qty = document.querySelector('#input-qty');
        let color = document.querySelector('#color');
        let size = document.querySelector('#size');

        let qtyVal = qty.value;
        let colorVal = color.value;
        let sizeVal = size.value;
        let out = document.querySelector('output');

        if(qtyVal > 10 || qtyVal <= 0 || qtyVal === ''){
            qty.classList.add('error-qty');
            out.innerHTML = 'Sie dürfen maximum 10 Stück!';
            return false;
        }
        else{
            qty.classList.remove('error-qty');
            btnAdd[0].style.background = 'lightgreen'
            out.innerHTML = '';
        }

        let addItems = new itemInCart(colorVal, sizeVal, qtyVal);
        function itemInCart(colorVal, sizeVal, qtyVal){

            this.color = colorVal;
            this.size = sizeVal;
            this.qty = qtyVal;

            let itemHtml = [];
            itemHtml = `
                <li>
                    <p>Color:${this.color}, Size:${this.size}, Qty:${this.qty}</p>
                    <img class="remove" src="https://cdn4.iconfinder.com/data/icons/common-toolbar/36/Cancel-512.png">
                </li>
            `;
            localStorage.setItem('myCart', JSON.stringify(ul.innerHTML += itemHtml));
            

            let remove = document.querySelectorAll('.actual-item li .remove');
            let li = document.querySelectorAll('.actual-item li');

            for(let i = 0; i < remove.length; i++){
                remove[i].onclick = function(e){
                    ul.removeChild(li[i]);
                }
            }
        }
    }

    let remove = document.querySelectorAll('.actual-item li .remove');
            let li = document.querySelectorAll('.actual-item li');

            for(let i = 0; i < remove.length; i++){
                remove[i].onclick = function(e){
                    ul.removeChild(li[i]);
            }
        }

    function addInLookBook(){
        return alert('2')
    }
});