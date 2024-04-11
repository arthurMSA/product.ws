import { Socket } from 'socket.io'
import createProductValidator from './validator'
import ProductController from './controller'

export default async (socket: Socket) => {
    const controller: ProductController = new ProductController()
    socket.on('product', async (msg) => {
        try {
            await createProductValidator.validateAsync(JSON.parse(msg))
            const createdProduct = await controller.createProduct(msg)
            socket.emit('onCreatedProduct', createdProduct)
        } catch (error) {
            socket.emit('errorOnCreateProduct', error)
        }
    })
}