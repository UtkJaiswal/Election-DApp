# Election-DApp
This app is a voting app using ethereum blockchain technology. The steps to deploy the app on local network are:
1. Open VS code and jump to the working directory
2. Open Genache
3. Make sure blockchain code is working properly by typing "truffle migrate --reset"
4. Open chrome and sign in to metamask in chrome extension 
5. In Accounts symbol(coloured circle on top right)->Import Account and paste the private key from Genache account
6. In networks of metamask head to Custom RPC and fill Network name and type URL as "HTTP://127.0.0.1:7545" and chain Id as "1337" and connect to same network as genache
7. Now connect the account in metamask
8. In VS code type "npm start" (for this command make sure to change the directory to "client")
