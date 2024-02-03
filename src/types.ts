export type ICard = {
    title: string
    content: string
}

export type IAutData = {
    id: number
    email: string
    name: string
    password: string
    token: string
}

export type IDataLoginForm = {
    email: string
    password: string
}
export type IDataPostForm = {
    title: string
    content: string
}

export type IDataRegisterForm = {
    name: string
    email: string
    password: string
    repeatPassword: string
}
export type IRegisterFormField = {
    key: 'name' | 'email' | 'password' | 'repeatPassword',
    label: string
    type: string
}
export type ILoginFormField = {
    key: 'email' | 'password',
    label: string
    type: string
}

export type IPostFormField = {
    key: 'title' | 'content',
    label: string
    type?: string
}
