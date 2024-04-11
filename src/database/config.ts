import mongoose from 'mongoose'

export default class MongoDB {
    connect(stringConn: string): void {
        mongoose.connect(stringConn)
          .then(() => console.log('DB connected'))
          .catch(() => {
            console.log('Connection error')
          })
    }   
}