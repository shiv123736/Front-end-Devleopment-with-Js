// local menu data
const menu = [
    {
        id:1,
        name: 'Buttermilk Pancakes        ',
        price: '$15.99',
        category: 'drinks',
        img: 'images/item-1.jpeg',
        text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id:1,
        name: 'Buttermilk Pancakes        ',
        price: '$15.99',
        category: 'drinks',
        img: 'images/item-1.jpeg',
        text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id:2,
        name: 'Diner Double',
        price: '$13.99',
        category: 'lunch',
        img: 'images/item-2.jpeg',
        text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id:2,
        name: 'Diner Double',
        price: '$13.99',
        category: 'lunch',
        img: 'images/item-2.jpeg',
        text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id:3,
        name: 'Godzilla Milkshake',
        price: '$6.99',
        category: 'drinks',
        img: 'images/item-3.jpeg',
        text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",

    },
    {
        id:3,
        name: 'Godzilla Milkshake',
        price: '$6.99',
        category: 'breakfast',
        img: 'images/item-3.jpeg',
        text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",

    },
    {
        id:3,
        name: 'Godzilla Milkshake',
        price: '$6.99',
        category: 'breakfast',
        img: 'images/item-3.jpeg',
        text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",

    },
 ];

window.addEventListener('DOMContentLoaded', () => {
     add_item(menu);    
        // ---- new method ------- 
    const categories = menu.reduce(
    function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
    return values;
    },['all']);
    // console.log(categories);    
    // ------ add category button on page -------
    const catBtns = categories.map(function(category) {
        return `<button class="btn" data-id="${category}">${category}</button>`;
    }).join("");
    // console.log(catBtns);
    choice.innerHTML = catBtns;
                // ---- my method ------                 
    // let category = menu.map(function(item) {
    //     // console.log(item.category)
    //     return item.category;
    // })
    // find();
    // u_one = category.unique();
    // console.log(u_one);
});



function add_item(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<div class="item ${item['category']}">
                    <div class="image">
                    <img src="${item['img']}" width="200px"  height="150px">
                    </div>
                    <div class="item_detail">
                        <div class="title">
                            ${item['name']}
                            <span class='price'>${item['price']}</span>
                        </div>
                    <div class="desc">
                        ${item['text']}
                    </div>
                    </div>
                </div>`;
            }).join("");
    // console.log(displayMenu);
    section.innerHTML = displayMenu;
}
const section = document.querySelector('.items');
const choice = document.querySelector('.choice');
$(document).ready(function () {
    const btns = document.querySelectorAll('.btn');
    console.log(btns);
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // -------- my method ----- 
            // var items = document.querySelectorAll('.item');
            // txt = btn.innerText;
            // items.forEach(item => {
                
            //     switch(txt.toLowerCase()) {
            //         case 'all':
            //             item.classList.remove('hide');
            //             break;
            //         case 'lunch':
            //             if(item.classList.contains('lunch'))
            //                 item.classList.add('hide');
            //             else
            //                 item.classList.remove('hide');
            //             break;
            //         case 'shakes':
            //             if(item.classList.contains('drinks'))
            //                 item.classList.add('hide');
            //             else
            //                 item.classList.remove('hide');
            //             break;
            //         case 'breakfast':
            //             if(item.classList.contains('breakfast'))
            //                 item.classList.add('hide');
            //             else
            //                 item.classList.remove('hide');
            //             break;
            //     }            
            // })

            // -------- new method ------- 
            cat = e.currentTarget.dataset.id;
            // console.log(e.currentTarget.dataset.id);
            const menucategory = menu.filter(function(menuItems) {
                if(cat === menuItems.category)
                    return menuItems;
            })
            // console.log(menucategory);
            if(cat == 'all')
                add_item(menu);
            else
                add_item(menucategory);
        });
    });
});





// ----- finding a unique values in array ------ 

function find() {
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
        };
        
        Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
            arr.push(this[i]);
            }
        }
        return arr;
        }
}
