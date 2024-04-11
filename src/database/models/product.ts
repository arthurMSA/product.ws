import { Model, Schema, model } from 'mongoose'

export interface IProduct {
    name: string,
    amount: string,
    price: string,
}

const productSchema: Schema  = new Schema({
    name: { type: String, require: true },
    amount: { type: Number, require: true },
    description: { type: String, require: true },
})

export const ProductModel: Model<IProduct> = model<IProduct>('Product', productSchema)