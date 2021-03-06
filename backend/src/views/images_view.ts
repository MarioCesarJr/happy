import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.4:3333/uploads/${image.path}` // change to show mobile 
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}