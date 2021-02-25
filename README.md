# To run

Run the command in terminal

```
npm run dev
```

# Sample input query

```
query{
  getAllAuthors{
    name,id
  }
}
```

```
query{
  result : getAuthorWithId(id:1){
    author_name: name
  }
}

```
```
mutation{
  result: insertAuthor(id:4,name:"Author 4"){
    id,
    name
  }
}
```


# Schema generated
```
type Query {
  getAllAuthors: [Author]
  getAuthorWithId(id: Int): Author
}

type Author {
  id: Int
  name: String
}

type Mutation {
  insertAuthor(id: Int, name: String): [Author]
}
```
