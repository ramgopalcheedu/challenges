**Make us a simple, API-powered to-do list application.**

How the application looks is entirely up to you.

Users will need the ability to view, create and delete items on their list.

---

## Acceptance Criteria

1. At launch, the app should load all existing items from the server and display them in a scrollable table.

2. Add a button for creating a new to-do item.
Tapping on that button should:
* present a simple form that allows the user to create a new item
* Disallow posting until an item is > 0 characters.
* Post to the server
* Update the table, showing the newest item

3. On each row, include a button that allows you to delete the item when you complete it.
Tapping on that button should delete the item on the API and the change should be reflected in the UI.

---
## Server

We have created a basic server available for your use. Run it with:
```
yarn && node server.js
```

Current items should be downloaded from the API:
```
GET http://localhost:8000/items
```
which will return:

```json
[
  {
    "id": 1,
    "item": "Fold clothes",
  },
  {
    "id": 2,
    "item": "Make the bed",
  }
]
```

I should be able to add a new item by:
```
POST http://localhost:8000/items
```
With a body of:
```
{ item: 'Groceries' }
```

And I should be able to delete an item with:
```
DELETE http://localhost:8000/items/[id]
```
