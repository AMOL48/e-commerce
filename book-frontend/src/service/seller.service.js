import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL;

class sellerService {
  register(values) {
    return axios.post(API_URL + "/sellers", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      passWord: values.passWord,
      panNumber: values.panNumber,
      mobileNumber: values.mobileNumber,
    });
  }

  login(values) {
    console.log(values);
    return axios.post(API_URL + "/sellers/login", {
      email: values.email,
      passWord: values.passWord,
    });
  }

  getAllBooks() {
    return [
      { id: 1, title: "Book 1", author: "Author 1", price: 10, quantity: 5 },
      { id: 2, title: "Book 2", author: "Author 2", price: 15, quantity: 8 },
      { id: 3, title: "Book 3", author: "Author 3", price: 20, quantity: 3 },
    ];
  }
  deleteBook(id) {}

  //admin will verify and to update verified seller this function is used
  updateSeller(seller) {}

  getAllUnverifiedSellers() {
    return axios.get(API_URL + "/sellers", { headers: AuthHeader() });

    // show an dummy data
    /*
    return new Promise((resolve, error) => {
      resolve({
        unverifiedSellers: [
          {
            sellerId: 1,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 3434,
          },

          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
          ,
          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
          ,
          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
          ,
          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
          ,
          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
          ,
          {
            sellerId: 2,
            firstName: "Seller 1",
            lastName: "lastName",
            email: "seller1@example.com",
            mobileNumber: "123-456-7890",
            panNumber: 1222,
          },
        ],
      });
      
    });
    */
  }
}

export default new sellerService();
