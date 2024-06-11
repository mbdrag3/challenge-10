
class Shape {
    constructor(){
        this.color = ''
    }
    shapeColor(color){
        this.color=(color);
    }
}

class Circle extends Shape {
    render(){
        return `<circle r="135" cx="150" cy="150" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return `<rect width="1000" height="500" x="10" y="10" rx="20" ry="20" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="100,10 150,190 50,190" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}