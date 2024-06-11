const inquirer = require('inquirer');
const fs = require('fs');

const {Circle, Square, Triangle} = require('./lib/shape')



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a 3 character title for your shape.',
    },
    {
        type:'input',
        name: 'titleColor',
        message: 'Enter a color for the text.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape.',
        choices: [
            'Square',
            'Circle',
            'Triangle'
        ]
    },
    {
        type:'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape.'
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Completed creating SVG file.'))
};

class SvgProperties{
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){

        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>
        `
    }
    setText(text,color){
        this.text = `
        <text x="100" y="100" font-size="35" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape = shape.render()

    }
    
}

async function run(){

    const response = await inquirer.prompt(questions);
    let title = '';

    if (response.title.length < 4) {
        title = response.title;
    } else {
        console.log('Please enter a title that is less than 4 characters')
        return;
    }

    console.log(`${title} is the title`)

    let titleColor = response.titleColor;
    console.log(`${titleColor} is the color for the title`);
    let shape = response.shape;
    console.log(`${shape} is the shape`);
    let shapeColor = response.shapeColor;
    console.log(`${shapeColor} is the color for the shape`);

    if (shape === 'Square') {
        shape = new Square();
        console.log ('Square create')
    } else if (shape === 'Circle') {
        shape = new Circle();
        console.log ('Circle create');
    } else if (shape === 'Triangle') {
        shape = new Triangle();
        console.log ('Triangle create');
    }
    
    shape.shapeColor(shapeColor);
    let svg = '';
    let svgFile = new SvgProperties();
    svgFile.setText(title, titleColor);
	svgFile.setShape(shape);
	svg = svgFile.render();

    writeToFile('shape.svg',svg)
}

run()



