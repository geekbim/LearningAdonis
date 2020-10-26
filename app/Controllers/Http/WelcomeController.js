'use strict'

class WelcomeController {

    index({view}) {
        return view.render('welcome')
    }

    test({view}) {
        return view.render('test')
    }

}

module.exports = WelcomeController
