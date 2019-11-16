import axios from "axios"

export default {
    // // Get book from google search 
    // getGoogleSearchBooks: function(query) {
    //     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    // },

    // Gets all books
    getMissions: function () {
        return axios.get("/api/mission");
    },

    // Gets the book with the given id
    getMission: function (id) {
        return axios.get("/api/mission/" + id);
    },

    getDonations: function () {
        return axios.get("/api/donations")
    },

    getDonation: function (id) {
        return axios.get("/api/donations/" + id)
    },

    // getMissions: function () {
    //     return axios.get("/api/mission");
    // },

    // // Saves a book to the database
    // saveBook: function (savedBooks) {
    //     return axios.post("/api/books", savedBooks);
    // },

    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // }

}