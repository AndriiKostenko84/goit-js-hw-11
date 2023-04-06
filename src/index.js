import styles from './css/styles.css';
import Notiflix from 'notiflix';
import { PixabayApi } from './fetchPhoto';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import throttle from 'lodash.throttle';


const formEl = document.querySelector('.search-form');
const gallaryDiv = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const bodyEl = document.querySelector('body');
const checkEl = document.querySelector('.autoload_check');


const pixabayApi = new PixabayApi();
let inputValue = '';
let gallery = new simpleLightbox('.gallery a', {
    captionsData: "title"
});