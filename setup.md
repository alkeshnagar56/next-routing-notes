##how to setup tailwind css

step 1:- Run the following cmmands

```
npm install -D tailwindcss
npx tailwindcss init
```
step 2:- Update tailwind.config.js file to include this line:
```
content: [".html"],
```

Step 3:- Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4:- Include the output.css file to your html

step 5:- run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```