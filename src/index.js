import styles from './css/styles.css';
import Notiflix from 'notiflix';
import { PixabayApi } from './fetchPhoto';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import throttle from 'lodash.throttle';