/** 
 * Copyright 2019 The Innovation Group 
 * @author Kenneth Reilly <kenneth@innovationgroup.tech>
 * */

class UX {

	static on_click_nav(button) {

		for (var i = 0, ii = this.nav_buttons.length; i != ii; ++i) {
			this.nav_buttons[i].classList.remove('selected')
		}
		
		this.menu_button.checked = false
		button.classList.add('selected')
		
		for (var i = 0, ii = this.sections.length; i != ii; ++i) {
			if (this.sections[i].getAttribute('name') == button.getAttribute('name')) {
				this.sections[i].classList.add('no-delay')
				this.sections[i].classList.remove('hidden')
			}
			else {
				this.sections[i].classList.add('hidden')
			}
		}
	}

	static init() {

		this.sections = document.querySelectorAll('main')
		this.menu_button = document.querySelector('body > input')
		this.nav_buttons = document.querySelectorAll('nav > button')
		
		for (var i = 0, ii = this.nav_buttons.length; i != ii; ++i) {

			let button = this.nav_buttons[i]
			button.onclick = this.on_click_nav.bind(this, button)

			if (i == 0) { button.classList.add('selected') }
		}

		window.setTimeout(() => { this.sections[0].classList.add('no-delay') }, 1000)
	}
}

UX.init()