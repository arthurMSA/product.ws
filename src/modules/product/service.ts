import { IProduct, ProductModel } from '../../database/models/product'
import ProductAlreadyExist from './errors/productAlreadyExist'

export default class ProductService {
    async create(productParam: IProduct): Promise<IProduct> {
        const product = await ProductModel.findOne({ name: productParam.name })
        if (product !== null) {
            throw new ProductAlreadyExist()
        }
        return ProductModel.create(product)
    }
}