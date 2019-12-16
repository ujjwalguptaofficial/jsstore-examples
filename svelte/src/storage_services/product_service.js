import { BaseService } from "./base_service";

export class ProductService extends BaseService {

    constructor() {
        super();
        this.tableName = "Products"
    }

    addItem (product) {
        return this.connection.insert({
            into: this.tableName,
            return: true,
            values: [product]
        })
    }

    removeItem (id) {
        return this.connection.remove({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    updateItem (item) {
        return this.connection.update({
            in: this.tableName,
            where: {
                id: item.id
            },
            set: {
                name: item.name,
                price: Number(item.price),
                quantity: Number(item.quantity)
            }
        })
    }

    fetchAll () {
        return this.connection.select({
            from: this.tableName
        })
    }
}