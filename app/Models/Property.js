'use strict'

const Model = use('Model')

class Property extends Model {

    user() {
        //relacionamento 1 pra 1
        return this.belongsTo('App/Model/User')
    }

    images() {
        //relacionamento 1 pra muitos 
        return this.hasMany('App/Model/Image')
    }


}

module.exports = Property
