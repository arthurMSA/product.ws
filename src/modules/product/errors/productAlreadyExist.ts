export default class ProductAlreadyExist extends Error {
    constructor() {
        super('Product already exist')
        this.name = 'product_already_exist'
    }
}