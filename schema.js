export default `
  type Mahasiswa {
    id: ID!
    name: String!
    age: Int!
    jadwals:[Jadwal!]!
  }

  type Jadwal {
    id: ID!
    day: String!
    matkulId: ID!
    mahasiswaId: ID!
  }

  type Matkul {
    id: ID!
    name: String!
    jadwals: [Jadwal!]!
  }

  type Query {
    mahasiswas: [Mahasiswa]
    mahasiswa(id: ID!): Mahasiswa

    matkuls: [Matkul]
    matkul(id: ID!): Matkul

    jadwals: [Jadwal]
    jadwal(id: ID!): Jadwal

  }

  type Mutation {
    createMahasiswa(name: String!, age: Int!): Mahasiswa!
    updateMahasiswa(id: ID!, name: String, age: Int): Mahasiswa!
    deleteMahasiswa(id: ID!): Mahasiswa!

    createMatkul(name: String!): Matkul!
    updateMatkul(id: ID!, name: String): Matkul!
    deleteMatkul(id: ID!): Matkul!

    createJadwal(day: String, matkulId: ID!): Jadwal!
    updateJadwal(id: ID!, day: String): Jadwal!
    deleteJadwal(id: ID!): Jadwal!
  }
`;