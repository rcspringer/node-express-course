const express = require("express");
const app = express();

let mockUserData = [
    {name: "Roy"},
    {name: "Pascal"},
]

app.get("/users", (req, res) => {
    res.json({
        success: true,
        message: "Succesfully got users",
        users: mockUserData
    });
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
})