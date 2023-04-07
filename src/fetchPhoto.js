import axios from "axios";

export class PixabayApi {
    #BASE_URL = `https://pixabay.com/api/`;
    #API_KEY = `35096512-11f13dd84508435723f25f595 `;
    
    #BASE_SEARCH = {
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        per_page: 40,
    }

    get perPage() {
        return this.#BASE_SEARCH.per_page;
    }

    q = null;
    page = 1;
    
    fetchPhotos() {
        return axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&`,{
            params: {
                q: this.q,
                ...this.#BASE_SEARCH,
                page: this.page,
        },
    });
    }
}