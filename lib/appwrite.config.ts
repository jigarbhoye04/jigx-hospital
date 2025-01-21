import * as sdk from "node-appwrite";

export const {
   PROJECT_ID,
   API_KEY,
   DATABASE_ID,
   PATIENT_COLLECTION_ID,
   DOCTOR_COLLECTION_ID,
   APPOINTMENT_COLLECTION_ID,
   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// Create a new Appwrite SDK client
const client = new sdk.Client();

//setting different things on client from appwrite sdk.
//  ! => means that variable does exist and is not null
client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

//exporting different functionalities coming from appwrite client
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
