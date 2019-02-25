class Photos {

    async getPhotos() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        const photos = await res.json();
        return photos;
    }

}

export default Photos;