const storage = require('node-persist');

// storage.init()
//     .then(() => console.log("Storage Initialized"))
//     .catch((err) => console.log("Storage not initialied"))

const storeData = async (id, name, age) => {
    try {
        await storage.init();
        const resp = await storage.setItem(id, { id, name, age });
        console.log("Data Stored");
    } catch (error) {
        console.log(error);
    }
}
const fetchData = async () => {
    try {
        await storage.init();
        const resp = await storage.values();
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
// fetchData();
// storeData('2','aditya',25);
const getById = async (id) => {
    try {
        await storage.init();
        const resp = await storage.getItem(id);
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
// getById('3');
const removeById = async (id) => {
    try {
        await storage.init();
        const resp = await storage.removeItem(id);
        if(resp.removed){
            console.log("Removed successfully");
        }else{
            console.log("No user found to remove");
        }
    } catch (error) {
        console.log(error);
    }
}
removeById('2');
