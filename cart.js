var updatebtn = document.getElementsByClassName('update-cart');

for (i=0; i< updatebtn.length; i++){
  updatebtn[i].addEventListener('click', function () {
    var productId = this.dataset.product
    var action = this.dataset.action

    console.log('productId:', productId, 'action:', action)
  })
}
