class VideoHover extends HTMLElement {
  constructor() {
    super();
    this.video = this.querySelector('.js-video')

    this.resizeFunction();
    window.addEventListener('resize', this.resizeFunction.bind(this));
  }

  onClick() {
    this.classList.contains('open')
      ? this.close()
      : this.open();
  }

  close() {
    this.classList.remove('open')
    this.video.pause()
  }

  open() {
    this.classList.add('open')
    this.video.play()
  }

  resizeFunction() {
    let mobile = window.matchMedia('(max-width: 990px)').matches;
    if (mobile) {
      this.addEventListener(
        'click',
        this.onClick.bind(this)
      )
    } else {
      this.addEventListener(
        'mouseover',
        this.open.bind(this)
      )
      this.addEventListener(
        'mouseout',
        this.close.bind(this)
      )
    }
  }
}

customElements.define('video-hover', VideoHover);
