
const {Circle, Square, Triangle} = require('./shape')

describe('Circle', () => {
    test ('That Circle renders a Circle', ()=> {
        const circleShape = new Circle();
        expect(circleShape.render()).toEqual(`<circle r="45" cx="50" cy="50" fill="${this.color}" />`)
    })
})

describe('Square', () => {
    test ('That Square renders a Square', ()=> {
        const squareShape = new Square();
        expect(squareShape.render()).toEqual(`<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.color}" />`)
    })
})

describe('Triangle', () => {
    test ('That Triangle renders a Triangle', ()=> {
        const triangleShape = new Triangle();
        expect(triangleShape.render()).toEqual(`<polygon points="100,10 150,190 50,190" fill="${this.color}"/>`)
    })
})