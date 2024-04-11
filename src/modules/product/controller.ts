import { IProduct } from '../../database/models/product'
import ProductService from './service'

export default class ProductController {
    productService: ProductService
    constructor() {
        this.productService = new ProductService()
    }
    createProduct(msg: string): Promise<IProduct> {
        const product = JSON.parse(msg)
        return this.productService.create(product)
    }
}