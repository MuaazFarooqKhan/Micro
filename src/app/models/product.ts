export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://media.gettyimages.com/photos/closeup-of-pizza-on-table-picture-id995467932?s=612x612') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }
  