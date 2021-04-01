const fs = require('fs');
const inquirer = require('inquirer');

let main = async () => {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: 'name?',
            name: 'name'
        },{
            type: 'input',
            message: 'location?',
            name: 'loc'
        },{
            type: 'input',
            message: 'bio?',
            name: 'bio'
        },{
            type: 'input',
            message: 'github url?',
            name: 'github'
        }
    ])

    const { name, loc, bio, github } = res;

    const htmlPage = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>

</head>
<body>
    <main style="padding: 8rem 20%; display: flex; justify-content: center; align-items: center;">
        <div style="text-align: center; padding: 2rem; margin: 4rem; width: content; flex: 1 1 40rem; background-color: #f1f1f1; border-radius: 3rem; display: flex;align-items: center; flex-direction: column;">
            <h1 class="name" style="font-size: 5rem; font-weight: semibold; line-height: 6rem; background-color: white; width: fit-content; padding: 1rem 2rem; border-radius: 1rem;">${name}</h1>
            <h3 class="loc" style="margin-bottom: 3rem; margin-top: 1rem;">${loc}</h3>
            <p class="bio" style="margin-bottom: 5rem; max-width: 70%; text-align: justify;">${bio}</p>
            <p class="git" style="font-size: .75rem;"><a href="https://www.github.com/${github}" style="color: inherit; text-decoration: inherit">@${github}</href></p>
        </div>
    </main>
</body>
</html>
    `

    fs.writeFile('./index.html', htmlPage, (e) => {e?console.log(e):console.log("Stored successfully!")})
}

main()