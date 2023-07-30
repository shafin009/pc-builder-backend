"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-var-requires */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const uri = 'mongodb+srv://shafin:shafin12345@cluster0.ovfmeyj.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri);
let db;
let productCollection;
let processorCollection;
let monitorCollection;
let motherboardCollection;
let ramCollection;
let powersupplyunitCollection;
let storagedeviceCollection;
let othersCollection;
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        db = client.db('pc-product');
        productCollection = db.collection('products');
        processorCollection = db.collection('processor');
        monitorCollection = db.collection('monitor');
        motherboardCollection = db.collection('motherboard');
        ramCollection = db.collection('ram');
        powersupplyunitCollection = db.collection('powersupplyunit');
        storagedeviceCollection = db.collection('storagedevice');
        othersCollection = db.collection('others');
        app.get('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = productCollection.find({});
            const product = yield cursor.toArray();
            res.send(product);
        }));
        app.get('/product/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield productCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/processor', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = processorCollection.find({});
            const processor = yield cursor.toArray();
            res.send(processor);
        }));
        app.get('/categories/processor/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield processorCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/monitor', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = monitorCollection.find({});
            const monitor = yield cursor.toArray();
            res.send(monitor);
        }));
        app.get('/categories/monitor/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield monitorCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/powersupplyunit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = powersupplyunitCollection.find({});
            const powersupplyunit = yield cursor.toArray();
            res.send(powersupplyunit);
        }));
        app.get('/categories/powersupplyunit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield powersupplyunitCollection.findOne({
                _id: objectId,
            });
            res.send(result);
        }));
        app.get('/categories/ram', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = ramCollection.find({});
            const ram = yield cursor.toArray();
            res.send(ram);
        }));
        app.get('/categories/ram/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield ramCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/others', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = othersCollection.find({});
            const others = yield cursor.toArray();
            res.send(others);
        }));
        app.get('/categories/others/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield othersCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/motherboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = motherboardCollection.find({});
            const motherboard = yield cursor.toArray();
            res.send(motherboard);
        }));
        app.get('/categories/motherboard/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield motherboardCollection.findOne({ _id: objectId });
            res.send(result);
        }));
        app.get('/categories/storagedevice', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const cursor = storagedeviceCollection.find({});
            const storagedevice = yield cursor.toArray();
            res.send(storagedevice);
        }));
        app.get('/categories/storagedevice/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const id = req.params.id;
            const objectId = new mongodb_1.ObjectId(id);
            const result = yield storagedeviceCollection.findOne({ _id: objectId });
            res.send(result);
        }));
    }
    finally {
    }
});
run().catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('Hello World! 👌');
});
app.listen(port, () => {
    console.log(`👌 App listening on port ${port}`);
});
