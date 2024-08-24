import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.vien.aora",
  projectId: "66c6d58b000a429e2807",
  databaseId: "66c6d74d001a5c98f78b",
  userCollectionId: "66c6d78a0001a66405d8",
  videoCollectionId: "66c6d7d2000ec1f31bc2",
  storageId: "66c6dabf00038dbce0cd"
}

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
  ;


const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
// Register User
//1. Create account
//2. Create avatarUrl
//3. Sign in 
//4. Create new User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await database.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {
      email,
      password, username,
      avatar: avatarUrl,
      accountId: newAccount.$id
    })

    if (!newUser) throw Error;
    return newUser;

  } catch (error) {
    throw new Error(error);
  }
}


export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await database.listDocuments(config.databaseId, config.userCollectionId, [Query.equal("accountId", currentAccount.$id)]);

    return currentUser.documents[0];
  } catch (error) {
    throw new Error(error);
  }
}