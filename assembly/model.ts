import {context, PersistentMap } from 'near-sdk-as'

@nearBindgen

export class Post {
    id : string
    originalId: string
    title: string
    body : string
    owner : string
    createdAt: u64
}

@nearBindgen 
export class PostList{
    data: Post[]
}

export const postCollection = new PersistentMap<string, PostList >("p")