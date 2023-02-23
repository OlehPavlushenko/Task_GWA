class CustomAddCart extends HTMLElement {
  constructor() {
    super();
    
    this.addToCartForm = this.querySelector('form[action$="/cart/add"]');
    this.btn = this.querySelector('.js-btn')

    this.btn.addEventListener(
      'click',
      ((event) => {
        this.addToCart(event)
      }).bind(this)
    )
  }

  addToCart(event) {
    event.preventDefault()

    this.btn.classList.add('state')
    this.setState('Adding...')
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      body: new FormData(this.addToCartForm)
    })
    .then(response => response.json())
    .then((result) => {
      if(result) {
        setTimeout(() => {
          this.setState('Added')
        }, 200);

        setTimeout(() => {
          this.setState('Add to cart')
          this.btn.classList.remove('state')
        }, 600);
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  setState(state) {
    this.btn.firstElementChild.textContent = state
  }
}

customElements.define('custom-add-cart', CustomAddCart);
