export type User = {
    code: string,
    title: string,
    details: any,
};

export type UserActions = {
    onClickEdit: (code: string) => void,
    onClickDel: (code: string) => void,
    onClickShow: (code: string) => void,    
}