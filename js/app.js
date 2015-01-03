(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description:'Tu mama!!!',
            canPurchase:true,
            soldOut:false,
            images:[
                'img/1.jpg',
                'img/2.jpg',
                'img/4.jpg',                
            ],
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Tu madre!!!',
            canPurchase:true,
            soldOut:false,
            images:[
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',                 
            ],            
        },
    ];
})();