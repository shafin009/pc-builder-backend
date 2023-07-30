/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-var-requires */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app: Application = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://shafin:shafin12345@cluster0.ovfmeyj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

let db: any;
let productCollection: any;
let processorCollection: any;
let monitorCollection: any;
let motherboardCollection: any;
let ramCollection: any;
let powersupplyunitCollection: any;
let storagedeviceCollection: any;
let othersCollection: any;

const run = async () => {
  try {
    await client.connect();
    db = client.db('pc-product');
    productCollection = db.collection('products');
    processorCollection = db.collection('processor');
    monitorCollection = db.collection('monitor');
    motherboardCollection = db.collection('motherboard');
    ramCollection = db.collection('ram');
    powersupplyunitCollection = db.collection('powersupplyunit');
    storagedeviceCollection = db.collection('storagedevice');
    othersCollection = db.collection('others');

    app.get('/product', async (req: Request, res: Response) => {
      const cursor = productCollection.find({});
      const product = await cursor.toArray();
      res.send(product);
    });

    app.get('/product/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const objectId = new ObjectId(id);
      const result = await productCollection.findOne({ _id: objectId });
      res.send(result);
    });

    app.get('/categories/processor', async (req: Request, res: Response) => {
      const cursor = processorCollection.find({});
      const processor = await cursor.toArray();
      res.send(processor);
    });

    app.get(
      '/categories/processor/:id',
      async (req: Request, res: Response) => {
        const id = req.params.id;
        const objectId = new ObjectId(id);
        const result = await processorCollection.findOne({ _id: objectId });
        res.send(result);
      }
    );

    app.get('/categories/monitor', async (req: Request, res: Response) => {
      const cursor = monitorCollection.find({});
      const monitor = await cursor.toArray();
      res.send(monitor);
    });

    app.get('/categories/monitor/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const objectId = new ObjectId(id);
      const result = await monitorCollection.findOne({ _id: objectId });
      res.send(result);
    });

    app.get(
      '/categories/powersupplyunit',
      async (req: Request, res: Response) => {
        const cursor = powersupplyunitCollection.find({});
        const powersupplyunit = await cursor.toArray();
        res.send(powersupplyunit);
      }
    );

    app.get(
      '/categories/powersupplyunit/:id',
      async (req: Request, res: Response) => {
        const id = req.params.id;
        const objectId = new ObjectId(id);
        const result = await powersupplyunitCollection.findOne({
          _id: objectId,
        });
        res.send(result);
      }
    );

    app.get('/categories/ram', async (req: Request, res: Response) => {
      const cursor = ramCollection.find({});
      const ram = await cursor.toArray();
      res.send(ram);
    });

    app.get('/categories/ram/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const objectId = new ObjectId(id);
      const result = await ramCollection.findOne({ _id: objectId });
      res.send(result);
    });

    app.get('/categories/others', async (req: Request, res: Response) => {
      const cursor = othersCollection.find({});
      const others = await cursor.toArray();
      res.send(others);
    });

    app.get('/categories/others/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const objectId = new ObjectId(id);
      const result = await othersCollection.findOne({ _id: objectId });
      res.send(result);
    });

    app.get('/categories/motherboard', async (req: Request, res: Response) => {
      const cursor = motherboardCollection.find({});
      const motherboard = await cursor.toArray();
      res.send(motherboard);
    });

    app.get(
      '/categories/motherboard/:id',
      async (req: Request, res: Response) => {
        const id = req.params.id;
        const objectId = new ObjectId(id);
        const result = await motherboardCollection.findOne({ _id: objectId });
        res.send(result);
      }
    );

    app.get(
      '/categories/storagedevice',
      async (req: Request, res: Response) => {
        const cursor = storagedeviceCollection.find({});
        const storagedevice = await cursor.toArray();
        res.send(storagedevice);
      }
    );

    app.get(
      '/categories/storagedevice/:id',
      async (req: Request, res: Response) => {
        const id = req.params.id;
        const objectId = new ObjectId(id);
        const result = await storagedeviceCollection.findOne({ _id: objectId });
        res.send(result);
      }
    );
  } finally {
  }
};

run().catch(err => console.log(err));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! 👌');
});

app.listen(port, () => {
  console.log(`👌 App listening on port ${port}`);
});
