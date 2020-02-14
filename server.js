const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser);

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

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "Succesfully got one user",
        user: req.params.id
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
 	const password = req.body.password;
 
 	const mockUsername = "billyTheKid";
 	const mockPassword = "superSecret";
 
 	if (username === mockUsername && password === mockPassword){
      	res.json({
      	 	success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
      	})
 	} else {
      	res.json({
      	 	success: false,
      	 	message: 'password and username do not match'
      	})
 	}
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
})