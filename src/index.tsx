import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models:{
    transaction: Model
  },

  seeds(server) {
    server.db.loadData(
      {
        transactions: [
          {
            id: 1,
            title: "Pizza",
            type: "withdraw",
            category: 'comida',
            amount: 50,
            createdAt: new Date("2022/03/15 11:00:00")
          },
          {
            id: 2,
            title: "Site",
            type: "deposit",
            category: 'trabalho',
            amount: 5000,
            createdAt: new Date("2022/05/15 18:00:00")
          }
        ]
      }
    )
  },

  routes() {
    this.namespace = "api";
      
    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
