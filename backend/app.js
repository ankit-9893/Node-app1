const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// })

// app.use((req, res, next) => {
//     res.send('Hello from express!');
// })

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/posts", (req, res, next) =>{
    const posts = [
        {
            id: "fa11",
            title: " first server-side post",
            content: "This is coming from the server"
        },
        {
            id: "fa12",
            title: " second server-side post",
            content: "This is 2 server"
        }
    ];
    res.status(200).json({
        message: 'Post fetched successfully',
        posts: posts
    });
})

module.exports = app;


