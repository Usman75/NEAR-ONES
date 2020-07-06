// smart contract source code, written in AssemblyScript
// for more info: https://docs.near.org/docs/roles/developer/contracts/assemblyscript

import { context, storage, base58,math  } from "near-sdk-as";
import {Post, postCollection, PostList} from './model'


// ID Generator Method

function _genId(): string{
  const buffer = math.randomBuffer(8)
  var randomId = base58.encode(buffer)
  return randomId.replaceAll('/','').toLowerCase()
}


// Create Post Method

export function createPost(
    title: string,
    body : string
) {
      const post_id = _genId()
      const _p = new Post()
      _p.id = post_id
      _p.originalId = post_id
      _p.title = title;
      _p.body = body;
      _p.owner = context.sender
      _p.createdAt = context.blockTimestamp

    const list = postCollection.get('list')
    if(list){
      list.data.push(_p)
      postCollection.set('list', list)
    }else{
      const newList = new PostList()
      newList.data = [_p]
      postCollection.set('list', newList)
    }
    return _p

}
