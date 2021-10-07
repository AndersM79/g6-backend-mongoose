const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");
const { initializeApp } = require("firebase/app");
// credenciales de firebase
const firebaseCredentials = {
  type: "service_account",
  project_id: "g6-project",
  private_key_id: "249fd475c2d81507f5b995fc3ffc67db6d9344bf",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDB1UG2acyZNQz\nRDPj+Jh1ni05ecHERhnCu9W9UpjP9hZrodIQ3f6csakfKqj3xShjHvskHqFJxH9+\n8kxDifRYfH6g6tFmntXO/QIQmkmDvMQmnArMp2HK3Edn1/0iB7+75oo1+QfaYUqr\nJw1jC1maSZwJ5Y/BkEk2UXxCaXgJRcBrQ9TBUVh5u5J8XEtm/rP8aQetDZJf/p+R\n6gjoMjeIPA+xMZbQUY9apyXtNbXLqJJqUErp8HOIQMP+uKkvNhoP1EE4F8G+om3B\nx1CKD6HH1Esf2XCFMbW2AQVbmERaNdeYhJbK4FXzk/yd7066cVba9hdi77RajfT2\nJIG/YOUhAgMBAAECggEAB/agrirs/M3JLF64j7Jy5zqSNiqWkuEZ5C2vSI+61aMC\nv1pYLYAjCVrnwPII/DT8tS9qqcrmYxC29AQIwSk85PAQa5mq+zm5GT6TewIRxmNK\nzxjICBs9jv73m3HiUCVo2s9LDXEhtPUMC3kIvuaTvg0LZgwNlqXBl4o0PLH5yMcS\nGOTUAH/UDdLslBIzehmW3HJCgoqKTeV2jatBTRtN5KzdpjiWmqhqQRKAPAcvRxIk\n+eg081U69oCHQGruglJCFxtK6lPJvZtUDhl23SsZMVNvrT98zldeCqDqPYGwwaMX\ni0Rez0Oy/pyMEtTnipAwvkToWcoU1N9Uy/s7/n3HAQKBgQDgTHr0dRjrmY4Oj9+Y\nowM9iYNPqaMWRhrPuuZlDfyjcCGOhY+vc7Psy9D33btNGICtxR5q46hwLOegmoY9\nSLD4v51kaKTv5ECNclKzB1RS9oVXBaEQgeIJeiFeZsMe2FNQ5zVj3koUWCXUr1Lh\nJedx/nShwR231ybkGuNZwv+8+QKBgQDel87pvL0n1rWDQSwACMJas9epA1DD/+Qm\nyXK1zYYIbMpOXSoNUTrSP427Zym753G9/dviv0fLIZ13fHp24LTsYCdc2MGkLtkb\nfHbRru69v6VWw2+qEvvVXsurswWHJnGHO3VELcgrMRgu4R/WGPcExQFmc0kgM2kz\nvo1O2ic7aQKBgAX1YirOVYwktyZh4hG++t4OoiNioUd9M0cjcu1qUrTQzMNpfuit\nTTFUNMfw5wHkTb7QBr/WLmpUdw7ILBrCrJjfFkJNmVwaFzDqwZGp9y6BCAfIyX+T\nw7p2uR414qcWHhh/G+b8R8GEmfStd6kthZl8pgKKC80PdSQIJtQCnyKZAoGBAJgj\n9r73y+oA7QuLbgGP+xd3uL3CkF+G9XA1XHw6v5Pel+A7+VQk4yl1WvBuMK5IIQwV\nCUfQKcgDb9eNcz7xk3fEuOLTHHeVtbr9tVDYWkHDTcUhy57ZXtuV8Wun7u1TL2GZ\nGCvDhv9OjRLtuI7jfWL7LFvUDHU/7nX5ligBH7ORAoGAOAzu6+I+1O5qKMF3kqgx\nFCT/dyN9feIPj/BK9Pk9ZoDpjLygUqGRUUsU/lMDLd7fsEePRQ6Zft3H4O8eqkL4\nm/dULebFj8vktpKwLvCEwE4r8GZCfk6EFAP2OeD8wWge1XBm3RM3/Kel5P9pdRUX\nTvYpdocRi6EtvnnRTrsrLlc=\n-----END PRIVATE KEY-----\n".replace(
      /\\n/g,
      "\n"
    ),
  client_email: "firebase-adminsdk-mjhx3@g6-project.iam.gserviceaccount.com",
  client_id: "117176115552736997627",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mjhx3%40g6-project.iam.gserviceaccount.com",
};

// Inizializa firebase
const firebaseApp = initializeApp(firebaseCredentials);
const storage = getStorage(firebaseApp, "gs://g6-project.appspot.com");

module.exports = {
  storage,
};
