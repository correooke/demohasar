import uuid from 'uuid/v1';
import {
    ADD_USER,
    EDIT_USER,
    SELECT_USER,
    REMOVE_USER,
    SEARCH_USER,
    LOAD_USERS,
} from '../constants/actions';
import transform from './../services/transform';

const initialState = {
  items: null,
  itemsSearched: null,
  selectedItem: null, 
  search: '',       
};

const initialItems = transform([
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "ahmet",
            "last": "sepetçi"
        },
        "location": {
            "street": "7033 doktorlar cd",
            "city": "hatay",
            "state": "kilis",
            "postcode": 65908,
            "coordinates": {
                "latitude": "76.1079",
                "longitude": "-157.6508"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "ahmet.sepetçi@example.com",
        "login": {
            "uuid": "0b2b26f9-cb97-4bfa-8a75-77cbde9b32db",
            "username": "heavyfrog515",
            "password": "onlyme",
            "salt": "WQLDR7Na",
            "md5": "d03e98e8f8d675efb275ece4ee8fd0aa",
            "sha1": "a226ea0913eb316039b4f5812da202f266c24acd",
            "sha256": "9311950cc087b6dcd0330c2fcd4f32cd83e9d92cc0c8213e51ce013b562402e0"
        },
        "dob": {
            "date": "1969-03-15T20:21:09Z",
            "age": 49
        },
        "registered": {
            "date": "2015-05-16T18:34:37Z",
            "age": 3
        },
        "phone": "(895)-721-8792",
        "cell": "(584)-176-2516",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/74.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
        },
        "nat": "TR"
    }, {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "niilo",
            "last": "lampinen"
        },
        "location": {
            "street": "1304 mechelininkatu",
            "city": "pälkäne",
            "state": "kainuu",
            "postcode": 92873,
            "coordinates": {
                "latitude": "75.4715",
                "longitude": "-97.1050"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "niilo.lampinen@example.com",
        "login": {
            "uuid": "9c62ca38-3a73-4a7b-a6b3-e7b20467799c",
            "username": "organicrabbit567",
            "password": "morning",
            "salt": "BThbrAED",
            "md5": "6f50acb5dc368d32bf13196ec4a78561",
            "sha1": "194a99f72447af416399aaf17030b16ef4a75cde",
            "sha256": "91d9c1d56a0b435f2dd8065fa6a3ed8ed9a93d44bd3053c303acd3be5217edcf"
        },
        "dob": {
            "date": "1980-07-08T09:58:14Z",
            "age": 38
        },
        "registered": {
            "date": "2005-07-31T15:16:20Z",
            "age": 13
        },
        "phone": "06-572-386",
        "cell": "048-888-86-94",
        "id": {
            "name": "HETU",
            "value": "NaNNA785undefined"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/84.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
        },
        "nat": "FI"
    }
]);

const users = (state = initialState, { type, payload }) => {
    const applySearch = (items, search) => 
        items.filter(item => item.title.toUpperCase().includes(search.toUpperCase()));

    switch (type) {
        case ADD_USER: {
            
            const { title, details } = payload;
            const code = uuid();
            const items = [ ...state.items, { code, title, details }];
            return { 
                ...state, 
                items,
                itemsSearched: items,
                search: '', 
            };        
        }
        case EDIT_USER: {
            const { code, title, details } = payload;
            const itemsDel = state.items.filter( item => item.code !== code);
            const items = [ ...itemsDel, { code, title, details }];
            return {
                ...state, 
                items,
                itemsSearched: items,
                selectedItem: null,
                search: '', 
            };
        }
        case SELECT_USER: {
            const code = payload;
            return {
                ...state, 
                selectedItem: state.items.find( item => item.code === code) 
            };
        }
        case REMOVE_USER: {
            const code = payload;

            const items = state.items.filter( item => item.code !== code);
            return {
                ...state, 
                items, 
                itemsSearched: applySearch(items, state.search), 
                selectedItem: null 
              };           
        } 
        case SEARCH_USER: {
            const searchText = payload;
            return {
                ...state,
                search: searchText,
                itemsSearched: applySearch(state.items, searchText)
            };
        }        
        case LOAD_USERS:
            return { items: initialItems, itemsSearched: initialItems };

        default:
            return state;
    }
};

export default users; 