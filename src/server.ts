import app, { PORT } from "./app";
import { connectDB } from "./database";

async function main() {
    await connectDB();
    await app.listen(PORT);
    console.log("Escuchando puerto", PORT);
};

console.log("Entorno:", process.env.NODE_ENV)

main();