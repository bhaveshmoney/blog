import React from 'react'
import { Client, Account, ID } from "appwrite";



export class AuthService {
     client = new Client();
     Account;

    constructor(){
        this.setEndpoint(appwriteURL) // Your API Endpoint
        this.setProject(appwriteProjectId) // Your project ID
    }

    async createAccount({ email,password,name}){
        try {
          const userAccount = await account.create(ID.unique(),email,password,name);
          if (userAccount) {
            return this.login({email,password});
          } else {
            return userAccount;
          }  
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email,password);
          
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logOut(){
        try {
          await this.account.deleteSessions();  
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService