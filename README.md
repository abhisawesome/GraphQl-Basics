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
