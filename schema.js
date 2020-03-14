export default `
  type Mahasiswa {
    id: ID!
    name: String!
    pembimbings: [Pembimbing!] !
    matkuls: [Matkul!] !
  }

  type Pembimbing {
    id: ID!
    name: String!
    mahasiswa: Mahasiswa
  }

  type Matkul {
    id: ID!
    name: String!
    mahasiswa: Mahasiswa
  }

  type Query {
    mahasiswas: [Mahasiswa]
    mahasiswa(id: ID!): Mahasiswa

    matkuls: [Matkul]
    matkul(id: ID!): Matkul

    pembimbings: [Pembimbing]
    pembimbing(id: ID!): Pembimbing

  }

  type Mutation {
    createMahasiswa(name: String!): Mahasiswa!
    updateMahasiswa(id: ID!, name: String): Mahasiswa!
    deleteMahasiswa(id: ID!): Mahasiswa!

    createMatkul(name: String!, mahasiswaId: ID!): Matkul!
    updateMatkul(id: ID!, name: String, mahasiswaId: ID!): Matkul!
    deleteMatkul(id: ID!): Matkul!

    createPembimbing(day: String, mahasiswaID: ID!): Pembimbing!
    updatePembimbing(id: ID!, name: String): Pembimbing!
    deletePembimbing(id: ID!): Pembimbing!
  }
`;