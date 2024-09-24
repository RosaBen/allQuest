# upload file

## package

<https://www.npmjs.com/package/multer> import dans server

```bash
npm i multer
```

<https://www.npmjs.com/package/uuid> dans server

```bash
npm i uuid
```

## créer le middleware dans server

créer un dossier dans public=> uploads => /public/uploads

```js
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    const pictureName = `${id}${path.extname(file.origineName)}`;
    req.body.image = picturName;
    cb(null, pictureName);
  },
});

const uploadPicture = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

module.exports = { uploadPicture };
```
