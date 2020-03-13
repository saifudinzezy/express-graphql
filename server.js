import express from "express";
import {
    ApolloServer,
    gql
} from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const playground = {
    settings: {
        "editor.cursorShape": "line"
    }
};

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: {
        db
    },
    playground
});

const app = express();
server.applyMiddleware({
    app
});

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
    // populate mahasiswa table with fake data
    db.mahasiswa.bulkCreate(
        times(10, () => ({
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            age: Math.floor(Math.random() * 25) + 15
        }))
    );
    // populate jadwal table with fake data
    db.jadwal.bulkCreate(
        times(10, () => ({
            day: "Selasa",
            mahasiswaId: random(2, 10),
            matkulId: random(1, 10),
        }))
    );
    // populate matkul table with fake data
    db.matkul.bulkCreate(
        times(10, () => ({
            name: "Matematika",
        }))
    );


    app.listen({
            port: 4000
        }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});