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
