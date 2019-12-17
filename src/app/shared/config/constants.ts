import { FilterSelect } from '../models';

export const API_KEY = '14561704-7d7db11c26cfc8b3ce2965319';
export const HOME_ROUTER_LINK = '/home';
export const FILTER_FEATURE_KEY = 'filter';

export const FEATURES_CONFIG = [
    {
        name: 'Gallery',
        link: '/gallery',
        description: 'там тупо фотки'
    },
    {
        name: 'News',
        link: '/news',
        description: 'сраные новости'
    },
    {
        name: 'Weather',
        link: '/wether',
        description: 'погодка'
    }
];

export const IMAGE_TYPES: FilterSelect[] = [
    {
        title: 'All',
        value: 'all'
    },
    {
        title: 'Photo',
        value: 'photo'
    },
    {
        title: 'Illustration',
        value: 'illustration'
    },
    {
        title: 'Vector',
        value: 'vector'
    }
];

export const ORDERS: FilterSelect[] = [
    {
        title: 'Popular',
        value: 'popular'
    },
    {
        title: 'Latest',
        value: 'latest'
    }
];
