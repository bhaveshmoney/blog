const conf = {
  appwriteURL: String(process.env.APPWRITE_URL),
  appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
  appwriteDBId: String(process.env.APPWRITE_DATABASE_ID),
  appwriteBucketId: String(process.env.APPWRITE_BUCKET_ID),
  appwriteCollectionId: String(process.env.APPWRITE_COLLECTION_ID),
};

export default conf;
