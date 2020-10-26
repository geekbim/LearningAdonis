'use strict'

const {validate} = use('Validator')

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

    async formPageSave({request, response, session}) {
        const rules = {
            name: 'required|min: 3',
            phone: 'required|min: 5'
        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashAll()
            return response.redirect('back')
        }

        return 'validation success'
    }

}

module.exports = PostController
