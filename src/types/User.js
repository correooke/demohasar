export class User {
    code: string;
    title: string;
    details: UserDetails;
    extra: UserExtra;
};

export class UserDetails {
    source: string;
    name: string;
    last: string;
    email: string;
};

export class UserExtra { 
    location: UserLocation; 
    picture: any;
    phone: string;
    cell: string;
    email: string;
};

export class UserLocation {
    street: string;
    city: string;
    state: string;
}

export type UserActions = {
    onClickEdit: (code : string) => void,
    onClickDel: (code : string) => void,
    onClickShow: (code : string) => void
};

export type onChangeItemType = {source: string} | {name: string} | {last: string} | {email: string};