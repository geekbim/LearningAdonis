'use strict'

class PostController {

    index({request, view}) {
        if (request.format() === 'json') {
            return ['One', 'Two']
        }

        return view.render('post-list')
    }

    formPage({view}) {
        return view.render('form-page')
    }

    formPageSave({request, response}) {
        return request.input('name')
    }

}

module.exports = PostController
