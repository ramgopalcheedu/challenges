Make me a simple to-do list application.

We have created a basic server available for your use. Run it with:
`node server.js`

Current items should be downloaded from the API:
`GET http://localhost:8000/items`
which will return:

```json
[
  {
    id: 1,
    item: "Fold clothes",
  },
  {
    id: 2,
    item: "Make the bed",
  }
]
```

I should be able to add a new item by:
`POST http://localhost:8000/items`
With a body of:
{ item: 'My todo list' }

And I should be able to delete an item with:
`DELETE http://localhost:8000/items/[id]`