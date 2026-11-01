const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/authenticate/attestation/mothershipAuth", (req, res) => {
    res.json({
        BanMessage: "",
        BanExpirationTime: ""
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});