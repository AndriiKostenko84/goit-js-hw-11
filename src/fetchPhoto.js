import axios from "axios";

export class PixabayApi {
    #API_KEY = `35096512-11f13dd84508435723f25f595`;
    #BASE_URL = `https://pixabay.com/api/`;
    #SEARCH_TYPE = `photo`;
    #SAFE_SEARCH = true;
    currentPage = 1;
    perPage = 40;
    searchValue = ``;


    getPhoto = () => axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&q=${this.searchValue}&image_type=${this.#SEARCH_TYPE}&page=${this.currentPage}&per_page=${this.perPage}&orientation=horizontal&safesearch=${this.#SAFE_SEARCH}`);
    getByID = (id) => axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&id=${id}&image_type=${this.#SEARCH_TYPE}`);

}