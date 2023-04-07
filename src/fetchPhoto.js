import axios from "axios";

export class pixabayApi {
    #BASE_URL = `https://pixabay.com/api/`;
    #API_KEY = `35096512-11f13dd84508435723f25f595 `;
    
    #SEARCH_PARAMS = {
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        per_page: 40,
    }

    get perPage() {
        return this.#SEARCH_PARAMS.per_page;
    }

    q = null;
    page = 1;
    
    fetchPhotos() {
        return axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&`,{
            params: {
                q: this.q,
                ...this.#SEARCH_PARAMS,
                page: this.page,
        },
    });
    }
}